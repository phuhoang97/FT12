// // alert("Học điii");

// // Các từ khóa khai báo biến: var // let // const

// // - Tính chất:
// /*
//     + var: Khai báo lại và gán lại được giá trị
//     + let: Không khai báo lại được, nhưng gắn lại được giá trị
//     + const: viết tắt của constant (Hằng số): Không khai báo lại được và không gắn lại được giá trị

//     => Từ phiên bản ES06 trở đi, từ khóa var bị loại bỏ thay thế bằng từ khóa let và const
// */

// // - Scope (Phạm vị hoạt động)
// /*
//     + Global scope (Toàn cục): var, let, const
//     + Block scope (Chỉ có phạm vi trong khối {} ): let, const
//     + Local scope (Function scope)
// */

// // - Hoisting
// // => Chỉ xảy ra khi sử dụng từ khóa var

// // Ví dụ: <Từ khóa khai báo biến> <Tên biến> = <Giá trị>
// var varA = 10;

// // Khai báo lại
// var varA = "Hello World";

// // Gắn lại giá trị
// varA = 9999999999;

// console.log(varA); // Hiển thị giá trị ở trên tab console trên trình duyệt

// // ************************************

// let letB = "Đang sử dụng từ khóa let";

// // Khai báo lại => Không khai báo lại được
// // let letB = "Không khai báo lại được";

// // Gắn giá trị
// letB = 500;

// console.log(letB);

// // ************************************

// const c = 60;

// // Khai báo lại => Không khai báo lại được
// // const c = "Hello";

// // Gắn lại giá trị
// // c = "Hello";

// console.log(c);

// // Block scope

// // debugger;
// {
//   const number = 20;
// }
// // console.log(number);

// // liên quan trực tiếp: vòng lặp, câu điều kiện, ...
// // debugger;
// // function f() {
// //   const number2 = 20;
// //   console.log(number2);
// // }

// // f();

// // debugger;
// // console.log(numberA); // undefined
// // var numberA = 100;

// // console.log(numberB); // error
// // let numberB = 400;

// // Datatype - Các kiểu dữ liệu

// // Kiểu dữ liệu nguyên thủy - primitive type
// let numberType = 80; // number
// let stringType = "Hello"; // string => "" '' ``
// let booleanType = true; // boolean => true or fasle
// let nullType = null; // null -> rỗng
// let undefinedType = undefined; // undefined -> không xác định

// // Kiểu dữ liệu phức tạp - Reference type || non primitive type
// // Array và Object

// // Các câu lệnh window
// // alert("Hello"); // Dùng để thông báo nội dung

// // let xacNhan = confirm("Bạn đã đủ 18 tuổi ?"); // Dùng để xác nhận
// // console.log(xacNhan);

// // let a = prompt("Nhập số:");

// // console.log(a);

// // Toán tử trong js
// // Toán tử toán học: + (Cộng); - (Trừ); * (Nhân); / (Chia); % (Chia lấy dư)
// // Tiền tố và hậu tố: ++a và a++
// /*
//     ++a:
//         Việc 1: Tăng giá trị của a lên 1 đơn vị
//         Việc 2: Hiển thị giá trị a

//     a++:
//         Việc 1: Tạo ra 1 bản copy a1
//         Việc 2: Tăng giá trị của a lên 1 đơn vị
//         Việc 3: Hiển thị giá trị a
// */
// let a = 5;
// // console.log(a + ++a + a++ + a++ + ++a + a);
// // //          5 +  6  +  6  +  7  +  9  + 9

// console.log(a + a++ - ++a + a-- + --a + a++ + ++a - a++);
// //          5  + 5  - 7   + 7  + 5  + 5  + 7 - 7

// /* 20 */

// // Toán tử so sánh sẽ trả về kiểu dữ liệu boolean (true / false):
// // == === ; != !== ; > ; < ; >=; <=
// // ("=" => Phép gán)

// console.log(10 == "10");
// // => ==: So sánh giá trị

// console.log(10 === "10");
// // => ===: So sánh giá trị và cả kiểu dữ liệu

// console.log(10 != "10"); // false

// console.log(10 !== "10"); // true

// console.log(10 > 5); // true

// console.log(10 < 5); // false

// console.log(10 >= 10); // true

// console.log(10 <= 10); // true

// // Toán tử logic
// // && - Toán tử và: cả 2 vế đều phải trả về đúng thì mới đúng
// console.log(10 > 5 && 2 > 6);
// //          true   và  false => false
// //          false  và  true => false
// //          false  và  false => false
// //          true   và  true => true

// // || - toán tử hoặc: Chỉ cần 1 trong 2 vế đúng thì sẽ trả về đúng
// console.log(2 > 6 || 10 > 5);
// //          true   và  false => true
// //          false  và  true => true

// // ! - Phủ định:
// let logic = 10 > 5 && 2 > 6; // false
// console.log(!logic); // true

// console.log(2 + 3 * 6);

/*
Ex01: Cho người dùng nhập vào 2 giá trị từ bàn phím. Tính tổng 2 số đó

=> Flowchart
*/
let number1 = prompt("Nhập số đầu tiên: ");
let number2 = prompt("Nhập số thứ 2: ");
let result = number1 * number2;

// Dấu + là phép nối chuỗi
// "10" + "10" => 1010
// typeof => kiểm tra kiểu dữ liệu
// console.log(typeof number1);
// => khi sử dụng prompt sẽ trả về kiểu chuỗi (string)
/* 
    + Number()
    + "+"
    + parseInt()
*/
console.log(result);

/*
Bài 1: Viết chương trình nhập điểm của một sinh viên cho các môn: 
Vật lý, Hóa học, và Sinh học. Sau đó hiển thị điểm trung bình 
và tổng của những điểm này.

Bài 2: Viết chương trình nhập một giá trị là độ 0C (Celsius) 
và chuyển nó sang độ 0F (Fahrenheit). 
[Hướng dẫn: C/5 = (F-32)/9].

Bài 3: Viết chương trình tính diện tích hình tròn.

Bài 4: Viết chương trình chu vi hình tròn.

Bài 5: Viết một đoạn mã hỏi tên người dùng, sau đó chào họ và nói gì đó đáng yêu với họ
input: Anh Tôn
output: Hi Anh Tôn đẹp zaii !!!
*/
