let isDiscount = false;
let pageViews, price, discount, sliderPosition;
let html = document.querySelector(".container");
const userChoise = document.querySelector(".slider-bar");
const pageViewsHTML = document.querySelector(".pageview");
const priceHTML = document.querySelector(".price");
const toggleBtn = document.querySelector(".swich-bar");

//default value when page load

pageViews = "100k";
price = 12;
render();

userChoise.addEventListener("change", () => {
    sliderPosition = Number(userChoise.value);
    if(sliderPosition < 12.5) {
        pageViews = "10k";
        price = 8;
    } else if  ( sliderPosition  < 37.5) {
        pageViews = "50k";
        price = 12;
    } else if(sliderPosition < 62.5 ) {
        pageViews = "100k";
        price = 16;
    } else if(sliderPosition < 87.5) {
        pageViews = "500k";
        price = 24;
    } else {
        pageViews = "1M";
        price = 36;
    }
    render();
}
)

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle("toggle");
    isDiscount = !isDiscount;
    render();
});


function render () {
    sliderPosition = userChoise.value;
    userChoise.style=`background-image: linear-gradient(to right, var(--Cyan-soft), var(--Cyan-soft) ${sliderPosition}%, var(--Empty-sliderbar) ${sliderPosition}%, var(--Empty-sliderbar))`
    finalPrice = isDiscount ? (price*0.75).toFixed(2) : (price).toFixed(2);
    pageViewsHTML.innerHTML = `${pageViews} pageviews`;
    priceHTML.innerHTML= `<span>$${finalPrice}</span>/month`;
}


