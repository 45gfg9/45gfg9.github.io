var o = $('.kcxx p');
o.text(parseInt(o.text().split(':')[1]));
var s = false;
var sid = setInterval(function(){
	if(!isLogin()){
		$.ajax({
			url: '/uc/login',
			type: 'post',
			dataType: 'json',
			data: {
				"account": "liyingqi9659",
				"password": "123456",
				"ipForget": true,
			},
			success: function(result) {
				if(!result.success) {
					alert('Login failed!\n' + result.message);
				}
			},
		});
	}
	$.ajax({
		url: "/courseRecord/saveCourseRecord",
		data: {
			courseId: 3002,
			lessonId: 9837,
			courseName: "AutoScript - G3T R3KT",
			lessonTitle: o.text() + " - " + (parseInt(o.text()) + 80),
			startTimeString: Date.parse(new Date()) - 4805000,
			isFinish: 1,
		},
		type: "post",
		dataType: "json",
		async: false,
		success: function(result) {
			if(result.success){
				o.text(parseInt(o.text()) + 80);
			}
			else{
				console.error(result.message);
			}
		}
	});
	if(s){
		clearInterval(sid);
		console.warn("Stopped.")
		return;
	}
	console.log("from = " + o.text() + ", to = " + (parseInt(o.text()) + 80) + "\nExpect " + (new Date()).toTimeString().substring(0, 8) + " to " + (new Date(Date.parse(new Date()) + 4845000)).toTimeString().substring(0, 8));
}, 4845000);
console.clear();
