function askMyName() {
    const name = prompt("Enter your name")
 
    if (name != null) {
       document.getElementById("name").innerHTML = "My name is " + "Oum";
    }
 }
 
function helloWorld() {
    const h1message = document.getElementById('name').innerHTML;
    alert(h1message + 'ขับรถจี้ขนาดนี้ จะให้ขำเลยใช่ไหม')
 }