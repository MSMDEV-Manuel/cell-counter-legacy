function loadSetts(){
	var savtotal = localStorage.msmdev_cellcounter_total;
	var savnum1 = localStorage.msmdev_cellcounter_num1;
	var savnum2 = localStorage.msmdev_cellcounter_num2;
	var savnum3 = localStorage.msmdev_cellcounter_num3;
	var savnum4 = localStorage.msmdev_cellcounter_num4;
	var savnum5 = localStorage.msmdev_cellcounter_num5;
	var savnum6 = localStorage.msmdev_cellcounter_num6;
	var savnum7 = localStorage.msmdev_cellcounter_num7;
	var savnum8 = localStorage.msmdev_cellcounter_num8;
	var savnum9 = localStorage.msmdev_cellcounter_num9;
	var savsplash = localStorage.msmdev_cellcounter_splash;
	var zoom = localStorage.msmdev_cellcounter_zoom;
	document.getElementById('splash').style.display = savsplash;
	document.getElementById('total').innerHTML = savtotal;
	document.getElementById('nn1').innerHTML = savnum1;
	document.getElementById('nn2').innerHTML = savnum2;
	document.getElementById('nn3').innerHTML = savnum3;
	document.getElementById('nn4').innerHTML = savnum4;
	document.getElementById('nn5').innerHTML = savnum5;
	document.getElementById('nn6').innerHTML = savnum6;
	document.getElementById('nn7').innerHTML = savnum7;
	document.getElementById('nn8').innerHTML = savnum8;
	document.getElementById('nn9').innerHTML = savnum9;
	document.body.style.zoom = zoom;
	document.getElementById('iran').value = zoom;
	evalCero();
	evalCien();
	loadModeColor();
}

function startCounter(){
  var lzoom = localStorage.msmdev_cellcounter_zoom;
  if(typeof(Storage) !== "undefined"){
    if(localStorage.msmdev_cellcounter_zoom){
      localStorage.msmdev_cellcounter_zoom = lzoom;
    } else{
      localStorage.msmdev_cellcounter_total = '0';
      localStorage.msmdev_cellcounter_num1 = '0';
      localStorage.msmdev_cellcounter_num2 = '0';
      localStorage.msmdev_cellcounter_num3 = '0';
      localStorage.msmdev_cellcounter_num4 = '0';
      localStorage.msmdev_cellcounter_num5 = '0';
      localStorage.msmdev_cellcounter_num6 = '0';
      localStorage.msmdev_cellcounter_num7 = '0';
      localStorage.msmdev_cellcounter_num8 = '0';
      localStorage.msmdev_cellcounter_num9 = '0';
      localStorage.msmdev_cellcounter_splash = 'none';
	  localStorage.msmdev_cellcounter_mcolor = 'a';
	  localStorage.msmdev_cellcounter_zoom = '1';
      window.location.reload();
    }
  } else{
    
  }
}

function setSize() {
	if (screen.width > screen.height) {
		var sizebox = document.getElementById('box1').clientWidth;
		document.getElementById('box1').style.height = sizebox;
		document.getElementById('box2').style.height = sizebox;
		document.getElementById('box3').style.height = sizebox;
		document.getElementById('box4').style.height = sizebox;
		document.getElementById('box5').style.height = sizebox;
		document.getElementById('box6').style.height = sizebox;
		document.getElementById('box7').style.height = sizebox;
		document.getElementById('box8').style.height = sizebox;
		document.getElementById('box9').style.height = sizebox;
		var nsizebox = parseFloat(sizebox);
		document.getElementById('box4').style.top = '25px';
		document.getElementById('box5').style.top = '25px';
		document.getElementById('box6').style.top = '25px';
		document.getElementById('box1').style.top = nsizebox+50 +'px';
		document.getElementById('box2').style.top = nsizebox+50 +'px';
		document.getElementById('box3').style.top = nsizebox+50 +'px';
		var sizebox2 = document.getElementById('box2').clientHeight;
		var topbox2 = document.getElementById('box2').style.top;
		var sizeb = parseFloat(sizebox2);
		var topb = parseFloat(topbox2);
		document.getElementById('dv-help').style.top = sizeb +topb +'px';
	} else {
		var sizebox = document.getElementById('box1').clientWidth;
		document.getElementById('box1').style.height = sizebox;
		document.getElementById('box2').style.height = sizebox;
		document.getElementById('box3').style.height = sizebox;
		document.getElementById('box4').style.height = sizebox;
		document.getElementById('box5').style.height = sizebox;
		document.getElementById('box6').style.height = sizebox;
		document.getElementById('box7').style.height = sizebox;
		document.getElementById('box8').style.height = sizebox;
		document.getElementById('box9').style.height = sizebox;
		var nsizebox = parseFloat(sizebox);
		document.getElementById('box4').style.top = nsizebox+50 +'px';
		document.getElementById('box5').style.top = nsizebox+50 +'px';
		document.getElementById('box6').style.top = nsizebox+50 +'px';
		document.getElementById('box1').style.top = 2*nsizebox+75 +'px';
		document.getElementById('box2').style.top = 2*nsizebox+75 +'px';
		document.getElementById('box3').style.top = 2*nsizebox+75 +'px';
		var sizebox2 = document.getElementById('box2').clientHeight;
		var topbox2 = document.getElementById('box2').style.top;
		var sizeb = parseFloat(sizebox2);
		var topb = parseFloat(topbox2);
		document.getElementById('dv-help').style.top = sizeb +topb +'px';
	}
}

function openMenu(){
	document.getElementById('fade').style.background = 'rgba(0, 0, 0, 0)';
	document.getElementById('menu').style.transform = 'scale(1)';
	document.getElementById('fade').style.display = 'block';
}

function hideMenu(){
	var alerta = document.getElementById('alerta').style.display;
	var mostr = 'block';
	if (alerta == mostr) {
		
	} else {
		document.getElementById('fade').style.background = 'rgba(0, 0, 0, 0.5)';
		document.getElementById('menu').style.transform = 'scale(0)';
		document.getElementById('fade').style.display = 'none';
	}
}

function loadModeColor(){
	var modecolor = localStorage.msmdev_cellcounter_mcolor;
	switch (modecolor) {
		case 'a':
			var x = document.getElementById('rd-light');
			changeColor(x);
			document.getElementById("rd-light").checked = true;
			document.getElementById("rd-dark").checked = false;
			document.getElementById("rd-colorful").checked = false;
		break;
		case 'b':
			var x = document.getElementById('rd-dark');
			changeColor(x);
			document.getElementById("rd-light").checked = false;
			document.getElementById("rd-dark").checked = true;
			document.getElementById("rd-colorful").checked = false;
		break;
		case 'c':
			var x = document.getElementById('r-pink');
			changeColor(x);
			document.getElementById('list-colors').value = 'pink';
			document.getElementById('list-colors').style.display = 'block';
			document.getElementById("rd-light").checked = false;
			document.getElementById("rd-dark").checked = false;
			document.getElementById("rd-colorful").checked = true;
		break;
		case 'd':
			var x = document.getElementById('r-blue');
			changeColor(x);
			document.getElementById('list-colors').value = 'blue';
			document.getElementById('list-colors').style.display = 'block';
			document.getElementById("rd-light").checked = false;
			document.getElementById("rd-dark").checked = false;
			document.getElementById("rd-colorful").checked = true;
		break;
		case 'e':
			var x = document.getElementById('r-purple');
			changeColor(x);
			document.getElementById('list-colors').value = 'purple';
			document.getElementById('list-colors').style.display = 'block';
			document.getElementById("rd-light").checked = false;
			document.getElementById("rd-dark").checked = false;
			document.getElementById("rd-colorful").checked = true;
		break;
		case 'f':
			var x = document.getElementById('r-yellow');
			changeColor(x);
			document.getElementById('list-colors').value = 'yellow';
			document.getElementById('list-colors').style.display = 'block';
			document.getElementById("rd-light").checked = false;
			document.getElementById("rd-dark").checked = false;
			document.getElementById("rd-colorful").checked = true;
		break;
		case 'g':
			var x = document.getElementById('r-orange');
			changeColor(x);
			document.getElementById('list-colors').value = 'orange';
			document.getElementById('list-colors').style.display = 'block';
			document.getElementById("rd-light").checked = false;
			document.getElementById("rd-dark").checked = false;
			document.getElementById("rd-colorful").checked = true;
		break;
		case 'h':
			var x = document.getElementById('r-red');
			changeColor(x);
			document.getElementById('list-colors').value = 'red';
			document.getElementById('list-colors').style.display = 'block';
			document.getElementById("rd-light").checked = false;
			document.getElementById("rd-dark").checked = false;
			document.getElementById("rd-colorful").checked = true;
		break;
		case 'i':
			var x = document.getElementById('r-green');
			changeColor(x);
			document.getElementById('list-colors').value = 'green';
			document.getElementById('list-colors').style.display = 'block';
			document.getElementById("rd-light").checked = false;
			document.getElementById("rd-dark").checked = false;
			document.getElementById("rd-colorful").checked = true;
		break;
		default:
			var x = document.getElementById('rd-light');
			changeColor(x);
			document.getElementById("rd-light").checked = true;
			document.getElementById("rd-dark").checked = false;
			document.getElementById("rd-colorful").checked = false;
		break;
	}
}

