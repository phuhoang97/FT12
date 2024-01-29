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

// Bài 1:

// let myPet = ["Lion", "Tiger", "Wolf", "Kangaroo"];
// console.log(myPet.join(", "));

// Bài 2:
// let number = prompt("Nhập 1 số bất kỳ");
// let result = [number[0]];
// // [2]

// for (let i = 1; i < number.length; i++) {
//   if (number[i - 1] % 2 === 0 && number[i] % 2 === 0) {
//     result.push("-", number[i]);
//   } else {
//     result.push(number[i]);
//   }
// }

// console.log(result.join(""));

// Bài 3:
// input: 'Keep Calm And Code On'
// output: 'kEEP cALM aND cODE oN'.

// Cách 1:
// let str = "Keep Calm And Code On";
// let newStr = "";

// for (let i = 0; i < str.length; i++) {
//   let element = str[i];
//   if (element === element.toUpperCase()) {
//     newStr += element.toLowerCase();
//   } else {
//     newStr += element.toUpperCase();
//   }
// }

// console.log(newStr);

// Cách 2:

// let str = prompt("Nhập gì đấy");
// // convert từ string => array
// let giday = str.split("");
// //   .map((e) => (e === e.toUpperCase() ? e.toLowerCase() : e.toUpperCase()))
// //   .join("");

// let newArr = [];
// for (let i = 0; i < giday.length; i++) {
//   let element = giday[i];
//   if (element === element.toUpperCase()) {
//     newArr.push(element.toLowerCase());
//   } else {
//     newArr.push(element.toUpperCase());
//   }
// }

// console.log(newArr.join(""));

/*
    Bài tập 1: Tính tổng các phần tử trong mảng
    + Cho mảng ban đầu. Tính tổng các phẩn tử trong mảng. Ví dụ:
    Input: [1,2,3]
    Ouput: 6

    Bài tập 2: Tìm phần tử lớn nhất trong mảng
    + Cho mảng ban đầu. Tìm phần tử lớn nhất. ví dụ:
    Input: [1,2,3]
    Output: 3

    Bài tập 3: Tìm phần tử nhỏ nhất trong mảng
    + Cho mảng ban đầu. Tìm phần tử nhỏ nhất. ví dụ:
    Input: [10,8,2,6]
    Output: 2

*/

// Bài tập 1:
// let arrNum = prompt("Nhập các số cách nhau bằng dấu ', ' "); // => datatype string
// let newArr = arrNum.split(","); // string => array

// let sum = 0;

// for (let i = 0; i < newArr.length; i++) {
//   sum += Number(newArr[i]);
// }

// console.log(sum);

// Bài tập 2: Tìm phần tử lớn nhất trong mảng
//     + Cho mảng ban đầu. Tìm phần tử lớn nhất. ví dụ:
//     Input: [4, 5, 2, 7, 8]
//     Output: 3

//  [2, 4, 5, 7, 8]
// length - 1;

// let inputUser = prompt("Nhập các số cách nhau bằng dấu ', ' "); // => datatype string
// let newArr = inputUser.split(","); // string => array

// let max = newArr[0];

// for (let i = 1; i < newArr.length; i++) {
//   if (newArr[i] > max) {
//     max = newArr[i];
//   }
// }

// console.log(max);

/* 
    1,2,7,5,6.

    1 || 2 || 7
    2 > 1 => max = 2
    7 > 2 => max = 7
    5 > 7 => max = 7
    6 > 7 => max = 7
*/

// Bài 3

// let arr = [10, 8, 3, 5];
// let min = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] < min) {
//     min = arr[i];
//   }
// }
// console.log(`Min là ${min}`);

/* 
    Bài tập 4: Kiểm tra xem phần tử có tồn tại trong mảng hay không
    Cho mảng ban đầu, làm theo 2 cách:
    + Cách 1: Không sử dụng hàm có sẵn
    + Cách 2: Sử dụng hàm có sẵn
    Input: [1, 2, 3, 4, 5];
    Output: true/false
*/

