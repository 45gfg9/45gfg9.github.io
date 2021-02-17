// The site is moved to www.626-class.com

// --- This is used on study.626-class.com
let kpid2020 = "242";
let cid2020 = "121";
let ptm2020 = "2103";
$.ajax({
    url:"/couserStudyHistory/ajax/playertimes",
    data:{
        "kpointId":kpid2020,
        "courseId":cid2020,
        "playedTime":ptm2020
    },
    type:"post",
    dataType:"text",
    success:function(result){
        if(result.success)console.log("OK");
    }
});

// --- This is used on exam.626-class.com
let qid2020 = "419,862,484,456,852,415,875,435,870,464,829,863,837,445,523,474,468,498,424,518,";
let oc2020 = "D,D,B,D,C,D,B,D,B,C,C,D,C,B,A,A,D,A,A,B,";
$.ajax({
    type:"POST",
    dataType:"json",
    async:false,
    url:"/front/ajax/addPaperRecord",
    data:{
        "objectType": 'termExam',
        "objectId": $("#kpointId").val(),
        "questionIds": qid2020,
        "optionChoices": oc2020,
        "answerLength": 0,
        "courseId": $("#kpointId").val()
    },
    success:function(result){
        if(result.success)console.log("OK");
    }
});

// --- This is used on resources.626-class.com
// JUST FLOOD
let uid=getLoginUser().userId;
for(let i = 0; i < 100; i++) {
    let j = 40000+Math.floor(Math.random()*7000);
    setTimeout(() => $.get('https://manage.626-class.com/resourceService/viewResource/'+uid+'/'+j), 200*i);
}
console.log('wait for 30s...');
