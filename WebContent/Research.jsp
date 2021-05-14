<%@page import="model.Research"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Research Client Service</title>
<link rel="stylesheet" href="View/bootstrap.min.css">
<script src="Components/jquery-3.2.1.min.js"></script>
<script src="Components/Research.js"></script>
</head>
<body>

	<div class="container">
		<div class="row">
		
		
			<div class="col-6">

				<h1>Research Client Service</h1>
				<h3>IT19033938</h3>
				<form id="formResearch" name="formResearch" method="post" action="Research.jsp">
					Research ID :
					<input id="Res_ID" name="Res_ID" type="text" class="form-control form-control-sm"> <br> 
					Research Type: 
					<input id="Res_type" name="Res_type" type="text" class="form-control form-control-sm"> <br> 
				    Research Description:
					<input id="Res_note" name="Res_note" type="text" class="form-control form-control-sm"> <br> 
					Research Price: 
					<input id="Res_price" name="Res_price" type="text" class="form-control form-control-sm"> <br>
					User ID: 
					<input id="Ruser_ID" name="Ruser_ID" type="text" class="form-control form-control-sm"> <br> 

					<input id="btnSave" name="btnSave" type="button" value="Save" class="btn btn-primary"> 
					<input type="hidden" id="ResID" name="ResID" value="">
				</form>

				<div id="alertSuccess" class="alert alert-success"></div>
				<div id="alertError" class="alert alert-danger"></div>

			
				<br>
				<div id="divResearchGrid">

					<%
					Research ResearchObj = new Research();
					out.print(ResearchObj.readResearch());
					%>
				</div>

			</div>
		</div>
	</div>

</body>
</html>