function crecalc() {
	var xtotal = document.getElementById('total').innerHTML;
	var xntotal = parseFloat(xtotal);
	document.getElementById('ntotal').innerHTML = xtotal;
	var nn7 = document.getElementById('nn7').innerHTML;
	var nnn7 = parseFloat(nn7);
	document.getElementById('nbas').innerHTML = nn7;
	var nn8 = document.getElementById('nn8').innerHTML;
	var nnn8 = parseFloat(nn8);
	document.getElementById('neos').innerHTML = nn8;
	var nn9 = document.getElementById('nn9').innerHTML;
	var nnn9 = parseFloat(nn9);
	document.getElementById('nban').innerHTML = nn9;
	var nn4 = document.getElementById('nn4').innerHTML;
	var nnn4 = parseFloat(nn4);
	document.getElementById('nseg').innerHTML = nn4;
	var nn5 = document.getElementById('nn5').innerHTML;
	var nnn5 = parseFloat(nn5);
	document.getElementById('nlin').innerHTML = nn5;
	var nn6 = document.getElementById('nn6').innerHTML;
	var nnn6 = parseFloat(nn6);
	document.getElementById('nmon').innerHTML = nn6;
	var nn1 = document.getElementById('nn1').innerHTML;
	var nnn1 = parseFloat(nn1);
	document.getElementById('neri').innerHTML = nn1;
	var nn2 = document.getElementById('nn2').innerHTML;
	var nnn2 = parseFloat(nn2);
	document.getElementById('not1').innerHTML = nn2;
	var nn3 = document.getElementById('nn3').innerHTML;
	var nnn3 = parseFloat(nn3);
	document.getElementById('not2').innerHTML = nn3;
	
	var cal7 = nnn7*100/xntotal;
	var porce7 = Math.round((cal7 + Number.EPSILON) * 100) / 100;
	document.getElementById('perbas').innerHTML = porce7;
	var cal8 = nnn8*100/xntotal;
	var porce8 = Math.round((cal8 + Number.EPSILON) * 100) / 100;
	document.getElementById('pereos').innerHTML = porce8;
	var cal9 = nnn9*100/xntotal;
	var porce9 = Math.round((cal9 + Number.EPSILON) * 100) / 100;
	document.getElementById('perban').innerHTML = porce9;
	var cal4 = nnn4*100/xntotal;
	var porce4 = Math.round((cal4 + Number.EPSILON) * 100) / 100;
	document.getElementById('perseg').innerHTML = porce4;
	var cal5 = nnn5*100/xntotal;
	var porce5 = Math.round((cal5 + Number.EPSILON) * 100) / 100;
	document.getElementById('perlin').innerHTML = porce5;
	var cal6 = nnn6*100/xntotal;
	var porce6 = Math.round((cal6 + Number.EPSILON) * 100) / 100;
	document.getElementById('permon').innerHTML = porce6;
	var cal1 = nnn1*100/xntotal;
	var porce1 = Math.round((cal1 + Number.EPSILON) * 100) / 100;
	document.getElementById('pereri').innerHTML = porce1;
	var cal2 = nnn2*100/xntotal;
	var porce2 = Math.round((cal2 + Number.EPSILON) * 100) / 100;
	document.getElementById('perot1').innerHTML = porce2;
	var cal3 = nnn3*100/xntotal;
	var porce3 = Math.round((cal3 + Number.EPSILON) * 100) / 100;
	document.getElementById('perot2').innerHTML = porce3;
}

function evalCero(){
	var xtotal = document.getElementById('total').innerHTML;
	var xntotal = parseFloat(xtotal);
	if (xntotal == 0) {
		delTable();
	} else {
		document.getElementById('ntotal').innerHTML = xtotal;
		var nn7 = document.getElementById('nn7').innerHTML;
		var nnn7 = parseFloat(nn7);
		document.getElementById('nbas').innerHTML = nn7;
		var nn8 = document.getElementById('nn8').innerHTML;
		var nnn8 = parseFloat(nn8);
		document.getElementById('neos').innerHTML = nn8;
		var nn9 = document.getElementById('nn9').innerHTML;
		var nnn9 = parseFloat(nn9);
		document.getElementById('nban').innerHTML = nn9;
		var nn4 = document.getElementById('nn4').innerHTML;
		var nnn4 = parseFloat(nn4);
		document.getElementById('nseg').innerHTML = nn4;
		var nn5 = document.getElementById('nn5').innerHTML;
		var nnn5 = parseFloat(nn5);
		document.getElementById('nlin').innerHTML = nn5;
		var nn6 = document.getElementById('nn6').innerHTML;
		var nnn6 = parseFloat(nn6);
		document.getElementById('nmon').innerHTML = nn6;
		var nn1 = document.getElementById('nn1').innerHTML;
		var nnn1 = parseFloat(nn1);
		document.getElementById('neri').innerHTML = nn1;
		var nn2 = document.getElementById('nn2').innerHTML;
		var nnn2 = parseFloat(nn2);
		document.getElementById('not1').innerHTML = nn2;
		var nn3 = document.getElementById('nn3').innerHTML;
		var nnn3 = parseFloat(nn3);
		document.getElementById('not2').innerHTML = nn3;

		var cal7 = nnn7*100/xntotal;
		var porce7 = Math.round((cal7 + Number.EPSILON) * 100) / 100;
		document.getElementById('perbas').innerHTML = porce7;
		var cal8 = nnn8*100/xntotal;
		var porce8 = Math.round((cal8 + Number.EPSILON) * 100) / 100;
		document.getElementById('pereos').innerHTML = porce8;
		var cal9 = nnn9*100/xntotal;
		var porce9 = Math.round((cal9 + Number.EPSILON) * 100) / 100;
		document.getElementById('perban').innerHTML = porce9;
		var cal4 = nnn4*100/xntotal;
		var porce4 = Math.round((cal4 + Number.EPSILON) * 100) / 100;
		document.getElementById('perseg').innerHTML = porce4;
		var cal5 = nnn5*100/xntotal;
		var porce5 = Math.round((cal5 + Number.EPSILON) * 100) / 100;
		document.getElementById('perlin').innerHTML = porce5;
		var cal6 = nnn6*100/xntotal;
		var porce6 = Math.round((cal6 + Number.EPSILON) * 100) / 100;
		document.getElementById('permon').innerHTML = porce6;
		var cal1 = nnn1*100/xntotal;
		var porce1 = Math.round((cal1 + Number.EPSILON) * 100) / 100;
		document.getElementById('pereri').innerHTML = porce1;
		var cal2 = nnn2*100/xntotal;
		var porce2 = Math.round((cal2 + Number.EPSILON) * 100) / 100;
		document.getElementById('perot1').innerHTML = porce2;
		var cal3 = nnn3*100/xntotal;
		var porce3 = Math.round((cal3 + Number.EPSILON) * 100) / 100;
		document.getElementById('perot2').innerHTML = porce3;
	}
}

