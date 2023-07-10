/* eslint-disable react/prop-types */

import { LogOutIcon } from "../icons/Icons"

const UserPage = ({ reset, email, instagram, github, twitter, firstName, lastName, phone }) => {
  return (
    <div className="user-container">
      <div className="top-user">
        <div className="name-avatar">
          <div className="avatar">{firstName.slice(0, 1)}{lastName.slice(0, 1)}</div>
          <div className="name-email">
            <p className="name">{firstName} {lastName}</p>
            <p className="email">{email}</p>
          </div>
        </div>
        <div className="logout" onClick={() => reset()}>
          <LogOutIcon />
        </div>
      </div>
      <div className="contact">
        <h2>Contact</h2>
        <ul>
          <li>Instagram: {instagram}</li>
          <li>Github: {github}</li>
          <li>Twitter: {twitter}</li>
          <li>Phone numbre: {phone}</li>
        </ul>
      </div>
    </div>
  )
}

export default UserPage