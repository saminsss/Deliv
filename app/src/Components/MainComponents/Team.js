import React from 'react';
import TeamBox from './TeamComponents/TeamBox';

function Team() {
    return (
        <section id="team">
            <div class="container">
                <div class="section-header">
                    <h3 class="section-title">Our Team</h3>
                    <span class="section-divider"></span>
                    <p class="section-description">The people who made it happen</p>
                </div>
                <div class="row wow fadeInUp">
                    <TeamBox
                        memberName="Samin Islam"
                        memberposition="Chief Executive Officer"
                        memberpictureurl="img/team/team-1.jpg"
                        memberfacebook="https://www.facebook.com/samin.t.islam/"
                    />
                </div>
            </div>
        </section>
    );
}

export default Team