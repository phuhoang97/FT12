// Bài tập 1

// let a = +prompt("mời bạn nhập số a");
// let b = +prompt("mời bạn nhập số b");

// let cal = prompt("mời bạn nhập phép tính: + - * /");

// switch (cal) {
//   case "+":
//     console.log(`${a} + ${b} = ${a + b}`);
//     break;
//   case "-":
//     console.log(`${a} - ${b} = ${a - b}`);
//     break;
//   case "*":
//     console.log(`${a} * ${b} = ${a * b}`);
//     break;
//   case "/":
//     console.log(`${a} / ${b} = ${a / b}`);
//     break;
//   default:
//     break;
// }

// Bài tập 2:
/*
    Viết một đoạn mã cho phép người dùng nhập vào 3 số a, b và c. 
    Tiến hành kiểm tra xem số nào là max và số nào là min.
    Sau đó in max và in ra màn hình console theo cú pháp “Max là - …” “Min là - …”.
*/

// let a = +prompt(`Nhập số a`);
// let b = +prompt(`Nhập số b`);
// let c = +prompt(`Nhập số c`);

// Math
// toán tử 3 ngôi

/*
    if (condition) {
        // logic 1
    } else {
        // logic 2
    }

    toán tử 3 ngôi:

    condition ? // logic 1 : // logic 2

*/

// if (a > b && a > c) {
//   alert(`Max là a = ${a}`);

//   b > c ? alert(`Min là c = ${c}`) : alert(`Min là b = ${b}`);
//   //   if (b > c) {
//   //     alert(`Min là c= ${c}`);
//   //   } else {
//   //     alert(`Min là b= ${b}`);
//   //   }
// } else if (b > a && b > c) {
//   alert(`Max là b = ${b}`);
//   a > c ? alert(`Min là c = ${c}`) : alert(`Min là a = ${a}`);

//   //   if (a > c) {
//   //     alert(`Min là c= ${c}`);
//   //   } else {
//   //     alert(`Min là a= ${a}`);
//   //   }
// } else {
//   alert(`Max là c= ${c} `);

//   b > a ? alert(`Min là a = ${a}`) : alert(`Min là b = ${b}`);

//   //   if (b > a) {
//   //     alert(`Min là a= ${a}`);
//   //   } else {
//   //     alert(`Min là b= ${b}`);
//   //   }
// }

// let min = Math.min(a, b, c);
// let max = Math.max(a, b, c);

// alert(`Min là ${min}`);
// alert(`Max là ${max}`);

// Bài tập 3:
let month = parseInt(prompt("Mời bạn nhập tháng :"));
let date = parseInt(prompt("Mời bạn nhập ngày :"));

switch (month) {
  case 1:
    if (date > 0 && date <= 19) {
      alert("Cung hoàng đạo của bạn là Ma Kết");
    } else {
      alert("Cung hoàng đạo của bạn là Bảo Bình");
    }
    break;

  case 2:
    if (date > 0 && date <= 18) {
      alert("Cung hoàng đạo của bạn là Bảo Bình");
    } else {
      alert("Cung hoàng đạo của bạn là Song Ngư");
    }
    break;

  case 3:
    if (date > 0 && date <= 20) {
      alert("Cung hoàng đạo của bạn là Song Ngư");
    } else {
      alert("Cung hoàng đạo của bạn là Bạch Dương");
    }
    break;

  case 4:
    if (date > 0 && date <= 19) {
      alert("Cung hoàng đạo của bạn là Bạch Dương");
    } else {
      alert("Cung hoàng đạo của bạn là Kim Ngưu");
    }
    break;

  default: {
    alert("Xin mời nhập tháng hợp lệ");
  }
  break;
}
