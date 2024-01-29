// Function - Hàm

// 1. Định nghĩa: Hàm là tập hợp nhiều câu lệnh thực hiện 1 tác vụ cụ thể

//  Các Loại hàm: Hàm có sẵn và Hàm tự định nghĩa
//  Hàm có sẵn: push(), pop(), splice(), ...

// 2. Cú pháp:
/*
    function funcName() {
        // Statements
    }
*/

// 3. Tính chất:
/*
    + Hàm không thực thi khi định nghĩa
    + Hàm chỉ thực thi khi được gọi
*/

// Định nghĩa hàm
// function sum() {
//   console.log("Hello");
// }

// sum(); // Gọi hàm

// 4. Tham số và đối số

// function greeting(param1, param2) {
//   // Tham số
//   console.log(param1, param2);

//   return;
// }

// greeting(10, 20); // Đối số

/*
    Trong đối số:
        + Kiểu dữ liệu tham trị: là kiểu dữ liệu nguyên thủy (primitive) được truyền vào (Number, string, ...)
        + Kiểu dữ liệu tham chiếu: là kiểu dữ liệu phức tạp (non-primitive) (Array, object)

        // Truyền địa chỉ của vùng nhớ vào hàm => lấy giá trị vùng nhớ đó
        // stack queue heap

    Từ khóa return:
    + Khi gặp từ khóa return => Hàm sẽ dừng lại
    + Được sử dụng để trả về kết quả sau khi thực thi hết các câu lệnh
*/

// 5. Các loại hàm

// Function Expression - Biểu thức hàm
// let expression = function () {
//   console.log("Biểu thức hàm");
// };
// expression(); // Gọi hàm

// Arrow Function
// let Arrow = () => {
//   console.log("Arrow Function");
// };
// Arrow();

// Dùng để tái sử dụng lại nhiều lần

// function sum(a, b, ...param) { // rest
//   console.log(a, b, ...param); // spread
// }

// sum(10, 20);
// sum(50, 40);
// sum(30, 40, 20, 50, 60);

// Three Dots (...): Array, Object và Function
// Khi mà sử dụng với Array và Object: Spread operator
// Khi sử dụng với function: Rest parameter

// Ví dụ:

// Rest Parameter

// function sum(...param) {
//   let result = 0;
//   for (let i = 0; i < param.length; i++) {
//     result += param[i];
//   }

//   console.log(result);
// }

// sum(80, 60, 50, 40, 30);
// sum(10, 20);

// Arguments
// function sum() {
//   let result = 0;
//   // console.log(...arguments);
//   for (let i = 0; i < arguments.length; i++) {
//     result += arguments[i];
//   }

//   console.log(result);
// }

// sum(80, 60, 50, 40, 30);
// sum(10, 20);

/* Bài 1: Cho người dùng nhập vào số tuổi, 
+ nếu tuổi >= 18: Thông báo: Oke !!!
+ nếu tuổi < 18: Thông báo: Stop !!!
*/
// let n = +prompt("Nhập tuổi của bạn");
// function age(param) {
//   if (param >= 18) {
//     alert("Oke !!!");
//   } else {
//     alert("Stop !!!");
//   }
// }
// age(n);

/* Bài 2: Xây dựng 1 hàm chuyển đổi độ F sang độ C
C = (F - 32)/1.8
input: 62
output: 16.67
*/

// function caldoF(param) {
//   let doC = (param - 32) / 1.8;
//   alert(`Độ F : ${param}, độ C là : ${doC.toFixed(2)}`);
// }

// let doF = +prompt("Mời bạn nhập độ F cần chuyển đổi : ");
// caldoF(doF);

/*
Bài 3: Cho người dùng nhập vào 1 số bất kỳ, xây dựng hàm tính giai 
thừa của số đó?
input: 5
output: 120
*/

// let input = +prompt("mời bạn nhập số");

// function giaiThua(number) {
//   let giaiThua = 1;
//   for (let i = number; i >= 1; i--) {
//     giaiThua *= i;
//   }
//   return giaiThua;
// }
// console.log(giaiThua(input));
/*
Bài 4: Cho người dùng nhập vào 1 số bất kỳ. Kiểm tra xem số đó có phải số
nguyên tố hay không?
input: 13
output: true
*/
// function SNT(n) {
//   if (n <= 1) {
//     return false;
//   }
//   for (let i = 2; i <= n / 2; i++) {
//     if (n % i == 0) {
//       return false;
//     }
//   }
//   return true;
// }
// let n = +prompt("nhập số cần kiểm tra :");
// console.log(SNT(n));

// function kiem_tra_snt(n) {
//   // Biến cờ hiệu
//   let flag = true;
//   // Nếu n bé hơn 2 tức là không phải số nguyên tố
//   if (n < 2) {
//     flag = false;
//   } else {
//     // lặp từ 2 tới n-1
//     for (let i = 2; i < n - 1; i++) {
//       if (n % i == 0) {
//         flag = false;
//         break;
//       }
//     }
//   }
//   // Kiểm tra biến flag
//   if (flag == true) {
//     document.write(n + " là số nguyên tố <br/>");
//   } else {
//     document.write(n + " không phải là số nguyên tố <br/>");
//   }
// }

