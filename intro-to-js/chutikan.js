function askMyName() {
    const name = prompt("Enter your name")
 
    if (name != null) {
       document.getElementById("name").innerHTML = "My name is " + name;
    }
 }
 
function helloWorld() {
    const h1message = document.getElementById('name').innerHTML;
    alert(h1message + 'ทำงานให้เหงื่อออกทางรูขุมขน ดีกว่าขี้เกียจแล้วยากจน จนน้ำล้นออกทางตา')
 }