function elim() {
	var total = document.getElementById('total').innerHTML;
	var ntotal = parseFloat(total);
	if (ntotal == 0) {

	} else {
		var newtotal = --ntotal;
		document.getElementById('total').innerHTML = newtotal;
		evalCero();
		evalCien();
		document.getElementById('audio-l').currentTime = 0;
		document.getElementById('audio-l').play();
		vibratelow();
		localStorage.msmdev_cellcounter_total = newtotal;
	}
}

function showAlert(){
	document.getElementById('fade').style.display = 'block';
	document.getElementById('alerta').style.display = 'block';
	document.getElementById('audio-alert').currentTime = 0;
	document.getElementById('audio-alert').play();
}

function hideAlert(){
	document.getElementById('fade').style.display = 'none';
	document.getElementById('alerta').style.display = 'none';
}

function add9(){
	var total = document.getElementById('total').innerHTML;
	var ntotal = parseFloat(total);
	if (total == 99) {
		showAlert();
		sum9();
	} else {
		notsumMedium();
		sum9();
	}
}

function add8(){
	var total = document.getElementById('total').innerHTML;
	var ntotal = parseFloat(total);
	if (total == 99) {
		showAlert();
		sum8();
	} else {
		notsumHigh();
		sum8();
	}
}

function add7(){
	var total = document.getElementById('total').innerHTML;
	var ntotal = parseFloat(total);
	if (total == 99) {
		showAlert();
		sum7();
	} else {
		notsumMedium();
		sum7();
	}
}

function add6(){
	var total = document.getElementById('total').innerHTML;
	var ntotal = parseFloat(total);
	if (total == 99) {
		showAlert();
		sum6();
	} else {
		notsumHigh();
		sum6();
	}
}

function add5(){
	var total = document.getElementById('total').innerHTML;
	var ntotal = parseFloat(total);
	if (total == 99) {
		showAlert();
		sum5();
	} else {
		notsumUltra();
		sum5();
	}
}

function add4(){
	var total = document.getElementById('total').innerHTML;
	var ntotal = parseFloat(total);
	if (total == 99) {
		showAlert();
		sum4();
	} else {
		notsumHigh();
		sum4();
	}
}

function add3(){
	var total = document.getElementById('total').innerHTML;
	var ntotal = parseFloat(total);
	if (total == 99) {
		showAlert();
		sum3();
	} else {
		notsumMedium();
		sum3();
	}
}

function add2(){
	var total = document.getElementById('total').innerHTML;
	var ntotal = parseFloat(total);
	if (total == 99) {
		showAlert();
		sum2();
	} else {
		notsumHigh();
		sum2();
	}
}

function add1(){
	var total = document.getElementById('total').innerHTML;
	var ntotal = parseFloat(total);
	if (total == 99) {
		showAlert();
		sum1();
	} else {
		notsumMedium();
		sum1();
	}
}

function notsumUltra() {
	document.getElementById('audio-u').currentTime = 0;
	document.getElementById('audio-u').play();
	vibrate();
}

function notsumMedium() {
	document.getElementById('audio-m').currentTime = 0;
	document.getElementById('audio-m').play();
	vibrate();
}

function notsumHigh() {
	document.getElementById('audio-h').currentTime = 0;
	document.getElementById('audio-h').play();
	vibrate();
}

function sum9() {
	var total = document.getElementById('total').innerHTML;
	var ntotal = parseFloat(total);
	var newtotal = ++ntotal;
	document.getElementById('total').innerHTML = newtotal;
	var nn9 = document.getElementById('nn9').innerHTML;
	var nnn9 = parseFloat(nn9);
	var newnn9 = ++nnn9;
	document.getElementById('nn9').innerHTML = newnn9;
	crecalc();
	evalCien();
	localStorage.msmdev_cellcounter_total = newtotal;
	localStorage.msmdev_cellcounter_num9 = newnn9;
}

function res9() {
	var nn9 = document.getElementById('nn9').innerHTML;
	var nnn9 = parseFloat(nn9);
	if (nnn9 == 0) {

	} else {
		var newnn9 = --nnn9;
		document.getElementById('nn9').innerHTML = newnn9;
		elim();
		localStorage.msmdev_cellcounter_num9 = newnn9;
	}
}

function sum8() {
	var total = document.getElementById('total').innerHTML;
	var ntotal = parseFloat(total);
	var newtotal = ++ntotal;
	document.getElementById('total').innerHTML = newtotal;
	var nn8 = document.getElementById('nn8').innerHTML;
	var nnn8 = parseFloat(nn8);
	var newnn8 = ++nnn8;
	document.getElementById('nn8').innerHTML = newnn8;
	crecalc();
	evalCien();
	localStorage.msmdev_cellcounter_total = newtotal;
	localStorage.msmdev_cellcounter_num8 = newnn8;
}

function res8() {
	var nn8 = document.getElementById('nn8').innerHTML;
	var nnn8 = parseFloat(nn8);
	if (nnn8 == 0) {

	} else {
		var newnn8 = --nnn8;
		document.getElementById('nn8').innerHTML = newnn8;
		elim();
		localStorage.msmdev_cellcounter_num8 = newnn8;
	}
}

function sum7() {
	var total = document.getElementById('total').innerHTML;
	var ntotal = parseFloat(total);
	var newtotal = ++ntotal;
	document.getElementById('total').innerHTML = newtotal;
	var nn7 = document.getElementById('nn7').innerHTML;
	var nnn7 = parseFloat(nn7);
	var newnn7 = ++nnn7;
	document.getElementById('nn7').innerHTML = newnn7;
	crecalc();
	evalCien();
	localStorage.msmdev_cellcounter_total = newtotal;
	localStorage.msmdev_cellcounter_num7 = newnn7;
}

function res7() {
	var nn7 = document.getElementById('nn7').innerHTML;
	var nnn7 = parseFloat(nn7);
	if (nnn7 == 0) {

	} else {
		var newnn7 = --nnn7;
		document.getElementById('nn7').innerHTML = newnn7;
		elim();
		localStorage.msmdev_cellcounter_num7 = newnn7;
	}
}

function sum6() {
	var total = document.getElementById('total').innerHTML;
	var ntotal = parseFloat(total);
	var newtotal = ++ntotal;
	document.getElementById('total').innerHTML = newtotal;
	var nn6 = document.getElementById('nn6').innerHTML;
	var nnn6 = parseFloat(nn6);
	var newnn6 = ++nnn6;
	document.getElementById('nn6').innerHTML = newnn6;
	crecalc();
	evalCien();
	localStorage.msmdev_cellcounter_total = newtotal;
	localStorage.msmdev_cellcounter_num6 = newnn6;
}

function res6() {
	var nn6 = document.getElementById('nn6').innerHTML;
	var nnn6 = parseFloat(nn6);
	if (nnn6 == 0) {

	} else {
		var newnn6 = --nnn6;
		document.getElementById('nn6').innerHTML = newnn6;
		elim();
		localStorage.msmdev_cellcounter_num6 = newnn6;
	}
}

