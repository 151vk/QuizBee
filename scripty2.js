const quizData = [
    
{
        question: "1.The common name for the crime of stealing passwords is _______",
        a: "Spooling.",
        b: "Identity theft.",
        c: "Spoofing.",
        d: "Hacking",
        correct: "c",
},
{
        question: "2.Which of the following memories is an optical memory?",
        a: "Floppy Disk",
        b: "Bubble Memories",
        c: "CD ROM",
        d: "Core Memories",
        correct: "d",
},
{
        question: "3.Which of the following is the most powerful type of computer?",
        a: "Super micro",
        b: "Super conductor",
        c: "Super computer",
        d: "Megaframe",
        correct: "c",
},
{
        question: "4.WWW stands for ?",
        a: "World Wide Web",
        b: "Web World Wide",
        c: "Wide World Web",
        d: "World Whole Web",
        correct: "a",
},
{
        question: "5.Full form of URL is?",
        a: " Uniform Resource Link",
        b: "Uniform Resource Locator",
        c: "Unified Resource Link",
        d: "Uniform Registered Link",
        correct: "b",
},
{
        question: "6. In a computer most processing takes place in ___________",
        a: "Memory",
        b: "RAM",
        c: "Mother board",
        d: "CPU",
        correct: "d",
},
{
        question: "7.____________ is an example of input device.",
        a: "Keyboard",
        b: "Monitor",
        c: "Mouse",
        d: "Both 1 & 3",
        correct: "d",
},
{
        question: "8. CD“ROM is a kind of?",
        a: "Optical disk",
        b: "Magneto - Optical disk",
        c: "Magnetic disk",
        d: "None of these",
        correct: "c",
},
{
        question: "9.Find the odd man out.",
        a: "FTP",
        b: "POP",
        c: "TCP",
        d: "SAP",
        correct: "b",
},
{
        question: "10.One kilobyte is equal to ?",
        a: "1024 bytes",
        b: "1000 bytes",
        c: "100 bytes",
        d: "1023 bytes",
        correct: "a",
},{
        question: "11.Which among the following is a search engine?",
        a: "Internet explorer",
        b: "Firefox",
        c: "Google",
        d: "Flash",
        correct: "c",
},
{
        question: "12.Software is __________",
        a: "Equipment",
        b: "Peripheralr",
        c: "Virus",
        d: "Computer program",
        correct: "d",
},
{
        question: "13.In computer world, Trojan refer to ",
        a: "Virus",
        b: "Malware",
        c: "Worm",
        d: "Spyware",
        correct: "b",
},
{
        question: "14.Which protocol is used to received e-mail ?",
        a: "SMTP",
        b: "POP3",
        c: "HTTP",
        d: "FTP",
        correct: "b",
},
{
        question: "15.In binary code, the number 7 is written as ?",
        a: "111",
        b: "110",
        c: "100",
        d: "101",
        correct: "a",
},
{
        question: "16.'ALU' stands for? ",
        a: "Arithmetic Long Unit",
        b: "All Longer Units",
        c: "Around Logical Units",
        d: " Arithmetic and Logical Units",
        correct: "d",
},
{
        question: "17.Which of the following is an example of non-volatile memory?",
        a: "Cache memory",
        b: "RAM",
        c: "ROM",
        d: "None of the above",
        correct: "c",
},
{
        question: "18.LAN stands For which of the following?",
        a: "Localized Area Network",
        b: "Local Area Network",
        c: "Leased Area Network",
        d: "Local Air Network",
        correct: "b",
},
{
        question: "19.If you want to secure a message, use a(n) _______ ",
        a: "cryptology source.",
        b: "encryption key.",
        c: "encryption key",
        d: "cryptosystem.",
        correct: "d",
},
{
        question: "20.In which of the following form, data is stored in computer?",
        a: "Decimal",
        b: "Binary",
        c: "HexaDecimal",
        d: "Octal",
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