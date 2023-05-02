function enlargeImage(imageSrc) {
    // Set the source of the enlarged image
    document.getElementById('enlargedImage').src = imageSrc;

    // Show the enlarged image container
    document.getElementById('enlargedImageContainer').style.display = 'block';
}

function closeEnlargedImage() {
    // Hide the enlarged image container
    document.getElementById('enlargedImageContainer').style.display = 'none';
}