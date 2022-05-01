import React from 'react'
import "../../stylesheets/profile.css"

const Profile = () => {
  return (
    <div className="profile__section">
        
        <div className="profile__image">
            <div className="image__outer">
                <img src="https://res.cloudinary.com/dgwzpbj4k/image/upload/v1651151558/quizzomania/profileImg_cfof7u.png"  alt="profile-img"/>
            </div>
        </div>

        <div className="profile__info">
            <div className="profile__name">
                <h1>Lomesh Badhe</h1>
                <p>Full stack developer</p>
                <button className="large__screen-button">Edit <i className="fa-solid fa-pen"></i></button>
                <button className="small__screen-button"><i className="fa-solid fa-pen"></i></button>
            </div>
            <div className="profile__about">
                <h4>Name : </h4>
                <p>Lomesh Badhe</p>

                <h4>Email : </h4>
                <p>badhelomesh@gmail.com</p>
                
                <h4>Mobile No : </h4>
                <p>+91 9933227766</p>

                <h4>Profession : </h4>
                <p>Full stack developer</p>
            </div>
        </div>
    </div>
  )
}

export { Profile }