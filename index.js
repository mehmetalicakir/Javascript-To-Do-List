// -----------

const inputDOM = document.querySelector("#task");
const listDOM = document.querySelector("#list");




// -----------

// -----------






// -----------

// ----------- (Start)






// ----------- (End)

// ----------- Add Element (Start)

function newElement() {
    if (inputDOM.value != "" && inputDOM.value != false) {
        $('.success').toast('show');
        let LiDOM = document.createElement('li');
        listDOM.appendChild(LiDOM);
        
        LiDOM.innerHTML= `${inputDOM.value} <span onclick="deleteElement(event)" style='display: flex; justify-content: right; margin-top: -30px;'><i class="material-icons">&#xe888;</i></span>`;
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

// -----------


function line(event) { 
    var x = event.target;
    var y = x.parentElement;
    y.parentElement.remove();
  };



// -----------

// ----------- Click on Enter (Start)

inputDOM.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     document.getElementById("liveToastBtn").click();
    }
  });

// ----------- Click on Enter (End)

