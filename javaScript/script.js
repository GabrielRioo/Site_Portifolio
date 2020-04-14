$(document).ready(function(){     
	$(document).keydown(function(e){
		//Não funciona F12
		var tecla=window.event.keyCode;
		if (tecla==123)
		{
			event.returnValue=false;
		}
		//Não funciona Control + U
		var ctrl=window.event.ctrlKey;
		if(ctrl && e.which == 85)
		{
			return false;
		}
		//Não funciona Control + shift + i
		var shift=window.event.shiftKey;
		if(shift && e.which == 73)
		{
			return false;
		}
	});
	// Pega o Modal (get)
	var modal = document.getElementById("myModal");

	// Obtenha a imagem e insira-a dentro do modal - use o texto "alt" como legenda
	// Abre a imagem
	var img = document.getElementById("myImg");
	var img2 = document.getElementById("myImg2");
	var img3 = document.getElementById("myImg3");
	var img4 = document.getElementById("myImg4");
	var img5 = document.getElementById("myImg5");
	var img6 = document.getElementById("myImg6");
	var img7 = document.getElementById("myImg7");
	var img8 = document.getElementById("myImg8");
	var img9 = document.getElementById("myImg9");
	var modalImg = document.getElementById("img01");
	var captionText = document.getElementById("caption");
	img.onclick = function(){
	  modal.style.display = "block";
	  modalImg.src = this.src;
	  captionText.innerHTML = this.alt;
	}
	img2.onclick = function(){
	  modal.style.display = "block";
	  modalImg.src = this.src;
	  captionText.innerHTML = this.alt;
	}
	img3.onclick = function(){
	  modal.style.display = "block";
	  modalImg.src = this.src;
	  captionText.innerHTML = this.alt;
	}
	img4.onclick = function(){
	  modal.style.display = "block";
	  modalImg.src = this.src;
	  captionText.innerHTML = this.alt;
	}
	img5.onclick = function(){
	  modal.style.display = "block";
	  modalImg.src = this.src;
	  captionText.innerHTML = this.alt;
	}
	img6.onclick = function(){
	  modal.style.display = "block";
	  modalImg.src = this.src;
	  captionText.innerHTML = this.alt;
	}
	img7.onclick = function(){
	  modal.style.display = "block";
	  modalImg.src = this.src;
	  captionText.innerHTML = this.alt;
	}
	img8.onclick = function(){
	  modal.style.display = "block";
	  modalImg.src = this.src;
	  captionText.innerHTML = this.alt;
	}
	img9.onclick = function(){
	  modal.style.display = "block";
	  modalImg.src = this.src;
	  captionText.innerHTML = this.alt;
	}

	// Obtenha o elemento <span> que fecha  modal
	var span = document.getElementsByClassName("close")[0];

	// Quando o usuario clicar no <span> (x), fecha o modal
	span.onclick = function() { 
		modal.style.display = "none";
	}
	// seleçao das paginas do portifolio
	filterSelection("all")
	function filterSelection(c) {
		var x, i;
		x = document.getElementsByClassName("column");
		if (c == "all") c = "";
		for (i = 0; i < x.length; i++) {
			w3RemoveClass(x[i], "show");
			if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
		}
	}

	function w3AddClass(element, name) {
		var i, arr1, arr2;
		arr1 = element.className.split(" ");
		arr2 = name.split(" ");
		for (i = 0; i < arr2.length; i++) {
			if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
		}
	}

	function w3RemoveClass(element, name) {
		var i, arr1, arr2;
		arr1 = element.className.split(" ");
		arr2 = name.split(" ");
		for (i = 0; i < arr2.length; i++) {
			while (arr1.indexOf(arr2[i]) > -1) {
				arr1.splice(arr1.indexOf(arr2[i]), 1);     
			}
		}
		element.className = arr1.join(" ");
	}

	// Adicionar classe ativa ao botão atual (realce)
	var btnContainer = document.getElementById("myBtnContainer");
	var btns = btnContainer.getElementsByClassName("btn");
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function(){
			var current = document.getElementsByClassName("active");
			current[0].className = current[0].className.replace(" active", "");
			this.className += " active";
		});
		var btnContainer = document.getElementById("myBtnContainer");
		var btns = btnContainer.getElementsByClassName("btn");
		for (var i = 0; i < btns.length; i++) {
			btns[i].addEventListener("click", function(){
				var current = document.getElementsByClassName("active");
				current[0].className = current[0].className.replace(" active", "");
				this.className += " active";
			});
		}
	}
	// Adiciona scrollspy para o <body> (rolamento)
	$('body').scrollspy({target: ".navbar", offset: 10});   

	// Adicione rolagem suave em todos os links dentro da barra de navegação
	$("#myNavbar a").on('click', function(event) {
    // Certifique-se de que this.hash tenha um valor antes de substituir o comportamento padrão
		if (this.hash !== "") {
			// Impedir o comportamento padrão do clique da âncora
			event.preventDefault();

			// Armazenar hash
			var hash = this.hash;

			// Usando o método animate () do jQuery para adicionar rolagem de página suave
			// O número opcional (1500) especifica o número de milissegundos necessário para rolar para a área especificada
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 1500, function(){
				// Adicione o hash (#) ao URL ao concluir a rolagem (comportamento padrão do clique)
				window.location.hash = hash;
			});
		}  // Fim if
	});
});

// bloqueia o mouse direito/ Mensagem Enviada
function protegercodigo() {
	if (event.button==2||event.button==3){
		alert('Este código é protegido');
	}
}
document.onmousedown=protegercodigo

function alerta(){
	document.getElementById("alerta").onclick = alert('Mensagem Enviada');
}

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}