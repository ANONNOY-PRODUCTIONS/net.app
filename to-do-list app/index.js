// index.js

// Function to add a new task
function addTodo() {
   const listwrite = document.getElementById('to-do-writing').value;

   // Check if the input is not empty
   if (listwrite.trim() !== '') {
      const todoList = document.getElementById('todo-list');
      const listItem = document.createElement('li');
      
      // Create a div to contain the task text and buttons
      const taskDiv = document.createElement('div');
      taskDiv.classList.add('task');
      
      // Create a span for the task text
      const taskText = document.createElement('span');
      taskText.textContent = listwrite;
      
      // Create buttons for completing and removing the task
      const completeButton = document.createElement('button');
      completeButton.textContent = 'Complete';
      completeButton.onclick = completeTask;
      
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.onclick = removeTask;
      
      // Append the task text and buttons to the task div
      taskDiv.appendChild(taskText);
      taskDiv.appendChild(completeButton);
      taskDiv.appendChild(removeButton);
      
      // Append the task div to the list item
      listItem.appendChild(taskDiv);
      
      // Append the list item to the todo list
      todoList.appendChild(listItem);

      // Clear the input field
      document.getElementById('to-do-writing').value = '';
   }
}

// Function to complete a task
function completeTask() {
   // "this" refers to the button that was clicked
   const taskDiv = this.parentNode;
   taskDiv.classList.toggle('completed');
}

// Function to remove a task
function removeTask() {
   // "this" refers to the button that was clicked
   const listItem = this.parentNode.parentNode;
   const todoList = listItem.parentNode;
   todoList.removeChild(listItem);
}
