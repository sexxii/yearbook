export async function useFormatImages(photos: { [key: string]: string }) {
  const formattedPhotos = [];
  for (const [k, src] of Object.entries(photos)) {
    const img = new Image();
    // let height, width;
    img.src = src;
    await img.decode();
    // img.onload = function () {
    //   console.log(this.width);
    //   (height = this.height), (width = this.width);
    // };
    console.log('about to push');
    formattedPhotos.push({
      src: src,
      width: img.width,
      height: img.height,
    });
  }

  return formattedPhotos;
}
