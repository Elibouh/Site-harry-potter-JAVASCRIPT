let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let errorContainer = document.querySelector(".message-error");
  let errorList = document.querySelector(".message-error ul");
  let success = document.querySelector(".message-success");

  errorList.innerHTML = "";
  errorContainer.classList.remove("visible");
  let nom = document.querySelector("#nom");
  let prenom = document.querySelector("#prenom")
  let email = document.querySelector("#email");
  let password = document.querySelector("#password");
  let password2 = document.querySelector("#password2");
  let select = document.querySelector("#select");

  if (nom.value === "") {
    errorContainer.classList.add("visible");
    nom.classList.remove("success");
    let err = document.createElement("li");
    err.innerText = "Le champ nom ne peut pas être vide.";
    errorList.appendChild(err);
  } else if (prenom.value === "") {
    errorContainer.classList.add("visible");
    prenom.classList.remove("success");
    let err = document.createElement("li");
    err.innerText = "Le champ prénom ne peut pas être vide.";
    errorList.appendChild(err);
  } else if (email.value === "") {
    errorContainer.classList.add("visible");
    email.classList.remove("success");
    let err = document.createElement("li");
    err.innerText = "Le champ email ne peut pas être vide.";
    errorList.appendChild(err);
  } else if (password.value === "") {
    errorContainer.classList.add("visible");
    password.classList.remove("success");
    let err = document.createElement("li");
    err.innerText = "Le champ mot de passe ne peut pas être vide.";
    errorList.appendChild(err);
  } else if (password2.value === "") {
    errorContainer.classList.add("visible");
    password2.classList.remove("success");
    let err = document.createElement("li");
    err.innerText = "Le champ confirmation du mot de passe ne peut pas être vide.";
    errorList.appendChild(err);
  } else if (select.value === "") {
    errorContainer.classList.add("visible");
    select.classList.remove("success");
    let err = document.createElement("li");
    err.innerText = "Le champ du choix d'axe ne peut pas être vide.";
    errorList.appendChild(err);
  }
  
  else {
    success.classList.add("visible");
  }
});
