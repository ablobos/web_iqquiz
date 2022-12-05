const questions = document.querySelector('#questions');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let question = [
    {
        question: 'If you have 6 fish and half of them die from drowining, how many do you have left?',
        choice1: '6',
        choice2: '2',
        choice3: '4',
        choice4: '3',
        answer: 6,
    },
    {
        question: "Clive's dad had five sons, he named them Jason, Jerry, Johnny, Jonah and ________",
        choice1: 'Alex',
        choice2: 'Freddy',
        choice3: 'John',
        choice4: 'Clive',
        answer: Clive,
    },
    {
        question: 'The White House is located in ____________',
        choice1: 'Washington',
        choice2: 'Texas',
        choice3: 'DC',
        choice4: 'New York',
        answer: DC,
    },

    {
        question: 'An iOS device is owned by which popular company?',
        choice1: 'Samsung',
        choice2: 'Amazon',
        choice3: 'Apple',
        choice4: 'Marvel Comics',
        answer: Apple,
    }
]

const SCORE_POINTS = 100
const MAX_QUESTION = 4

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

    questionCounter++
    progressText.innerText = 'Question ${questionCounter} of ${MAX_QUESTIONS}'
    progressBarFull.style.width = '${(questionCounter/MAX_QUESTIONS) * 100}%'

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer ==  currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()