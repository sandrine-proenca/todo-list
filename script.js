// This is the array that will hold the todo list items
let todoItems = [];

function addTodo(text)
{
    const todo = {
        text,
        checked:false,
        id: Date.now(),
    };

    todoItems.push(todo);
    console.log (todoItems);

    // This function will create a new todo object based on the
    // text that was entered in the text input, and push it into
    // the `todoItems` array

}

function renderTodo(todo)
{
    // Select the first element with a class of `js-todo-list`const list = document.querySelector('.js-todo-list');
    const list = document.getElementById('todo-list');

    // Set the contents of the `li` element created above
    list.innerHTML = 

    // Append the element to the DOM as the last child of

    // the element referenced by the `list` variable 
    

}

function toggleDone(key)
{
    const index = todoItems.findIndex(item => item.id === Number(key));
    // Locate the todo item in the todoItems array and set its checked
    // property to the opposite. That means, `true` will become `false` and vice
    // versa.
    todoItems[index].checked = !todoItems[index].checked;
    renderTodo(todoItems[index]);
}

    // Select the form element
    const form = document.getElementById("todo-form");

    // Add a submit event listener
    form.addEventListener('submit', event => 
    {
    // prevent page refresh on form submission
    event.preventDefault();

    // select the text input
    const input = document.getElementById("todo-input");

    // Get the value of the input
console.dir(input);
    // send the value to the addTodo function
addTodo(input.value);

});