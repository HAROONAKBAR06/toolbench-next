export function loadImageFile(file) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => resolve({ img, url });
    img.onerror = reject;
    img.src = url;
  });
}

export function extFor(mime) {
  return mime === "image/png" ? "png" : mime === "image/webp" ? "webp" : "jpg";
}
