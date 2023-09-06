fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then((data) => {
        for (i = 0; i < data["products"].length; i++) {
            temp = document.createElement("div")
            temp.className = 'results'
            temp.innerHTML = '<div class="card">' +
                '<div class="imgBox">' +
                '<img src="' + data["products"][i]["images"][0] + '"alt="mouse corsair" class="mouse">'
                + '</div>' +
                '<div class="contentBox">' +
                '<h3>' + data["products"][i]["title"] + '</h3>' +
                '<h2 class="price">' + data["products"][i]["price"] + '.<small> ' + data["products"][i]["id"] + '</small> $ </h2>'
                + '<a href="#" class="buy">Buy Now</a>' +
                '</div>'
            document.getElementsByClassName('container')[0].appendChild(temp)
        }
    });