// Cách 1:
// let numberArr = [2, 1, 4, 3];
// let flag = false;

// for (let i = 0; i < numberArr.length; i++) {
//   if (numberArr[i] == 3) {
//     flag = true;
//     break;
//   }
// }

// alert(flag);

// Hàm includes
// let numberArr = [2, 1, 4, 3];

// console.log(numberArr.includes(50));

/* 
    Bài 5: Đảo ngược mảng
    input: [1,2,3,4,5]
    output: [5,4,3,2,1]
*/
// Cách 1: Dùng hàm có sẵn
// let a = prompt("Nhập các số cách nhau bằng dấu ','");
// let arr = a.split(",");
// console.log(arr.reverse().join(","));

// Cách 2:
// let a = prompt("Nhập các số cách nhau bằng dấu ','");
// let arr = a.split(",");
// let newArr = [];

// for (let i = arr.length - 1; i >= 0; i--) {
//   newArr.push(arr[i]);
// }

// console.log(newArr);

/*
    Bài tập 6: Lọc các phần tử chẵn trong mảng:
    Input: [1, 2, 3, 4, 5]
    Ouput: [2, 4]
*/
// cách 1
// let arr = [1, 2, 3, 4, 5, 6];
// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     newArr.push(arr[i]);
//   }
// }
// console.log(newArr);

// cách 2:
// let newArr = arr.filter((e) => e % 2 === 0);
// console.log(newArr);

/* 
    Bài tập 7: Tìm số lần xuất hiện của một phần tử trong mảng
    + Cho mảng ban đầu và cho người dùng nhập 1 giá trị bất kỳ. 
    Nếu có giá trị trong mảng thì sẽ báo số lần phần tử xuất hiện trong mảng
    Input: [1, 2, 3, 2, 4, 2, 5] => người dùng nhập 2
    Output: Số 2 xuất hiện 3
*/

// let arr = [1, 2, 3, 2, 4, 2, 5];
// let check = +prompt("Mời bạn nhập vào số để kiểm tra: ");
// let count = 0;

// for (let i = 0; i <= arr.length - 1; i++) {
//   if (arr[i] === check) {
//     count++;
//   }
// }

// console.log(`Số lần xuất hiện của ${check} trong mảng là ${count}`);

/*
    Bài tập 8: Sắp xếp lại mảng theo giá trị tăng dần
    Input: [4, 2, 9, 5, 1]
    Output: [1, 2, 4, 5, 9]
*/
//
// let arr = [4, 2, 9, 5, 1];

// Cách 1:
// arr.sort(function (a, b) {
//   return a - b;
// });
// console.log(arr);

// Cách 2:
let arr = [4, 2, 9, 5, 1];
//         0  1  2  3  4
let tg;
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      tg = arr[i];
      arr[i] = arr[j];
      arr[j] = tg;
    }
  }
}
console.log(arr);

// Thuật toán nổi bọt
/*
    tg = 4
    4 = 2
    2 = tg

    => 2 4
*/

const quickSort = (arr) => {
  if (arr.length < 2) return arr;

  // *** lấy phần tử cuối của 'arr' làm 'pivot'
  const pivotIndex = arr.length - 1;
  const pivot = arr[pivotIndex];

  const left = [];
  const right = [];

  let currentItem;
  // *** 'i < pivotIndex' => chúng ta sẽ không loop qua 'pivot' nữa
  for (let i = 0; i < pivotIndex; i++) {
    currentItem = arr[i];

    if (currentItem < pivot) {
      left.push(currentItem);
    } else {
      right.push(currentItem);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

console.log(quickSort([100, 2, 5, 4, 7, 5, 6, 8, 0, 12, 34, 15]));
// *** => [0, 2, 4, 5, 5, 6, 7, 8, 12, 15, 34, 100]
