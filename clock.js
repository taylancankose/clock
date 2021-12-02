let brand = document.querySelector('#brand')
brand.innerHTML = `KODLUYORUZ`
let user = prompt("Adınız")
let info = document.querySelector("#info")

if (user !=null){
	info.innerHTML = `Merhaba, ${user}!  Hoş geldin!`
} else {
	info.innerHTML = `Merhaba, gizemli kişi!  Hoş geldin!`
}

function renderTime(){
	var currentTime = new Date();
	var h = currentTime.getHours();
	var m = currentTime.getMinutes();
	var s = currentTime.getSeconds();
	var dd = currentTime.getDate();
    var mm = currentTime.getMonth() + 1; //January is 0!
    var yyyy = currentTime.getFullYear();

	if(h < 10){
		h = "0" + h;
	}
	if(m < 10){
		m = "0" + m;
	}
	if(s < 10){
		s = "0" + s;
	}
	var myClock = document.getElementById('clockDisplay');
	myClock.textContent = h + ":" + m + ":" + s + " " + mm + "/" + dd + "/" + yyyy;
	setTimeout('renderTime()', 1000); 
}
renderTime();

let text = document.querySelector("#text")
text.innerHTML = `tarihinde <strong> Kodluyoruz Fronted Web Development Patikası </strong>'nın Javascript bölümü 1. Ödevindesiniz :)` 
