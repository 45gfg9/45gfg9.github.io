#include <EEPROM.h>
#include <RTClib.h>
#include <Seg7List.h>

#define R_PIN 10
#define B_PIN 11
#define L_PIN A5

#define T_ADDR 0x00
#define L_ADDR 0x10

DS1302 RTC(8, 6, 7);
Seg7 S7(2, 3, 4);

const DateTime UPLOAD(__DATE__, __TIME__);
DateTime target;
DateTime currdt;

int L_base, days, i;
bool state, ts, powerOk = true;
byte ms = 0;
String str;

void setup() {
  delay(2000);

  Serial.begin(9600);
  pinMode(B_PIN, INPUT_PULLUP);

  RTC.begin();

  if (RTC.now() < UPLOAD) {
    RTC.adjust(UPLOAD);
  }

  EEPROM.get(T_ADDR, target);
  currdt = RTC.now();

  Serial.println(dt2string(target) + " T");
  Serial.println(dt2string(UPLOAD) + " C");
  Serial.println(dt2string(currdt) + " N");
  Serial.setTimeout(0);

  EEPROM.get(L_ADDR, L_base);

  str.reserve(32);

  update();
  S7.setDP(3, true);
}

void loop() {
  if (state != ts) {
    state = ts;

    state ? S7.show(days) : S7.show();
  }

  ts = getState();
  currdt = RTC.now();

  if (!(ms || (target - currdt).totalseconds() % 86400)) {
    update();

    Serial.println(dt2string(currdt) + " N");
  }

  while (Serial.available()) {
    switch (Serial.read()) {
      case 'R':
        RTC.begin();
        pinMode(R_PIN, OUTPUT);
        digitalWrite(R_PIN, LOW);
        break;

      case 'T':
        str = Serial.readStringUntil('\n');
        if (str.length() == 8) {
          target = DateTime(str.toInt(), str.substring(3).toInt(), str.substring(6).toInt());
          EEPROM.put(T_ADDR, target);
          update();
        }
        Serial.println(dt2string(target) + " T");
        break;

      case 'S':
        str = "S:";   str += state;
        str += " B:"; str += !digitalRead(B_PIN);
        str += " L:"; str += analogRead(L_PIN);
        Serial.println(str);
        break;

      case 'N':
        str = Serial.readStringUntil('\n');
        if (str.length() == 17) {
          RTC.adjust(DateTime(str.toInt(), str.substring(3).toInt(), str.substring(6).toInt(),
                              str.substring(9).toInt(), str.substring(12).toInt(), str.substring(15).toInt()));
          currdt = RTC.now();
          update();
        }
        Serial.println(dt2string(currdt) + " N");
        break;

      case 'D':
        i = Serial.parseInt();
        S7.show(Serial.readStringUntil('\n'));
        delay(i);
        update();
        break;

      case 'L':
        i = Serial.parseInt();
        if (0 <= i - 50 && i + 50 <= 1023) {
          L_base = i;
          EEPROM.put(L_ADDR, L_base);
        }
        Serial.println(L_base);
        break;

    }
  }

  ++ms %= 10;
  delay(100);
}

void update() {
  days = ceil((target - currdt).totalseconds() / 86400.0);
  state = false;
}

bool getState() {
  return (analogRead(L_PIN) < L_base + (state ? 50 : -50) || !digitalRead(B_PIN));
}

String dt2string(DateTime dt) {
  char str[20];

  snprintf_P(str, 20, PSTR("%04u/%02u/%02u %02u:%02u:%02u"),
             dt.year(), dt.month(), dt.day(), dt.hour(), dt.minute(), dt.second());
  return str;
}
