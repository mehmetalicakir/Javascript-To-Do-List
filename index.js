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
        LiDOM.innerHTML= `${inputDOM.value} <i class="material-icons" style='display: flex; justify-content: right; margin-top: -30px;'>&#xe888;</i>`;
        inputDOM.value = "";
        console.log("Eklendi.");
    } else {
        $('.error').toast('show');
    }
    
}

// ----------- Add Element (End)

// ----------- Delete Element (Start)

function deleteElement(del) {
    listDOM.removeChild(listDOM.childNodes[del]);
}




// ----------- Delete Element (End)

// -----------






// -----------

// -----------






// -----------

