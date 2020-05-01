
let courses = ""
let coursesSelection = []
let courseName = ""
let courseId = ""

courseSelection.onshow=function(){
  query = "SELECT * FROM course"
  req= Ajax('https://ormond.creighton.edu/courses/375/ajax-connection.php', 'POST', 'host=ormond.creighton.edu&user=jdb41193&pass=hemsac-jixgIr-dycja1&database=375groupa1&query=' + query)
  if (req.status == 200){
    courses=JSON.parse(req.responseText)
    coursesSelection = courses
  
    if(courses.length==0){
      NSB.MsgBox("There are no courses.")
      } else {
          for(i=0;i <= courses.length -1; i++){
          drpCourses.addItem(courses[i][1])
          }
          }
          } else {
            NSB.MsgBox(`Error code: ${req.status}.`)
          }
          
 }
 
 
 
drpCourses.onclick=function(s){
  
  if (typeof(s) == "object") {
  return
  } else {
    drpCourses.value = s
    courseName = drpCourses.selection
    query = "SELECT course_id FROM course WHERE course_name = " + '"' + courseName + '"'
    req= Ajax('https://ormond.creighton.edu/courses/375/ajax-connection.php', 'POST', 'host=ormond.creighton.edu&user=jdb41193&pass=hemsac-jixgIr-dycja1&database=375groupa1&query=' + query)
    if (req.status == 200){
      courseId = JSON.parse(req.responseText)
    
          } else {
            NSB.MsgBox(`Error code: ${req.status}.`)
          }
}
}


btnSubmit.onclick=function(){
  let frontNine = inptFrontScore.value
  let backNine = inptBackScore.value
  query = "INSERT INTO round (front_score, back_score, player_id, course_id) VALUES ('" + frontNine + "', '" + backNine + "', '" + playerId + "', '" + courseId + "')"
  req= Ajax('https://ormond.creighton.edu/courses/375/ajax-connection.php', 'POST', 'host=ormond.creighton.edu&user=jdb41193&pass=hemsac-jixgIr-dycja1&database=375groupa1&query=' + query)
  if (req.status==200) {
    ChangeForm(courseHistory)
  } else {
    NSB.MsgBox(`FORE`)
    }
}

btnGoToHistory.onclick=function(){
  ChangeForm(courseHistory)
}
