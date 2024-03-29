import React from 'react'
import './ProfileCard.css';

export default function ProfileCard() {
    return (
        <>
            <header className='header-text text-center'>
                <h4>WHAT CLIENTS SAY</h4>
                <h1>Testimonial</h1>
            </header>
            <div className='ProfileCard'>
                <div class=" container ">
                    <div class="box">
                        <div class="imgBox">
                            <img src="https://img.freepik.com/free-photo/portrait-handsome-young-man-makes-okay-gesture-demonstrates-agreement-likes-idea-smiles-happily-wears-optical-glasses-yellow-hat-t-shirt-models-indoor-its-fine-thank-you-hand-sign_273609-30676.jpg?size=626&ext=jpg" alt="" />
                        </div>
                        <div class="content">
                            <h2>Karan Singh<br />
                                <span>Graphic Designer</span></h2>
                        </div>
                    </div>
                    <div class="box">
                        <div class="imgBox">
                            <img src="https://image.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg" alt="" />
                        </div>
                        <div class="content">
                            <h2>Dolly Seth<br />
                                <span>Digital Marketing</span></h2>
                        </div>
                    </div>
                    <div class="box">
                        <div class="imgBox">
                            <img src="https://image.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg" alt="" />
                        </div>
                        <div class="content">
                            <h2>Aakash Agrawal<br />
                                <span>Chartered Accountant C.A</span></h2>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
