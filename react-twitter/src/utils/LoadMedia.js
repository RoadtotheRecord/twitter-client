export const LoadImage = (resultUrl) => {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => resolve(image);
        image.onerror = (e) => reject(e);
        image.src = resultUrl;
    });
}

export const LoadVideo = (resultUrl) => {
    return new Promise((resolve, reject) => {
        const video = document.createElement('video');
        video.onloadedmetadata = () => resolve(video);
        video.onerror = (e) => reject(e);
        video.src = resultUrl;
    });
}