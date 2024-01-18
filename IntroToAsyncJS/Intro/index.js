const button = document.getElementById("btn");

const textElement = document.querySelector('#text');

button.addEventListener('click', ()=>{
    textElement.textContent = "Button is Pressed";

    setTimeout(()=>{
        textElement.textContent = 'Happy Birthday';
        
        button.remove();
    }, 2000)
});