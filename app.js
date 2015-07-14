function postContactToGoogle()	{
	var post = $('#myform').val();
	
	$.ajax({
		url:
"https://docs.google.com/a/punahou.edu/forms/d/1mQ1z-QYgD5a0z_JgNPWztkSw8CabV2LetZmOUyLTvp4/formResponse"
		data: { "entry_66995906": post},
		type:"POST",
		dataType: "xml",

	});
}
