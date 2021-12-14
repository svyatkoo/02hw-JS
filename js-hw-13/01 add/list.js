let wrap = document.createElement("div");
wrap.classList.add("wrap");

for (const product of JSON.parse(localStorage.getItem("favoriteProducts"))) {
    let productContainer = document.createElement("div");
    productContainer.classList.add("productContainer");
    let headerBottom = document.createElement("div");
    headerBottom.classList.add("headerBottom");

    let photo = document.createElement("img");
    let btnRemoveProductFromTrash = document.createElement("button");
    btnRemoveProductFromTrash.innerHTML = "Remove product";
    btnRemoveProductFromTrash.onclick = (e) => {
        let productsArr = JSON.parse(localStorage.getItem("favoriteProducts")).filter(item => item.id !== product.id);
        localStorage.setItem("favoriteProducts", JSON.stringify(productsArr));
        window.location = window.location.href;
    }
    for (const productKey in product) {
        productContainer.innerHTML = `
            <h4>Product name: ${product.name}</h4>
        `;
        headerBottom.innerHTML = `
            <p>Quantity: ${product.quantity}</p>
            <p>Price: ${product.price}</p>
        `;
        photo.src = `${product.photo}`;
    }


    productContainer.append(headerBottom, photo, btnRemoveProductFromTrash);
    wrap.append(productContainer);


    // console.log(product);
}


document.body.append(wrap);