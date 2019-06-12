	var all = document.querySelectorAll(".click-me");
	var newall= Array.from(all);
	var comp=[];
	var winner=0;

					
	newall.map(function(element){
		element.addEventListener('click',function(){
			element.style.visibility="hidden";
			comp.push(element);
			if(comp.length==2){
				if(comp[0].parentElement.getAttribute('class')===comp[1].parentElement.getAttribute('class')){
					setTimeout(function(){
						comp[0].parentElement.style.visibility="hidden";
						comp[1].parentElement.style.visibility="hidden";

						comp=[];
						winner+=2;
						if(winner==12){
							winnerFun();
						}
					},500)

				}
				else{
					setTimeout(function(){
					comp[0].style.visibility="visible";
					comp[1].style.visibility="visible";
					comp=[];
					},500);
				}
			}
		});
	});

setTimeout(function(){
	if (window.winner !== 12) {
		document.getElementById("Time").style.visibility='hidden';
		var audio = new Audio('Sound-Tracks/Crying.mp3');
		audio.oncanplaythrough = function (){
			audio.play();
		};
	}
},20000);


// audio.oncanplaythrough = function (){
// 	audio.play().then(response => {
// 		console.log(response)
// 	}).catch(e => {
// 		alert("Time Out");
// 	})
// };

function winnerFun() {
	document.getElementsByClassName("container")[0].innerHTML="<img src='Images/Fire-Works.gif' style='margin-left: 210px; width: 980px; height: 650px;'>";
	var audio1 = new Audio('Sound-Tracks/Clapping.mp3');
	audio1.oncanplaythrough = function (){
		audio1.play();
	};
}
