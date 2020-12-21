import React from 'react';

function TeamBox(props) {
    return (
        <div class="col-lg-3 col-md-6">
            <div class="member">
                <div class="pic"><img src={props.memberpictureurl} alt="" /></div>
                <h4>{props.membername}</h4>
                <span>{props.memberposition}</span>
                <div class="social">
                    <a href={props.membertwitter}><i class="fa fa-twitter"></i></a>
                    <a href={props.memberfacebook}><i class="fa fa-facebook"></i></a>
                    <a href={props.membergoogle}><i class="fa fa-google-plus"></i></a>
                    <a href={props.memberlinkedin}><i class="fa fa-linkedin"></i></a>
                </div>
            </div>
        </div>
    );
}


export default TeamBox