let todos = []
let inputElement = document.getElementById('inputElement');
let inputValue = document.getElementById('inputElement').value;
let listContainer = document.getElementById("listContainer");
let btn = document.getElementById("addBtn")
//PUSHING THE INPUT VALUE INTO THE ARRAY
function addTodo(){
let inputValue = document.getElementById('inputElement').value;

todos.push(inputValue);

}



function renderTodos(){
let listContainer = document.getElementById("listContainer");
listContainer.innerHTML=' ';

// RENNDER THE ITEMS
for(let i=0;i<todos.length;i++){
  let li = document.createElement('li')
  let listItems = li.appendChild(document.createTextNode(todos[i]));
  listContainer.appendChild(li);

  li.addEventListener('click',function(){
    li.style.textDecoration="line-through"
    todos.splice(i, 1);  
  
  })

    li.addEventListener('dblclick',function(){
      listContainer.removeChild(li)
      todos.splice(i, 1);
      })

}}




// CALLING THE FUNCTIONS ;)
document.getElementById("addBtn").addEventListener('click',function(){
  if(document.getElementById('inputElement').value===" "){
   return
  }
  listContainer.value= " "
  addTodo();
  renderTodos();
  document.getElementById('inputElement').value=" "; 


})

btn.addEventListener('click', (ev)=>{
  console.log("Btn clicked");
});

document.addEventListener('keypress', (event)=>{
let keyCode = event.keyCode ? event.keyCode : event.which;
if(keyCode === 13) {
   btn.click();
  }
  if(document.getElementById('inputElement').value===""){
    return
   }
});










