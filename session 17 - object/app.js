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

// let product = [
//   {
//     id: 1,
//     name: "Sony Xperia XZ Premium",
//     brand: "Sony",
//     price: "4428",
//     color: "White",
//     category: "Phone",
//   },
//   {
//     id: 2,
//     name: "OPPO F3 Plus",
//     brand: "OPPO",
//     price: "5487",
//     color: "Black",
//     category: "Phone",
//   },
//   {
//     id: 3,
//     name: "IPhone 13 Pro max",
//     brand: "Apple",
//     price: "21490",
//     color: "Gray",
//     category: "Phone",
//   },
//   {
//     id: 4,
//     name: "Samsung Galaxy S8",
//     brand: "Samsung",
//     price: "8490",
//     color: "Blue",
//     category: "Phone",
//   },
// ];

// let danhmuc = [
//   {
//     id: "1",
//     name: "Sony Xperia XZ Premium",
//     brand: "Sony",
//     price: "4428",
//     color: "White",
//     category: "Phone",
//   },
//   {
//     id: "2",
//     name: "OPPO F3 Plus",
//     brand: "OPPO",
//     price: "5482",
//     color: "Black",
//     category: "Phone",
//   },
//   {
//     id: "3",
//     name: "IPhone 13 Pro max",
//     brand: "Aplle",
//     price: "21490",
//     color: "Gray",
//     category: "Phone",
//   },
//   {
//     id: "4",
//     name: "Samsung Galaxy S8",
//     brand: "Samsung",
//     price: "8490",
//     color: "Blue",
//     category: "Phone1",
//   },
// ];

//1.1
// for (let i=0 ; i<=danhmuc.length - 1; i++){
//     console.log(
// `Name: ${danhmuc[i].name}
// Price: ${danhmuc[i].price}`
//     );
// }

//1.2
// let a = +prompt("enter product position");
// let flag = false
// for(let i=0 ; i<=danhmuc.length - 1; i++){
//     if(a == danhmuc[i].id ){
//         console.log(danhmuc[i]);
//         flag = true
//     }
// }
// if(flag == false){
//     alert("nhập sai")
// }

//1.3

// let printDanhmucByCate = () => {
//     let inputCate = prompt("Nhập danh mục : ");
//     let flag = false;

//     for( let i = 0; i <= danhmuc.length - 1; i++) {
//         if (inputCate === danhmuc[i].category) {
//             flag = true;
//             console.log(`
//             Name: ${danhmuc[i].name}\n
//             Price: ${danhmuc[i].price}\n
//             ----------------------------
//             `);
//         }
//     }
//     if (flag == false) {
//         alert("Nhập danh mục không hợp lệ");
//     }
// }

// printDanhmucByCate();

//1.4

// for (let i = 0; i < danhmuc.length; i++) {
//    let input = prompt("mời bạn nhập")
//    danhmuc[i].providers = input

// }
// console.log(danhmuc[i]);

//1.5

// let n  = prompt("chon cac nha cung cap");
// for(let i=0;i<danhmuc.length;i++){
//     if(n=== danhmuc[i].providers){
//         console.log(danhmuc[i]);
//     }
// }
//2.1
// let job = [
//   {
//     name: "HTML",
//     complete: false,
//   },
//   {
//     name: "CSS",
//     complete: false,
//   },
//   {
//     name: "JavaScript",
//     complete: false,
//   },
// ];

//2.2

// let inputUser;
// while (inputUser !== "E") {
//   inputUser = prompt("Nhap C/R/U/D/Complete/E");
//   switch (inputUser) {
//     case "C":
//       let inputValue = prompt("Nhap value");
//       let newObject = { name: inputValue, complete: false };
//       job.push(newObject);
//       console.log("Đây là nhiệm vụ học tập của bạn");
//       for (let i = 0; i < job.length; i++) {
//         console.log(`${i + 1}. ${job[i].name}`);
//         console.log(`Hoàn thành: ${job[i].complete}`);
//       }
//       break;
//     case "R":
//       console.log("Đây là nhiệm vụ học tập của bạn");
//       for (let i = 0; i < job.length; i++) {
//         console.log(`${i + 1}. ${job[i].name}`);
//         console.log(`Hoàn thành: ${job[i].complete}`);
//       }
//       break;
//     case "U":
//       let inputID = +prompt("Nhập ID muốn thay đổi");
//       let tempVal = prompt("Nhập tên mới cho tác vụ");
//       if (inputID <= 0 || inputID > job.length) {
//         alert("ID không tồn tại");
//       } else {
//         job[inputID - 1].name = tempVal;
//       }
//       for (let i = 0; i < job.length; i++) {
//         console.log(`${i + 1}. ${job[i].name}`);
//         console.log(`Hoàn thành: ${job[i].complete}`);
//       }
//       break;
//     case "complete":
//       let idInput = +prompt("Nhập ID muốn thay đổi");