function sum5() {
	var total = document.getElementById('total').innerHTML;
	var ntotal = parseFloat(total);
	var newtotal = ++ntotal;
	document.getElementById('total').innerHTML = newtotal;
	var nn5 = document.getElementById('nn5').innerHTML;
	var nnn5 = parseFloat(nn5);
	var newnn5 = ++nnn5;
	document.getElementById('nn5').innerHTML = newnn5;
	crecalc();
	evalCien();
	localStorage.msmdev_cellcounter_total = newtotal;
	localStorage.msmdev_cellcounter_num5 = newnn5;
}

function res5() {
	var nn5 = document.getElementById('nn5').innerHTML;
	var nnn5 = parseFloat(nn5);
	if (nnn5 == 0) {

	} else {
		var newnn5 = --nnn5;
		document.getElementById('nn5').innerHTML = newnn5;
		elim();
		localStorage.msmdev_cellcounter_num5 = newnn5;
	}
}

function sum4() {
	var total = document.getElementById('total').innerHTML;
	var ntotal = parseFloat(total);
	var newtotal = ++ntotal;
	document.getElementById('total').innerHTML = newtotal;
	var nn4 = document.getElementById('nn4').innerHTML;
	var nnn4 = parseFloat(nn4);
	var newnn4 = ++nnn4;
	document.getElementById('nn4').innerHTML = newnn4;
	crecalc();
	evalCien();
	localStorage.msmdev_cellcounter_total = newtotal;
	localStorage.msmdev_cellcounter_num4 = newnn4;
}

function res4() {
	var nn4 = document.getElementById('nn4').innerHTML;
	var nnn4 = parseFloat(nn4);
	if (nnn4 == 0) {

	} else {
		var newnn4 = --nnn4;
		document.getElementById('nn4').innerHTML = newnn4;
		elim();
		localStorage.msmdev_cellcounter_num4 = newnn4;
	}
}

function sum3() {
	var total = document.getElementById('total').innerHTML;
	var ntotal = parseFloat(total);
	var newtotal = ++ntotal;
	document.getElementById('total').innerHTML = newtotal;
	var nn3 = document.getElementById('nn3').innerHTML;
	var nnn3 = parseFloat(nn3);
	var newnn3 = ++nnn3;
	document.getElementById('nn3').innerHTML = newnn3;
	crecalc();
	evalCien();
	localStorage.msmdev_cellcounter_total = newtotal;
	localStorage.msmdev_cellcounter_num3 = newnn3;
}

function res3() {
	var nn3 = document.getElementById('nn3').innerHTML;
	var nnn3 = parseFloat(nn3);
	if (nnn3 == 0) {

	} else {
		var newnn3 = --nnn3;
		document.getElementById('nn3').innerHTML = newnn3;
		elim();
		localStorage.msmdev_cellcounter_num3 = newnn3;
	}
}

function sum2() {
	var total = document.getElementById('total').innerHTML;
	var ntotal = parseFloat(total);
	var newtotal = ++ntotal;
	document.getElementById('total').innerHTML = newtotal;
	var nn2 = document.getElementById('nn2').innerHTML;
	var nnn2 = parseFloat(nn2);
	var newnn2 = ++nnn2;
	document.getElementById('nn2').innerHTML = newnn2;
	crecalc();
	evalCien();
	localStorage.msmdev_cellcounter_total = newtotal;
	localStorage.msmdev_cellcounter_num2 = newnn2;
}

function res2() {
	var nn2 = document.getElementById('nn2').innerHTML;
	var nnn2 = parseFloat(nn2);
	if (nnn2 == 0) {

	} else {
		var newnn2 = --nnn2;
		document.getElementById('nn2').innerHTML = newnn2;
		elim();
		localStorage.msmdev_cellcounter_num2 = newnn2;
	}
}

function sum1() {
	var total = document.getElementById('total').innerHTML;
	var ntotal = parseFloat(total);
	var newtotal = ++ntotal;
	document.getElementById('total').innerHTML = newtotal;
	var nn1 = document.getElementById('nn1').innerHTML;
	var nnn1 = parseFloat(nn1);
	var newnn1 = ++nnn1;
	document.getElementById('nn1').innerHTML = newnn1;
	crecalc();
	evalCien();
	localStorage.msmdev_cellcounter_total = newtotal;
	localStorage.msmdev_cellcounter_num1 = newnn1;
}

function res1() {
	var nn1 = document.getElementById('nn1').innerHTML;
	var nnn1 = parseFloat(nn1);
	if (nnn1 == 0) {

	} else {
		var newnn1 = --nnn1;
		document.getElementById('nn1').innerHTML = newnn1;
		elim();
		localStorage.msmdev_cellcounter_num1 = newnn1;
	}
}

function delTable(){
	let arr = [ 'ntotal', 'nbas', 'perbas', 'neos', 'pereos', 'nban', 'perban', 'nseg', 'perseg', 'nlin', 'perlin', 'nmon', 'permon', 'neri', 'pereri', 'not1', 'perot1', 'not2', 'perot2', 'pertotal' ];
    for (let i of arr) {
		document.getElementById(i).innerHTML = '0';
    }
}

function evalCien(){
	var total = document.getElementById('total').innerHTML;
	var cero = '0';
	if (total == cero) {
		document.getElementById('pertotal').innerHTML = '0';
	} else {
		document.getElementById('pertotal').innerHTML = '100';
	}
}

function hideAll() {
	document.getElementById('act').style.left = '0%';
	document.getElementById('help').style.left = '100%';
	document.getElementById('calc').style.left = '100%';
	document.getElementById('bt2').style.background = '#d0d0d0';
}

function reset() {
	var ind = document.getElementById('ind').innerHTML;
	switch (ind) {
		case "B":
			indicAoption();
			let narr = [ 'total', 'nn1', 'nn2', 'nn3', 'nn4', 'nn5', 'nn6', 'nn7', 'nn8', 'nn9' ];
			for (let i of narr) {
				document.getElementById(i).innerHTML = '0';
			}
			delTable();
			localStorage.msmdev_cellcounter_total = '0';
			localStorage.msmdev_cellcounter_num1 = '0';
			localStorage.msmdev_cellcounter_num2 = '0';
			localStorage.msmdev_cellcounter_num3 = '0';
			localStorage.msmdev_cellcounter_num4 = '0';
			localStorage.msmdev_cellcounter_num5 = '0';
			localStorage.msmdev_cellcounter_num6 = '0';
			localStorage.msmdev_cellcounter_num7 = '0';
			localStorage.msmdev_cellcounter_num8 = '0';
			localStorage.msmdev_cellcounter_num9 = '0';
			break;
		case "A":
			document.getElementById('ind').innerHTML = 'B';
			document.getElementById('bt2').style.background = '#ffa0a0';
			document.getElementById('bt2').style.color = '#000000';
			break;
	}
}

function indicAoption(){
	var ccbuton = document.getElementById('ind2').innerHTML;
	var ccbtc = document.getElementById('ind3').innerHTML;
	document.getElementById('ind').innerHTML = 'A';
	document.getElementById('bt2').style.background = ccbuton;
	document.getElementById('bt2').style.color = ccbtc;
}

