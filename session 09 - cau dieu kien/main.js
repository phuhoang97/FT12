/*
 Câu điều kiện:
    + Giúp thay đổi luồng chạy của chương trình
    + Quyết định thực thi và thực hiện khi nào


*/

// Câu điều kiện If

// if (10 < 5) {
//   // Statement
//   console.log("Đúng !!!");
// }

/*
    Bài 2. Viết một chương trình kiểm tra xem một số nhập vào có nằm trong khoảng từ 1 đến 10 không.
    input: 9
    output: Số 9 nằm trong khoảng từ 1 đến 10. (Sử dụng kiến thức template string)
*/

// Chữa bài:
// let number = +prompt("Nhập số bất kỳ");

// NaN - Not a Number // 8gh523gh

// if (number > 0 && number < 10) {
//   console.log(`Số ${number} nằm trong khoảng từ 1 đến 10`);
// }

// Câu điều kiện if else

// if (6 < 15) {
//   // Đk đúng
//   console.log("Thực hiện code ở if");
// } else {
//   // ĐK sai
//   console.log("Thực hiện code ở else");
// }

/*
    Bài 3. Tạo biến time, kiểm tra xem thời gian hiện tại lớn hơn 14h 
    thì in ra "Muộn roi! về lấy vợ thôi". < 14h thì in ra là "Vẫn còn sớm !!!"
    input: 15
    output: "Muộn roi! về lấy vợ thôi"
*/
// Chữa bài tập:

// let time = +prompt("Nhập thời gian hiện tại");

// if (time > 0 && time < 14) {
//   console.log("Vẫn còn sớm !!!");
// } else {
//   console.log("Muộn roi! về lấy vợ thôi");
// }

// Câu điều kiện if ... else if ... else

// if (5 > 6) {
//   console.log("Câu dk if");
// } else if (6 > 2) {
//   console.log("Câu dk else if");
// } else {
//   console.log("Câu dk else");
// }

// let time = +prompt("Nhập thời gian hiện tại");

// if (time < 0 || time > 24) {
//   console.log("Bạn nhập sai");
// } else if (time > 0 && time < 14) {
//   console.log("Vẫn còn sớm mà !!!");
// } else {
//   console.log("Muộn roi! về lấy vợ thôi");
// }

// "" '' `` => chuỗi (string)

/*
    Cho người dùng nhập độ tuổi để đi xe bus
    + < 3: Không hợp lệ. - else
    + 3 - 7 tuổi: Free - case free
    + 8 - 16: Giá vé là 7k
    + 17 - 35: Giá vé là 10k
    + 36 - 55: Giá vé là 5k
    + > 56: free - case free
*/

// Chữa bài

// let age = +prompt("Nhập tuổi: ");

// // Toán tử 3 ngôi

// if ((age >= 3 && age <= 7) || age >= 56) {
//   console.log("Free vé xe bus");
// } else if (age >= 8 && age <= 16) {
//   console.log("Giá vé 7k");
// } else if (age >= 17 && age <= 35) {
//   console.log("Giá vé 10k");
// } else if (age >= 36 && age <= 55) {
//   console.log("Giá vé 5k");
// } else {
//   console.log("Tuổi không hợp lệ");
// }

// Câu điều kiện switch ... case

// switch (10) {
//   case 1:
//     console.log("Đây là 1");
//     break;
//   case 2:
//     console.log("Đây là 2");
//     break; // Khi thực hiện xong sẽ dừng lại chương trình
//   case 3:
//     console.log("Đây là 3");
//     break;
//   default:
//     console.log("Đây là default");
//     break;
// }

/*
    + if else: Sử dụng để kiểm tra trong 1 miền giá trị
    + switch case: Sử dụng để kiểm tra từng trường hợp
*/

/*
    Cho người dùng nhập tháng. Kiểm tra tháng đó bao nhiêu ngày
    input: 1 || 2
    output: Tháng 1 có 31 ngày || Tháng 2 có 28 or 29 ngày

    Tháng 31: 1 3 5 7 8 10 12
    Tháng 30: 4 6 9 11
    Tháng 2 có 28 or 29 ngày
*/
// let month = +prompt("Nhập tháng :");
// switch (month) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     console.log("thang có 31 ngày");
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     console.log("thang có 30 ngày");
//     break;
//   case 2:
//     let year = +prompt("Nhập số năm");
//     if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
//       console.log("Tháng 2 có 29 ngày");
//     } else {
//       console.log("Tháng 2 có 28 ngày");
//     }
//     break;
//   default:
//     break;
// }

/*
    Cho người dùng nhập năm. Kiểm tra năm nhuận hay không nhuận
    
    + Những năm chia hết cho 4 mà không chia hết cho 100 là năm nhuận
    + Những năm chia hết đồng thời cho 100 và 400 là năm nhuận

    + Những năm chia hết cho 100 mà không chia hết cho 400 thì KHÔNG PHẢI là năm nhuận
*/
// let year = +prompt("Nhập số năm");

// Cách 1:
// if (year % 4 == 0 && year % 100 != 0) {
//   console.log("Đây là năm nhuận");
// } else if (year % 100 == 0 && year % 400 == 0) {
//   console.log("Đây là năm nhuận.");
// } else if (year % 100 == 0 && year % 400 != 0) {
//   console.log("Đây Không Phải là năm nhuận.");
// } else {
//   console.log("Đây không phải là năm nhuận.");
// }

// Cách 2:
// if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
//   console.log("Năm nhuận");
//   // Tháng 2 - 29
// } else {
//   console.log("Năm không nhuận");
//   // Tháng 2 - 28
// }
