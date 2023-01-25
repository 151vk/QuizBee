const quizData = [
    
{
        question: "1.India has largest deposits of ____ in the world?",
        a: "gold",
        b: "copper",
        c: "mica",
        d: "None of the above",
        correct: "d",
},
{
        question: "2.Name the folk dance of Andhra Pradesh?",
        a: "Kuchipudi",
        b: "Vilasini Natyam",
        c: "Andhra Natyam",
        d: "All of the above",
        correct: "d",
},
{
        question: "3.Name the Father of the Indian Constitution?",
        a: "B. R. Ambedkar",
        b: "Vallabhbhai Patel ",
        c: "Jawaharlal Nehru ",
        d: "A. P. J. Abdul Kalam",
        correct: "a",
},
{
        question: "4.Name the deepest ocean in the world?",
        a: "Arctic Ocean",
        b: "Pacific Ocean",
        c: "Atlantic Ocean",
        d: "Indian Ocean",
        correct: "b",
},
{
        question: "5.Which day is celebrated as Environment Day?",
        a: "6 September",
        b: "2 August",
        c: "5 June",
        d: "10 January",
        correct: "c",
},
{
        question: "6.Which country gifted the 'statue of Liberty' to USA in 1886?",
        a: "France",
        b: "Canada",
        c: "Brazil",
        d: "England",
        correct: "a",
},
{
        question: "7.In which ocean 'Bermuda Triangle' region is located?",
        a: "Indian",
        b: "Pacific",
        c: "Atlantic",
        d: "Arctic",
        correct: "c",
},
{
        question: "8.Total number of oceans in the world is?",
        a: "3",
        b: "5",
        c: "7",
        d: "12",
        correct: "b",
},
{
        question: "9.What is the currency of Iraq?",
        a: "Euro",
        b: "Rupees",
        c: "Iraqi Dinar",
        d: "US Dollar",
        correct: "c",
},
{
        question: "10.The language spoken by the people by Pakistan is ?",
        a: "Hindi",
        b: "Palauan",
        c: "Sindhi",
        d: "Nauruan",
        correct: "c",
},{
        question: "11.The World Largest desert is ?",
        a: "Sahara",
        b: "Sonoran",
        c: "Kalahari",
        d: "Thar",
        correct: "a",
},
{
        question: "12.The metal whose salts are sensitive to light is ?",
        a: "Zinc",
        b: "Silver",
        c: "Copper",
        d: "Aluminium",
        correct: "b",
},
{
        question: "13.Mount Everest is located in ?",
        a: "India",
        b: "Tibet",
        c: "China",
        d: "Nepal",
        correct: "d",
},
{
        question: "14.Which soil is suitable for agriculture ?",
        a: "Peaty soil",
        b: "Sand",
        c: "Black soil",
        d: "Red soil",
        correct: "a",
},
{
        question: "15.The device used for measuring altitudes is ?",
        a: "ammeter",
        b: "galvanometer",
        c: "altimeter",
        d: "audiometer",
        correct: "c",
},{
        question: "16.The Gate way of India is ?",
        a: "Chennai",
        b: "Mumbai",
        c: "Kolkata",
        d: "New Delhi",
        correct: "b",
},
{
        question: "17.Which is considered as the biggest port of India ?",
        a: "Kolkata",
        b: "Cochin",
        c: "Chennai",
        d: "Mumbai",
        correct: "d",
},
{
        question: "18.The chief ore of Aluminium is ?",
        a: "Iron",
        b: "Cryolite",
        c: "Bauxite",
        d: "Haematite",
        correct: "c",
},
{
        question: "19.Country that was called as Land of Rising Sun ?",
        a: "Russia",
        b: "Japan",
        c: "Korea",
        d: "Holland",
        correct: "b",
},
{
        question: "20.Deficiency of Iron leads to ?",
        a: "Rickets",
        b: "Malaria",
        c: "Dental Cavity",
        d: "Anaemia",
        correct: "d",
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

            <!--<button onclick="location.reload()">Reload</button>-->
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