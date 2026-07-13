function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// 1. Find the button element by its ID
const button = document.getElementById("myButton");

// 2. Listen for the user to click the button
button.addEventListener("click", function() {
    // 3. Change the page URL to the link
    window.location.href = "https://hundred.org/en/articles/these-youth-led-social-impact-projects-will-inspire-you#:~:text=6)%20Likha%E2%80%99s%20Cradle%20%2D%20Aunnaire%2C%2015%2C%20Philippines";
});