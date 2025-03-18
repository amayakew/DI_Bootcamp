import {triviaQuestions} from '../config/data.js';

let score = 0;

export function startGame(req,res) {
    score = 0;
    res.send({question: triviaQuestions[0].question});
};

export function submitAnswer(req,res) {
    const {question, answer} = req.body;
    const currentQuestionIndex = triviaQuestions.findIndex(item => item.question == question);
    if (currentQuestionIndex == -1){
        return res.status(404).json({message: 'Question is not found'});
    };
    const currentQuestion = triviaQuestions[currentQuestionIndex];
    let correct = false;
    if (currentQuestion.answer.toLowerCase() == answer.toLowerCase()) {
        score += 1;
        correct = true;
    };
    if (currentQuestionIndex == triviaQuestions.length - 1){
        return res.send({nextQuestion: null, correct});
    }

    res.send({nextQuestion: triviaQuestions[currentQuestionIndex + 1].question, correct});
};

export function displayScore(req,res) {
    res.send({score});
};