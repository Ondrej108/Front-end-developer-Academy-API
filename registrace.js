// PASSWORD VALIDATION

const pass1 = document.getElementById("passForm1");

const pass2 = document.getElementById("passForm2");

const checkPasswords = () => {
  if (!pass1 || !pass2) return;
  if (pass1.value === "" && pass2.value === "") {
    pass1.style.borderColor = "";
    pass2.style.borderColor = "";
    return;
  }
  if (pass1.value === pass2.value) {
    pass1.style.borderColor = "green";
    pass2.style.borderColor = "green";
  } else {
    pass1.style.borderColor = "red";
    pass2.style.borderColor = "red";
  }
};

if (pass1 && pass2) {
  pass1.addEventListener("input", checkPasswords);
  pass2.addEventListener("input", checkPasswords);
}

// BUTTON BACK TO MAIN
const regButton = document.getElementById("regBtn");

regButton.addEventListener("click", () => {
  window.location.href = "main.html";
});
