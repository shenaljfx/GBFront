$(document).ready(function()
{ 
if ($("#alertSuccess").text().trim() == "") 
 { 
 $("#alertSuccess").hide(); 
 } 
 $("#alertError").hide(); 
}); 
$(document).on("click", "#btnSave", function(event)
{ 
// Clear alerts---------------------
 $("#alertSuccess").text(""); 
 $("#alertSuccess").hide(); 
 $("#alertError").text(""); 
 $("#alertError").hide(); 
// Form validation-------------------
var status = validateResearchForm(); 
if (status != true) 
 { 
 $("#alertError").text(status); 
 $("#alertError").show(); 
 return; 
 } 
// If valid------------------------
var type = ($("#ResID").val() == "") ? "POST" : "PUT"; 
 $.ajax( 
 { 
 url : "ResearchAPI", 
 type : type, 
 data : $("#formResearch").serialize(), 
 dataType : "text", 
 complete : function(response, status) 
 { 
 onResearchSaveComplete(response.responseText, status); 
 } 
 }); 
});

function onResearchSaveComplete(response, status)
{ 
if (status == "success") 
 { 
 var resultSet = JSON.parse(response); 
 if (resultSet.status.trim() == "success") 
 { 
 $("#alertSuccess").text("Successfully saved."); 
 $("#alertSuccess").show(); 
 $("#divResearchtGrid").html(resultSet.data); 
 } else if (resultSet.status.trim() == "error") 
 { 
 $("#alertError").text(resultSet.data); 
 $("#alertError").show(); 
 } 
 } else if (status == "error") 
 { 
 $("#alertError").text("Error while saving."); 
 $("#alertError").show(); 
 } else
 { 
 $("#alertError").text("Unknown error while saving.."); 
 $("#alertError").show(); 
 } 
 $("#ResID").val(""); 
 $("#formResearch")[0].reset(); 
}

$(document).on("click", ".btnUpdate", function(event)
{ 
$("#ResID").val($(this).data("resid")); 
 $("#Res_ID").val($(this).closest("tr").find('td:eq(0)').text()); 
 $("#Res_type").val($(this).closest("tr").find('td:eq(1)').text()); 
 $("#Res_note").val($(this).closest("tr").find('td:eq(2)').text()); 
 $("#Res_price").val($(this).closest("tr").find('td:eq(3)').text()); 
 $("#Ruser_ID").val($(this).closest("tr").find('td:eq(4)').text()); 

});

$(document).on("click", ".btnRemove", function(event)
{ 
 $.ajax( 
 { 
 url : "ResearchAPI", 
 type : "DELETE", 
 data : "Res_ID=" + $(this).data("resid"),
 dataType : "text", 
 complete : function(response, status) 
 { 
 onResearchDeleteComplete(response.responseText, status); 
 } 
 }); 
});

function onResearchDeleteComplete(response, status)
{ 
if (status == "success") 
 { 
 var resultSet = JSON.parse(response); 
 if (resultSet.status.trim() == "success") 
 { 
 $("#alertSuccess").text("Successfully deleted."); 
 $("#alertSuccess").show(); 
 $("#divResearchtGrid").html(resultSet.data); 
 } else if (resultSet.status.trim() == "error") 
 { 
 $("#alertError").text(resultSet.data); 
 $("#alertError").show(); 
 } 
 } else if (status == "error") 
 { 
 $("#alertError").text("Error while deleting."); 
 $("#alertError").show(); 
 } else
 { 
 $("#alertError").text("Unknown error while deleting.."); 
 $("#alertError").show(); 
 } 
}
function validateResearchForm() 
{
	//Research id
	
	
	// Research type
	if ($("#Res_type").val().trim() == "")
	{
	return "Insert Research type";
	}
	
	// Research description-------------------------------
	if ($("#Res_note").val().trim() == "")
	{
	return "Insert Research description.";
	}
	
	// Research price-------------------------------
	if ($("#Res_price").val().trim() == "")
	{
	return "Insert Research price.";
	}



return true; 
}
