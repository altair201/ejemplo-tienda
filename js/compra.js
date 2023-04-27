




async function traer(){
    const container_card=document.querySelector('.container_card')
    const volver=document.querySelector('.container_btn')
    let dato=localStorage.getItem('producto')
    dato=JSON.parse(dato)
    console.log(dato);
    container_card.innerHTML=`<div class="card">
            <div class="card_title"><h2>${dato[0].title}</h2></div>
            <img class="card_imagen" src="${dato[0].image}" alt="#">
        
            <div><h3>$${dato[0].price}</h3></div>
            
            </div>
            </div>`       
    
    volver.addEventListener('click', function(){
        location.assign("../principal.html/principal.html")
    })

    
}
traer()
