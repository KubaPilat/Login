// When the user clicks anywhere outside of the modal, close it
var password = document.getElementById('password')
var lengthPassword = document.getElementById('password').length
var userName = document.getElementById('userName')
var modal = document.getElementById('id01');

// Get the modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

console.log(lengthPassword);