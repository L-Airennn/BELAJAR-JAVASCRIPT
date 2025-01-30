const todoList=['make dinner', 'wash dishes'];

renderTodoList();

function renderTodoList() {

  let todoListHTML = '';
  
/* this code bellow is called techique Generating the HTML, instead of writing all the html by hand, we loop through an array and we generated the html using javaScript */

 
  for(let i=0; i< todoList.length; i++){
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
  }

    console.log(todoListHTML);

    document.querySelector('.js-todo-list')
      .innerHTML = todoListHTML;

  }

  function addTodo(){
    const inputElement= document.querySelector('.js-name-input');
    const name = inputElement.value;
    
    todoList.push(name);
    console.log(todoList);

    inputElement.value = '';

    renderTodoList();
  }