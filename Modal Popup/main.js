const modalWrapper = document.querySelector('.modal_wrapper');
const trigger = document.querySelector('#trigger');
const closeBtn = document.querySelector('.close');

function openModal(){
    modalWrapper.classList.add('active');
} 
function closeModal(){
    modalWrapper.classList.remove('active');
}

trigger.addEventListener('click',function(){
    openModal();
})

closeBtn.addEventListener('click',function(){
    closeModal();
})

modalWrapper.addEventListener('click',function(e){
    if(e.target !==this) return;
    closeModal();
})

document.addEventListener('keydown',function(e){
if(e.key === 'Escape')
{
    closeModal();
}
})