// The site is moved to www.626-class.com

// --- This is used on study.626-class.com
let kpid2020 = "270";
let cid2020 = "120";
let ptm2020 = "2334";
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
let qid2020 = "873,863,859,856,853,847,846,842,841,838,829,521,494,490,465,455,435,422,408,405,";
let oc2020 = "B,D,A,D,C,C,B,B,C,A,C,A,B,A,D,A,D,A,D,A,";
$.ajax({
    type:"POST",
    dataType:"json",
    async:false,
    url:"https://exam.626-class.com/front/ajax/addPaperRecord",
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
console.log('wait for 10s...');
