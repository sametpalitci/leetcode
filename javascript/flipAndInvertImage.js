const flipAndInvertImage = (image) => {
    for (let i = 0; i < image.length; i++) {
        image[i] = image[i].reverse();
        for (let a = 0; a < image[i].length; a++) {
            image[i][a] === 0 ? image[i][a] = 1 : image[i][a] = 0;

        }
    }
    return image;
};

flipAndInvertImage([
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0]
])