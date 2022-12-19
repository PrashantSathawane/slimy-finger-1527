
let carousel_div = document.getElementById("carousel")
function carousel(){
    let images = [`https://static.thcdn.com/images/xlarge/webp/widgets/121-us/36/1130-STDCRE-44452-SS-MH-Q4-Photography-December-THG0035165-Batching-And-Artwork-P2-Shot-5-1180x450.jpeg-094936.jpg`,
    `https://static.thcdn.com/images/xlarge/webp/widgets/121-us/10/original-New_Project_%283%29-085610.jpg`,`https://static.thcdn.com/images/xlarge/webp/widgets/121-us/55/Shot6-1180x450-095455.jpeg`];

    let img = document.createElement("img");
    img.src=images[0]
    carousel_div.append(img);

    let i=1;
    setInterval(function() {
        if(i==images.length){
            i=0;
        }
        img.src=images[i];
        carousel_div.append(img)
        i++;
    }, 2000);
}
carousel()
