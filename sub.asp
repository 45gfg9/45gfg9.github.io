<!doctype html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Untitled Document</title>
	</head>

	<body>
		hoi 
		<%
			response.write(request.querystring("firstname"))
			
			response.write("  "+request.querystring("lastname"))
		%>
	</body>
</html>
