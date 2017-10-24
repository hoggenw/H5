


window.onload = function () {
    let topBannerClose = document.getElementById("topBananerClose");
    let top_Banner = document.getElementById("top_Banner");
    topBannerClose.onclick = function () {
        top_Banner.style.display = "none";
        console.log("删除成功");
    };
    let bannerImageView = document.getElementById("bannerImageView");
    let image1 = document.getElementById("image1");
    let image2 = document.getElementById("image2");
    let image3 = document.getElementById("image3");
    let image4 = document.getElementById("image4");
    let image5 = document.getElementById("image5");
    let image6 = document.getElementById("image6");
    image1.onmouseover = function () {
        image1.className = "currenCircle";
        bannerImageView.src = "images/11.jpg";
        console.log("images/11.jpg");
    };
    image2.onmouseover = function () {
        image2.className = "currenCircle";
        bannerImageView.src = "images/22.jpg";
        console.log("images/22.jpg");
    };
    image3.onmouseover = function () {
        image3.className = "currenCircle";
        bannerImageView.src = "images/33.jpg";
        console.log("images/33.jpg");
    };
    image4.onmouseover = function () {
        image4.className = "currenCircle";
        bannerImageView.src = "images/44.jpg";
        console.log("images/44.jpg");
    };
    image5.onmouseover = function () {
        image5.className = "currenCircle";
        bannerImageView.src = "images/55.jpg";
        console.log("images/55.jpg");
    };
    image6.onmouseover = function () {
        image6.className = "currenCircle";
        bannerImageView.src = "images/66.jpg";
        console.log("images/66.jpg");
    };
};