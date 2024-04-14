// hide answers of faqs

const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq =>{
    faq.addEventListener('click',() => {
         faq.classList.toggle('open'); 
    })
})