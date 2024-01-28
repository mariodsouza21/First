
const rotate = document.getElementById('rotating-image');

let rotation = 0;

function rotateImage() {
  rotation += 360; 
  rotate.style.transform = `rotate(${rotation}deg)`;
}


window.onload = function() {
  rotateImage();
  rotateImage();
  rotateImage();
  rotateImage();
  rotateImage();
};
