/// form validation with bootstraps 

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()


///////////////
// const cursorSmall = document.querySelector('.cir');
// const cursorBig = document.querySelector('.cir2');


// const positionElement = (e)=> {
//   const mouseY = e.clientY;
//   const mouseX = e.clientX;
//    cursorSmall.style.top = mouseY - 15 + 'px';
//    cursorBig.style.left = mouseX - 15 + 'px';
//   cursorSmall.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  
//   cursorBig.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
 
// }

// window.addEventListener('mousemove', positionElement)