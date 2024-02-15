const form = document.getElementById("main-form");
const btnSubmit = document.getElementById("btn-submit");

// Update
let editIndex = -1;
let editExisting = false;

// Hàm hiển thị
function renderProduct() {
  const ListProduct = JSON.parse(localStorage.getItem("list-product"));
  const bodyTable = document.getElementById("body-table");
  bodyTable.innerHTML = ``;
  for (let i = 0; i < ListProduct.length; i++) {
    const tr = document.createElement("tr");
    const product = ListProduct[i];
    tr.innerHTML += `
        <td>${product.id}</td>
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td>${product.category}</td>
        <td>
            <button onclick="editProduct(${i})">Edit</button>
            <button onclick="deleteProduct(${i})">Delete</button>
        </td>
    `;
    bodyTable.appendChild(tr);
  }
}
renderProduct();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // Lấy value ô input
  const idProduct = document.getElementById("id-product").value;
  const nameProduct = document.getElementById("name-product").value;
  const priceProduct = document.getElementById("price-product").value;
  const categoryProduct = document.getElementById("category-product").value;

  // Tạo đối tượng
  const product = {
    id: idProduct,
    name: nameProduct,
    price: priceProduct,
    category: categoryProduct,
  };

  // Lấy dữ liệu trên local nếu chưa có sẽ trả về []
  const getProductLocal =
    JSON.parse(localStorage.getItem("list-product")) || [];

  // Update
  if (editExisting) {
    // Code update
    getProductLocal[editIndex]; // {} = {}
  } else {
    getProductLocal.push(product);
  }

  console.log(getProductLocal);

  // set dữ liệu lên local
  localStorage.setItem("list-product", JSON.stringify(getProductLocal));

  renderProduct();
});

function deleteProduct(index) {
  //   console.log(index);
  // B1: Lấy dữ liệu trên local
  const getDataLocal = JSON.parse(localStorage.getItem("list-product"));
  //   console.log(getDataLocal[index]);
  // B2: Xóa dữ liệu
  getDataLocal.splice(index, 1);
  // B3: set lại dữ liệu lên local
  localStorage.setItem("list-product", JSON.stringify(getDataLocal));
  renderProduct();
}

function editProduct(index) {
  const getDataLocal = JSON.parse(localStorage.getItem("list-product"));

  document.getElementById("id-product").value = getDataLocal[index].id;
  document.getElementById("name-product").value = getDataLocal[index].name;
  document.getElementById("price-product").value = getDataLocal[index].price;
  document.getElementById("category-product").value =
    getDataLocal[index].category;

  editIndex = index;
  editExisting = true;

  btnSubmit.textContent = "Update";
}
