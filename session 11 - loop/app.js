// Vòng lặp - Loop

// Giúp lặp đi lặp lại 1 đoạn mã code nhiều lần
// Lặp đi lặp lại 1 việc gì đó với số lần xác định

// console.log("Hello world");
// console.log("Hello world");
// console.log("Hello world");
// console.log("Hello world");
// console.log("Hello world");
// console.log("Hello world");
// console.log("Hello world");
// ...

/*
    Cú pháp:

    for(Giá trị khởi tạo; Điều kiện; Bước nhảy) {
        // statement
    }
*/

// ví dụ:

// for (let i = 0; i < 10; i++) {
//   console.log("Hello world");
// }

// in ra màn hình số chạy từ 1 đến 5

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

/*
    i = 1; 1 <= 5 (true) => thực hiện => i++
    i = 2; 2 <= 5 (true) => thực hiện => i++
    i = 3; 3 <= 5 (true) => thực hiện => i++
    ...
    i = 5; 5 <= 5 (true) => thực hiện => i++
    i = 6; 6 <= 5 (false) => End
*/

// in ra màn hình số: 1 3 5

// for (let i = 1; i <= 5; i = i + 2) {
//   console.log(i);
// }

/*
    i = 1; 1 <= 5 (true) => log(1) => i + 2
    i = 3; 3 <= 5 (true) => log(3) => i + 2
    i = 5; 5 <= 5 (true) => log(5) => i + 2
    i = 7; 7 <= 5 (false) => End
*/

/*
    In các số từ 1 đến 10. Đến số 9 thì thông báo hoàn thành

*/

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
//   if (i == 9) {
//     alert("Hoàn thành");
//   }
// }

// Vòng lặp while
// Lặp đi lặp lại 1 việc gì đó với số lần không xác định

/*
cú pháp:

    while (Điều kiện) {
        // statement
    }
*/

// while (true) {
//   console.log("1");
// }

// Vòng lặp do ... while

/*
    cú pháp:

        do {
            // statement
        } while (điều kiện)
*/

// ví dụ:

// do {
//   console.log("Đã thực hiện");
// } while (5 > 10);

// 4. Break và continue

// break: Dừng lại và thoát khỏi vòng lặp

// for (let i = 0; i < 5; i++) {
//   if (i === 3) {
//     break;
//   }
//   console.log(i);
// }

// continue: Dừng vòng lặp tại đó và chuyển sang vòng lặp tiếp theo

// for (let i = 0; i < 5; i++) {
//   if (i === 3) {
//     continue;
//   }

//   console.log(i);
// }

/* 
    for, while, do...while

    break, continue
*/

// Bài tập: In bảng cửu chương

// for (let i = 1; i <= 3; i++) {
//   console.log(`Bảng cửu chương ${i}`);
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} x ${j} = ${i * j}`);
//   }

//   console.log("");
// }

/*
    i = 1, 1 <= 3 (true) => Bảng cửu chương 1 => j = 1, (true) => log(...) => j++
                                                 j = 2, (true) => log(...) => j++
                                                 ...
                                                 j = 10, (true) => log(...) => j++
                                                 j = 11, (false) => end => log("")
    
    i = 2, 2 <= 3 (true) => Bảng cửu chương 2 => j = 1, (true) => log(...) => j++
                                                 j = 2, (true) => log(...) => j++
                                                 ...
                                                 j = 10, (true) => log(...) => j++
                                                 j = 11, (false) => end => log("")
                                                 
    i = 3, 3 <= 3 (true) => Bảng cửu chương 3 => j = 1, (true) => log(...) => j++
                                                 j = 2, (true) => log(...) => j++
                                                 ...
                                                 j = 10, (true) => log(...) => j++
                                                 j = 11, (false) => end => log("")
                                                 
    i = 4, 4 <= 3 (false) => end

*/

/*
    Ex02: Hiển thị 20 số nguyên tố đầu tiên

    > 2

    5: Từ số 2 - (5 - 1) => 2 3 4

    6: Từ số 2 - (6 - 1) => 2 3 4 5
*/
// let count = 0;
// let currentNumber = 2;

// while (count < 20) {
//   // 1 < 20 => true
//   let flag = true; // Đặt cờ hiệu

//   for (let i = 2; i <= currentNumber - 1; i++) {
//     // 2 <= 3 => true
//     if (currentNumber % i === 0) {
//       flag = false;
//       break;
//     }
//   }

//   if (flag) {
//     console.log(`Số nguyên tố là: ${currentNumber}`); // 2 // 3
//     count++; // 1 + 1
//   }

//   currentNumber++; // 4
// }

// Nhập số từ người dùng
// let inputNumber = parseInt(prompt("Nhập một số:"));

// // Đảo ngược các chữ số
// let reversedNumber = 0;
// while (inputNumber > 0) {
//   let digit = inputNumber % 10;
//   console.log("digit", digit);
//   reversedNumber = reversedNumber * 10 + digit;
//   console.log("reversedNumber", reversedNumber);
//   inputNumber = Math.floor(inputNumber / 10);
//   console.log("inputNumber", inputNumber);
// }

// // Hiển thị kết quả
// console.log("Số đảo ngược là: " + reversedNumber);

// Nhập số từ người dùng
// let inputNumber = parseInt(prompt("Nhập một số:"));
// let tempNumber = inputNumber;
// let numberOfDigits = String(inputNumber).length;
// let sum = 0;

// while (tempNumber > 0) {
//   let digit = tempNumber % 10;
//   sum += Math.pow(digit, numberOfDigits);
//   tempNumber = Math.floor(tempNumber / 10);
// }

// // Kiểm tra và hiển thị kết quả
// if (sum === inputNumber) {
//   console.log(inputNumber + " là số Armstrong.");
// } else {
//   console.log(inputNumber + " không phải là số Armstrong.");
// }

// Nhập số từ người dùng
// let inputNumber = Number(prompt("Nhập một số để kiểm tra:"));
// let numString = inputNumber.toString();
// let sum = 0;

// // Tính tổng các lũy thừa của các chữ số
// for (let i = 0; i < numString.length; ++i) {
//   let digit = Number(numString[i]);
//   sum += Math.pow(digit, numString.length);
// }

// // Kiểm tra và hiển thị kết quả
// if (sum === inputNumber) {
//   console.log(inputNumber + " là số Armstrong.");
// } else {
//   console.log(inputNumber + " không phải là số Armstrong.");
// }

// Nhập chuỗi từ người dùng
// let userInput = prompt("Nhập một chuỗi để kiểm tra Palindrome:");

// let str = userInput.toLowerCase();

// let j = str.length - 1;
// let isPalindrome = true;

// for (let i = 0; i < str.length / 2; i++) {
//   if (str[i] !== str[j]) {
//     isPalindrome = false;
//     break;
//   }
//   j--;
// }

// // Hiển thị kết quả
// if (isPalindrome) {
//   console.log(userInput + " là chuỗi Palindrome.");
// } else {
//   console.log(userInput + " không phải là chuỗi Palindrome.");
// }