/*
Bài 5: Xây dựng hàm, kiểm tra chuỗi nào dài nhất
input: ["Black", "Pink", "Green", "Blue", "Yellow"]
output: Yellow
*/
// function maxArr(arr) {
//   let maxLength = arr[0];
//   let newArr = [maxLength];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i].length > maxLength.length) {
//       maxLength = arr[i];
//       newArr = [maxLength];
//     } else if (arr[i].length === maxLength.length) {
//       newArr.push(arr[i]);
//     }
//   }
//   alert(`Chuoi dai nhat la ${newArr.toString()} `);
// }
// maxArr(["Black", "Yellow", "Pinkkkk", "Greennn", "Blue"]);

/*
// Nâng cao: Cho người dùng nhập vào cách nhau bằng dấu ","
input: black, pink, green, blue, yellow
output: yellow

// Gợi ý: sử dụng .length để kiểm tra độ dài. black.length = 5

Bài 6: Xây dựng hàm, tính tổng các số chẵn trong mảng
input: [1,2,2,3,4,5,6,6,7]
output: 20
*/

// function sum(ab) {
//   let Tong = 0;
//   for (let i = 0; i < ab.length; i++) {
//     if (ab[i] % 2 === 0) {
//       Tong += ab[i];
//     }
//   }
//   //   return Tong;
//   console.log(Tong);
// }

// console.log(sum([1, 2, 2, 3, 4, 5, 6, 6, 7]));
// sum([1, 2, 2, 3, 4, 5, 6, 6, 7]);

/*
Bài 7: Cho người dùng nhập vào, xây dựng hàm tìm số lớn thứ 2 trong mảng
input: 3,5,7,6,4,8,20,55
ouput: 20
*/

// let a = prompt('hãy nhập mot day so');
// let arr = a.split(',')

// function timSolon(param) {
//   let tag;
// console.log(param);

// Cách 1: Selection sort
// for (i = 0; i < param.length; i++) {
//   for (j = i + 1; j < param.length; j++) {
//     if (param[i] > param[j]) {
//       tag = param[i];
//       param[i] = param[j];
//       param[j] = tag;
//     }
//   }
// }

// Cách 2: Bubble sort
//   let flag;
//   for (let x = 0; x < param.length; x++) {
//     flag = true;
//     for (let i = 0; i < param.length - 1; i++) {
//       if (param[i] > param[i + 1]) {
//         let temp = param[i];
//         param[i] = param[i + 1];
//         param[i + 1] = temp;
//         flag = false;
//       }
//     }
//     if (flag) break;
//   }

//   return param;
// }
// console.log(timSolon([20, 5, 7, 6, 4, 8, 3, 55]));

// timSolon([3, 5, 7, 6, 4, 8, 20, 55]);

/*
Bài 8: Cho người dùng nhập vào, tính trung bình cộng của các số đó
input: 8,9,7,4,8
output: 7.2 
*/

// function tbc() {
//   let a = prompt("input");
//   let arr = a.split(",");
//   let sum = 0;
//   for (i = 0; i < arr.length; i++) {
//     sum += Number(arr[i]);
//   }
//   console.log(`trung bình cộng là ${sum / arr.length}`);
// }
// tbc();

/*
Bài 1: Viết hàm random ra mã màu RGB ngẫu nhiên
output: rgb(201, 152, 220)
(Gợi ý: Math.floor + Math.random && 0 -> 255)
*/
// function randomColor() {
//   let r = Math.floor(Math.random() * 256);
//   let g = Math.floor(Math.random() * 256);
//   let b = Math.floor(Math.random() * 256);
//   let bgcolor = `rgb(${r}, ${g}, ${b})`;
//   return bgcolor;
// }
// console.log(randomColor());

/*
Bài 2: Viết một hàm nhận một chuỗi làm đối số và trả về chuỗi mới với các từ đảo ngược thứ tự.
input: "AnhTu"
output: "uThnA"
*/
// function daoChuoi(Str) {
//   let Arr = Str.split("");
//   let Arr1 = [];
//   for (let i = Arr.length - 1; i >= 0; i--) {
//     Arr1.push(Arr[i]);
//   }
//   console.log(Arr1.join(""));
// }

// daoChuoi("AnhTu");

/*
Bài 3: Viết hàm kiểm tra xem ký tự nhập vào có phải là ký tự số không. 
Nếu là ký tự số hàm trả về true, ngược lại trả về false.
*/
// function check() {
//   let kyTu = prompt("nhập vào kí tự kiểm tra");
//   let flag = false;
//   if (isNaN(kyTu)) {
//     flag = false;
//   } else {
//     flag = true;
//   }
//   return flag;
// }

// console.log(check());

/*
Bài 4: Viết hàm truyền vào một mảng ký tự, và một ký tự bất kỳ, kiểm tra xem ký tự bất kỳ đó có nằm trong mảng không. 
Nếu có trả về số lần xuất hiện của ký tự đó
nếu không trả về -1.
input: "Quynh Anh Shyn" => k
output: -1
*/
// debugger;
// function timKytu() {
//   let nhapKytu = prompt("Nhap ky tu: ");
//   let doiKytu = nhapKytu.split("");
//   let count = 0;

//   let ktKytu = prompt("Nguoi dung nhap: ");
//   for (let i = 0; i < doiKytu.length; i++) {
//     if (ktKytu === doiKytu[i]) {
//       count++;
//     }
//   }
//   if (count === 0) {
//     count = -1;
//   }

//   return count;
// }

// console.log(timKytu());

/*
Bài 5: Cho mảng sau:
let arr=[1,2,3,4,5,6,7,8,9,10]
Viết hàm trả về tất cả các cặp số có tổng bằng 10

Bài 6: Cho người dùng nhập vào chuỗi kí tự. Viết hàm kiểm tra xem tần suất xuất hiện của mỗi ký tự và in ra chúng

*/
