const quizData = [
   
{
        question: "1.2010 Commonwealth Games held in ?",
        a: "Canada",
        b: "India",
        c: "Britian",
        d: "Malaysia",
        correct: "b",
},
{
        question: "2.The term Googly is associated with ?",
        a: "Cricket",
        b: "Football",
        c: "Badminton",
        d: "Hockey",
        correct: "a",
},
{
        question: "3.In 1924 the first winter Olympics was held in ?",
        a: "Italy",
        b: "Canada",
        c: "Austria",
        d: "France",
        correct: "d",
},
{
        question: "4.Pullela Gopichand is associated with ?",
        a: "Hockey",
        b: "Badminton",
        c: "Football",
        d: "Cricket",
        correct: "b",
},
{
        question: "5.2010 World Cup football tournament was held in?",
        a: "Austria",
        b: "Germany",
        c: "South Africa",
        d: "Turin",
        correct: "c",
},
{
        question: "6.Viswanath Anand is associated with ?",
        a: "Chess",
        b: "Hockey",
        c: "Volley ball",
        d: "Carrom",
        correct: "a",
},
{
        question: "7.The 2014 football world cup held in?",
        a: "China",
        b: "Brazil",
        c: "Japan",
        d: "Australia",
        correct: "b",
},
{
        question: "8.Mahesh Bhupathi is associated with ?",
        a: "Chess",
        b: "Cricket",
        c: "Lawn Tennis",
        d: "Table Tennis",
        correct: "c",
},
{
        question: "9.Icc's 2007, the World Cup Cricket was held in ?",
        a: "Australia",
        b: "New Zealand",
        c: "South Africa",
        d: "West Indies",
        correct: "d",
},
{
        question: "10.Wankhede Stadium is at ?",
        a: "Mumbai",
        b: "Kolkata",
        c: "Chennai",
        d: "New Delhi",
        correct: "a",
},{
        question: "11.The head quarters of International Olympic Committee is at ?",
        a: "Moscow",
        b: "Lausanne(Switzerland)",
        c: "New York",
        d: "Los Angles",
        correct: "b",
},
{
        question: "12.First Indian woman to win WTA singles title is ?",
        a: "Rooth George",
        b: "Saina Nehwal",
        c: "Saniya Mirza",
        d: "Gayathri Krishna",
        correct: "c",
},
{
        question: "13.World's most ancient game is ?",
        a: "Boxing",
        b: "Running",
        c: "Swimming",
        d: "Wrestling",
        correct: "d",
},
{
        question: "14.The game of hockey originated in ?",
        a: "France",
        b: "Canada",
        c: "England",
        d: "Germany",
        correct: "a",
},
{
        question: "15.The National Game of India is ?",
        a: "Tennis",
        b: "Hockey",
        c: "Football",
        d: "Cricket",
        correct: "b",
},
{
        question: "16. Which country won the Cricket World Cup in 1999 ?",
        a: "South Africa",
        b: "Pakistan",
        c: "Australia",
        d: "England",
        correct: "c",
},
{
        question: "17.Archery is the national sport of which country?",
        a: "Afghanistan",
        b: "Bhutan",
        c: "India",
        d: "Bhutan",
        correct: "d",
},
{
        question: "18.Total number of gold medal won by Indian Hockey Team in Olympics ?",
        a: "8",
        b: "12",
        c: "6",
        d: "9",
        correct: "a",
},
{
        question: "19.Who was the 1st president of BCCI ( Board of Control for Cricket in India ) ?",
        a: "Dr. Maharajkumar Sir Vijaya Ananda",
        b: "R.E. Grant Govan",
        c: "Sikandar Hyat Khan",
        d: "Anthony S. D'Mello",
        correct: "b",
},
{
        question: "20.How many gold medals did P.T.Usha win in the 1986 Seoul Asian Games?",
        a: "1",
        b: "2",
        c: "3",
        d: "4",
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