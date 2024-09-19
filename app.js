var todo=document.querySelector("#todo");
var ol=document.querySelector("#ol");
var arr=[];   

function render(){
    for(var i=0; i<arr.length; i++){
        ol.innerHTML+=`<li>${arr[i]} <button  onclick="deleteTodo(${i})">Delete</button> <button onclick="editTodo(${i})">Edit</button></li>`
           }}



function addTask(){
    ol.innerHTML="";
    arr.push(todo.value);
    console.log(arr);
render();
    todo.value="";
}


function deleteTodo(i){
    ol.innerHTML="";
    console.log("Task "+arr[i]+" deleted");
    arr.splice(i,1);
    console.log(arr);
    render();
    
    
}


function editTodo(i){
    ol.innerHTML="";
    console.log("Task "+arr[i]+" edited");
  var edit=prompt("You can edit here");
  arr.splice(i,1,edit);
  render();
}