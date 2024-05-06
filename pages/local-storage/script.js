function save() {
  const email = document.getElementById("email").value;

  // Save the email above email to local storage
  localStorage.setItem('Email', JSON.stringify(email));
}

function display() {
  // ==change code only here== //
  const email = localStorage.getItem('Email'); // get an email from local storage to
  // ==change code only here== //


  const display = document.getElementById("display-email");
  display.innerHTML = email;
}
