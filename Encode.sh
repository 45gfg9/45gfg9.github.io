for i in $(seq 36)
do
	var=$(openssl sha512<<<$i)
	echo $i : ${var:8:8} >> CodeMap
done