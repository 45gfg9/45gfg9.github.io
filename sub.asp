<!doctype html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Untitled Document</title>
	</head>

	<body>
		hoi 
		<%
			response.write(request.form("firstname"))
			
			response.write("  "+request.form("lastname"))
		%>
	</body>
</html>
