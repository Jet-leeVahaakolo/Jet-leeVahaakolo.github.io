function changeColor(){
	console.log('hi');
	const aboutElement=document.getElementsByClassName("about")[0];
var randomColor = Math.floor(Math.random()*16777215).toString(16);
	console.log(randomColor);
aboutElement.style.color = '#' + randomColor;

}