// Exercise #1
const costMonthlypayment = (cost) => {
    const transactionFee = 3;
    const interestFee = cost * 0.001;
    return cost + transactionFee + interestFee;
  };

// Exercise #2
// Part 1 - ไม่มั่นใจนะพี่นะว่าเขาให้สร้างฟังกชั่นหรือเปล่า แต่ก็เรียกใช้ input หรือ prompt ไม่ได้ ( หมายถึงใน replit )
const greetingFriends = (name1, name2, name3) => {
    console.log(`Welcome ${name1} ${name2} ${name3}`);
  };


// Part 2
  const calculateAge = (birthYear) => {
    birthYear = Number(birthYear); // แปลงค่าในกรณีที่ได้รับมาเป็น string
    if (!birthYear) return 0; // return เป็น 0 ไปกรณีค่าที่แปลงเป็น Falsely (undefined, 0 , Nan , null , '')
    const nowYear = new Date().getFullYear(); // รับค่าปีปัจจุบัน
    return nowYear - birthYear; // ปีปัจจุบัน - ปีเกิด
  };


//Part 3
  /* */
  const greetingWithObjectsNameAndAge = (members) => {
    if (typeof members !== "object") return; // เป็น Object ป่าว ไม่ใช่ก็ชิ้ว !
    let outputText = ""; // ตัวแปรเตรียมไว้สำหรับแสดงผล
    for (let i in members) { // Loop ตามจำนวน Object ใน Members
      outputText += `Welcome ${members[i].name}, you are ${members[i].age}. `; // นำไปเชื่อมแบบ string concatenation ใน outputText
    }
    console.log(outputText); // แสดงผลตัวแปร outputText ที่เราเชื่อมคำไว้หมด
  };
  
  const members = [
    {
      name: "Hiang",
      age: 21,
    },
    {
      name: "Heung",
      age: 18,
    },
    {
      name: "Hieng",
      age: 13,
    },
  ]; // ชุดข้อมูลที่เตรียมไว้ โดยจะมีชื่อและอายุ
  
  // greetingWithObjectsNameAndAge(members)

//Challenge Yourself
const isPassRubricGrading = (score) => {
    score = Number(score)
    if(!score) {
      console.log('Did you send me any correct argument yet ?')
      return false;
    }
    if(score > 11 || score < 0){
      console.log('The rubric is from 0 - 11 . You should know that.');
      return false;
    }
    const isPass = score >= 5 || false
    if(score == 11){
      console.log('Perfect');
    }else if(score > 8){
      console.log('Excellent');
    }
    return isPass
  }