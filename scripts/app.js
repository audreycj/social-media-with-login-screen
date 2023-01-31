/* ========== VALIDATE CREDENTIALS ============= */
function validate() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username == "admin" && password == "1234") {
      window.location.href = "newsfeed.html";
      return false;
  } else {
      alert ("Login unsuccessful.");
  }
}


/* ========== CLICK COUNTER ============= */
function react(id) {
  let hearts = document.getElementById("heart-count-" + id).innerText;
  let totalHearts = parseFloat(hearts);
  if (hearts === '') {
    document.getElementById("heart-count-" + id).innerText = '1';
  } else {
    document.getElementById("heart-count-" + id).innerText = totalHearts + 1;
  }
}
