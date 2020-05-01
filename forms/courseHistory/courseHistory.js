

courseHistory.onshow=function(){
  query = "SELECT * FROM course"
  req= Ajax('https://ormond.creighton.edu/courses/375/ajax-connection.php', 'POST', 'host=ormond.creighton.edu&user=jdb41193&pass=hemsac-jixgIr-dycja1&database=375groupa1&query=' + query)
  if (req.status == 200){
    courses=JSON.parse(req.responseText)
    coursesSelection = courses
  
    if(courses.length==0){
      NSB.MsgBox("There are no courses.")
      } else {
          for(i=0;i <= courses.length -1; i++){
          drpCourseHistory.addItem(courses[i][1])
          }
          }
          } else {
            NSB.MsgBox(`Error code: ${req.status}.`)
          }
          
 }
 
 


drpCourseHistory.onclick=function(s){
  if (typeof(s) == "object") {
  return
  } else {
    drpCourses.value = s
    courseName = drpCourseHistory.selection
    query = "SELECT course_id FROM course WHERE course_name = " + '"' + courseName + '"'
    req= Ajax('https://ormond.creighton.edu/courses/375/ajax-connection.php', 'POST', 'host=ormond.creighton.edu&user=jdb41193&pass=hemsac-jixgIr-dycja1&database=375groupa1&query=' + query)
    if (req.status == 200){
    courseId = JSON.parse(req.responseText)
          } else {
            NSB.MsgBox(`Error code: ${req.status}.`)
          }
}
}



btnResults.onclick=function(){
  let lastRoundsFront = ''
  let lastRoundsBack = ''
  let roundsArrayBack = ''
  let roundsArrayFront = ''
  query = "SELECT front_score FROM round WHERE player_id = " + '"' + playerId + '"' + "AND course_id = " + '"' + courseId + '"'
  req= Ajax('https://ormond.creighton.edu/courses/375/ajax-connection.php', 'POST', 'host=ormond.creighton.edu&user=jdb41193&pass=hemsac-jixgIr-dycja1&database=375groupa1&query=' + query)
  if (req.status == 200) {
    lastRoundsFront = JSON.parse(req.responseText)
    roundsArrayFront = lastRoundsFront
      if (lastRoundsFront.length == 0){
        NSB.MsgBox('No data for course')
      } else {
        let message = 'Front nines:'
          
        message = message + roundsArrayFront
          txtHistoryFront.value = message
              
            }
          } else {
            NSB.MsgBox('Error5')
          }
  query = "SELECT back_score FROM round WHERE player_id = " + '"' + playerId + '"' + "AND course_id = " + '"' + courseId + '"'
  req= Ajax('https://ormond.creighton.edu/courses/375/ajax-connection.php', 'POST', 'host=ormond.creighton.edu&user=jdb41193&pass=hemsac-jixgIr-dycja1&database=375groupa1&query=' + query)
  if (req.status == 200) {
    lastRoundsBack = JSON.parse(req.responseText)
    roundsArrayBack = lastRoundsBack
      if (lastRoundsBack.length == 0){
        NSB.MsgBox('No data for course')
      } else {
        let message2 = 'Back nines:'
          
        message2 = message2 + roundsArrayBack
          txtHistoryBack.value = message2
              
            }
          } else {
            NSB.MsgBox('Error5')
          }     
      }
  


btnEnterScore.onclick=function(){
  ChangeForm(courseSelection)
}
