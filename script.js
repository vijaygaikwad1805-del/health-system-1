async function register() {
  const res = await fetch("https://health-system-1-j2hi.onrender.com/register", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value
    })
  });

  alert("Registered Successfully");
}

async function login() {
  const res = await fetch("https://health-system-1-j2hi.onrender.com/login", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      email: document.getElementById("email").value,
      password: document.getElementById("password").value
    })
  });

  const data = await res.text();

  if(data === "Success"){
    window.location.href = "dashboard.html";
  } else {
    alert("Wrong email or password");
  }
}
