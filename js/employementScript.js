// let inputDate = document.querySelector("input[type='datetime-local']");
// inputDate.addEventListener("click" , (e)=>{
//     this.previousSibling.value=inputDate.value
// })
let inputFile = document.querySelectorAll("input[type='file']");
inputFile.forEach(input=>{
    input.addEventListener("click" , (e)=>{
            e.target.style.opacity="1";
            if(e.target.previousSibling !==""){
                e.target.previousSibling.remove();
            }
    });
});

let selectFields = document.querySelectorAll(".dropdown-list select");
selectFields.forEach(select => {
    select.addEventListener("click", (e)=>{
        if(e.target.value){
            let textInpit = e.target.previousSibling;
            if(textInpit!==""){
                textInpit.remove();
            }
            e.target.style.opacity="1";
        }
        
    });
});
flatpickr("input[type='datetime-local']", {});