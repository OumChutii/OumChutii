function askMyName() {
    const name = prompt("Enter your name")
 
    if (name != null) {
       document.getElementById("name").innerHTML = "My name is " + name;
    }
 }
 
function helloWorld() {
    const h1message = document.getElementById('name').innerHTML;
    alert(h1message + 'มือใหม่หัดขับ')
 }