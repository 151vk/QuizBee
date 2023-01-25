const quizData = [
    
{
        question: "1.Indian Navy Act was passed on ?",
        a: "1921",
        b: "1925",
        c: "1927",
        d: "1930",
        correct: "c",
},
{
        question: "2.The Indus Valley houses were built of ?",
        a: "Bamboos",
        b: "Wood",
        c: "Bricks",
        d: "stone",
        correct: "c",
},
{
        question: "3.The last Mughal Emperor was ?",
        a: "Akbar",
        b: "Babur",
        c: "Bahadur Shah",
        d: "Noor Jehan",
        correct: "c",
},
{
        question: "4.Aryans lived in ",
        a: "Maharashtra",
        b: "South India",
        c: "Gangetic Valley",
        d: "Central India",
        correct: "c",
},
{
        question: "5.The musical instruments used by the Aryans was ?",
        a: "The Drum",
        b: "The Lute",
        c: "The cymbal",
        d: "All the above",
        correct: "d",
},
{
        question: "6.Chanakya was known as ?",
        a: "Vishnugupta",
        b: "Visakhadatta",
        c: "Bhattasvamin",
        d: "Rajasekhara",
        correct: "a",
},
{
        question: "7.Mahabharata war took place in ?",
        a: "500 AD",
        b: "900 BC",
        c: "1000 BC",
        d: "1200 BC",
        correct: "b",
},
{
        question: "8.India derives its name from ?",
        a: "The Hindus",
        b: "Lord Indra",
        c: "The Aryans",
        d: "The River Indus",
        correct: "d",
},
{
        question: "9.Sea route in India was discovered by ?",
        a: "Columbus",
        b: "Amundsen",
        c: "Vasco da gama",
        d: "None of these",
        correct: "d",
},
{
        question: "10.Babar entered India for the first time through ?",
        a: "Sind",
        b: "Punjab",
        c: "Kashmir",
        d: "Rajasthan",
        correct: "b",
},{
        question: "11.Taj Mahal is on the banks of",
        a: "Tapti",
        b: "Ganges",
        c: "Jamuna",
        d: "Cauvery",
        correct: "c",
},
{
        question: "12.World's first oil paintings have been found in which of the following countries?",
        a: "Afghanistan",
        b: "Iran",
        c: "Pakistan",
        d: "India",
        correct: "a",
},
{
        question: "13.Who was the first ruler to issue Pure Arabic coin in India?",
        a: "Mohammad Ghori",
        b: "Qutubuddin Aibak",
        c: "Razia Sultan",
        d: "Iltutmish",
        correct: "d",
},
{
        question: "14.In which year, first nationwide elections were held in Afghanistan?",
        a: "1952",
        b: "1958",
        c: "1965",
        d: "1968",
        correct: "c",
},
{
        question: "15.The first Buddhist Council was held in the reign of ?",
        a: "Ajatashatru",
        b: "Bimbisara",
        c: "Ashoka",
        d: "Kanishka",
        correct: "a",
},
{
        question: "16.World War I began in which year?",
        a: "1923",
        b: "1914",
        c: "1920",
        d: "1917",
        correct: "b",
},
{
        question: "17.In which year did India get independence from Britain?",
        a: "1944",
        b: "1945",
        c: "1946",
        d: "1947",
        correct: "d",
},
{
        question: "18.The ancient Egyptians used to sleep on pillows made of ",
        a: "Stones",
        b: "Gold",
        c: "Cotton",
        d: "Iron",
        correct: "a",
},
{
        question: "19.Adolf Hitler was born in which country ? ",
        a: "France",
        b: "Germany",
        c: "Austria",
        d: "Hungary",
        correct: "c",
},
{
        question: "20.When East India Company was came into existence, England was ruled by ?",
        a: "Hanovarians",
        b: "Stuarts",
        c: "Normans",
        d: "None of the above",
        correct: "c",
},


];

const quiz=document.getElementById('quiz')
const answerEls=document.querySelectorAll('.answer')
const questionEL=document.getElementById('question')
const a_text=document.getElementById('a_text')
const b_text=document.getElementById('b_text')
const c_text=document.getElementById('c_text')
const d_text=document.getElementById('d_text')
const submitBtn=document.getElementById('submit')

let currentQuiz =0
let score =0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEL.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answerEl
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer){
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML= `
            <h2>You answered ${score}/${quizData.length} question correctly</h2>

            <button onclick="location.reload()">Reload</button>
            `
        }
    }
    if(currentQuiz == quizData.length)
        {
                setTimeout(function(){
                        if(confirm("Your quiz has ended"))
                                window.location.href="land index.html";
                        },3000);
        }
})