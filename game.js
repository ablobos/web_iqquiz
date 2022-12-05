const question = document.querySelector('#question')
const choices = Array.from(document.querySelectorAll('.choice-text'))
const progressText = document.querySelector('#progressText')
const scoreText = document.querySelector('#score')
const progressBarFull = document.querySelector('#progressBarFull')

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestion = []

let questions = [
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
        choice1: 'Seattle, Washington',
        choice2: 'Austin, Texas',
        choice3: 'Washington D.C.',
        choice4: 'Buffalo, NY',
        answer: Washington DC,
    },

    {
        question: 'An iOS device is owned by which popular company?',
        choice1: 'Samsung',
        choice2: 'Amazon',
        choice3: 'Apple',
        choice4: 'Marvel Comics',
        answer: 6,
    }
]
