// Get element from HTML
let myImg = document.getElementById('slide-show')

let myArr = [
  'imgs/img (1).jpg',
  'imgs/img (2).jpg',
  'imgs/img (3).jpg',
  'imgs/img (4).jpg',
  "imgs/img (6).png",
]


let i = 0
function slideShow() {
  
  if (i == myArr.length) {
    i = 0;
  } else {
    myImg.setAttribute("src", myArr[i]);
    i++;
  }

  setTimeout(function(){
    slideShow();
  }, 3000);
}
slideShow()

