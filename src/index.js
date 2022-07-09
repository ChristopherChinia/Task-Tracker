function displayData(data) {
    const div = document.getElementById('root');
    const details = document.createElement('div');
    details.className = 'task';
    details.innerHTML = `
    <div class= "carrier">
    <div>
    <p>${data.text}</p>
    <p>${data.day}</p>
    </div>
    <button id="task-delete"> Delete </button>
    </div>
    `;
    div.appendChild(details);
    details.querySelector('#task-delete').addEventListener('click', () =>{
      details.remove()
      deleteData(data.id)
    });
    // info.appendChild(details);
  }