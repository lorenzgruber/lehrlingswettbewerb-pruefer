export interface Question {
    questionID: string,
    question: string,
    answers: string[]
    correctAnswer: 0 | 1 | 2
}