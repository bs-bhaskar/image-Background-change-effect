var imgBox=document.querySelector(".img-box");
var imgWrap=document.querySelector(".img-wrap");
var originalImg=document.getElementById("originalImg");
var line=document.getElementById("line");

originalImg.style.width=imgBox.offsetWidth+"px";//set width of image equal to container (alignment fix)

var leftSpace=imgBox.offsetLeft;//How much from left (to calculete mouse position)

imgBox.onmousemove=function(e){
    var boxWidth=(e.pageX-leftSpace)+"px";//calculate width on the basis of position of mouse
    imgWrap.style.width=boxWidth//change width of overlay → reveal effect
    line.style.left=boxWidth//to make sure sideline moves on same position
}