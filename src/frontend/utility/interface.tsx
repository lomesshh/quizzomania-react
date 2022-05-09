export interface UserObject {
    uid: string,
    name: '',
    email: string,
    quiz: any[],
    score: Number
}

export interface UserSliceStateObject {
    user: UserObject,
    token: string,
    loader : Boolean
}

export interface UserSignupObject {
    name: string,
    email: string,
    password: string,
    cpassword: string,
}

export interface UserLoginObject {
    email: string,
    password: string
}

export interface quizObject {
    questions : any[],
    quizzID : string,
    quizzName : string
}

export interface UserSliceQuizObject {
    quiz: quizObject,
    currQuestion : number,
    answeredQuestions : any[],
    totalScore : number
}

export interface quizOption {
    isRight : boolean,
    value: string
}
