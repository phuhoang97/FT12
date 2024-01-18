// Bài 1: Nhập vào hai số a và b, và kiểm tra xem a có chia hết cho b hay không
// let a = prompt("nhập số a:");
// let b = prompt("nhập số b:");
// if (a % b == 0) {
//   /*
//     Ngoài + (Phép nối chuỗi) các phép toán khác tự động ép kiểu
//   */
//   alert("a chia hết cho b");
// } else {
//   alert("a không chia hết cho b");
// }

// Bài 2: Giải phương trình bậc 2.
// let a = +prompt("nhập số a");
// let b = +prompt("nhập số b");
// let c = +prompt("nhập số c");

// let delta = b * b - 4 * a * c;

// if (a == 0) {
//   alert(`Phương trình bậc 1: x = ${-c / b}`);
// } else {
//   if (delta == 0) {
//     alert(`phương trình có nghiệm kép x1=x2=${-b / (2 * a)}`);
//   } else if (delta > 0) {
//     alert(
//       `phương trình có 2 nghiệm:
//           x1=${(-b + Math.sqrt(delta)) / (2 * a)},
//           x2=${(-b - Math.sqrt(delta)) / (2 * a)}`
//     );
//   } else {
//     alert("phương trình vô nghiệm");
//   }
// }

// Bài 3: Tính diện tích hình vuông khi biết cạnh a.
// let a = +prompt("Nhập cạnh hình vuông: ");

// if (a == 0) {
//   alert("Cạnh đã cho không phải là cạnh hình vuông");
// } else {
//   alert(`Diện tích hình vuông là ${a * a}`);
// }

/*
    Bài 4: Tính diện tích tam giác vuông khi biết 02 cạnh kề a, b.
*/
// let canhA = +prompt("Nhập cạnh a: ");
// let canhB = +prompt("Nhập cạnh b: ");
// let tinhdientich = (canhA * canhB) / 2;

// // "Son" + 2024 = Son2024 => NaN => isNaN
// // console.log(isNaN(tinhdientich));

// if (isNaN(tinhdientich)) {
//   alert("Yêu cầu nhập lại");
// } else {
//   alert("dien tich la: " + tinhdientich);
// }

/*
Bài 5: Viết chương trình cho phép người dùng nhập màu vào kiểm tra. 
Nếu nhập 1 trong các màu : xanh, đỏ, vàng thì hiển thị màu người dùng nhập Nếu nhập màu 
khác hiển thị màu không hợp lệ!
*/

// let color = prompt("Nhập xanh đỏ hoặc vàng");
// switch (color) {
//   case "xanh":
//     console.log("Màu xanh");
//     break;
//   case "đỏ":
//     console.log("Màu đỏ");
//     break;
//   case "vàng":
//     console.log("Màu vàng");
//     break;
//   default:
//     console.log("Không hợp lệ");
//     break;
// }

/*
    Bài 6: Viết chương trình cho phép người dùng nhập điểm các môn:Toán,Lí,Hoá,
    Văn, Sử , Địa (thang điểm 10); Sau đó tính điểm trung bình các môn học
    Hiển thị kết quả học tập theo loại như sau:

    + 8.0 <=ĐTB<=10: xếp loại GIỎI.
    + 6.5<=ĐTB<=7.9: xếp loại KHÁ.
    + 5.0<=ĐTB<=6.4: xếp loại TRUNG BÌNH.
    + ĐTB<5.0 : xếp loại YẾU.
*/
let diemToan = +prompt("nhap vao diem Toan");
let diemLy = +prompt("nhap vao diem Ly");
let diemHoa = +prompt("nhap vao diem Hoa");
let diemVan = +prompt("nhap vao diem Van");
let diemSu = +prompt("nhap vao diem Su");
let diemDia = +prompt("nhap vao diem Dia");
let tong = diemToan + diemLy + diemHoa + diemVan + diemSu + diemDia;
let diemTrungBinh = tong / 6;
let rs =
  diemTrungBinh <= 8.0
    ? console.log("xep loai gioi")
    : diemTrungBinh >= 6.5
    ? console.log("xep loai kha")
    : diemTrungBinh <= 6.5
    ? console.log("xep loai trung binh")
    : diemTrungBinh <= 5.0
    ? console.log("xep loai Yeu")
    : console.log("Không hợp lệ");
