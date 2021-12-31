// -----------

const inputDOM = document.querySelector("#task");
const listDOM = document.querySelector("#list");

// ----------- Add Element (Start)

function newElement() {
    if (inputDOM.value != "" && inputDOM.value != false) {
        $('.success').toast('show');
        let LiDOM = document.createElement('li');
        listDOM.appendChild(LiDOM);
        LiDOM.innerHTML= `<span onclick="line(event)">${inputDOM.value}</span> <span style='display: flex; justify-content: right; margin-top: -30px;'><i onclick="deleteElement(event)" class="material-icons">&#xe888;</i></span>`;
        inputDOM.value = "";
        console.log("Eklendi.");
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
    if(a.parentElement.style.backgroundColor != "yellow"){
    a.parentElement.style.backgroundColor = "yellow";
    console.log("renk sarı")}
    else{
      a.parentElement.style.backgroundColor = null;
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

