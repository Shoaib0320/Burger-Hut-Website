document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burgerMenu');
    const navLinks = document.querySelector('.nav-links');

    burgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        burgerMenu.classList.toggle('toggle');
    });
});


let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.burger-slide');
    if (index >= slides.length) {
        currentSlide = 0;
    } 
    else if (index < 0) {
        currentSlide = slides.length - 1;
    }
    else {
        currentSlide = index;
    }

    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${(i - currentSlide) * 100}%)`;
    });
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});


//show-menu-btn

document.addEventListener('DOMContentLoaded', function() {
    const showMenuBtn = document.getElementById('show-menu-btn');
    const menu = document.getElementById('menu');

    showMenuBtn.addEventListener('click', function() {
        menu.classList.toggle('hidden');
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.cta-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Deal grabbed! Enjoy your special offer.');
        });
    });
});


// You can add interactivity if needed. For example, rotating testimonials every few seconds.
document.addEventListener('DOMContentLoaded', () => {
    const testimonials = document.querySelectorAll('.testimonial');
    let currentIndex = 0;

    function showNextTestimonial() {
        testimonials[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % testimonials.length;
        testimonials[currentIndex].classList.add('active');
    }

    setInterval(showNextTestimonial, 5000);
});


document.getElementById('get-directions').addEventListener('click', function() {
    window.open('https://www.google.com/maps/dir/?api=1&destination=123+Burger+Lane,+Food+Town,+FT+45678', '_blank');
});


// social-media


document.addEventListener('DOMContentLoaded', () => {
    const feed = document.getElementById('feed');

    const posts = [
        {
            username: 'BurgerLover123',
            profilePic: 'https://via.placeholder.com/50',
            content: 'Just had the best burger at Burger Hut!',
        },
        {
            username: 'FoodieQueen',
            profilePic: 'https://via.placeholder.com/50',
            content: 'The fries are to die for!',
        },
        {
            username: 'HungryGuy',
            profilePic: 'https://via.placeholder.com/50',
            content: 'Can’t get enough of these delicious burgers!',
        },
    ];

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        const profilePic = document.createElement('img');
        profilePic.src = post.profilePic;
        postElement.appendChild(profilePic);

        const postContent = document.createElement('div');
        postContent.classList.add('post-content');

        const username = document.createElement('h3');
        username.textContent = post.username;
        postContent.appendChild(username);

        const content = document.createElement('p');
        content.textContent = post.content;
        postContent.appendChild(content);

        postElement.appendChild(postContent);

        feed.appendChild(postElement);
    });
});

// New-Sletter

document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.getElementById('newsletter-form');
    newsletterForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const emailInput = document.getElementById('email');
        const email = emailInput.value.trim();
        if (isValidEmail(email)) {
            // Simulate newsletter subscription (replace with actual backend code)
            console.log('Subscribed with email:', email);
            alert('Thank you for subscribing!');
            // Clear input field
            emailInput.value = '';
        } else {
            alert('Please enter a valid email address.');
        }
    });
});

function isValidEmail(email) {
    // Basic email validation using regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}




// Navbar js


    const burgerMenu = document.getElementById('burgerMenu');
    const navLinks = document.querySelector('.nav-links');

    burgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });


// order-Now-button-js
// script.js
function orderNow(button) {
    const card = button.closest('.card');
    const imgSrc = card.querySelector('.card-img-top').src;
    const title = card.querySelector('.card-title').textContent;
    const price = card.querySelector('.card-text-price').dataset.price;

    localStorage.setItem('orderImgSrc', imgSrc);
    localStorage.setItem('orderTitle', title);
    localStorage.setItem('orderPrice', price);

    window.location.href = 'order.html';
}
