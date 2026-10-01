const images = document.querySelectorAll(".small-image");
const displayImage = document.querySelector("#display-image");
const displayBox = document.querySelector(".display-box");

images.forEach(function(image) {

    // When the image is being dragged
    image.addEventListener("drag", function() {

        const imageSrc = image.src;

        displayImage.src = imageSrc;

        // Change the large box while dragging
        displayBox.style.border = "4px solid #FFF2DB";
        displayBox.style.backgroundColor = "#FDD8CC";
    });

    // When the dragging ends
    image.addEventListener("dragend", function() {

        // Restore the original appearance
        displayBox.style.border = "3px dashed #555";
        displayBox.style.backgroundColor = "#F8E4C4";
    });

});