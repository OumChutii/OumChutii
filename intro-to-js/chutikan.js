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


// Add Age and Profile
function calAge() {
      const yearOfBirth = Number(prompt('กรุณากรอกปีเกิดของคุณ ( ค.ศ ) ')) //รับค่ามาพร้อมแปลงให้เป็น Number เพราะ โดยปรกติ prompt จะรับค่ามาแล้วมันจะเป็น string เสมอ
      const currentlyYear = new Date().getFullYear() //รับค่าปีปัจจุบันจากระบบ
      const currentlyAge = currentlyYear - yearOfBirth //ทำการคำนวณโดยตั้ง ปีปัจจุบัน - ปีเกิด
      alert(`ยินดีด้วย คุณอยู่ในกะลาแลนด์มา ${currentlyAge} ปีแล้ว`) //แสดงผล
}

function loadProfile() {
   const name = 'Chutikan' //สร้างตัวแปร name
   const province = 'NakhonPathom' //สร้างตัวแปร province 
   document.getElementById('my-name').innerHTML = name // นำตัวแปรไปใส่ลง html ที่มี id my-name
   document.getElementById('my-province').innerHTML = province // นำตัวแปรไปใส่ลง html ที่มี id my-province
 }
