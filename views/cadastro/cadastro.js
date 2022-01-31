function load () {
  var elem = document.getElementById('success');
  elem.style.visibility = 'hidden'
}

function createUser() {
  event.preventDefault();
  ({ userName, userEmail, userLogin, userPassword, userRole } = getValues());

  let headersList = {
    "Accept": "*/*",
    "Content-Type": "application/json"
    }
  fetch("/api/seguranca/register", {
      method: "POST",
      body: `{\"nome\": \"${userName}\", \"email\": \"${userEmail}\", \"login\": \"${userLogin}\", \"senha\": \"${userPassword}\",\"role\": \"${userRole}\"}`,
      headers: headersList
  }).then(response => {
      return response.json();
  }).then(data => {
      console.log(data)
        if (data.id > 0 ) {
         var elem = document.getElementById('success');
         elem.style.visibility = 'visible'
          setTimeout(() => { window.location = '/' }, 2300);
        }
  }).catch(err => console.log(err));
}

function getValues() {
  let userName = document.getElementById('name').value;
  let userEmail = document.getElementById('email').value;
  let userLogin = document.getElementById('login').value;
  let userPassword = document.getElementById('senha').value;
  var e = document.getElementById("field_ID");  
  var selected_value = e.options[e.selectedIndex].label;
  let userRole = selected_value;

  return { userName, userEmail, userLogin, userPassword, userRole }
}