function goHome() {
	hideMenu();
	indicAoption();
	hideKeys();
	if (screen.width > screen.height) {
		document.getElementById('act').style.display = 'block';
		document.getElementById('setts').style.display = 'none';
		document.getElementById('about').style.display = 'none';
		document.getElementById('calc').style.display = 'none';
		document.getElementById('itemm1').style.display = 'block';
		document.getElementById('itemm2').style.display = 'none';
		document.getElementById('itemm3').style.display = 'block';
		document.getElementById('itemm4').style.display = 'block';
		document.getElementById('itemm5').style.display = 'block';
		document.getElementById('itemm6').style.display = 'none';
		document.getElementById('header2').style.transform = 'scale(1)';
		document.getElementById('act').style.top = '18%';
		document.getElementById('setts').style.top = '18%';
		document.getElementById('about').style.top = '18%';
		document.getElementById('calc').style.top = '18%';
		document.getElementById('act').style.height = '82%';
		document.getElementById('setts').style.height = '82%';
		document.getElementById('about').style.height = '82%';
		document.getElementById('calc').style.height = '82%';
		document.getElementById('icback').style.transform = 'scale(0)';
		document.getElementById('titleapp').style.left = '0px';
		document.getElementById('ttt-help').style.display = 'none';
		document.getElementById('boxes').style.top = '0%';
		document.getElementById('dv-help').style.display = 'none';
		document.getElementById('dv-help').style.top = '0px';
	} else {
		document.getElementById('act').style.display = 'block';
		document.getElementById('setts').style.display = 'none';
		document.getElementById('about').style.display = 'none';
		document.getElementById('calc').style.display = 'none';
		document.getElementById('itemm1').style.display = 'block';
		document.getElementById('itemm2').style.display = 'none';
		document.getElementById('itemm3').style.display = 'block';
		document.getElementById('itemm4').style.display = 'block';
		document.getElementById('itemm5').style.display = 'block';
		document.getElementById('itemm6').style.display = 'none';
		document.getElementById('header2').style.transform = 'scale(1)';
		document.getElementById('act').style.top = '12%';
		document.getElementById('setts').style.top = '12%';
		document.getElementById('about').style.top = '12%';
		document.getElementById('calc').style.top = '12%';
		document.getElementById('act').style.height = '88%';
		document.getElementById('setts').style.height = '88%';
		document.getElementById('about').style.height = '88%';
		document.getElementById('calc').style.height = '88%';
		document.getElementById('icback').style.transform = 'scale(0)';
		document.getElementById('titleapp').style.left = '0px';
		document.getElementById('ttt-help').style.display = 'none';
		document.getElementById('boxes').style.top = '0%';
		document.getElementById('dv-help').style.display = 'none';
		document.getElementById('dv-help').style.top = '0px';
	}
}

function help() {
	hideMenu();
	indicAoption();
	showKeys();
	if (screen.width > screen.height) {
		document.getElementById('act').style.display = 'block';
		document.getElementById('setts').style.display = 'none';
		document.getElementById('about').style.display = 'none';
		document.getElementById('calc').style.display = 'none';
		document.getElementById('itemm1').style.display = 'block';
		document.getElementById('itemm2').style.display = 'none';
		document.getElementById('itemm3').style.display = 'block';
		document.getElementById('itemm4').style.display = 'none';
		document.getElementById('itemm5').style.display = 'block';
		document.getElementById('itemm6').style.display = 'block';
		document.getElementById('header2').style.transform = 'scale(0)';
		document.getElementById('act').style.top = '9%';
		document.getElementById('setts').style.top = '18%';
		document.getElementById('about').style.top = '18%';
		document.getElementById('calc').style.top = '18%';
		document.getElementById('act').style.height = '91%';
		document.getElementById('setts').style.height = '82%';
		document.getElementById('about').style.height = '82%';
		document.getElementById('calc').style.height = '82%';
		document.getElementById('icback').style.transform = 'scale(1)';
		document.getElementById('titleapp').style.left = '7vh';
		document.getElementById('ttt-help').style.display = 'block';
		document.getElementById('boxes').style.top = '6%';
		document.getElementById('dv-help').style.display = 'block';
		var sizebox2 = document.getElementById('box2').clientHeight;
		var topbox2 = document.getElementById('box2').style.top;
		var sizeb = parseFloat(sizebox2);
		var topb = parseFloat(topbox2);
		document.getElementById('dv-help').style.top = sizeb +topb +'px';
	} else {
		document.getElementById('act').style.display = 'block';
		document.getElementById('setts').style.display = 'none';
		document.getElementById('about').style.display = 'none';
		document.getElementById('calc').style.display = 'none';
		document.getElementById('itemm1').style.display = 'block';
		document.getElementById('itemm2').style.display = 'none';
		document.getElementById('itemm3').style.display = 'block';
		document.getElementById('itemm4').style.display = 'none';
		document.getElementById('itemm5').style.display = 'block';
		document.getElementById('itemm6').style.display = 'block';
		document.getElementById('header2').style.transform = 'scale(0)';
		document.getElementById('act').style.top = '6%';
		document.getElementById('setts').style.top = '12%';
		document.getElementById('about').style.top = '12%';
		document.getElementById('calc').style.top = '12%';
		document.getElementById('act').style.height = '94%';
		document.getElementById('setts').style.height = '88%';
		document.getElementById('about').style.height = '88%';
		document.getElementById('calc').style.height = '88%';
		document.getElementById('icback').style.transform = 'scale(1)';
		document.getElementById('titleapp').style.left = '5vh';
		document.getElementById('ttt-help').style.display = 'block';
		document.getElementById('boxes').style.top = '6%';
		document.getElementById('dv-help').style.display = 'block';
		var sizebox2 = document.getElementById('box2').clientHeight;
		var topbox2 = document.getElementById('box2').style.top;
		var sizeb = parseFloat(sizebox2);
		var topb = parseFloat(topbox2);
		document.getElementById('dv-help').style.top = sizeb +topb +'px';
	}
}

function calc() {
	hideMenu();
	indicAoption();
	hideKeys();
	if (screen.width > screen.height) {
		document.getElementById('ind').innerHTML = 'A';
		document.getElementById('act').style.display = 'none';
		document.getElementById('setts').style.display = 'none';
		document.getElementById('about').style.display = 'none';
		document.getElementById('calc').style.display = 'block';
		document.getElementById('fade').style.display = 'none';
		document.getElementById('alerta').style.display = 'none';
		document.getElementById('itemm1').style.display = 'none';
		document.getElementById('itemm2').style.display = 'none';
		document.getElementById('itemm3').style.display = 'block';
		document.getElementById('itemm4').style.display = 'block';
		document.getElementById('itemm5').style.display = 'block';
		document.getElementById('itemm6').style.display = 'block';
		document.getElementById('header2').style.transform = 'scale(1)';
		document.getElementById('act').style.top = '18%';
		document.getElementById('setts').style.top = '18%';
		document.getElementById('about').style.top = '18%';
		document.getElementById('calc').style.top = '18%';
		document.getElementById('act').style.height = '82%';
		document.getElementById('setts').style.height = '82%';
		document.getElementById('about').style.height = '82%';
		document.getElementById('calc').style.height = '82%';
		document.getElementById('icback').style.transform = 'scale(1)';
		document.getElementById('titleapp').style.left = '7vh';
		document.getElementById('ttt-help').style.display = 'none';
		document.getElementById('boxes').style.top = '0%';
		document.getElementById('dv-help').style.display = 'none';
		document.getElementById('dv-help').style.top = '0px';
	} else {
		document.getElementById('ind').innerHTML = 'A';
		document.getElementById('act').style.display = 'none';
		document.getElementById('setts').style.display = 'none';
		document.getElementById('about').style.display = 'none';
		document.getElementById('calc').style.display = 'block';
		document.getElementById('fade').style.display = 'none';
		document.getElementById('alerta').style.display = 'none';
		document.getElementById('itemm1').style.display = 'none';
		document.getElementById('itemm2').style.display = 'none';
		document.getElementById('itemm3').style.display = 'block';
		document.getElementById('itemm4').style.display = 'block';
		document.getElementById('itemm5').style.display = 'block';
		document.getElementById('itemm6').style.display = 'block';
		document.getElementById('header2').style.transform = 'scale(1)';
		document.getElementById('act').style.top = '12%';
		document.getElementById('setts').style.top = '12%';
		document.getElementById('about').style.top = '12%';
		document.getElementById('calc').style.top = '12%';
		document.getElementById('act').style.height = '88%';
		document.getElementById('setts').style.height = '88%';
		document.getElementById('about').style.height = '88%';
		document.getElementById('calc').style.height = '88%';
		document.getElementById('icback').style.transform = 'scale(1)';
		document.getElementById('titleapp').style.left = '5vh';
		document.getElementById('ttt-help').style.display = 'none';
		document.getElementById('boxes').style.top = '0%';
		document.getElementById('dv-help').style.display = 'none';
		document.getElementById('dv-help').style.top = '0px';
	}
}

