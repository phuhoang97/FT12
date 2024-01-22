/*
 Bài 1: In tam giác vuông

 Bài 2: In tam giác vuông ngược

 Bài 3: Tính tổng các số chẵn từ 1 đến 50

 Bài 4: Hãy viết một chương trình in ra các số từ 1 đến 100. 
 Nhưng nếu số chia hết cho 3 thì in ra "Fizz", 5 thì in ra "Buzz" thay vì in ra số đó. 
 Và nếu số đó chia hết cho cả 3 và 5 thì in ra chữ "FizzBuzz".

 Bài 5: cho người dùng nhập giá trị bất kỳ, in ra lần lượt các giá trị 0 và 1
    input: 7
    output: 0 1 0 1 0 1 0

 Bài 6: Viết chương trình hỏi tuổi của người dùng và sau đó quyết định 
 xem họ có đủ tuổi để xem nội dung 14+ không? 
 (Người dùng sẽ nhập đến khi giá trị > 14 thì mới cho dừng chương trình)

 Bài 7: Viết 1 chương trình x là số ngẫu nhiên trong khoảng từ 0 đến 9. 
 Cho người dùng nhập giá trị bất kỳ. Nếu giá trị đúng thì thông báo "bingoo" 
 còn sai thì cho người dùng nhập lại đến khi tìm được số đúng

 (Gợi ý: Dùng hàm có sẵn Math.floor + Math.random)
*/

/*BÀI 4: Tính tổng 30 số đầu tiên chia hết cho 5

BÀI 10: Viết chương trình nhập vào một câu bất kì, in ra câu đảo ngược của nó. 
Ví dụ: “Hello world” → “dlrow olleH”

BÀI 11: Viết chương trình nhập vào 5 số nguyên. 
In ra số nguyên lớn nhất và sắp xếp chuỗi số theo thứ tự giảm dần.

BÀI 14: Viết chương trình nhập vào một số nguyên dương n (n≤100). 
Hãy in ra bảng số có n dòng, mỗi dòng in n số nguyên liên tiếp, dòng thứ i bắt đầu từ số i. */

// BÀI 4: Tính tổng 30 số đầu tiên chia hết cho 5

// 0 1 2 3 4 5 ... 30
// let sum = 0;

// for (let i = 0; i <= 30; i++) {
//   //   console.log(i);
//   if (i % 5 === 0) {
//     // sum = sum + i;
//     sum += i;
//   }
// }
// /*
//     i = 0 => sum = 0 + 0 = 0
//     i = 1 =>
//     ...
//     i = 5 => sum = 0 + 5 = 5
//     ...
//     i = 10 => sum = 10 + 5 = 15
//     ...
//     i = 15 => sum = 15 + 15 = 30
// */
// console.log(sum);

// Bài 14: Viết chương trình nhập vào một số nguyên dương n (n≤100).
// Hãy in ra bảng số có n dòng, mỗi dòng in n số nguyên liên tiếp, dòng thứ i bắt đầu từ số i.
/* 
input: 4
output: 1 2 3 4
        2 3 4 5
        3 4 5 6
        4 5 6 7 
*/
// Cách 1:
// let a = +prompt("Nhập số nguyên dương N:");
// let c = a;

// for (let i = 1; i <= a; i++) {
//   // i <= 4
//   for (let d = i; d <= c; d++) {
//     // d = 1; d <= 4; d ++ => 1 2 3 4
//     // d = 2; d <= 5; d ++ => 2 3 4 5
//     // d = 3; d <= 6; d ++ => 3 4 5 6
//     // d = 4; d <= 7; d ++ => 4 5 6 7
//     document.write(d);
//   }
//   document.write("<br>");
//   c++;
// }

// Cách 2:
// let numberInput = +prompt("Nhập số nguyên dương N:");

// if (numberInput < 0 || numberInput > 100) {
//   alert("Nhập lại giá trị");
// } else {
//   for (let i = 1; i <= numberInput; i++) {
//     let row = "";
//     for (let j = i; j < i + numberInput; j++) {
//       row += j + " ";
//     }
//     console.log(row);
//   }
// }
/*
    numberInput = 4
    i = 1; i <= 4 => j = 1; j < 5 => 1 2 3 4
    i = 2; i <= 4 => j = 2; j < 6 => 2 3 4 5
    i = 3; i <= 4 => j = 3; j < 7 => 3 4 5 6
    i = 4; i <= 4 => j = 4; j < 8 => 4 5 6 7
    i = 5; 5 <= 4 => End
*/

