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