function setts() {
	hideMenu();
	indicAoption();
	hideKeys();
	if (screen.width > screen.height) {
		document.getElementById('ind').innerHTML = 'A';
		document.getElementById('act').style.display = 'none';
		document.getElementById('setts').style.display = 'block';
		document.getElementById('about').style.display = 'none';
		document.getElementById('calc').style.display = 'none';
		document.getElementById('itemm1').style.display = 'block';
		document.getElementById('itemm2').style.display = 'none';
		document.getElementById('itemm3').style.display = 'none';
		document.getElementById('itemm4').style.display = 'block';
		document.getElementById('itemm5').style.display = 'block';
		document.getElementById('itemm6').style.display = 'block';
		document.getElementById('header2').style.transform = 'scale(0)';
		document.getElementById('act').style.top = '18%';
		document.getElementById('setts').style.top = '9%';
		document.getElementById('about').style.top = '18%';
		document.getElementById('calc').style.top = '18%';
		document.getElementById('act').style.height = '82%';
		document.getElementById('setts').style.height = '91%';
		document.getElementById('about').style.height = '82%';
		document.getElementById('calc').style.height = '82%';
		document.getElementById('icback').style.transform = 'scale(1)';
		document.getElementById('titleapp').style.left = '7vh';
		document.getElementById('ttt-help').style.display = 'none';
		document.getElementById('boxes').style.top = '0%';
		document.getElementById('dv-help').style.display = 'none';
		document.getElementById('dv-help').style.top = '0px';
	} else {
		document.getElementById('ind').innerHTML = 'A';
		document.getElementById('act').style.display = 'none';
		document.getElementById('setts').style.display = 'block';
		document.getElementById('about').style.display = 'none';
		document.getElementById('calc').style.display = 'none';
		document.getElementById('itemm1').style.display = 'block';
		document.getElementById('itemm2').style.display = 'none';
		document.getElementById('itemm3').style.display = 'none';
		document.getElementById('itemm4').style.display = 'block';
		document.getElementById('itemm5').style.display = 'block';
		document.getElementById('itemm6').style.display = 'block';
		document.getElementById('header2').style.transform = 'scale(0)';
		document.getElementById('act').style.top = '12%';
		document.getElementById('setts').style.top = '6%';
		document.getElementById('about').style.top = '12%';
		document.getElementById('calc').style.top = '12%';
		document.getElementById('act').style.height = '88%';
		document.getElementById('setts').style.height = '94%';
		document.getElementById('about').style.height = '88%';
		document.getElementById('calc').style.height = '88%';
		document.getElementById('icback').style.transform = 'scale(1)';
		document.getElementById('titleapp').style.left = '5vh';
		document.getElementById('ttt-help').style.display = 'none';
		document.getElementById('boxes').style.top = '0%';
		document.getElementById('dv-help').style.display = 'none';
		document.getElementById('dv-help').style.top = '0px';
	}
}

function about() {
	hideMenu();
	indicAoption();
	hideKeys();
	if (screen.width > screen.height) {
		document.getElementById('ind').innerHTML = 'A';
		document.getElementById('act').style.display = 'none';
		document.getElementById('setts').style.display = 'none';
		document.getElementById('about').style.display = 'block';
		document.getElementById('calc').style.display = 'none';
		document.getElementById('itemm1').style.display = 'block';
		document.getElementById('itemm2').style.display = 'none';
		document.getElementById('itemm3').style.display = 'block';
		document.getElementById('itemm4').style.display = 'block';
		document.getElementById('itemm5').style.display = 'none';
		document.getElementById('itemm6').style.display = 'block';
		document.getElementById('header2').style.transform = 'scale(0)';
		document.getElementById('act').style.top = '18%';
		document.getElementById('setts').style.top = '18%';
		document.getElementById('about').style.top = '9%';
		document.getElementById('calc').style.top = '18%';
		document.getElementById('act').style.height = '82%';
		document.getElementById('setts').style.height = '82%';
		document.getElementById('about').style.height = '91%';
		document.getElementById('calc').style.height = '82%';
		document.getElementById('icback').style.transform = 'scale(1)';
		document.getElementById('titleapp').style.left = '7vh';
		document.getElementById('ttt-help').style.display = 'none';
		document.getElementById('boxes').style.top = '0%';
		document.getElementById('dv-help').style.display = 'none';
		document.getElementById('dv-help').style.top = '0px';
	} else {
		document.getElementById('ind').innerHTML = 'A';
		document.getElementById('act').style.display = 'none';
		document.getElementById('setts').style.display = 'none';
		document.getElementById('about').style.display = 'block';
		document.getElementById('calc').style.display = 'none';
		document.getElementById('itemm1').style.display = 'block';
		document.getElementById('itemm2').style.display = 'none';
		document.getElementById('itemm3').style.display = 'block';
		document.getElementById('itemm4').style.display = 'block';
		document.getElementById('itemm5').style.display = 'none';
		document.getElementById('itemm6').style.display = 'block';
		document.getElementById('header2').style.transform = 'scale(0)';
		document.getElementById('act').style.top = '12%';
		document.getElementById('setts').style.top = '12%';
		document.getElementById('about').style.top = '6%';
		document.getElementById('calc').style.top = '12%';
		document.getElementById('act').style.height = '88%';
		document.getElementById('setts').style.height = '88%';
		document.getElementById('about').style.height = '94%';
		document.getElementById('calc').style.height = '88%';
		document.getElementById('icback').style.transform = 'scale(1)';
		document.getElementById('titleapp').style.left = '5vh';
		document.getElementById('ttt-help').style.display = 'none';
		document.getElementById('boxes').style.top = '0%';
		document.getElementById('dv-help').style.display = 'none';
		document.getElementById('dv-help').style.top = '0px';
	}
}

function showKeys(){
	document.getElementById('nn7').innerHTML = '7';
	document.getElementById('nn8').innerHTML = '8';
	document.getElementById('nn9').innerHTML = '9';
	document.getElementById('nn4').innerHTML = '4';
	document.getElementById('nn5').innerHTML = '5';
	document.getElementById('nn6').innerHTML = '6';
	document.getElementById('nn1').innerHTML = '1';
	document.getElementById('nn2').innerHTML = '2';
	document.getElementById('nn3').innerHTML = '3';
}

