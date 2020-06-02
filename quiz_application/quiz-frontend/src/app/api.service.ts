import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs'

@Injectable()
export class ApiService {

    url = 'http://localhost:63100/api'
    private selectedQuestion = new Subject<any>()
    private selectedQuiz = new Subject<any>()
    questionSelected = this.selectedQuestion.asObservable()
    quizSelected = this.selectedQuiz.asObservable()

    constructor(private http: HttpClient) {}

    getQuestions(quizId){
        return this.http.get(`${this.url}/questions/${quizId}`)
    }

    postQuestion(question){
        this.http.post(`${this.url}/questions`, question).subscribe(res => {
            console.log(res)
        })
    }

    putQuestion(question){
        this.http.put(`${this.url}/questions/${question.id}`, question).subscribe(res => {
            console.log(res)
        })
    }

    getQuizzes(){
        return this.http.get(`${this.url}/quizzes`)
    }

    getAllQuizzes(){
        return this.http.get(`${this.url}/quizzes/all`)
    }

    postQuiz(quiz){
        this.http.post(`${this.url}/quizzes`, quiz).subscribe(res => {
            console.log(res)
        })
    }

    putQuiz(quiz){
        this.http.put(`${this.url}/quizzes/${quiz.id}`, quiz).subscribe(res => {
            console.log(res)
        })
    }

    selectQuestion(question){
        this.selectedQuestion.next(question)
    }

    selectQuiz(quiz){
        this.selectedQuiz.next(quiz)
    }
}