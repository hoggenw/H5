
 window.onload = function () {
    let bigImageView = document.getElementById("box");

    function changedBackGroudImage (elementID, imageName) {
        let imageView = document.getElementById(elementID);
        imageView.onmouseover = function () {
            bigImageView.style.backgroundImage = imageName;
            console.log(elementID);
        }

    }
     changedBackGroudImage("imageView01","url(../images/01big.jpg)");
     changedBackGroudImage("imageView02","url(../images/02big.jpg)");
     changedBackGroudImage("imageView03","url(../images/03big.jpg)");
     changedBackGroudImage("imageView04","url(../images/04big.jpg)");
     changedBackGroudImage("imageView05","url(../images/05big.jpg)");



};