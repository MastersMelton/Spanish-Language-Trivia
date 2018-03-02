<script>

const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

const myQuestions = [
    {
        question: "Seg&uacute;n el art&iacute;culo, La Monogamia, &iquest;qu&eacute; es la problema con las aplicaciones de citas como Bumble?",
        answers: {
            a: "Hay tantas personas cuando necessitamos escoger solo una",
            b: "No hay una fecha limite",
            c: "Nadie sabe lo que quiere",
            d: "Podr&iacute;a ser riesgoso"
        },
        correctAnswer: "a"
    },
    {
        question: "En la historia, La Monogamia, &iquest;qui&eacute;n espera al personaje prinicipal con los brazos cruzados?",
        answers: {
            a: "El novio",
            b: "Su mama",
            c: "La aplicaci&oacute;n de citas, Bumble",
            d: "Nadie"
        },
        correctAnswer: "c"
    },
    {
        question: "La canci&oacute;n de Monsieur Perine habla de una relaci&oacute;n que:",
        answers: {
            a: "Ya esta terminada",
            b: "Empieza",
            c: "Nunca ha sido",
            d: "No existe"
        },
        correctAnswer: "a"
    }
];

function buildQuiz(){
  
const output = [];

myQuestions.forEach(
    (currentQuestion, questionNumber) => {

        const answers = [];

        for(letter in currentQuestion.answers) {

            answers.push(
                `<label>
                    <input type="radio" name="questions${questionNumber}" value="${letter}"/>
                    ${letter} : 
                    ${currentQuestion.answers[letter]}  
              </label>`
            );
        }
      
        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
        );
    }
);

        quizContainer.innerHTML = output.join('');
}

function showResults(){

    const answerContainers = quizContainer.querySelectorAll(`.answers`);

    let numCorrect = 0;

    myQuestions.forEach( (currentQuestion, questionNumber) => {

        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if(userAnswer===currentQuestion.correctAnswer){
            numCorrect++;
          
          answerContainers[questionNumber].style.color = "green";
        } else {
          answerContainers[questionNumber].style.color = "red";
        }
          
    });
    resultsContainer.innerHTML = ` You got ${numCorrect} out of ${myQuestions.length}`;
}

</script>