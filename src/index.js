const data = { };

document.addEventListener("DOMContentLoaded",() => {
  fetchData();
  
})

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

  // fetching
function fetchData(){
    fetch('https://afternoon-brook-08896.herokuapp.com/data')
    .then(res => res.json())
    .then((infoData) => infoData.forEach(data =>displayData(data)));
  }

  const plate = document.querySelector('.add-form')
plate.addEventListener('submit', (e)=>{
     e.preventDefault()
     const formTask = document.querySelector("#Activity").value
      const formFill = document.querySelector("#fill").value
      if(formTask==" " && formFill==" "){
        alert("All fields are required")
    }
    else{
    data.text=formTask
    data.day=formFill
     

        fetch('https://afternoon-brook-08896.herokuapp.com/data',{
          method: 'POST',
          headers: { 'Content-Type': 'application/json',
          accept: 'application/json'
        },
        body:JSON.stringify(data)
        })
        .then(res =>res.json())
        .then(data =>console.log(data))
      }

      window.location.reload();

    })

    const addBtn=document.querySelector('.btn').addEventListener('click', ()=>{
      plate.style.display="block"
    })

    function deleteData(id){
        fetch(`https://afternoon-brook-08896.herokuapp.com/data/${id}`,{
          method: "DELETE",
          headers: {
            "content-Type":"application/json"
          }
        })
        .then(res =>res.json())
        .then(deleteInfo =>console.log(deleteInfo))
      }