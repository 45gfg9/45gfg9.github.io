$.ajax({
    url:baselocation+'/uc/login',
    type:'post',
    dataType:'json',
    data:{
        "account":"Use your account to replace the content of this string.",
        "password":"123456",
        "ipForget":0,
    },
    success:function(result){
        if(result.success){
            $.ajax({
                type:"POST",
                dataType:"json",
                url:baselocation+"/exam/addPaperRecord",
                data:"paperRecord.type=1&papersId=10&replyTime=0&testTime=0&userId="+getLoginUser().userId+"&refIds=337&record%5B0%5D.qstType=1&record%5B0%5D.questionId=1243&record%5B0%5D.qstIdsLite=10638&record%5B0%5D.correctOption=A&record%5B0%5D.score=100&record%5B0%5D.userAnswer=A&shijiAnswer=A&dtScore=100",
                success:function(){
                    $.ajax({
                        url: baselocation + "/courseRecord/saveCourseRecord",
                        data: {
                            courseId:3002,
                            lessonId:9837,
                            courseName:"关爱生命    远离毒品",
                            lessonTitle:"两课时",
                            startTimeString:Date.parse(new Date())-4805000,
                            isFinish:1,
                        },
                        type: "post",
                        dataType: "json",
                        async: false,
                        success: function (result){
                            if(result.success){
                                alert("一套带走！");
                                location.reload();
                            }
                            else{
                                alert(result.message);
                            }
                        }
                    });
                }
            });
        }
    },
});
