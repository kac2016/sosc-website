import React from 'react'
import Link from 'gatsby-link'

const MemberCard = ({username, full_name, designation}) => (
  <div className="member-card elevate white-bg">
    <img className="profile-pic" src={`https://avatars1.githubusercontent.com/${username}?size=100`}/>
    <div className="member-details">
        <h3 className="name">{full_name}</h3>
        <p className="designation">{designation}</p>
    </div>
  </div>
)

export default MemberCard
