window.addEventListener('DOMContentLoaded',()=>{
    const inputs = document.querySelectorAll('input')
    inputs.forEach((input)=>{
        input.addEventListener("focusin",(e)=>{
            const label = input.previousElementSibling.previousElementSibling
            label.classList.remove('translate_down')
            label.classList.add('translate_up')
        })

        input.addEventListener("blur",()=>{
            const label = input.previousElementSibling.previousElementSibling
            //console.log("here")
            label.classList.remove('translate_up')
            label.classList.add('translate_down')
        })
    })


})