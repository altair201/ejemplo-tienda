const salir=document.getElementById('salir');
const carrusel=document.querySelector('.carrusel')
const url="https://fakestoreapi.com/products"
const tarjetas=document.querySelector('.container_card')
const cerrar=document.querySelector('.modal_close')
const modal=document.querySelector('.modal')

salir.addEventListener(`click`, function(){
    location.assign("../index.html")
})
let fotos=["../img/carrusel/foto1.jpg",
"../img/carrusel/foto2.jpg", 
"../img/carrusel/foto3.jpg"]
let indice=0;
setInterval(()=>{
    if(indice<fotos.length){
        carrusel.src=fotos[indice]
        indice++;
    }else{
        indice=0
    }
},2000)
async function traer(){ 
    let elementos=null
    const respuesta=await fetch(url)
    const datos=await respuesta.json()
    elementos=Array.from(datos)
    console.log(datos)
    datos.forEach(item => {
        tarjetas.innerHTML+=`<div class="card">
        <div class="card_title"><h2>${item.title}</h2></div>
        <img class="card_imagen" src="${item.image}" alt="#">
        <div class="card_text"><p>${item.description}</p></div>
        <div><h3>$${item.price}</h3></div>
        <div ><button class="card_btn" id="btn${item.id}">Comprar</button></div>
        </div>`
        
    });
    
    cerrar.addEventListener('click',()=>{
        document.querySelector('.modal').style.display='none'
    })
    
    let seleccionado=null;
    tarjetas.addEventListener('click', (evento)=>{
        if(evento.target.classList.contains('card_btn')){
            seleccionado=elementos.filter(tarjeta=>tarjeta.title==evento.target.parentElement.parentElement.querySelector('.card_title').textContent)
            modal.style.display='flex'
            console.log(seleccionado)
            const modalbody=document.querySelector('.modal_header')
            modalbody.innerHTML=`<div class="card">
            <div class="card_title"><h2>${seleccionado[0].title}</h2></div>
            <img class="card_imagen" src="${seleccionado[0].image}" alt="#">
            <div class="card_text"><p>${seleccionado[0].description}</p></div>
            <div><h3>$${seleccionado[0].price}</h3></div>
            <div class="btns">
            <div ><button class="card_btn" id="btn${seleccionado[0].id}">Comprar</button></div>
            <div ><button class="card_btn2" id="btn${seleccionado[0].id}">Cancelar</button></div>
            </div>
            </div>`
        }
    })
    modal.addEventListener('click', (evento)=>{
        if(evento.target.classList.contains('card_btn2')){
            cerrarModal()
        }else if(evento.target.classList.contains('card_btn')){
            if(confirm(`seguro que desea comprar ${seleccionado[0].title}`)){
                localStorage.setItem('producto',JSON.stringify(seleccionado))
                location.assign('../html/compra.html')
            }
        }
    })
}
traer()
function cerrarModal(){
    modal.style.display= 'none';
}
