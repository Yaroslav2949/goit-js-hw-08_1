import throttle from 'lodash.throttle';

const Form = document.querySelector('.feedback-form');

const email = document.querySelector('[ type="email"]')
const textarea =document.querySelector('[ name="message"]');
const LOCAL_KEY = 'feedback-form-state';

Form. addEventListener ('input', throttle(onFormInput,500));
Form.addEventListener('submit', onFormSubmit);

const formData =JSON.parse(localStorage.getItem(LOCAL_KEY))||{};

PageUpdate();


function onFormInput(evt) {
    formData.email=email.value;
    formData.message =textarea.value;
localStorage.setItem('LOCAL_KEY',JSON.stringify(formData));

}


function onFormSubmit(evt) {
  evt.preventDefault();
  if ( email.value === "" || textarea.value === "") {
               return alert(`Май совість заповни форму !`);
           }
 evt.currentTarget.reset();
  localStorage.removeItem(LOCAL_KEY);
 console.log (formData)
 
}

function PageUpdate() {
const savedValue =JSON.parse(localStorage.getItem(LOCAL_KEY))||{};
if(savedValue){
email.value = savedValue.email;
textarea.value = savedValue.message

}


}
