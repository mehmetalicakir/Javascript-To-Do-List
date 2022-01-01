// -----------

const inputDOM = document.querySelector("#task");
const listDOM = document.querySelector("#list");
let ulDOM = document.querySelectorAll("#list li");
let localStorageIndex;


// One Time View (Start)

const visit = ["Drinking 3 Liters (100 Ounces) of Water | One-Time View","Do Your Homework | One-Time View","Spend at least 3 hours on the coding of the project | One-Time View","Cook Your Meal | One-Time View","Read 50 Pages of the Book | One-Time View"];
if (window.localStorage.getItem('visit') != 1) {
  for (let index = 0; index < visit.length; index++) {
  
    let LiDOM = document.createElement('li');
    listDOM.appendChild(LiDOM);
    LiDOM.innerHTML= `<span onclick="line(event)">${visit[index]}</span> <span style='display: flex; justify-content: right; margin-top: -30px;'><i onclick="deleteElement(event)" class="material-icons">&#xe888;</i></span>`;
  }

  localStorage.setItem('visit', 1);
} 

// One Time View (End)

// ----------- Add Element (Start)

function newElement() {
    if (inputDOM.value != "" && inputDOM.value != false) {
        $('.success').toast('show');
        let LiDOM = document.createElement('li');
        listDOM.appendChild(LiDOM);
        LiDOM.innerHTML= `<span onclick="line(event)">${inputDOM.value}</span> <span style='display: flex; justify-content: right; margin-top: -30px;'><i onclick="deleteElement(event)" class="material-icons">&#xe888;</i></span>`;
        
        AddItemLS(inputDOM.value);
        inputDOM.value = "";
        
    } else {
        $('.error').toast('show');
    }
    
};

// ----------- Add Element (End)

// ----------- Delete Element (Start)


function deleteElement(event) { 
    var x = event.target;
    var y = x.parentElement;
    y.parentElement.remove();
  };



// ----------- Delete Element (End)

// ----------- Change Background (Start)


function line(event) { 
    var a = event.target;
    if(a.parentElement.style.backgroundColor != 'teal'){
    a.parentElement.style.backgroundColor = "teal";
    a.parentElement.style.color = "white";
    }
    else{
      a.parentElement.style.backgroundColor = null;
      a.parentElement.style.color = null;
    };
    console.log(event);
   
  };

// ----------- Change Background (End)

// ----------- Click on Enter (Start)

inputDOM.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     document.getElementById("liveToastBtn").click();
    }
  });

// ----------- Click on Enter (End)


// ----------- Read Local Storage (Start)

if (window.localStorage.getItem('localStorageIndex')) {
  localStorageIndex = window.localStorage.getItem('localStorageIndex');
} else {
  localStorageIndex = 0;
  localStorage.setItem('localStorageIndex', 0);
}

for (let index = 0; index < localStorageIndex; index++) {
  
  let LiDOM = document.createElement('li');
  listDOM.appendChild(LiDOM);
  let liDOMvalue = window.localStorage.getItem(`task${index}`)
  LiDOM.innerHTML= `<span onclick="line(event)">${liDOMvalue}</span> <span style='display: flex; justify-content: right; margin-top: -30px;'><i onclick="deleteElement(event)" class="material-icons">&#xe888;</i></span>`;
   
}

// ----------- Read Local Storage (End)



// Add to Local Storage (Start)

function AddItemLS(value) {
  console.log(ulDOM.length);
  localStorage.setItem(`task${localStorageIndex}`, value);
  localStorageIndex++;
  localStorage.setItem('localStorageIndex', localStorageIndex);
}

// Add to Local Storage (End)


// Delete from Local Storage (Start)

function RemoveItemLS() {

}

// Delete from Local Storage (End)