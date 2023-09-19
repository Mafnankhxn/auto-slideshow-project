//defining all the images 
const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
]
//taking default index as 0 so the first images will be showed when the user comes to website.
 let currentindex = 0;
const slideshow = document.getElementById('slides');
//this function will change images 
function changeimages() {
    slideshow.src = images[currentindex];//defining that images will be from images array and its index will be zero
    console.log(slideshow.src)

    currentindex = (currentindex + 1)% images.length;//incrementing index so that images will change in a cycle


}
setInterval(changeimages, 3000) // defining set interval function and the time of image to change
console.log(setInterval)
//in this way a slideshow of images can be created.