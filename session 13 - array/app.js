// Mảng
/*
    2 Loại mảng:
        + Mảng 1 chiều
        + Mảng nhiều chiều
*/

//  Cú pháp khai báo:
// Từ khóa khai báo biến_arrayName = [10, 20, "30", null, true]

// let arrNumber = [10, 20, 30, 40];
// index:        0   1    2   3  (length - 1)
// length:  4

// console.log(arrNumber);

// Cách 2:
// let arrList = new Array("red", "blue", "green");
// console.log(arrList);

// CRUD: Create (Thêm mới) - Read (Đọc) - Update (Cập nhật) - Delete (Xóa)

// let arrNumber = [10, 20, 30, 40];

// Read one - Đọc một phần tử
// console.log(arrNumber[2]); // 30
// console.log(arrNumber[3]); // 40
// console.log(arrNumber[4]); // undefined

// Read all - Đọc tất cả phần tử
// let arrNumber = [10, 20, 30, 40];

// for (let i = 0; i <= arrNumber.length - 1; i++) {
//   console.log(arrNumber[i]);
// }

// forof
// for (const key of arrNumber) {
//   console.log(key);
// }

// C - Create
// + Thêm vào đầu mảng - unshift()

// let arrNumber = [10, 20, 30, 40];

// console.log(arrNumber); // 10 20 30 40

// arrNumber.unshift(50);

// console.log(arrNumber); // 50 10 20 30 40

// + Thêm vào cuối mảng - push()
// let arrNumber = [10, 20, 30, 40];

// console.log(arrNumber); // 10 20 30 40

// arrNumber.push(50);

// console.log(arrNumber); // 10 20 30 40 50

// + Thêm vào vị trí biết trước - splice(index, amount, element)
// let arrNumber = [10, 20, 30, 40];

// arrNumber.splice(1, 0, 70, 80, 90);

// console.log(arrNumber);

// U - Update
// Update 1 phần tử
// let arrNumber = [10, 20, 30, 40];
// console.log(arrNumber); // 10 20 30 40
// arrNumber[1] = 80;
// console.log(arrNumber); // 10 80 30 40

// Update All

// let arrNumber = [10, 20, 30, 40];
// let newArr = [];

// for (let i = 0; i < arrNumber.length; i++) {
//   let updateItem = arrNumber[i] * 2;
//   newArr.push(updateItem);
// }

// console.log(newArr);

// D - Delete
// Xóa phần tử đầu mảng - shift()
// let arrNumber = [10, 20, 30, 40];
// console.log(arrNumber); // 10 20 30 40

// arrNumber.shift();
// console.log(arrNumber); // 20 30 40

// Xóa phần tử cuối mảng - pop()
// let arrNumber = [10, 20, 30, 40];
// console.log(arrNumber); // 10 20 30 40

// arrNumber.pop();
// console.log(arrNumber); // 10 20 30

// Xóa phần tử tại ví trí biết trước - splice(index, amount)

// let arrNumber = [10, 20, 30, 40];
// // console.log(arrNumber); // 10 20 30 40
// arrNumber.splice(1, 2);
// console.log(arrNumber);

// Mảng nhiều chiều

// let arr2D = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(arr2D);
// console.log(arr2D[1]);

// Các hàm làm việc với mảng:

// concat() - nối mảng

// let arr1 = ["Văn Toàn", "Giang Rồng", "Sơn VTV"];
// let arr2 = ["Quỳnh Anh Shyn", "Hiếu thứ 3"];
// let newArr = arr1.concat(arr2);
// console.log(newArr);

// includes() - Kiểm tra phần tử có tồn tại hay không
// let classFT = ["Tự giác", "Đạo Đức", "Liêm Khiết"];
// console.log(classFT.includes("Tự giác", 0));

// indexOf() - Hiển thị vị trí index của phần tử
// let classFT = ["Tự giác", "Đạo Đức", "Liêm Khiết"];
// console.log(classFT.indexOf("Đạo Đức"));

// join() - Chuyển đổi array thành string
// let arrBan2 = ["Văn Toàn", "Giang Rồng", "Sơn VTV"];
// let strArr = arrBan2.join(", ");
// console.log(strArr);

// reverse() - Đảo ngược mảng
// let arrNumber = [10, 20, 30, 40];
// console.log(arrNumber.reverse());

// sort() - Sắp xếp các giá trị trong mảng theo alphabet: a-z, A-Z, 0 - 9
// let arrNumber = [50, 1000, 10, 22, 20, 40, 30];
// console.log(arrNumber.sort());

// map, forEach, filter, reduce, find, findIndex => MD04: ReactJS

/*
    Bài 1: 
    input: myColor = ["Lion", "Tiger", "Wolf", "Kangaroo"];
    output: "Lion, Tiger, Wolf, Kangaroo"

    Bài 2: Viết một chương trình nhận một số nhập vào và chèn dấu (_) 
    giữa 2 số chẵn.
    Ví dụ nếu bạn nhập vào 245468 thì kết quả của chương trình sẽ là 2-454-6-8.
 
    Bài 3: Viết một chương trình nhập vào một chuỗi và chuyển các 
    ký tự chữ thường trong chuỗi vừa nhập sang thành dạng chữ hoa.
    Ví dụ: nếu bạn nhập vào chuỗi 'Keep Calm And Code On' 
    kết quả của chương trình là 'kEEP cALM aND cODE oN'.
*/
