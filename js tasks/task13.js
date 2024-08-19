var proName = document.getElementById("proName");
var proPrice = document.getElementById("proPrice");
var proDesc = document.getElementById("proDesc");
var proCat = document.getElementById("proCat");
var proList = [];
var submit = document.getElementById("submit");
var mood = "add";
var index;

function addProduct() {
  var product = {
    name: proName.value.toLowerCase(),
    price: proPrice.value,
    description: proDesc.value,
    category: proCat.value.toLowerCase(),
  };

  if (mood === "add") {
    if (product.length > 0) {
      for (var i = 0; i < proList.length; i++) {
        proList.push(product);
      }
    } else {
      proList.push(product);
    }
  } else {
    proList[index] = product;
    mood = "add";
    submit.innerHTML = "Add Product";
  }

  displayProduct();
  clearProduct();
}

function displayProduct() {
  var productContain = "";
  for (var i = 0; i < proList.length; i++) {
    productContain += `<tr>
            <td>${proList[i].name}</td>
            <td>${proList[i].price}</td>
            <td>${proList[i].description}</td>
            <td>${proList[i].category}</td>
            <td>
                <button onclick="updateProduct(${i})" class="btn btn-outline-warning">Update</button>
                <button onclick="deleteProduct(${i})" class="btn btn-outline-danger">Delete</button>
            </td>
        </tr>`;
  }
  document.getElementById("tableBody").innerHTML = productContain;
}

function deleteProduct(i) {
  proList.splice(i, 1);
  displayProduct();
}

function updateProduct(i) {
  proName.value = proList[i].name;
  proPrice.value = proList[i].price;
  proDesc.value = proList[i].description;
  proCat.value = proList[i].category;
  submit.innerHTML = "Update";
  mood = "update";
  index = i;
}

function clearProduct() {
  proName.value = "";
  proPrice.value = "";
  proDesc.value = "";
  proCat.value = "";
  document.getElementById("search").value = "";
}

function searchProduct() {
  var productContain = "";
  var search = document.getElementById("search").value.toLowerCase();
  for (var i = 0; i < proList.length; i++) {
    if (
      proList[i].name.includes(search) ||
      proList[i].category.includes(search)
    ) {
      productContain += `
      <tr>
          <td>${proList[i].name}</td>
          <td>${proList[i].price}</td>
          <td>${proList[i].description}</td>
          <td>${proList[i].category}</td>
          <td>
              <button onclick="updateProduct(${i})" class="btn btn-outline-warning">Update</button>
              <button onclick="deleteProduct(${i})" class="btn btn-outline-danger">Delete</button>
          </td>
      </tr>
      `;
    }
  }
  if (searchProduct == "") {
    displayProduct();
  }
  document.getElementById("tableBody").innerHTML = productContain;
  clearProduct();
}
