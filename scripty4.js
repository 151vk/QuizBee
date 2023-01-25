const quizData = [
    
{
        question: "1.Which is the tallest mountain in the world?",
        a: "Karakoram",
        b: "Mount Arvon.",
        c: "Mount Everest",
        d: "Cho Oyu",
        correct: "c",
},
{
        question: "2.Which country has the highest population?",
        a: "India",
        b: "China",
        c: "Sri Lanka",
        d: "Australia",
        correct: "b",
},
{
        question: "3.Which is the longest river in the world?",
        a: "Nail",
        b: "Amazon",
        c: "Yangtze",
        d: "Kanga",
        correct: "a",
},
{
        question: "4.Which is the largest desert in the world?",
        a: "Kalahari",
        b: "Sahara",
        c: "Patagonia",
        d: "Somalian",
        correct: "b",
},
{
        question: "5.Which is the coldest continent in the world?",
        a: "Antarctica",
        b: "Asia",
        c: "Europe",
        d: "Oceania",
        correct: "a",
},
{
        question: "6.Which planet is closest to Planet Earth",
        a: "Venus",
        b: "Neptune",
        c: "Jupiter",
        d: "Uranus",
        correct: "a",
},
{
        question: "7.Name the river that is not crossed by any bridges.",
        a: "Yamuna",
        b: "Amazon",
        c: "Nail",
        d: "Kaveri",
        correct: "b",
},
{
        question: "8.Name the city that is located in two countries.",
        a: "Istanbul",
        b: "Beijing",
        c: "Hamburg",
        d: "Milan",
        correct: "a",
},
{
        question: "9.Which is the longest National Highway in India?",
        a: "NH-10",
        b: "NH-2",
        c: "NH-1",
        d: "NH-44",
        correct: "d",
},
{
        question: "10.Which of the following is the world’s largest peninsula?",
        a: "Sri-Lanka",
        b: "South-Africa",
        c: "Arabia",
        d: "India",
        correct: "c",
},
{
        question: "11.Which is the smallest ocean in the world",
        a: "Arctic",
        b: "Indian",
        c: "Pacific",
        d: "Atlantic",
        correct: "a",
},
{
        question: "12.What is the hottest continent on Earth?",
        a: "Asia",
        b: "Africa",
        c: "Europe",
        d: "North-America",
        correct: "b",
},
{
        question: "13. Which state of India is called the Sugar Bowl?",
        a: "Punjab",
        b: "Haryana",
        c: "Bihar",
        d: "Uttar Pradesh",
        correct: "d",
},
{
        question: "14. Where is the Central Drug Research Institute of India is located?",
        a: "Delhi",
        b: "Banglore",
        c: "Lucknow",
        d: "Chennai",
        correct: "c",
},
{
        question: "15.Who is the father of the solar system?",
        a: "Earth",
        b: "Venus",
        c: "Saturn",
        d: "Sun",
        correct: "d",
},
{
        question: "16.Which of the following is a star?",
        a: "Sun",
        b: "Moon",
        c: "Venus",
        d: "Earth",
        correct: "a",
},
{
        question: "17.What is a small celestial body revolving around a planet?",
        a: "Tailed star",
        b: "Planets",
        c: "Satellite",
        d: "All these",
        correct: "c",
},
{
        question: "18.With which country, India has the longest international boundary?",
        a: "Bangladesh",
        b: "China",
        c: "Pakistan",
        d: "Nepal",
        correct: "a",
},
{
        question: "19. Which one of the major source of irrigation in India?",
        a: "Canals",
        b: "Tanks",
        c: "Wells and Tubewells",
        d: "Other source",
        correct: "c",
},
{
        question: "20. Who is the father of geography?",
        a: "Herodotus",
        b: "Eratosthenes",
        c: "Hipparkus",
        d: "None of these",
        correct: "b",
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