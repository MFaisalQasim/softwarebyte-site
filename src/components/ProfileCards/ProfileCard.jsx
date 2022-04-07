import React from 'react'
import './ProfileCard.css';

export default function ProfileCard() {
    return (
        <>
<div class="container">
        <div class="box">
            <div class="imgBox">
                <img src="https://img.freepik.com/free-photo/portrait-handsome-young-man-makes-okay-gesture-demonstrates-agreement-likes-idea-smiles-happily-wears-optical-glasses-yellow-hat-t-shirt-models-indoor-its-fine-thank-you-hand-sign_273609-30676.jpg?size=626&ext=jpg" alt=""/>
            </div>
            <div class="content">
                <h2>Karan Singh<br/>
                <span>Graphic Designer</span></h2>
            </div>
        </div>
        <div class="box">
            <div class="imgBox">
                <img src="https://image.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg" alt=""/>
            </div>
            <div class="content">
                <h2>Dolly Seth<br/>
                <span>Digital Marketing</span></h2>
            </div>
        </div>
        <div class="box">
            <div class="imgBox">
                <img src="https://image.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg" alt=""/>
            </div>
            <div class="content">
                <h2>Aakash Agrawal<br/>
                <span>Chartered Accountant C.A</span></h2>
            </div>
        </div>
    </div>

            {/* <div class="card__collection clear-fix">
                <div class="cards cards--two">
                    <img src="https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d702cb99ca804bffcfa8820c46483264&auto=format&fit=crop&w=651&q=80" class="img-responsive" alt="Cards Image" />
                    <span class="cards--two__rect"></span>
                    <span class="cards--two__tri"></span>
                    <p>Lucy Grace</p>
                    <ul class="cards__list">
                        <li><i class="fab fa-facebook-f"></i></li>
                        <li><i class="fab fa-twitter"></i></li>
                        <li><i class="fab fa-instagram"></i></li>
                        <li><i class="fab fa-linkedin-in"></i></li>
                    </ul>
                </div>
                <div class="cards cards--three">
                    <img src="https://images.unsplash.com/photo-1480408144303-d874c5e12201?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=575213599ae24b3dbdfd84be79425c50&auto=format&fit=crop&w=634&q=80" class="img-responsive" alt="" />
                    <span class="cards--three__rect-1">
                        <span class="shadow-1"></span>
                        <p>Chris Levnon</p>
                    </span>
                    <span class="cards--three__rect-2">
                        <span class="shadow-2"></span>
                    </span>
                    <span class="cards--three__circle"></span>
                    <ul class="cards--three__list">
                        <li><i class="fab fa-facebook-f"></i></li>
                        <li><i class="fab fa-twitter"></i></li>
                        <li><i class="fab fa-linkedin-in"></i></li>
                    </ul>
                </div>
            </div> */}
        </>
    )
}
