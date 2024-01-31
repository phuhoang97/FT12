/*
    1. DOM là gì
    - Document Object Model là giao diện lập trình ứng dụng
    - Được dùng để truy xuất vào các tại liệu HTML và XML

    2. Selector (Bộ chọn trong DOM)
    - ID, ClassName, TagName:
        + getElementById
        + getElementsByClassName
        + getElementsByTagName
    
    Từ phiên bản DOM Lv 4 trở đi: querySelector, querySelectorAll
    -> #tenID - .tenClass - tagName
        + querySelector
        + querySelectorAll

    3. Thuộc tính (Properties)
    - Text and Content:
        + innerHTML: Cho phép lấy toàn bộ nội dung có trong thẻ
        + innerText & textContent: Chỉ lấy nội dung là chữ có trong thẻ

    4. Value:
        + Để lấy value: .value

    5. Style
        + Để thay đổi style: .style
        => Lưu ý: viết theo kiểu camelCase

    6. ChildrenElement và ParentElement
        + Truy xuất từ cha xuống con: .children
        + Truy xuất từ con lên cha: .parentElement
    
    7. ClassList và ID:
        + .id
        + .classList

    8. Thêm và Xóa ClassList:
        + .classList.add("Class2");


*/

// Lấy thông qua ID
let getByID = document.getElementById("app");
console.log(getByID);

// Lấy thông ClassName
let getByClass = document.getElementsByClassName("todo");
console.log(getByClass); // => HTMLCollection ~ Array

// Lấy thông qua tagName
let getByTagName = document.getElementsByTagName("div");
console.log(getByTagName[3]);

// querySelector
let getByQueryID = document.querySelector("#app");
// console.log(getByQueryID);

// querySelectorAll
let getByQueryClass = document.querySelectorAll(".todo");
console.log(getByQueryClass); // NodeList ~ Array

// InnerHTML
console.log(getByID.innerHTML); // Quỳnh Anh

// innerText
console.log(getByClass[0].innerText); // Bị ảnh hưởng bởi display: none
console.log(getByClass[0].textContent); // Không bị ảnh hưởng

// textContent
// console.log(getByClass[1].textContent);

let divContainer = document.getElementById("container");

console.log(divContainer.innerHTML);
console.log(divContainer.innerText);
console.log(divContainer.textContent);

// Get Value
let inputValue = document.getElementById("form-input");
// console.log(inputValue.value); // Lấy value

// style
let getDiv = document.getElementById("dep-zaii");
// Các thuộc tính được viết theo kiểu camelCase:
// background-color => backgroundColor
getDiv.style.color = "red";
getDiv.style.backgroundColor = "black";

// ChildrenElement và ParentElement
// let ulParent = document.getElementById("ul-parent");

// Children
// + Từ cha xuống con
// console.log(ulParent.children[2]);

// Từ con lên cha
// console.log(ulParent.children[1].parentElement);

// ClassList và ID
// let ulParent = document.getElementById("app1");
// ulParent.id = "app2";
// console.log(ulParent);

// let divChao = document.getElementById("app1");
// console.log(divChao.classList[0]);

// Thêm và Xóa ClassList
// Thêm
// divChao.classList.add("Class2");

// // Xóa
// divChao.classList.remove("class1");

// console.log(divChao);

// createElement và appendChild
// let ulList = document.getElementById("ulList");

// // Tạo ra thẻ li
// let li = document.createElement("li");

// // Thêm nội dung
// li.innerHTML = "Đi ngủ";

// // Gắn vào thẻ ul cha
// ulList.appendChild(li);

// console.log(li);

// Gọi trực tiếp trong thẻ HTML
// function eventClick() {
//   alert("Học bài điiiiiiii ");
// }

// Gọi gián tiếp
let btn = document.getElementById("btn");

// Cách 2
// btn.onclick = () => {
//   alert("Hello");
// };

// Cách 3
btn.addEventListener("click", () => {
  alert("Giang Sơn chém gió ít thôiii");
});