//       if (idInput <= 0 || idInput > job.length) {
//         alert("ID không tồn tại");
//       } else {
//         job[idInput - 1].complete = !job[idInput - 1].complete;
//       }
//       for (let i = 0; i < job.length; i++) {
//         console.log(`${i + 1}. ${job[i].name}`);
//         console.log(`Hoàn thành: ${job[i].complete}`);
//       }
//       break;
//     case "D":
//       let Idip = +prompt("nhập ID");
//       job.splice(Idip - 1, 1);
//       for (let i = 0; i < job.length; i++) {
//         console.log(`${i + 1}. ${job[i].name}`);
//         console.log(`Hoàn thành: ${job[i].complete}`);
//       }
//       break;
//     case "E":
//       break;
//     default:
//       break;
//   }
// }

/* 
  [{name: "Hello"}, {}, {}, name: java]
  arr[0].name
*/

// Bài 1:
// let danhBa = [
//   {
//     name: "Anh Tự",
//     phone: 123,
//     email: "anhtu@example.com",
//   },
//   {
//     name: "Anh Tôn",
//     phone: 456,
//     email: "anhton@example.com",
//   },
//   {
//     name: "Anh Hiếu",
//     phone: 789,
//     email: "anhhieu@example.com",
//   },
// ];
// let action;

// // Hàm hiển thị
// function displayData() {
//   for (let i = 0; i < danhBa.length; i++) {
//     console.log(`${i + 1}. Tên người dùng là: ${danhBa[i].name}
//     Số điện thoại người dùng là: ${danhBa[i].phone}
//     Email người dùng là: ${danhBa[i].email} `);
//   }
// }

// // Hàm thêm mới danh bạ
// function addData() {
//   let name = prompt("Nhap ten");
//   let phone = prompt("Nhap dien thoai");
//   let email = prompt("Nhap email");
//   let newObj = { name, phone, email };
//   /*
//   <=> Enhandced Object Literals
//     {
//       name: name,
//       phone: phone,
//       email: email
//     }
//   */
//   danhBa.push(newObj);
//   displayData();
// }

// // Hàm cập nhật danh bạ
// function updateData() {
//   let updateName = prompt("Nhập tên muốn thay đổi");
//   /*
//     1. update số điện thoại
//     2. update email
//     3. update cả 2
//     default. alert không hợp lệ
//     4.Xóa Người khỏi Danh Bạ
//   */
//   let check = false;
//   for (let i = 0; i < danhBa.length; i++) {
//     if (danhBa[i].name == updateName) {
//       let choice = +prompt(
//         "Nhập muốn sửa lựa chọn 1.số điện thoại  2.email  3. Sửa cả 2 thông tin"
//       );
//       check = true;
//       switch (choice) {
//         case 1:
//           let newPhone = prompt("Nhập số điện thoại mới");
//           danhBa[i].phone = newPhone;
//           break;
//         case 2:
//           let newEmail = prompt("Nhập email mới");
//           danhBa[i].email = newEmail;
//           break;
//         case 3:
//           let newPhone1 = prompt("Nhập số điện thoại mới");
//           danhBa[i].phone = newPhone1;
//           let newEmail1 = prompt("Nhập email mới");
//           danhBa[i].email = newEmail1;
//           break;
//         default:
//           alert("Nhập sai giá trị");
//           break;
//       }
//     }
//   }
//   if (check == false) {
//     alert("Không có tên trong danh bạ");
//   }

//   displayData();
// }

// // Hàm xóa danh bạ
// let deleteData = () => {
//   let delID = Number(prompt("Mời nhập vị trí muốn xóa: ")) - 1;
//   delID >= 0 && delID <= danhBa.length
//     ? danhBa.splice(delID, 1)
//     : alert("Nhập vị trí không hợp lệ");
//   displayData();
// };

// // Hàm tìm kiếm
// function searchData() {
//   let inputSearch = prompt(`Nhập tên muốn tìm`);
//   for (let i in danhBa) {
//     if (danhBa[i].name == inputSearch) {
//       console.log(
//         `Đối tượng tìm kiếm là:
//         ${danhBa[i].name} - ${danhBa[i].phone} - ${danhBa[i].email} `
//       );
//     }
//   }
// }

// do {
//   console.log("==== Quản lý danh bạn ====");
//   console.log(`1. Hiển thị danh sách người trong danh bạ`);
//   console.log(`2. Thêm mới người trong danh bạ`);
//   console.log(`3. Cập nhật người trong danh bạ`);
//   console.log(`4. Xóa người trong danh bạ`);
//   console.log(`5.Tìm kiếm theo tên`);
//   console.log(`*****************************************`);
//   action = prompt("Nhập hành động (Create/Read/Update/Delete/Search/End)");
//   switch (action) {
//     case "1":
//       displayData();
//       break;
//     case "2":
//       addData();
//       break;
//     case "3":
//       updateData();
//       break;

//     case "4":
//       deleteData();
//       break;
//     case "5":
//       searchData();
//       break;
//     // default:
//     //   alert("Số nhập không hợp lệ");
//     //   break;
//   }
// } while (action !== "0");

// Làm bài tập 2 và đọc trước bài DOM
