/* Name this external file gallery.js */

function upDate(previewPic) {
    console.log("Event triggered on mouseover.");

    // Log previewPic details for verification
    console.log("Source:", previewPic.src);
    console.log("Alt text:", previewPic.alt);

    // Change background image of #image to previewPic's src
    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = `url(${previewPic.src})`;

    // Update the text of #image to previewPic's alt text
    imageDiv.innerText = previewPic.alt;
}

function unDo() {
    console.log("Event triggered on mouseout.");

    // Revert background image and text to the original state
    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerText = "Hover over an image below to display here.";
}
