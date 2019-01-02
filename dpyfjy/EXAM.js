$.ajax({
	type:"POST",
	dataType:"json",
	url:baselocation+"/exam/addPaperRecord",
	data:"paperRecord.type=1&papersId=10&replyTime=0&testTime=0&userId="+getLoginUser().userId+"&refIds=337&record%5B0%5D.qstType=1&record%5B0%5D.questionId=1243&record%5B0%5D.qstIdsLite=10638&record%5B0%5D.correctOption=A&record%5B0%5D.score=100&record%5B0%5D.userAnswer=A&shijiAnswer=A&dtScore=100",
	success:function(result){
		alert('你的成绩是A了√\nCracked by 45gfg9');
		location.reload();
	}
});