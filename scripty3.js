const quizData = [
    
{
        question: "1.Who is the Father of Mathematics?",
        a: "Euler",
        b: "Srinivasa Ramanujan",
        c: "Archimedes",
        d: "Narendra Karmarkar",
        correct: "c"
},
{
        question: "2.Who discovered Zero (0)?",
        a: "Brahmagupta",
        b: "Archimedes",
        c: "Euler",
        d: "Aryabhatta",
        correct: "d"
},
{
        question: "3. What is the average of the first 50 natural numbers?",
        a: "20",
        b: "25.5",
        c: "20.5",
        d: "25",
        correct: "b"
},
{
        question: "4.The value of Pi",
        a: "3.14159",
        b: "3.76588",
        c: "3.23874",
        d: "3.98075",
        correct: "a"
},
{
        question: "5.Who invented the equals sign (=)?",
        a: "Euler",
        b: "Aryabhata",
        c: "Archimedes",
        d: "Robert Recorde",
        correct: "d"
},
{
        question: "6.Who discovered the center of gravity?",
        a: "Euler",
        b: "Archimedes",
        c: "Isaac Newton",
        d: "Brahmagupta",
        correct: "b"
},
{
        question: "7.Where was Abacus invented?",
        a: "China",
        b: "India",
        c: "New-Zeland",
        d: "England",
        correct: "a"
},
{
        question: "8.Who created the symbol ‘e’ ?",
        a: "Euler",
        b: "Srinivasa Ramanujan",
        c: "Narendra Karmarkar",
        d: "Archimedes",
        correct: "a"
},
{
        question: "9.Father of Trigonometry",
        a: "Euler",
        b: "Isaac Newton",
        c: "Hipparchus",
        d: "Narendra Karmarkar",
        correct: "c"
},
{
        question: "10.Who invented Boolean Algebra?",
        a: "George Boole",
        b: "Hipparchus",
        c: "Euler",
        d: "Archimedes",
        correct: "a"
},
{
        question: "11.Value of Napier’s constant ‘e’ ?",
        a: "2.67332",
        b: "2.71828",
        c: "2.68441",
        d: "2.72806",
        correct: "b"
},
{
        question: "12.Solve the equation for x : 6x - 27 + 3x = 4 + 9 - x",
        a: "5",
        b: "6",
        c: "8",
        d: "4",
        correct: "d"
},
{
        question: "13.The cost of 2 chairs and 3 tables is Rs.1300. The cost of 3 chairs and 2 tables is Rs.1200. The cost of each table is more than that of each chair by?",
        a: "Rs.70",
        b: "Rs.75",
        c: "Rs.60",
        d: "None of these",
        correct: "d"
},
{
        question: "14.The tens digit of a two-digit number is two more than its unit digit. The two-digit number is 7 times the sum of the digits. Find the units digits?",
        a: "2",
        b: "3",
        c: "4",
        d: "5",
        correct: "b"
},
{
        question: "15.In a series of six consecutive even numbers, the sum of the second and sixth numbers is 24. What is the fourth number?",
        a: "14",
        b: "10",
        c: "12",
        d: "18",
        correct: "c"
},
{
        question: "16.Mudit's age 18 years hence will be thrice his age four years ago. Find Mudit's present age?",
        a: "12 Years",
        b: "18 Years",
        c: "9 Years",
        d: "15 Years",
        correct: "d"
},
{
        question: "17.Ten years ago, the age of Anand was one-third the age of Bala at that time. The present age of Bala is 12 years more than the present age of Anand. Find the present age of Anand?",
        a: "16",
        b: "20",
        c: "22",
        d: "14",
        correct: "a"
},
{
        question: "18.The cost of 16 pens and 8 pencils is Rs.352 and the cost of 4 pens and 4 pencils is Rs.96. Find the cost of each pen?",
        a: "20",
        b: "28",
        c: "25",
        d: "None of these",
        correct: "a"
},
{
        question: "19.P, Q and R have Rs.6000 among themselves. R has two-thirds of the total amount with P and Q. Find the amount with R?",
        a: "Rs.3000",
        b: "Rs.3600",
        c: "Rs.2500",
        d: "Rs.2400",
        correct: "d"
},
{
        question: "20. Eight years ago, Ajay's age was 4/3 times that of Vijay. Eight years hence, Ajay's age will be 6/5 times that of Vijay. What is the present age of Ajay?",
        a: "48 Years",
        b: "40 Years",
        c: "38 Years",
        d: "None of these",
        correct: "b"
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