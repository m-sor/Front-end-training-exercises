const optionMenu =  document.querySelector(".select-menu"),
      selectBtn=optionMenu.querySelector('.select-btn'),
      options=optionMenu.querySelectorAll(".option"),
      sBtn_text=optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click",()=>optionMenu.classList.toggle("active"));
     


options.forEach(option =>{
    option.addEventListener("click",()=>{
       let selectedoption =  option.querySelector(".option-text").innerText;
       sBtn_text.innerText=selectedoption;
    
     console.log(selectedoption)
     optionMenu.classList.remove("active");
})
});


