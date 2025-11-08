function loadImage(url) {
    return new Promise((resolve, reject) => {
        let img = new Image;
        img.onload = () => {
            resolve(img)
        }
        img.onerror = (error) => {
            reject(error)
        }
    })
}

loadImage("xxxxx").then((img) => {
    console.log('图片加载成功', img);
}).catch(error => {
    console.log(error, '图片加载失败');
})