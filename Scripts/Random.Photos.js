var image = document.querySelector(".image-container");
var button = document.querySelector(".btn");
button.addEventListener("click", () => {
    imageNum = 10;
    AddImage();
    

});
function AddImage() {
    for (let index = 0; index < imageNum; index++) {
        var NewImage = document.createElement("img");
        NewImage.src = `https://picsum.photos/300/300?random=${Math.floor(Math.random() * 2000)}`;
        image.appendChild(NewImage);
    }

}