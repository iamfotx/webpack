function makeImage(url, width = '100', height = '100') {
    const image = document.createElement('img');
    image.src = url;
    image.height = height;
    image.width = width;
    return image;
}

export default makeImage;
