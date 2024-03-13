var cards =document.getElementById("cardsdiv");

var pcimg = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v1._SY304_CB573698005_.jpg"
var watchimg = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg"
var toysimg = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v3._SY304_CB573698005_.jpg"
var gamesimg = "https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2023/img/Consumer_Electronics/XCM_CUTTLE_1546843_2940864_379x304_1X_en_US._SY304_CB613273467_.jpg"
var laptopimg = "https://images-na.ssl-images-amazon.com/images/G/01/us-manual-merchandising/RBS-in-house-Graphics/cc_359_laptop_us_v1._SY304_CB576754001_.jpg"
var careimg = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v10._SY304_CB573698005_.jpg"
var shoesimg = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v8._SY304_CB573698005_.jpg"
var giftsimg = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/Easter/Fuji_Easter_Dash_card_1x_EN._SY304_CB581341381_.jpg"

var cards = [
    {
        name:"PC",
        price:"$500",
        image:pcimg
    },
    {
        name:"SMART WATCH",
        price:"$200",
        image:watchimg
    },
    {
        name:"TOYS",
        price:"$200",
        image:toysimg
    },
    {
        name:"GAMES",
        price:"$100",
        image:gamesimg
    },
    {
        name:"LAPTOPS",
        price:"$400",
        image:laptopimg
    },
    {
        name:"CARE PRODUCTS",
        price:"$50",
        image:careimg
    },
    {
        name:"SHOES",
        price:"$150",
        image:shoesimg
    },
    {
        name:"GIFTS",
        price:"$200",
        image:giftsimg
    }
]






for (var count= 0; count < cards.length; count++) {
    cardsdiv.innerHTML +=`
    <div class="card">
        <img src="${cards[count].image}" width="100%" alt="">
        <h3>${cards[count].name}</h3>
        <p>${cards[count].price}</p>
        </div>
        `;
}