//check off specific Todos By clicking

$("ul").on("click", "li" , completed);

//click on X to delete To-Do
$("ul").on("click", "span", deleted);

//create new To-Do
$("input[type ='text']").keypress(createToDo);





//my functions
function completed(){
  $(this).toggleClass("completed");
};

function deleted(event){
   $(this).parent().fadeOut(500,function(){
     $(this).remove();
   });
   event.stopPropagation();
};

function createToDo(event){
  if(event.which === 13){
    var todoText = $(this).val();
    $(this).val("");
    $("ul").append("<li><span>X</span> " + todoText + "</li>");
  }
};

   
