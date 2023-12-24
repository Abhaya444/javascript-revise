const btn = document.createElement('button');
btn.textContent = 'Click here';
btn.className = 'btn1';

const division = document.querySelector('div');
division.appendChild(btn);
//remove element

// document.querySelector('h3').remove();

//Removing heeading in the click of a button
btn.addEventListener('click', () => {
    document.querySelector('h3').remove()
})

//Event Listener on Para
const p = document.querySelector('p');
p.addEventListener('mouseover', function(){
    para.style.backgroundColor = "yellow";
})


p.addEventListener('mousedown', function(){
    para.style.backgroundColor = "";
})