function hideKeys(){
	var savnum1 = localStorage.msmdev_cellcounter_num1;
	var savnum2 = localStorage.msmdev_cellcounter_num2;
	var savnum3 = localStorage.msmdev_cellcounter_num3;
	var savnum4 = localStorage.msmdev_cellcounter_num4;
	var savnum5 = localStorage.msmdev_cellcounter_num5;
	var savnum6 = localStorage.msmdev_cellcounter_num6;
	var savnum7 = localStorage.msmdev_cellcounter_num7;
	var savnum8 = localStorage.msmdev_cellcounter_num8;
	var savnum9 = localStorage.msmdev_cellcounter_num9;
	document.getElementById('nn1').innerHTML = savnum1;
	document.getElementById('nn2').innerHTML = savnum2;
	document.getElementById('nn3').innerHTML = savnum3;
	document.getElementById('nn4').innerHTML = savnum4;
	document.getElementById('nn5').innerHTML = savnum5;
	document.getElementById('nn6').innerHTML = savnum6;
	document.getElementById('nn7').innerHTML = savnum7;
	document.getElementById('nn8').innerHTML = savnum8;
	document.getElementById('nn9').innerHTML = savnum9;
}

function touchSum(x){
	var idbox = x.id;
	var regex = /(\d+)/g;
	var nmb = idbox.match(regex);
	var adf = 'add' +nmb +'()';
	var ttthelp = document.getElementById('ttt-help').style.display;
	var visible = 'block';
	if (ttthelp == visible) {
		
	} else {
		eval(adf);
		boxPress(x);
	}
}

function touchRes(x){
	var idbox = x.id;
	var regex = /(\d+)/g;
	var nmb = idbox.match(regex);
	var rff = 'res' +nmb +'()';
	var ttthelp = document.getElementById('ttt-help').style.display;
	var visible = 'block';
	if (ttthelp == visible) {
		
	} else {
		eval(rff);
		boxPress(x);
	}
}

function changeColor(x){
	var ccolor = x.dataset.ccolor;
	var ccolor2 = x.dataset.ccolor2;
	var ctext = x.dataset.ctext;
	var cshadow = x.dataset.cshadow;
	var mcolor = x.dataset.mcolor;
	document.getElementById('ind2').innerHTML = ccolor2;
	document.getElementById('ind3').innerHTML = ctext;
	document.getElementById('ind4').innerHTML = cshadow;
	document.getElementById('splash').style.background = ccolor;
	document.getElementById('cont').style.background = ccolor;
	document.getElementById('menu').style.background = ccolor;
	document.getElementById('alerta').style.background = ccolor;
	document.getElementById('itemm1').style.background = ccolor2;
	document.getElementById('itemm2').style.background = ccolor2;
	document.getElementById('itemm3').style.background = ccolor2;
	document.getElementById('itemm4').style.background = ccolor2;
	document.getElementById('itemm5').style.background = ccolor2;
	document.getElementById('itemm6').style.background = ccolor2;
	document.getElementById('icm1').style.color = ctext;
	document.getElementById('icm2').style.color = ctext;
	document.getElementById('icm3').style.color = ctext;
	document.getElementById('icm4').style.color = ctext;
	document.getElementById('icm5').style.color = ctext;
	document.getElementById('icm6').style.color = ctext;
	document.getElementById('total').style.color = ctext;
	document.getElementById('box1').style.background = ccolor;
	document.getElementById('box1').style.boxShadow = cshadow;
	document.getElementById('box2').style.background = ccolor;
	document.getElementById('box2').style.boxShadow = cshadow;
	document.getElementById('box3').style.background = ccolor;
	document.getElementById('box3').style.boxShadow = cshadow;
	document.getElementById('box4').style.background = ccolor;
	document.getElementById('box4').style.boxShadow = cshadow;
	document.getElementById('box5').style.background = ccolor;
	document.getElementById('box5').style.boxShadow = cshadow;
	document.getElementById('box6').style.background = ccolor;
	document.getElementById('box6').style.boxShadow = cshadow;
	document.getElementById('box7').style.background = ccolor;
	document.getElementById('box7').style.boxShadow = cshadow;
	document.getElementById('box8').style.background = ccolor;
	document.getElementById('box8').style.boxShadow = cshadow;
	document.getElementById('box9').style.background = ccolor;
	document.getElementById('box9').style.boxShadow = cshadow;
	document.getElementById('txsplash').style.color = ctext;
	document.getElementById('titleapp').style.color = ctext;
	document.getElementById('icback').style.color = ctext;
	document.getElementById('icmenu').style.color = ctext;
	document.getElementById('bt2').style.color = ctext;
	document.getElementById('bt2').style.background = ccolor2;
	document.getElementById('nc1').style.color = ctext;
	document.getElementById('nc2').style.color = ctext;
	document.getElementById('nc3').style.color = ctext;
	document.getElementById('nc4').style.color = ctext;
	document.getElementById('nc5').style.color = ctext;
	document.getElementById('nc6').style.color = ctext;
	document.getElementById('nc7').style.color = ctext;
	document.getElementById('nc8').style.color = ctext;
	document.getElementById('nc9').style.color = ctext;
	document.getElementById('nn1').style.color = ccolor;
	document.getElementById('nn1').style.background = ctext;
	document.getElementById('nn2').style.color = ccolor;
	document.getElementById('nn2').style.background = ctext;
	document.getElementById('nn3').style.color = ccolor;
	document.getElementById('nn3').style.background = ctext;
	document.getElementById('nn4').style.color = ccolor;
	document.getElementById('nn4').style.background = ctext;
	document.getElementById('nn5').style.color = ccolor;
	document.getElementById('nn5').style.background = ctext;
	document.getElementById('nn6').style.color = ccolor;
	document.getElementById('nn6').style.background = ctext;
	document.getElementById('nn7').style.color = ccolor;
	document.getElementById('nn7').style.background = ctext;
	document.getElementById('nn8').style.color = ccolor;
	document.getElementById('nn8').style.background = ctext;
	document.getElementById('nn9').style.color = ccolor;
	document.getElementById('nn9').style.background = ctext;
	document.getElementById('list-colors').style.color = ctext;
	document.getElementById('list-colors').style.background = ccolor2;
	document.getElementById('bt-restore').style.color = ctext;
	document.getElementById('bt-restore').style.background = ccolor2;
	document.getElementById('tablecont').style.background = ccolor;
	document.getElementById('tablecont').style.boxShadow = cshadow;
	document.getElementById('sin-icon').style.boxShadow = cshadow;
	document.getElementById('goo-app').style.color = ctext;
	document.getElementById('goo-app').style.background = ccolor2;
	document.getElementById('ttt-about').style.color = ctext;
	document.getElementById('txx-info').style.color = ctext;
	document.getElementById('ttt-calc').style.color = ctext;
	document.getElementById('ttt-setts').style.color = ctext;
	document.getElementById('ttt-help').style.color = ctext;
	document.getElementById('bt3').style.color = ctext;
	document.getElementById('bt3').style.background = ccolor2;
	document.getElementById('bt4').style.color = ctext;
	document.getElementById('bt4').style.background = ccolor2;
	document.getElementById('txal').style.color = ctext;
	document.getElementById('ttx-colormode').style.color = ctext;
	document.getElementById('ttx-zoom').style.color = ctext;
	document.getElementById('ttx-restore').style.color = ctext;
	document.getElementById('ttx-lab1').style.color = ctext;
	document.getElementById('ttx-lab2').style.color = ctext;
	document.getElementById('ttx-lab3').style.color = ctext;
	document.getElementById('td-f1').style.color = ctext;
	document.getElementById('td-f2').style.color = ctext;
	document.getElementById('td-f3').style.color = ctext;
	document.getElementById('td-f4').style.color = ctext;
	document.getElementById('td-f5').style.color = ctext;
	document.getElementById('td-f6').style.color = ctext;
	document.getElementById('td-f7').style.color = ctext;
	document.getElementById('td-f8').style.color = ctext;
	document.getElementById('td-f9').style.color = ctext;
	document.getElementById('td-f10').style.color = ctext;
	document.getElementById('td-f11').style.color = ctext;
	document.getElementById('td-f12').style.color = ctext;
	document.getElementById('td-f13').style.color = ctext;
	document.getElementById('nbas').style.color = ctext;
	document.getElementById('perbas').style.color = ctext;
	document.getElementById('neos').style.color = ctext;
	document.getElementById('pereos').style.color = ctext;
	document.getElementById('nban').style.color = ctext;
	document.getElementById('perban').style.color = ctext;
	document.getElementById('nseg').style.color = ctext;
	document.getElementById('perseg').style.color = ctext;
	document.getElementById('nlin').style.color = ctext;
	document.getElementById('perlin').style.color = ctext;
	document.getElementById('nmon').style.color = ctext;
	document.getElementById('permon').style.color = ctext;
	document.getElementById('neri').style.color = ctext;
	document.getElementById('pereri').style.color = ctext;
	document.getElementById('not1').style.color = ctext;
	document.getElementById('perot1').style.color = ctext;
	document.getElementById('not2').style.color = ctext;
	document.getElementById('perot2').style.color = ctext;
	document.getElementById('ntotal').style.color = ctext;
	document.getElementById('pertotal').style.color = ctext;
	document.getElementById('fuhelp').style.color = ctext;
	localStorage.msmdev_cellcounter_mcolor = mcolor;
	visiList();
}

