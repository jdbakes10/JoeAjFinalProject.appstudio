
btnSignUP.onclick=function(){
  let newFirstName = inptSignUpFirst.value
  let newLastName = inptSignUpLast.value
  let newPhone = inptSignUpPhone.value
  let newUserName = inptSignUpUser.value
  let newPassword = inptSignUpPass.value
  
  query = "INSERT INTO player (`first_name`, `last_name`, `phone`, `user_name`, `password`) VALUES ('" + newFirstName + "','" + newLastName + "','" + newPhone + "','" + newUserName + "','" + newPassword + "')"
  req= Ajax('https://ormond.creighton.edu/courses/375/ajax-connection.php', 'POST', 'host=ormond.creighton.edu&user=jdb41193&pass=hemsac-jixgIr-dycja1&database=375groupa1&query=' + query)
  
  if (req.status==200){
  //console.log(req.responseText)
      if(req.responseText==500){
          //lblSignUpWork.value = "Account created!"
          ChangeForm(login)
      } else
           lblSignUpWork.value = "Error"
  } else 
          lblSignUpWork.value = "Error with connection"
}

btnReturnLogin.onclick=function(){
  ChangeForm(login)
}