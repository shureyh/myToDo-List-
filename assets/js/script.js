//check off specific Todos By clicking

$("ul").on("click", "li" , completed);

//click on X to delete To-Do
$("ul").on("click", "span", deleted);

//create new To-Do
$("input[type ='text'").keypress(createToDo);

//toggling the add item text box
$(".fa-plus").click(addItem);


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
    $("ul").append("<li> <span><i class='fa-solid fa-trash-can'></i> </span> " + todoText + "</li>");
  }
};

function addItem(){
  $("input[type = 'text'").fadeToggle();
}
   
