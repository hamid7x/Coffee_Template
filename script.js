
let nav = document.querySelectorAll('.main-nav a');
console.log(nav);

nav.forEach((link) => {
    link.addEventListener('click', function(){
        link.classList.remove('active');
        // this.classList.add('active');
    });
});

// search section
let toogleSearch = document.querySelector('.search');
let searchBox=document.querySelector('.search-box');

toogleSearch.addEventListener('click',function(){
   searchBox.style.display="block";
   searchBox.style.bottom='-30px';
})
//Scroll Section

let span = document.querySelector('.up');

window.addEventListener('scroll',function(){
    this.scrollY >= 1000 ? span.classList.add('show') : span.classList.remove('show');

})

span.addEventListener('click',function(){
    window.scrollTo({
        top:0,
    });
});



// Menu Section
let toggler = document.querySelector('.toggle-menu');
let menu = document.querySelector('.main-nav');

toggler.addEventListener('click',function(){
    menu.classList.add('menu-hide');
})


// Header Section
let links = document.getElementsByClassName('black');
let head=document.querySelector('header');
let booking=document.getElementsByClassName('book-ico');
let search=document.querySelector('.search');
console.log(search);
let dark=document.querySelector('.dark')
console.log(dark)
window.addEventListener('scroll',function(){
    if(this.scrollY > 0){
       head.classList.add('header-background');
       menu.classList.add('white-background');
       for(let i=0;i<links.length;i++){
        links[i].classList.add('black-color');
       }
       for(let i=0;i<booking.length;i++){
           booking[i].classList.add('icon-book')
       }
       search.classList.add('icon');
       dark.classList.add('icon');
    }
    else{
        head.classList.remove('header-background');
        menu.classList.remove('white-background');
        for(let i=0;i<links.length;i++){
            links[i].classList.remove('black-color');
           }
        for(let i=0;i<booking.length;i++){
            booking[i].classList.remove('icon-book')
        }
        search.classList.remove('icon');
        dark.classList.remove('icon');
    }
});

// Ourcoffee Section

let switchers = document.querySelectorAll('.switchers .box');
console.log(switchers);

switchers.forEach((box) => {
    box.addEventListener('click', function(){
        switchers.forEach((box) => {
            box.classList.remove('active');
            this.classList.add('active');
            
        });
    });
});
let content = document.querySelectorAll('.holder-content .box');


switchers.forEach((s) => {
    s.addEventListener('click',function(){
        content.forEach((box)=>{
            box.style.display='none';
            document.querySelector(this.dataset.cat).style.display='flex';
    
            
            
        })
    });
});
