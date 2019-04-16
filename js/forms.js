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
  
   jQuery(function($){
   $("#phone").mask("+38(999) 999-9999");
   });