var results= ''
var query = ''
var req = ''
var playerId = ''

btnLogin.onclick=function(){
  let verifyUser = inptUsername.value
  let verifyPassword = inptPassword.value
  let queryAlreadyUser = "SELECT player_id FROM player WHERE user_name = " + '"' + verifyUser + '"'
  let query = "SELECT user_name, password FROM player WHERE user_name = " + '"' + verifyUser + '"' + "AND password = " + '"' + verifyPassword + '"'
  req = Ajax('https://ormond.creighton.edu/courses/375/ajax-connection.php', 'POST', 'host=ormond.creighton.edu&user=jdb41193&pass=hemsac-jixgIr-dycja1&database=375groupa1&query=' + query)

  if (req.status==200) {
      results=JSON.parse(req.responseText) //maybe change name of result
      if (results.length==0) {
          NSB.MsgBox('Username and/or password is incorrect')
          } else {
              req = Ajax('https://ormond.creighton.edu/courses/375/ajax-connection.php', 'POST', 'host=ormond.creighton.edu&user=jdb41193&pass=hemsac-jixgIr-dycja1&database=375groupa1&query=' + queryAlreadyUser)
              if (req.status == 200) {
                playerId = JSON.parse(req.responseText)
                ChangeForm(courseSelection)
              } else {
                message2 = 'Error1'
                lblCredentials.value = message2
                }
            }
      } else {
        message3 = 'Error2'
        lblCredentials.value = message3
      } 
    
}

Button2.onclick=function(){
  ChangeForm(SignUp)
}
