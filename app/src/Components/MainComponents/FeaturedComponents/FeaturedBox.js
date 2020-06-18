import React from 'react';

function FeaturedBox(props) {
    return (
        <div class="col-lg-3">
            <div class="box wow fadeInUp">
                <h4 class="title"><a href={props.link}>{props.title}</a></h4>
                <p class="description"><a href={props.link}>{props.description}</a></p>
                <a href={props.link}>
                    <img src={props.imgUrl} alt="" />
                </a>
            </div>
        </div>
    );
}

export default FeaturedBox