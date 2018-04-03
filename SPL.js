const quizAnswers = [
    {
     "a": "Hay tantas personas cuando necessitamos escoger solo una",
     "b": "No hay una fecha limite",
     "c": "Nadie sabe lo que quiere",
     "d": "Podr&iacute;a ser riesgoso"
     },
 ];
 
 var answer = " ";
 var finalAnswer = "";
 var display = "";
 
 function buildAnswers(){
  for(var i = 0; i < quizAnswers.length; i++) {
    answer = quizAnswers[i];
    finalAnswer = Object.values(answer); 
  }
  var output = [];
       for(var value of finalAnswer) {
         output += 
            `<div>
                <label>
                 <input type = "radio" value = "${value}"/> 
                     ${value}
                 </label>
           </div>`;
  }
   console.log(document.getElementById("valuesHere").innerHTML = output);
 }
 
  