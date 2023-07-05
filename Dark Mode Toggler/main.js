const content = document.getElementById("content");
const themeToggler = document.getElementById("theme-toggler");

function themeChanger(){
    if(themeToggler.src.match('moon'))
    {
        themeToggler.src = './sun.png';
        content.classList.toggle('dark');
    }
    else
    {
        themeToggler.src='./moon.png';
        content.classList.toggle('dark');
    }
}

themeToggler.addEventListener('click',function(e){
    e.preventDefault();
    themeChanger();
})
