const content = document.getElementById("content");
const themeToggler = document.getElementById("theme-toggler");


// lengthy approach

// function themeChanger(){
//     if(themeToggler.src.match('moon'))
//     {
//         themeToggler.src = './Images/sun.png';
//         content.classList.toggle('dark');
//     }
//     else
//     {
//         themeToggler.src='./Images/moon.png';
//         content.classList.toggle('dark');
//     }
// }

// themeToggler.addEventListener('click',function(e){
//     e.preventDefault();
//     themeChanger();
// })

// optimized approach

themeToggler.onclick = function(){
    content.classList.toggle('dark');
    if(content.classList.contains('dark')){
        themeToggler.src = './Images/sun.png';
    }
    else{
        themeToggler.src = './Images/moon.png';
    }
}
