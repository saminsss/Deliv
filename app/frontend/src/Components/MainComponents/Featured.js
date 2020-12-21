import React from 'react';
import FeaturedBox from "./FeaturedComponents/FeaturedBox";

function Featured() {
    return (
        <section id="featured" class="section-bg">
            <div class="container">

                <div class="section-header">
                    <h3 class="section-title">{`${getTimeOfDayText()}, `}Samin</h3>
                    <span class="section-divider"></span>
                    <p class="section-description">Welcome back</p>
                </div>

                <div class="row">
                    <FeaturedBox
                        title="Top Links"
                        description="Your hub"
                        link="/#"
                        imgUrl="img/history/gallery-1.jpg"
                    />

                    <FeaturedBox
                        title="Update your home office"
                        description="Explore more"
                        link="/#"
                        imgUrl="img/history/gallery-2.jpg"
                    />

                    <FeaturedBox
                        title="Get a new phone"
                        description="Explore more"
                        link="/#"
                        imgUrl="img/history/gallery-3.jpg"
                    />

                    <FeaturedBox
                        title="Looking for a gift?"
                        description="Find personalized gift ideas for your lists"
                        link="/#"
                        imgUrl="img/history/gallery-4.jpg"
                    />
                </div>
            </div>
        </section>
    );
}

function getTimeOfDayText() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDayText;
    
    if (hours >= 0 && hours < 12){
        timeOfDayText = "Good Morning";
    }
    else if (hours >= 12 && hours < 17){
        timeOfDayText = "Good Afternoon";
    }
    else{
        timeOfDayText = "Good Evening";
    }

    return timeOfDayText;
}

export default Featured