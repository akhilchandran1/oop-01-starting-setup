class Product {
    constructor(title, img, price, desc) {
        this.title = title;
        this.imageUrl = img;
        this.price = price;
        this.description = desc;
    }
}

class ProductItem {
    constructor(product) {
        this.product = product;
    }

    addToCart(){
        console.log('product addedd');
        console.log(this.product);
    }

    render () {
        const prodEl = document.createElement('li');
            prodEl.className = 'product-item';
            prodEl.innerHTML = `
            <div>
                <img src="${this.product.imageUrl}" alt="${this.product.title}">
                <div class="product-item__content">
                    <h2>${this.product.title}</h2>
                    <h3>\$${this.product.price}</h3>
                    <p>${this.product.description}</p>
                    <button>Add to cart</button>
                </div>
            </div>
            `;
            const addCartButton = prodEl.querySelector('button');
            addCartButton.addEventListener('click', this.addToCart.bind(this))
            return prodEl;
    }
}

class ProductList {
    products= [
        new Product(
            'Pillow', 
            'https://www.fatboy.com/assets/image/000/006/877/Fatboy_Pillow-square-velvet_deep-blush_800x800.jpg', 
            19.99, 
            'its a soft pillow'),
        new Product(
            'Carpet',
            'https://ii1.pepperfry.com/media/catalog/product/s/a/568x625/saral-home-soft-cotton-tufted-saggy-floor-carpet--90x150-cm-saral-home-soft-cotton-tufted-saggy-floo-ussxtk.jpg',
            199.99,
            'its a top selling model'
        )
        
    ];
    constructor() {}

    render(){
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';

        for (const prod of this.products) {
            const productItem = new ProductItem(prod);
            const prodEl = productItem.render();
            prodList.append(prodEl);
        }
        renderHook.append(prodList);
    }
}

const productList = new ProductList();
productList.render();
