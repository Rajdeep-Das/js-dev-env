import './index.css'
import { deleteUser, getUser } from "./api/userApi";

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

  const deletLinks = global.document.getElementsByClassName('deleteUser');

  Array.from(deletLinks, link => {
    link.onclick = function(evenet) {
      const element = event.target;
      evenet.preventDefault();
      deleteUser(element.attributes["data-id"].value);
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row);
    }
  });

});
