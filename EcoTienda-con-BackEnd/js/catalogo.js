//! ARRAY MASTER
const PRODUCTOSLISTA = [];

//! LLAMADA A API
const callApi = async () => {
    const res = await fetch('https://hernanbula.pythonanywhere.com/productos');
    const data = await res.json();

    for (let el of data) {
        PRODUCTOSLISTA.push(el);
    }
};
callApi();

//! INICIO DE LISTA + SPINNER
let spinner = document.querySelector('#spinner');
setTimeout(() => {
    spinner.remove();
    mostrarProductos(PRODUCTOSLISTA);
}, 2000);

//!MOSTRAR PRODUCTOS
const mostrarProductos = (array) => {
    let grid = document.querySelector('#gridCards');
    grid.innerHTML = ``;

    for (let el of array) {
        let newCard = document.createElement('div');
        newCard.classList = 'productCard';
        newCard.innerHTML = ``;
        newCard.innerHTML = `
    
                    <h3 class="productTitle">${el.nombre}</h3>
                    <img class="productImg" src="${el.imagen}" alt="Producto">
                    <p class="productDescription">${el.descripcion}</p>
                    <p class="productId" id="codigo"> Codigo producto: ${el.id}</p>
                    <p class="productStock">Stock disponible: ${el.stock}</p>
                    <span class="productPrice">$${el.precio}</span>
                    <br>
                    <div style="text-align: center">
                    <form action="">
                    <label for="catidad">Cantidad a comprar</label>
                    <input type="number" name="cantidad" id="cantidad" style="width: 40%">
                    <button class="productBtn" v-on:click="comprar()">Comprar</button>
                    </form>
                    </div>
                </div>
    
        
        `;
        grid.appendChild(newCard);
    }
};

//!ORDENAR POR PRECIO

const orderByPrice = (array) => {
    const newArray = [...array];
    newArray.sort((a, b) => {
        return a.precio - b.precio;
    });
    mostrarProductos(newArray);
    /* return newArray; */
};

//!ORDENAR POR NOMBRE

const orderByName = (array) => {
    const newArray = [...array];
    newArray.sort((a, b) => {
        if (a.nombre < b.nombre) {
            return -1;
        }
        if (a.nombre > b.nombre) {
            return 1;
        }
        return 0;
    });
    mostrarProductos(newArray);
};

//! FILTRAR POR NOMBRE

const searchByName = (array) => {
    const productToSearch = document.querySelector('#productInput').value;
    const newArray = [...array];
    const result = newArray.filter((el) => {
        return el.nombre.toLowerCase() === productToSearch.toLowerCase();
    });
    if(result.length === 0){
        mostrarProductos(PRODUCTOSLISTA)
    }
    else{

        mostrarProductos(result);
    }
};

//!EVENTOS
const btnPrice = document.querySelector('#btnPrice');
btnPrice.addEventListener('click', () => {
    orderByPrice(PRODUCTOSLISTA);
});

const btnNombre = document.querySelector('#btnNombre');
btnNombre.addEventListener('click', () => {
    orderByName(PRODUCTOSLISTA);
});

const btnSearchByName = document.querySelector('#btnSearchByName');
btnSearchByName.addEventListener('click', () => {
    searchByName(PRODUCTOSLISTA);
});
