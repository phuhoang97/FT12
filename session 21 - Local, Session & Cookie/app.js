// 1. Local Storage

// 1.1. Thêm vào local storage - setItem(key, value)
// + Đối với kiểu dữ liệu nguyên thủy
localStorage.setItem("Number", 100);
localStorage.setItem("Number", 9999);
localStorage.setItem("Thank", "Cảm ơn C Quỳnh Anhh");

// + Đối với kiểu dữ liệu tham chiếu - JSON.stringify
localStorage.setItem("array", JSON.stringify([10, 20, 30]));

let product = [
  { id: 1, name: "Áo thun", price: "1000" },
  { id: 2, name: "Quần bò", price: "2000" },
];

localStorage.setItem("product", JSON.stringify(product));

// 1.2. Lấy dữ liệu trên local - getItem(key)
// + Đối với kiểu dữ liệu nguyên thủy
let getNumber = localStorage.getItem("Number");
console.log("getNumber", getNumber);

// + Đối với kiểu dữ liệu tham chiếu - JSON.parse
let getProduct = JSON.parse(localStorage.getItem("product"));
console.log(getProduct);

// 1.3. Xóa dữ liệu trên local - removeItem(key)
localStorage.removeItem("array");
// localStorage.removeItem("Number");

// 1.4. Xóa toàn bộ dữ liệu trên local - clear()
// localStorage.clear();

// Lưu ý: Local Storage sẽ lưu trữ dữ liệu không có ngày hết hạn

// 2. Session Storage ~ (Tương tự như localStorage)
// => Sẽ hết hạn khi đóng trình duyệt
/*
    + sessionStorage.setItem(key, value) - C
    + sessionStorage.getItem(key) - R
    + sessionStorage.removeItem(key) - D
    + sessionStorage.clear()
*/

// sessionStorage.setItem("number", 9999999999);
