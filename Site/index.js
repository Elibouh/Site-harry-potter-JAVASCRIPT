let theme = document.querySelector("#theme");

theme.addEventListener("click", function () {
    let background = document.querySelector(".background");
    if (background.style.backgroundImage == 'url("./images/decorr.jpeg")') {
        background.style.backgroundImage = 'url("./images/lightmode.jpg")';
        theme.innerHTML = "Dark Mode";
    } else {
        background.style.backgroundImage = 'url("./images/decorr.jpeg")';
        theme.innerHTML = "Light Mode";
    }
})