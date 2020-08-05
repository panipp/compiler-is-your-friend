/*
Question #1: Correctness

In TypeScript, write a function called "scriptAt". Prove that it's correct by providing a set of test cases. 
The function will do as follows.

Given a string as an input, find the index of the string "Script" within the input string. 

You can use Google to look up the method calls.

Questions:
1) How to ensure that the input is a string at compile time?
    กำหนดให้ฟังก์ชั่นรับค่าเข้าเป็นประเภท string เท่านั้น
2) What did you learn from this exercise?
    เรียนรู้การใช้งาน indexOf และการระบุประเภทของค่าที่รับเข้าเพื่อไม่ให้ฟังก์ชั่นทำงานผิดพลาด
*/

function scriptAt(str: string) {
    console.log(str.indexOf('Script'));
}

scriptAt('paniScript');
scriptAt('paniAndPjane');
