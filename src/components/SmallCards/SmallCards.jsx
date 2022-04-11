import React from 'react'
import './SmallCards.css'
export default function SmallCards() {
  return (
    <>
      <div class="content">
        <div class="card1">
          <div class="icon"><i class="material-icons md-36">face</i></div>
          <p class="title">Profile</p>
          <p class="text">Click to see or edit your profile page.</p>
        </div>
        <div class="card1">
          <div class="icon"><i class="material-icons md-36">favorite_border</i></div>
          <p class="title">Favourites</p>
          <p class="text">Check all your favourites in one place.</p>
        </div>
        <div class="card1">
          <div class="icon"><i class="material-icons md-36">alternate_email</i></div>
          <p class="title">Contacts</p>
          <p class="text">Add or change your contacts and links.</p>
        </div>
        <div class="card1">
          <div class="icon"><i class="material-icons md-36">alternate_email</i></div>
          <p class="title">Contacts</p>
          <p class="text">Add or change your contacts and links.</p>
        </div>

      </div>
    </>
  )
}
