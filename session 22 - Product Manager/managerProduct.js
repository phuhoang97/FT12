const form = document.querySelector("#form-input");
const nameProduct = document.querySelector("#name-product");
const priceProduct = document.querySelector("#price-product");
const categoryProduct = document.querySelector("#category-product");
const tbodyTable = document.querySelector("#data-product");
const btnSubmit = document.querySelector("#btn-submit");
let existingIndex = -1;
let existing = false;

// Đọc dữ liệu từ local
function renderProduct() {
  const listProduct = JSON.parse(localStorage.getItem("data-product")) || [];
  let newElement = "";
  for (let i = 0; i < listProduct.length; i++) {
    const product = listProduct[i];
    newElement += `
    <tr>
        <td>${i + 1}</td>
        <td>${product.nameProduct}</td>
        <td>${product.price}</td>
        <td>${product.category}</td>
        <td>
            <button onclick="editProduct(${i})">Edit</button>
            <button onclick="deleteProduct(${i})">Delete</button>
        </td>
    </tr>
    `;
  }
  tbodyTable.innerHTML = newElement;
}
renderProduct();

// Thêm dữ liệu vào local
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const product = {
    id: Date.now(),
    nameProduct: nameProduct.value,
    price: priceProduct.value,
    category: categoryProduct.value,
  };

  const productLocal = JSON.parse(localStorage.getItem("data-product")) || [];

  if (existing) {
    // code update
    productLocal[existingIndex] = product;
    existingIndex = -1;
    existing = false;
    btnSubmit.textContent = "Add";
  } else {
    productLocal.push(product);
  }

  localStorage.setItem("data-product", JSON.stringify(productLocal));
  renderProduct();
  resetForm();
});

// Reset form
function resetForm() {
  nameProduct.value = "";
  priceProduct.value = "";
  categoryProduct.value = "";
}

// Xóa Product
function deleteProduct(index) {
  //   console.log(index);
  const getDataLocal = JSON.parse(localStorage.getItem("data-product"));
  //   console.log(getDataLocal);
  getDataLocal.splice(index, 1);

  localStorage.setItem("data-product", JSON.stringify(getDataLocal));
  renderProduct();
}

// Edit product
function editProduct(index) {
  const getDataLocal = JSON.parse(localStorage.getItem("data-product"));
  // [{}, {}, {}]
  nameProduct.value = getDataLocal[index].nameProduct;
  priceProduct.value = getDataLocal[index].price;
  categoryProduct.value = getDataLocal[index].category;

  existingIndex = index;
  existing = true;
  btnSubmit.textContent = "Update";
}
