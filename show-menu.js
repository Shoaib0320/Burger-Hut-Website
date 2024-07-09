// Array of Objects
var carsData = [
    { 
      name: 'Beef Burger',
      price: '4500', 
      image: 'https://img.lovepik.com/photo/48013/3318.jpg_wh860.jpg' 
    },
    { 
      name: 'Chicken Burger',
      price: '400', 
      image: 'https://st2.depositphotos.com/1031681/5683/i/450/depositphotos_56835631-stock-photo-hamburger-with-cutlet-breaded.jpg'
    },
    { 
      name: 'Zinger Burger', 
      price: '500', 
      image: 'https://static.vecteezy.com/system/resources/thumbnails/035/996/102/small_2x/ai-generated-delicious-beef-burger-with-melted-cheese-ai-generative-photo.jpg' 
    },
    { 
     name: 'Double Zinger Burger', 
     price: '800', 
     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWOVXHDGr7VrbGnbyn54TtffFvwsrBgnu4DA&s' 
    },
    { 
        name: 'Zinger Roll', 
        price: '340', 
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh_kQC6QRKXiilm_tt5In1eqaOuzEdfiDZQw&s' 
    },
    { 
        name: 'Grilled Chiken Burger', 
        price: '800', 
        image: 'https://c8.alamy.com/comp/E4HTCE/burger-with-grilled-chicken-E4HTCE.jpg' 
    },
    { 
        name: 'Chicken Cheese Burger', 
        price: '700', 
        image: 'https://t3.ftcdn.net/jpg/00/40/24/60/360_F_40246031_zWZoDrKKr4jusGNtSpKV7Zvy9VdeIi88.jpg' 
    },
   
];

// Function to show cars
function showmenu() {
    var menuContainer = document.getElementById('menuContainer');
    menuContainer.innerHTML = '';

    carsData.forEach(menu => {
        var menuCard = document.createElement('div');
        menuCard.classList.add('menu-card');

        var menuImage = document.createElement('img');
        menuImage.src = menu.image;
        menuImage.alt = menu.name;

        var details = document.createElement('div');
        details.classList.add('details');
        details.innerHTML = `
            <h3>${menu.name}</h3>
            <p>Price: ${menu.price}</p>
            <button id="addtocart"> Order Now </button>
        `;

        menuCard.appendChild(menuImage);
        menuCard.appendChild(details);
        menuContainer.appendChild(menuCard);
    });
}

// Show cars when button is clicked
document.getElementById('showMenuBtn').addEventListener('click', showmenu);
