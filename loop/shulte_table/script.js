var genArr = [];
var elements = document.getElementsByClassName("item");


function numbersFilling(){
	for(var i = 1; i <= 25; i++){
		genArr.push(i);
	}
}

function randomizeArr(){
	var _tmp = [];
	while(genArr.length > 0){
		_tmp.push(   genArr.splice(getRnd(genArr.length)-1, 1)[0]  );
	}
	genArr = _tmp;
}

function fillArr(){
	
	for(var i = 0; i < elements.length; i++){
		elements[i].innerHTML = genArr[i];
	}
	
}

numbersFilling();
randomizeArr();
fillArr();

function getRnd(max){
	return Math.ceil(Math.random()*max);
}