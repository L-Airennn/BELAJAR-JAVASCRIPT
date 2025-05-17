/* How do we group the name and due date together? 

Answer: We can do that using an object

*/

const todoList=[{
  name :'make dinner', 
  dueDate : '2024-12-22'
}, {
  name: 'wash dishes',
  dueDate: '2024-12-22'}];

renderTodoList();

function renderTodoList() {

  let todoListHTML = '';
  
/* this code bellow is called techique Generating the HTML, instead of writing all the html by hand, we loop through an array and we generated the html using javaScript */

  todoList.forEach(function(todoObject, index){
    const { name, dueDate } = todoObject; /*This is shortcut, called Destructuring */
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick = "
      todoList.splice (${index}, 1);
      renderTodoList();  
      " class = "delete-todo-button">Delete</button>
  `;
    todoListHTML += html;
  });

    document.querySelector('.js-todo-list')
      .innerHTML = todoListHTML;

  }

  function addTodo(){
    const inputElement= document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value; 
    
    todoList.push({
      //name : name,
      //dueDate : dueDate 
      name,
      dueDate
    });


    inputElement.value = '';

    renderTodoList();
  }