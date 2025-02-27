const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuKartIcon = document.querySelector('.navbar-shopping-cart');
const closeDetailAsideIcon = document.querySelector('.product-detail-close');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppinKartContainer = document.querySelector('#shoppingKartContainer');
const productDetailAside = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuKartIcon.addEventListener('click', toggleshoppinKartContainer);
closeDetailAsideIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu(){
    productDetailAside.classList.add('inactive')
    shoppinKartContainer.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    productDetailAside.classList.add('inactive')
    shoppinKartContainer.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

function toggleshoppinKartContainer(){
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    productDetailAside.classList.add('inactive');
    shoppinKartContainer.classList.toggle('inactive');
}

function toggleProductDetailAside(){
    productDetailAside.classList.toggle('inactive');
    shoppinKartContainer.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
   
}
    

function closeProductDetailAside(){
    productDetailAside.classList.add('inactive');
}


const productList= [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Monitor',
    price: 320,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Computer',
    price: 1200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function renderProducts(arr){
   
    for (product of productList){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');



        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', toggleProductDetailAside);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price

        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');
        const productImgKart = document.createElement('img');
        productImgKart.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgKart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        
        cardsContainer.appendChild(productCard);    
        }
}
renderProducts(productList);