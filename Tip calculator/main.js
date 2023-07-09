// logic for enabling dark mode

const trigger = document.querySelector("#trigger");

function changeMode() {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    console.log('switching of the modes of appearance')
    trigger.src = './Images/sun.png';
  } else {
    trigger.src = './Images/moon.png';
  }
}
trigger.addEventListener("click", function (e) {
  e.preventDefault();
  changeMode();
});

//  logic for tip calculator working
