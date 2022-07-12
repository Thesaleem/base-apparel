const inputEl = document.querySelector('.email-input')
const submit = document.querySelector('.submit')
const regEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const errorMsg = document.querySelector('.error-msg')
const errorIcon = document.querySelector('.error-icon')

submit.addEventListener('click', e => {
    e.preventDefault()
    const email = inputEl.value
    errorIcon.classList.add('hidden')
    errorMsg.textContent = ''
    errorMsg.style.color = 'hsl(0, 93%, 68%)'
    if(!email.match(regEmail) || email === ""){
        errorMsg.textContent = 'Please provide a valid email'
       
        errorIcon.classList.remove('hidden')
    }
    else{
        errorMsg.textContent = "Thank you for subscribing, we can't wait to have you!"
        errorMsg.style.color = 'green'
        
    }
})

