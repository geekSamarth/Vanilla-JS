const trigger = document.querySelector("#trigger");

function changeType() {
  if (trigger.innerHTML === "Show Password") {
    const showPassword = (document.getElementById("showPassword").type =
      "text");
    trigger.innerHTML = `Hide Password`;
    showPassword.value = "";
  } else {
    const showPassword = (document.getElementById("showPassword").type =
      "password");
    trigger.innerHTML = `Show Password`;
    showPassword.value = "";
  }
}

trigger.addEventListener("click", function (e) {
  e.preventDefault();
  changeType();
});
