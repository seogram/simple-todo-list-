
$("ul").on("click","li",function(){
  $(this).toggleClass("selected");
})

$("ul").on("click","span",function(event){

   $(this).parent().fadeOut(500,function(){
     $(this).remove();
   });
   event.stopPropagation();
})

$('input[type="text"]').on("keypress",(function(event){
  if(event.which===13){
  //  console.log("enter pressed");
  var todoText = $("input").val();
  $("input").val("");
  $("ul").append("<li>"+'<span><i class="fa fa-trash"></i></span>'+todoText+"</li>");
  }
}))

$(".fa-plus").on("click",function(){
  $("input").fadeToggle();
})