/*
    Bài 1: In tam giác vuông

    Bài 2: In tam giác vuông ngược

    Bài 3: Tính tổng các số chẵn từ 1 đến 50

    Bài 4: Hãy viết một chương trình in ra các số từ 1 đến 100. 
    Nhưng nếu số chia hết cho 3 thì in ra "Fizz", 5 thì in ra "Buzz" thay vì in ra số đó. 
    Và nếu số đó chia hết cho cả 3 và 5 thì in ra chữ "FizzBuzz".
*/

// Bài 1: In tam giác vuông
// let n = prompt("Nhập giá trị bất kỳ");

// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += "* ";
//   }
//   console.log(row);
// }

/* 
    i = 1 => (1 <= 4) => j = 1; (j <= 1) => *
    i = 2 => (2 <= 4) => j = 1; (j <= 2) => * *
    i = 3 => (3 <= 4) => j = 1; (j <= 3) => * * *
    i = 4 => (4 <= 4) => j = 1; (j <= 4) => * * * *
*/

// Bài 2: In tam giác vuông ngược
// let n = prompt("Nhập giá trị bất kỳ");

// for (let i = n; i >= 1; i--) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += "* ";
//   }
//   console.log(row);
// }

/*
    n = 4
    i = 4; 4>=1; j = 1; 1 <= 4 => * * * *
    i = 3; 3>=1; j = 1; 1 <= 3 => * * *
    i = 2; 2>=1; j = 1; 1 <= 2 => * *
    i = 1; 1>=1; j = 1; 1 <= 1 => *
    i = 0; 0>=1; End
*/

// Bài 3: Tính tổng các số chẵn từ 1 đến 50

// let sum = 0;

// for (let i = 1; i <= 50; i++) {
//   if (i % 2 == 0) {
//     sum += i;
//   }
// }

// console.log(sum);

// Bài 4: Hãy viết một chương trình in ra các số từ 1 đến 100.
// Nhưng nếu số chia hết cho 3 thì in ra "Fizz", 5 thì in ra "Buzz" thay vì in ra số đó.
// Và nếu số đó chia hết cho cả 3 và 5 thì in ra chữ "FizzBuzz".

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

//  Bài 5: cho người dùng nhập giá trị bất kỳ, in ra lần lượt các giá trị 0 và 1
// input: 7
// output: 0 1 0 1 0 1 0

// let number = +prompt("Nhập giá trị bất kỳ");
// let str = "";

// Cách 1:
// for (let i = 0; i < number; i++) {
//   if (i % 2 === 0) {
//     str += "0";
//   } else {
//     str += "1";
//   }
// }

// console.log(str);

// for (let i = 0; i < number; i++) {
//   str += i % 2;
// }

// console.log(str);

/*
     Bài 6: Viết chương trình hỏi tuổi của người dùng và sau đó quyết định 
        xem họ có đủ tuổi để xem nội dung 14+ không? 
        (Người dùng sẽ nhập đến khi giá trị > 14 thì mới cho dừng chương trình)
*/
// let check = false;
// while (!check) {
//   let age = +prompt("Nhập tuổi:");

//   if (age > 14) {
//     alert("Bạn đã đủ tuổi");
//     check = true;
//   }
// }

// do {
//   age = +prompt("Nhập tuổi:");
// } while (age < 14);

// alert("Bạn đã đủ tuổi");

/* 
     Bài 7: Viết 1 chương trình x là số ngẫu nhiên trong khoảng từ 0 đến 9. 
    Cho người dùng nhập giá trị bất kỳ. Nếu giá trị đúng thì thông báo "bingoo" 
    còn sai thì cho người dùng nhập lại đến khi tìm được số đúng
*/

// let x = Math.floor(Math.random() * 10);
// console.log(x);

// Math.random() => Random trong khoảng 0.0 => 0.9
// Math.floor() => Làm tròn xuống 4.56 => 4

let bingo = false;

while (!bingo) {
  let n = +prompt("Nhập số bạn đoán");

  if (n === x) {
    bingo = true;
    alert("BINGOOOOO !!!");
  } else {
    alert("Mời bạn đoán lại");
  }
}

// Array

// Mảng - Array dùng để làm gì?

// Chỉ mục (index), chiều dài mảng (length), Giá trị (value)

// CRUD - Create (Thêm mới) Read (Đọc) Update (Cập nhật) Delete (Xóa)

// Các hàm có sẵn sử dụng với array

