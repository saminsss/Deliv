import React from 'react';

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
                        <div class="col-lg-3 col-md-6">
                            <div class="member">
                                <div class="pic"><img src="img/team/team-1.jpg" alt="" /></div>
                                <h4>Samin Islam</h4>
                                <span>Chief Executive Officer</span>
                                <div class="social">
                                    <a href="#"><i class="fa fa-twitter"></i></a>
                                    <a href="#"><i class="fa fa-facebook"></i></a>
                                    <a href="#"><i class="fa fa-google-plus"></i></a>
                                    <a href="#"><i class="fa fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default Team