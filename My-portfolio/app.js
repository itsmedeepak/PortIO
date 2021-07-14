// Showing menu
const toggle=document.querySelector('.nav-toggle-btn');


toggle.addEventListener('click',function(){
    const add_class=document.querySelector('.nav-menu');
    const del=document.querySelector('.show-menu');
    if(del==null){
        add_class.classList.add('show-menu');
    }
    else{
        add_class.classList.remove('show-menu');
    }
})

