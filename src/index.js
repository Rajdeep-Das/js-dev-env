import './index.css'
import { getUser } from "./api/userApi";

// getUser user via API Call
getUser().then(res => {
  let userBody = "";
  res.forEach(user =>{
    userBody+= `<tr>
    <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
    <td>${user.firstName}</td>
    <td>${user.lastName}</td>
    <td>${user.email}</td>
    `
  });

  global.document.getElementById('users').innerHTML = userBody;

});
