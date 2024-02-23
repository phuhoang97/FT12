// Dữ liệu sản phẩm (được giả lập)
let products = [
  { id: 1, name: "Sản phẩm A", price: 100000 },
  { id: 2, name: "Sản phẩm B", price: 50000 },
  { id: 3, name: "Sản phẩm C", price: 80000 },
  { id: 4, name: "Sản phẩm D", price: 120000 },
  { id: 5, name: "Sản phẩm E", price: 70000 },
  // Thêm dữ liệu sản phẩm khác ở đây
];

// Biến lưu trữ trang hiện tại
let currentPage = 1;
// Số lượng sản phẩm trên mỗi trang
let productsPerPage = 3;

// Hàm hiển thị sản phẩm theo trang
function displayProducts(page) {
  let startIndex = (page - 1) * productsPerPage;
  let endIndex = startIndex + productsPerPage;
  let paginatedProducts = products.slice(startIndex, endIndex);

  let productList = document.getElementById("productList");
  productList.innerHTML = "";

  paginatedProducts.forEach((product) => {
    let listItem = document.createElement("li");
    listItem.textContent = `${product.name} - Giá: ${product.price}`;
    productList.appendChild(listItem);
  });
}

// Hàm hiển thị phân trang
function displayPagination() {
  let totalPages = Math.ceil(products.length / productsPerPage);
  let pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    let pageLink = document.createElement("span");
    pageLink.textContent = i;
    pageLink.onclick = function () {
      currentPage = i;
      displayProducts(currentPage);
    };
    pagination.appendChild(pageLink);
  }
}

// Hàm tìm kiếm sản phẩm
function search() {
  let searchTerm = document.getElementById("searchInput").value.toLowerCase();
  let filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm)
  );
  displayProducts(filteredProducts);
  displayPagination();
}

// Hàm sắp xếp sản phẩm
function sort() {
  let sortBy = document.getElementById("sortBy").value;
  if (sortBy === "name") {
    products.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "price") {
    products.sort((a, b) => a.price - b.price);
  }
  displayProducts(currentPage);
  displayPagination();
}

// Khởi chạy hiển thị sản phẩm và phân trang ban đầu
displayProducts(currentPage);
displayPagination();
