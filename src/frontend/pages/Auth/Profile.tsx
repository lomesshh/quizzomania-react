import React, { useEffect, useState } from 'react'
import "../../stylesheets/profile.css"
import { useAppSelector } from 'frontend/utility';

interface UserData {
    email: string
    name: string
    quiz: any
    score: number
    uid: string
  }

const Profile = () => {
    const { token } = useAppSelector(state => state.user)
    const [user, setUser] = useState<UserData | null>(null)

    useEffect(() => {
        const quizzuser = JSON.parse(localStorage.getItem('authUser')  || '{}')
        setUser(quizzuser)
    }, [token])

  return (
    <div className="profile__section">
        
        <div className="profile__image">
            <div className="image__outer">
                <img src="https://res.cloudinary.com/dgwzpbj4k/image/upload/v1651151558/quizzomania/profileImg_cfof7u.png"  alt="profile-img"/>
            </div>
        </div>

        <div className="profile__info">
            <div className="profile__name">
                <h1>{user?.name}</h1>
                <p>{user?.email}</p>
                <button className="large__screen-button">Logout <i className="fa-solid fa-arrow-right-from-bracket"></i></button>
                <button className="small__screen-button"><i className="fa-solid fa-arrow-right-from-bracket"></i></button>
            </div>
            <div className="profile__about">
                <h4>Name : </h4>
                <p>{user?.name}</p>

                <h4>Email : </h4>
                <p>{user?.email}</p>
            </div>
        </div>
    </div>
  )
}

export { Profile }