import React from 'react';

function Intro() {
    return (
        <section id="intro">
            <div class="search wow fadeInUp" data-wow-duration="0.6s">
                <div class="search_bar wow fadeInUp" data-wow-duration="0.8s">
                    <input class="btn-search-bar" type="text" placeholder="Search" />
                </div>
                <div class="search_bar wow fadeInUp" data-wow-duration="0.8s">
                    <a href="/#intro" class="ion-android-search btn-search-button scrollto"></a>
                </div>
            </div>
        </section>
    );
}

export default Intro