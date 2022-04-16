export interface Question {
    questionID: string,
    question: string,
    answers: string[]
    correct: 0 | 1 | 2
}