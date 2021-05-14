var btnBasic = document.querySelector(".basic");
var btnMiddle = document.querySelector(".middle");
var btnHard = document.querySelector(".hard");
var showing = true;


///div.classList.toggle("visible",

btnBasic.addEventListener('click', setBasic);
btnMiddle.addEventListener('click', setMiddle);
btnHard.addEventListener('click', setHard);

var basicall = document.querySelectorAll('[data-level="basic"]');
	var middleall = document.querySelectorAll('[data-level="middle"]');
		var hardall = document.querySelectorAll('[data-level="hard"]');



function setBasic()
{
	for(let i=0; i<basicall.length; i++){
	basicall[i].classList.toggle("showing");
}

}

function setMiddle()
{
	for(let i=0; i<middleall.length; i++){
	middleall[i].classList.toggle("showing");
}

for(let i=0; i<basicall.length; i++){
	basicall[i].classList.toggle("showing");
}

}

function setHard()
{

		for(let i=0; i<middleall.length; i++){
	middleall[i].classList.toggle("showing");
}

for(let i=0; i<basicall.length; i++){
	basicall[i].classList.toggle("showing");
}



for(let i=0; i<hardall.length; i++)
	{
	hardall[i].classList.toggle("showing");


	}
}

