import React from 'react'
import "./OurServices.css";

export default function OurServices() {
    return (
        <>

            <h4>Horizontal Flip</h4>
            <div class="flip">
                <div class="front" 
                // style="background-image: url(https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)"
                
                >
                <img src='https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)' width='100%' height='auto'/>
                    <h1 class="text-shadow">MOUNTAIN</h1>
                </div>
                <div class="back">
                    <h2>Angular</h2>
                    <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
                </div>
            </div>
            <div class="flip">
                <div class="front" 
                // style="background-image: url(https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)"
                
                >
                <img src='https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)' width='100%' height='auto'/>
                    <h1 class="text-shadow">LAKE</h1>
                </div>
                <div class="back">
                    <h2>Angular</h2>
                    <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
                </div>
            </div>
            <div class="flip">
                <div class="front" 
                // style="background-image: url(https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)"
                
                >
                <img src='https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)' width='100%' height='auto'/>
                    <h1 class="text-shadow">OCEAN</h1>
                </div>
                <div class="back">
                    <h2>Angular</h2>
                    <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
                </div>
            </div>

            <br />
            <br />


            <h4>Vertical Flip</h4>
            <div class="flip flip-vertical">
                <div class="front" 
                // style="background-image: url(https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)"
                
                >
                <img src='https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)' width='100%' height='auto'/>
                    <h1 class="text-shadow">FOREST</h1>
                </div>
                <div class="back">
                    <h2>Angular</h2>
                    <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
                </div>
            </div>
            <div class="flip flip-vertical">
                <div class="front" 
                // style="background-image: url(https://images.pexels.com/photos/34950/pexels-photo.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)"
                
                >
                <img src='https://images.pexels.com/photos/34950/pexels-photo.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)' width='100%' height='auto'/>
                    <h1 class="text-shadow">TRACK</h1>
                </div>
                <div class="back">
                    <h2>Angular</h2>
                    <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
                </div>
            </div>
            <div class="flip flip-vertical">
                <div class="front" 
                // style="background-image: url(https://images.pexels.com/photos/34546/sunset-lake-landscape-summer.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)"
                
                >
                <img src='https://images.pexels.com/photos/34546/sunset-lake-landscape-summer.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)' width='100%' height='auto'/>
                    <h1 class="text-shadow">SWAMP</h1>
                </div>
                <div class="back">
                    <h2>Angular</h2>
                    <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
                </div>
            </div>
        </>
    )
}
