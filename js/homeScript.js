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
let boxes = document.querySelectorAll(".box");
boxes.forEach(box => {
   box.addEventListener("click", (e)=>{
       boxes.forEach(box=>{
           box.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        targetDescription=e.currentTarget.dataset.content;
        let boxesDescription =document.querySelectorAll(".box-description");
        boxesDescription.forEach(box=>{
            box.style.display="none";
        if(box.dataset.content===targetDescription){
            box.style.display="flex";
        }
    });
   }); 
});