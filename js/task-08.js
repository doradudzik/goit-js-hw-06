const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  const user = {
    email: `${email.value}`,
    password: `${password.value}`,
  };

  if (email.value === "" || password.value === "") {
    // return console.log("Please fill in all the fields!");
    const message = "Please fill in all the fields!";
    return alert(message);
  }

  console.log(user);

  event.currentTarget.reset();
}
