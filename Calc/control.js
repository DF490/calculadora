const pantalla1 = document.querySelector(".display1");
const pantalla2 = document.querySelector(".display2");
const btn = document.querySelectorAll(".botones");

btn.forEach(boton => {
 boton.addEventListener("click", () =>{
    const pulsado = boton.textContent;

    if(boton.id === "igual"){
        try{
            pantalla1.textContent = eval(pantalla2.textContent);
        }catch{
            pantalla1.textContent = "Error";
            pantalla2.textContent = "0";
        }
        return;
    }
    
    if(boton.id === "borrar" ){
        if(pantalla2.textContent.length === 1  || pantalla1.textContent === "Error"){
            pantalla2.textContent = "0";            
        }else{
            pantalla2.textContent = pantalla2.textContent.slice(0, -1);
        }
        return;
    }
    
    if(pantalla2.textContent === "0"){
        pantalla2.textContent = pulsado;                
    }else{
            pantalla2.textContent += pulsado;            
        }   

    if(boton.id === "clear"){        
        pantalla1.textContent = "0";
        pantalla2.textContent = "0";        
        return;
    }
    
 })
})