const smImg = document.querySelector("#s-img-1");
const smImg_2 = document.querySelector("#s-img-2");
const mainImg = document.querySelector("#mainImage");
const orderForm = document.querySelector("#orderForm");
const qtySelect = document.querySelector("#qtySelect");

smImg.addEventListener("click", ()=>{
    let mainImage = mainImg.src;
    mainImg.src = smImg.src;
    smImg.src = mainImage;
    
})

smImg_2.addEventListener("click", ()=>{
    let mainImage = mainImg.src;
    mainImg.src = smImg_2.src;
    smImg_2.src = mainImage;
    
})

orderForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    let orderQty = qtySelect.value;
    console.log(orderQty);
})