<!doctype html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Untitled Document</title>
	</head>

	<body>
		hoi 
		<%
			response.write(request.post("firstname"))
			
			response.write("  "+request.post("lastname"))
		%>
	</body>
</html>
