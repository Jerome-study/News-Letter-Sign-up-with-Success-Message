const sendBtn = document.querySelector('.send-btn')
const dismissButton = document.querySelector('.dismiss-button')
const fillUp = document.querySelector('.fill-up')
const successMessage = document.querySelector('.success-message')
const emailValue = document.getElementById('emailTextBox')
const requiredEmail = document.querySelector('.required-email')
const emailName = document.getElementById('email-name')

function validateEmail(email) {
    const regex_pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (regex_pattern.test(email)) {
        requiredEmail.style.display = 'none'
        successMessage.style.display = 'block'
        fillUp.style.display = 'none'
        emailName.innerText = emailValue.value
        emailValue.value = ""
    }
    else {
        requiredEmail.style.display = 'block'
        
    }
}


sendBtn.addEventListener('click', () => {
    validateEmail(emailValue.value)
})

dismissButton.addEventListener('click', ()=> {
    window.location.reload()
}) 