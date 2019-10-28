$.ajax({
	url:baselocation+'/uc/login',
	type:'post',
	dataType:'json',
	data:{
		"account":"Use your account to replace the content of this string.",
		"password":"123456",
		"ipForget":1,
	},
	success:function(result){
		if(result.success){
			console.log('ok');
		}
	},
});