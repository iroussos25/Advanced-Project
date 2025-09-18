

function contact(event) {
  event.preventDefault();
    //emailjs.sendForm(
      //  'service_grcodes',
        // 'template_ca6dzam',
          //event.target,
          //'LjuZS-A8QUs3HDnbb'
       // ) .then(() => {
        //    console .log('SUCCESS!');
        //});

        const loading = document.querySelector('.modal_overlay--loading')
        const success = document.querySelector('.modal__overlay--success')
        loading.classList += " modal__overlay--visible"
        setTimeout(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible"
            console.log('It worked')

}, 1000);
}