// The site is moved to www.626-class.com

// --- This is used on study.626-class.com
$.ajax({
    url:"/couserStudyHistory/ajax/playertimes",
    data:{
        "kpointId":"256",
        "courseId":courseId,
        "playedTime":kpointLength.toString()
    },
    type:"post",
    dataType:"text",
    success:function(result){
        if(result.success)console.log('Time OK');
    }
});

// --- This is used on exam.626-class.com
$.ajax({
    type:"POST",
    dataType:"json",
    async:false,
    url:"/front/ajax/addPaperRecord",
    data:{
        "objectType": 'termExam',
        "objectId": $("#kpointId").val(),
        "questionIds": "830,523,518,504,501,481,480,423,405,404,", // "777,776,768,755,744,395,387,345,336,330,"p5
        "optionChoices": "B,A,B,B,A,B,B,A,A,A,", // "A,A,C,D,A,B,A,A,B,D,"p5
        "answerLength": 0,
        "courseId": $("#kpointId").val()
    },
    success:function(result){
        if(result.success)console.log("Exam OK");
    }
});