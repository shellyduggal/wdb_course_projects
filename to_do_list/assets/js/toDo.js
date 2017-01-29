//Mark specific to dos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("done");
});

//Delete Item
$("ul").on("click", "span", function(event) {
	event.stopPropagation();
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13) {
		var todoText = $(this).val();
		$("ul").append("<li><span><i class='fa fa-trash'></i> </span>" + todoText + "</li>");
		$(this).val("");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle()
});