fetch('http://localhost:8080/products')
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(data => {
        let name = data.name;
        let price = data.price; 
        
        document.getElementById('product-name').innerHTML = name;
        document.getElementById('product-price').innerHTML = price;
});