function visiList(){
	var modecolor = localStorage.msmdev_cellcounter_mcolor;
	switch (modecolor) {
		case 'a':
			document.getElementById('list-colors').style.display = 'none';
		break;
		case 'b':
			document.getElementById('list-colors').style.display = 'none';
		break;
		case 'c':
			document.getElementById('list-colors').style.display = 'block';
		break;
		case 'd':
			document.getElementById('list-colors').style.display = 'block';
		break;
		case 'e':
			document.getElementById('list-colors').style.display = 'block';
		break;
		case 'f':
			document.getElementById('list-colors').style.display = 'block';
		break;
		case 'g':
			document.getElementById('list-colors').style.display = 'block';
		break;
		case 'h':
			document.getElementById('list-colors').style.display = 'block';
		break;
		case 'i':
			document.getElementById('list-colors').style.display = 'block';
		break;
		default:
			document.getElementById('list-colors').style.display = 'none';
		break;
	}
}

function changeCustomColor(){
	document.getElementById('list-colors').style.display = 'block';
	applyColor();
}

function applyColor(){
	var cuscolor = document.getElementById('list-colors').value;
	switch(cuscolor){
		case "pink":
			var x = document.getElementById('r-pink');
			changeColor(x);
		break;
		case "blue":
			var x = document.getElementById('r-blue');
			changeColor(x);
		break;
		case "purple":
			var x = document.getElementById('r-purple');
			changeColor(x);
		break;
		case "yellow":
			var x = document.getElementById('r-yellow');
			changeColor(x);
		break;
		case "orange":
			var x = document.getElementById('r-orange');
			changeColor(x);
		break;
		case "red":
			var x = document.getElementById('r-red');
			changeColor(x);
		break;
		case "green":
			var x = document.getElementById('r-green');
			changeColor(x);
		break;
	}
}

function boxPress(x){
	x.style.boxShadow = 'none';
	setTimeout(boxOut, 150)
}

function boxOut(){
	var shadow = document.getElementById('ind4').innerHTML;
	document.getElementById('box7').style.boxShadow = shadow;
	document.getElementById('box8').style.boxShadow = shadow;
	document.getElementById('box9').style.boxShadow = shadow;
	document.getElementById('box4').style.boxShadow = shadow;
	document.getElementById('box5').style.boxShadow = shadow;
	document.getElementById('box6').style.boxShadow = shadow;
	document.getElementById('box1').style.boxShadow = shadow;
	document.getElementById('box2').style.boxShadow = shadow;
	document.getElementById('box3').style.boxShadow = shadow;
}

function googleApp(){
	window.location.href='https://play.google.com/store/apps/details?id=com.msmdev.cellcounter';
}

function changeZoom(){
	var zoom = document.getElementById('iran').value;
	document.body.style.zoom = zoom;
	localStorage.msmdev_cellcounter_zoom = zoom;
}

function restore() {
	var indfive = document.getElementById('ind5').innerHTML;
	switch (indfive) {
		case "B":
			restoreGo();
			break;
		case "A":
			document.getElementById('ind5').innerHTML = 'B';
			document.getElementById('bt-restore').style.background = '#ffa0a0';
			document.getElementById('bt-restore').style.color = '#000000';
			break;
	}
}

function restoreGo(){
	localStorage.msmdev_cellcounter_total = '0';
	localStorage.msmdev_cellcounter_num1 = '0';
	localStorage.msmdev_cellcounter_num2 = '0';
	localStorage.msmdev_cellcounter_num3 = '0';
	localStorage.msmdev_cellcounter_num4 = '0';
	localStorage.msmdev_cellcounter_num5 = '0';
	localStorage.msmdev_cellcounter_num6 = '0';
	localStorage.msmdev_cellcounter_num7 = '0';
	localStorage.msmdev_cellcounter_num8 = '0';
	localStorage.msmdev_cellcounter_num9 = '0';
	localStorage.msmdev_cellcounter_splash = 'none';
	localStorage.msmdev_cellcounter_mcolor = 'a';
	localStorage.msmdev_cellcounter_zoom = '1';
	window.location.reload();
  }

function vibrate() {
	navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
	if (navigator.vibrate) {
		navigator.vibrate(50);
	} else {
		navigator.vibrate(50);
	}
}

function vibratelow() {
	navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
	if (navigator.vibrate) {
		navigator.vibrate(25);
	} else {
		navigator.vibrate(25);
	}
}

function tecla(e){
    var evt = e ? e : event;
    var key = window.Event ? evt.which : evt.keyCode;
    if(key == 103){
      add7();
	  var x = document.getElementById('box7');
	  boxPress(x);
    }
    if(key == 104){
      add8();
	  var x = document.getElementById('box8');
	  boxPress(x);
    }
    if(key == 105){
      add9();
	  var x = document.getElementById('box9');
	  boxPress(x);
    }
    if(key == 100){
      add4();
	  var x = document.getElementById('box4');
	  boxPress(x);
    }
    if(key == 101){
      add5();
	  var x = document.getElementById('box5');
	  boxPress(x);
    }
    if(key == 102){
      add6();
	  var x = document.getElementById('box6');
	  boxPress(x);
    }
    if(key == 97){
      add1();
	  var x = document.getElementById('box1');
	  boxPress(x);
    }
    if(key == 98){
      add2();
	  var x = document.getElementById('box2');
	  boxPress(x);
    }
    if(key == 99){
      add3();
	  var x = document.getElementById('box3');
	  boxPress(x);
    }
    if(key == 46){
      reset();
    }
    if(key == 13){
      calc();
    }
    if(key == 49){
      add1();
	  var x = document.getElementById('box1');
	  boxPress(x);
    }
    if(key == 50){
      add2();
	  var x = document.getElementById('box2');
	  boxPress(x);
    }
    if(key == 51){
      add3();
	  var x = document.getElementById('box3');
	  boxPress(x);
    }
    if(key == 52){
      add4();
	  var x = document.getElementById('box4');
	  boxPress(x);
    }
    if(key == 53){
      add5();
	  var x = document.getElementById('box5');
	  boxPress(x);
    }
    if(key == 54){
      add6();
	  var x = document.getElementById('box6');
	  boxPress(x);
    }
    if(key == 55){
      add7();
	  var x = document.getElementById('box7');
	  boxPress(x);
    }
    if(key == 56){
      add8();
	  var x = document.getElementById('box8');
	  boxPress(x);
    }
    if(key == 57){
      add9();
	  var x = document.getElementById('box9');
	  boxPress(x);
    }
}