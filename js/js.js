  var acc = document.getElementsByClassName("accordion");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight){
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  }

 document.getElementById("w3s").accessKey = "1";

 document.onkeydown = function(e) {
 if(document.getElementById("Start") != null){
  if (e.ctrlKey && e.altKey && e.keyCode == '1'.charCodeAt(0)) {
      window.location.assign("#Start");
    }
  if (e.ctrlKey && e.altKey && e.keyCode == '2'.charCodeAt(0)) {
      window.location.assign("#End");
     }
 }
}

 function printTime() {
    var d = new Date();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    document.body.innerHTML = hours+":"+mins+":"+secs;
}
setInterval(printTime, 1000);
 // Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}

$(document).ready(function() {
	
	$("body").css("display", "none");

    $("body").fadeIn(2000);
    
	$("a.transition").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		$("body").fadeOut(1000, redirectPage);		
	});
		
	function redirectPage() {
		window.location = linkLocation;
	}
	
});

function myFunction() {
    var x = document.getElementById("myMenu");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}

function showError(container, errorMessage) {
      container.className = 'error';
      var msgElem = document.createElement('span');
      msgElem.className = "error-message";
      msgElem.innerHTML = errorMessage;
      container.appendChild(msgElem);
    }

    function resetError(container) {
      container.className = '';
      if (container.lastChild.className == "error-message") {
        container.removeChild(container.lastChild);
      }
    }

    function validate(form) {
      var elems = form.elements;
      
       resetError(elems.firstname.parentNode);
      if (!elems.firstname.value) {
        showError(elems.firstname.parentNode, ' Укажите имя.');
      }

      resetError(elems.email.parentNode);
      if (!elems.email.value) {
        showError(elems.email.parentNode, ' Укажите email.');
      } 
      
       resetError(elems.tel.parentNode);
      if (!elems.tel.value) {
        showError(elems.tel.parentNode, ' Укажите телефон.');
      } 

      resetError(elems.message.parentNode);
      if (!elems.message.value) {
        showError(elems.message.parentNode, ' Отсутствуе текста.');
      }

    }
  