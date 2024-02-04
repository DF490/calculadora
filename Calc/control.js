const pantalla1 = document.querySelector(".display1");
const pantalla2 = document.querySelector(".display2");
const btn = document.querySelectorAll(".botones");

btn.forEach(boton => {
 boton.addEventListener("click", () =>{
    const pulsado = boton.textContent;
    
    if( pantalla2.textContent === "0"){
        pantalla2.textContent = pulsado
    }else{
        pantalla2.textContent += pulsado;
    }

    if(boton.id === "clear"){
        pantalla2.textContent = "0";
        return;
    }
 })
})