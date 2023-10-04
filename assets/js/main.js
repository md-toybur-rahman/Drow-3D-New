



// modal js
// Get the modal
function modalHandler(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
}

window.onclick = function (event) {
    const modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function modalClose(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// When the user clicks on <span> (x), close the modal

// When the user clicks anywhere outside of the modal, close it

// end modal js


// Range
function rangeHandler(inputId, valueId) {
    const Input = document.getElementById(inputId);
    const Value = document.getElementById(valueId);
    Value.value = Input.value;
    const value = (Input.value - Input.min) / (Input.max - Input.min) * 100;
    Input.style.background = 'linear-gradient(to right, #6366F1 0%, #6366F1 ' + value + '%, #fff ' + value + '%, white 100%)'
}
function rangeInputHandler(inputId, valueId) {
    const Input = document.getElementById(inputId);
    const Value = document.getElementById(valueId);
    const NewValue = parseInt(Value.value)
    console.log(NewValue);
    if (NewValue > 100) {
        Value.value = 100;
    }
    Input.style.background = 'linear-gradient(to right, #6366F1 0%, #6366F1 ' + NewValue + '%, #fff ' + NewValue + '%, white 100%)'
    Input.value = Value.value;
}
// End Range

document.getElementById("scaling-input").oninput = function () {
    var value = (this.value - this.min) / (this.max - this.min) * 100
    this.style.background = 'linear-gradient(to right, #6366F1 0%, #6366F1 ' + value + '%, #fff ' + value + '%, white 100%)'
};



function blankCanvas() {
    const addNewProject = document.getElementById('addNewProject');
    const loading = document.getElementById('loading');
    const myModal = document.getElementById('myModal');
    const copyrightFooter = document.getElementById('copyrightFooter');
    addNewProject.style.display = 'none';
    myModal.style.display = 'none'
    copyrightFooter.style.display = 'none'
    loading.style.display = 'flex';
    setTimeout(() => {
        loading.style.display = 'none';
        javascript: location.href = 'Transformation_Screen.html';
    }, 3000);
}


