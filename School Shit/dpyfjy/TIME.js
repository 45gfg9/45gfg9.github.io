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
            alert("真是笑死我了\n+80min");
            location.reload();
        }
        else{
            alert(result.message);
        }
    }
});