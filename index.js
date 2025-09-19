let contrastToggle = false;

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else{
        document.body.classList.remove("dark-theme")
    }
    }


function contact(event) {
  event.preventDefault();
        const loading = document.querySelector('.modal__overlay--loading')
        const success = document.querySelector('.modal__overlay--success')
        loading.classList += " modal__overlay--visible"

    emailjs
        .sendForm(
        'service_grcodes',
         'template_ca6dzam',
           event.target,
          'LjuZS-A8QUs3HDnbb'
        ) .then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible"
           
        }) .catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily unavailable. Please contact me directly at grcodes@outlook.com"
            );
        })
      }


      let isModalOpen = false;
      function toggleModal() {
        if (isModalOpen) {
            isModalOpen = false;
            return document.body.classList.remove("modal--open");
        }
        isModalOpen = true;
//toggle modal
document.body.classList += " modal--open";
      }