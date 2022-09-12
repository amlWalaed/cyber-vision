let toggleMenu = document.querySelector(".toggle-menu");
let linksList = document.querySelector(".links");
toggleMenu.addEventListener("click" , (e)=>{
    e.stopPropagation();
    toggleMenu.classList.toggle("open")
    linksList.classList.toggle("open")
});
linksList.addEventListener("click" , (e)=>{
    this.stopPropagation();
})
document.addEventListener("click" , (e)=>{
    if(e.target !== toggleMenu && e.target !== linksList){
        if(toggleMenu.classList.contains("open"))
        {
            toggleMenu.classList.remove("open");
            linksList.classList.remove("open");
        }
    }
});
let cards=document.querySelectorAll(".our-challenges .content .card ");

cards.forEach(card=>{
    console.log(card.style.backgroundImage)
    card.style.backgroundImage= `url(${card.children[1].src})`;
});