/*
    Bài 2: Kiểm tra số nguyên tố:
    Viết chương trình yêu cầu người dùng nhập một số và kiểm tra xem số đó có phải 
    là số nguyên tố không.
*/

// chữa bài:
// let number = +prompt("Nhập 1 số bất kỳ: ");
// let flag = true;

// if (number < 2) {
//   flag = false;
// } else {
//   for (let i = 2; i < number - 1; i++) {
//     if (number % i === 0) {
//       flag = false;
//       break;
//     }
//   }
// }

// if (flag) {
//   alert(number + " Là số nguyên tố");
// } else {
//   alert(number + " Không phải là số nguyên tố");
// }

/*
    Bài 4: Kiểm tra số Armstrong:
    Kiểm tra xem một số có phải là số Armstrong hay không. 
    Một số Armstrong là số mà tổng các lũy thừa của các chữ số bằng chính số đó.

    253 != 2^3 + 5^3 + 3^3 không là armstrong

    153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153 // là số armstrong
*/

// Cách 1:
// let number = +prompt("Nhập số bất kỳ: ");
// let number2 = number;
// let lengNumber = 0;
// let copyNumber = number;
// let sum = 0;

// while (number >= 1) {
//   lengNumber += 1;
//   number = number / 10;
// }

// while (copyNumber > 0) {
//   let copyNumber2 = copyNumber % 10;
//   sum += Math.pow(copyNumber2, lengNumber);
//   copyNumber = (copyNumber - copyNumber2) / 10;
// }
// if (sum == number2) {
//   alert("Số đó là số Armstrong");
// } else {
//   alert("Số đó không là số Armstrong");
// }

// Cách 2:

// let numberInput = +prompt("Nhập số bất kỳ: ");
// let strNumber = numberInput.toString();
// let sum = 0;

// // 1 5 3 => Number(1) Number(5) Number(3)

// for (let i = 0; i <= strNumber.length - 1; i++) {
//   let convertNum = Number(strNumber[i]);
//   sum = sum + Math.pow(convertNum, strNumber.length); // 1 + 125 + 27
// }

// if (sum === numberInput) {
//   alert(`${numberInput} là số Armstrong`);
// } else {
//   alert(`${numberInput} không là số Armstrong`);
// }

/*
    Bài 6: Đảo ngược số:
    Viết chương trình yêu cầu người dùng nhập một số và đảo ngược các chữ số của số đó.
*/

// let a = "1234";
// console.log(a[2]);
// 0 1 2 3
/*
1234 => length = 4 => 0 1 2 3
    for xuôi: 0 -> n.length - 1
    for ngược: n.length - 1 -> 0
*/
// let n = prompt("Nhập số cần đảo ngược");
// let revert = "";
// for (let i = n.length - 1; i >= 0; i--) {
//   revert += n[i];
// }

// alert(`Chuỗi đảo ngược là: ${revert}`);

/* 
    Vòng lặp for: 
    + Xuôi, Ngược
    + Các thành phần trong vòng lặp for

    Vòng while:
    + Cú pháp
    + Các thành phần

    Vòng do...while
    + Cú pháp
    + Các thành phần

    + Từ khóa break, continue
*/

/* 
    Bài 1: In các số từ 10 đến 1
    Bài 2: Không câu điều kiện: In các số chắn trong khoảng từ 1 đến 20
*/

// for(Giá trị khởi tạo; Điều kiện; Bước nhảy)

// for (let i = 10; i > 0; i--) {
//   // Statements
//   console.log(i);
// }

// 10 9 8 ... 2  1(End)

// Bài 2: Không câu điều kiện: In các số chắn trong khoảng từ 1 đến 20

for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}

// i += 2 <=> i = i + 2
// i -= 2 <=> i = i - 2
// i *= 2 <=> i = i * 2
// i /= 2 <=> i = i / 2
