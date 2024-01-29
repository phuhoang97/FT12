// Object - Đối tượng

// Trong đối tượng gồm các cặp key - value

// Cú pháp:

// let TênObj = {key1: value1, key2:value2, ... keyN:valueN}

// let student = {
//   studentName: "Giang Rồng",
//   age: 18,
//   address: "Hà Nội",
//   gender: "Khác",
// };

// CRUD

// R - Read one => tenObj.Key
// console.log(student.studentName); // Giang rồng

// R - Read All => forIn
// for (const key in student) {
//   //   console.log(key); // Lấy key
//   console.log(student[key]); // Lấy value
// }

// C - Create => tenobj.newKey = newValue

// Cách 1:
// let student = {
//   studentName: "Giang Rồng",
//   age: 18,
//   address: "Hà Nội",
//   gender: "Khác",
// };

// student.phone = "035115132";

// console.log(student);

// Cách 2: Enhancing Objects
// let phone = "NewKey";
// phone = "Phone";

// let student = {
//   studentName: "Giang Rồng",
//   age: 18,
//   address: "Hà Nội",
//   gender: "Khác",
//   [phone]: "0214655",
// };

// console.log(student);

// U - Update => tenObj.key = "newValue"
// let student = {
//   studentName: "Giang Rồng",
//   age: 18,
//   address: "Hà Nội",
//   gender: "Khác",
// };

// student.address = "DuBai";

// console.log(student);

// Delete => delete tenObj.key

// let student = {
//   studentName: "Giang Rồng",
//   age: 18,
//   address: "Hà Nội",
//   gender: "Khác",
// };

// delete student.age;

// console.table(student);

// [{}, {}, {}]

/*
    EX1: Tạo đối tượng person bao gồm: tên, tuổi, địa chỉ, sđt => in tất cả thông tin
    input: object person: name, age, address, phone
    output: "Thông tin người dùng là:
    tên: ... - age: ... - địa chỉ: ... - sđt: ...
*/
// let person = {
//   name: "Anh Tự",
//   age: 18,
//   address: "Thái Bình",
//   Sđt: "19001009",
// };
// console.log("Thông tin người dùng là :");
// console.log(
//   `Ten: ${person.name}-age:${person.age}-địa chỉ:${person.address}-SĐT:${person.Sđt}`
// );

/*
    EX2: Tạo đối tượng employee bao gồm: tên, lương (12000), chức vụ
    input: object employee: name, salary, department
    output: "Thông tin nhân viên là:
    Tên NV: ... - Lương NV: 24000 VNĐ - Chức vụ: ...
*/
// let employee = {
//   name: "Anh Tự",
//   salary: "12000 VND",
//   department: "Nhân Viên",
// };
// employee.salary = "24000vnd";
// console.log("Thông tin nhân viên là :");
// console.log(
//   `Ten: ${employee.name}
//    Lương NV:${employee.salary}
//    Chức vụ:${employee.department}`
// );
//     EX3: Cho người dùng nhập vào 5 chữ cái C/R/U/D/E:
//     - C: Cho người dùng nhập thêm vào đối tượng đó
//     Và in ra để kiểm tra dưới dạng table

//     - R: In ra toàn bộ phần tử trong obj dưới dạng table

//     - U: Cho người dùng nhập vào key muốn update:
//     + Nếu có: cho người dùng nhập giá trị muốn thay đổi, và in ra màn hình dưới dạng table
//     + Nếu không: In ra không tồn tại

//     - D:  Cho người dùng nhập vào key muốn xóa
//     + Nếu có:	Xóa key-value trong đối tượng đó
//     + Nếu không:	Không tìm thấy

//     + E: Dừng chương trình và thông báo Not found

// */

// let person = {};

// let inputUser;
// while (inputUser !== "E") {
//   inputUser = prompt("Nhập các ký tự C/R/U/D/E");

//   switch (inputUser) {
//     case "C":
//       let newKey = prompt("Nhập key cho object");
//       let newValue = prompt("Nhập value cho object");
//       person[newKey] = newValue;
//       console.table(person);
//       break;
//     case "R":
//       console.table(person);
//       break;
//     case "U":
//       let updateKey = prompt("Nhập key muốn update");
//       let flag = false;
//       for (const key in person) {
//         if (key == updateKey) {
//           let updateValue = prompt("Nhập giá trị mới");
//           person[updateKey] = updateValue;
//           flag = true;
//         }
//       }

//       if (flag) {
//         console.table(person);
//       } else {
//         alert("Không tìm thấy");
//       }
//       break;
//     case "D":
//       let deleteKey = prompt("Nhập key muốn xóa");
//       let check = false;
//       for (const key in person) {
//         if (key == deleteKey) {
//           check = true;
//           delete person[deleteKey];
//         }
//       }

//       if (check) {
//         console.table(person);
//       } else {
//         alert("Không tìm thấy");
//       }
//       break;
//     case "E":
//       alert("Thoát chương trình");
//       break;

//     default:
//       alert("Nhập không hợp lệ");
//       break;
//   }
// }

// Bài 4:

let product = [
  {
    id: 1,
    name: "Sony Xperia XZ Premium",
    brand: "Sony",
    price: "4428",
    color: "White",
    category: "Phone",
  },
  {
    id: 2,
    name: "OPPO F3 Plus",
    brand: "OPPO",
    price: "5487",
    color: "Black",
    category: "Phone",
  },
  {
    id: 3,
    name: "IPhone 13 Pro max",
    brand: "Apple",
    price: "21490",
    color: "Gray",
    category: "Phone",
  },
  {
    id: 4,
    name: "Samsung Galaxy S8",
    brand: "Samsung",
    price: "8490",
    color: "Blue",
    category: "Phone",
  },
];
