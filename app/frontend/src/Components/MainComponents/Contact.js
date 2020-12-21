import React from 'react';

function Contact() {
    return (
        <section id="contact">
            <div class="container">
                <div class="row wow fadeInUp">

                    <div class="col-lg-4 col-md-4">
                        <div class="contact-about">
                            <h3>Deliv</h3>
                            <p>Delivering right to your door step</p>
                            <div class="social-links">
                                <a target="_blank" href="https://www.facebook.com/samin.t.islam" class="facebook"><i class="fa fa-facebook"></i></a>
                                <a target="_blank" href="#" class="instagram"><i class="fa fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-4">
                        <div class="info">
                            <div>
                                <i class="ion-ios-location-outline"></i>
                                <p>Vancouver<br />BC, Canada</p>
                            </div>

                            <div>
                                <i class="ion-ios-email-outline"></i>
                                <p>deliv@gmail.com</p>
                            </div>

                            <div>
                                <i class="ion-ios-telephone-outline"></i>
                                <p>778-881-9252</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-5 col-md-8">
                        <div class="form">
                            <div id="sendmessage">Your message has been sent. Thank you!</div>
                            <div id="errormessage">Your message was not sent.</div>
                            <form id="contactForm" action="" method="post" role="form" class="contactForm">
                                <div class="form-row">
                                    <div class="form-group col-lg-6">
                                        <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:2" data-msg="Please enter at least 2 characters" />
                                        <div class="validation"></div>
                                    </div>
                                    <div class="form-group col-lg-6">
                                        <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                        <div class="validation"></div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:2" data-msg="Please enter at least 2 characters of subject" />
                                    <div class="validation"></div>
                                </div>
                                <div class="form-group">
                                    <textarea class="form-control" name="message" id="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                                    <div class="validation"></div>
                                </div>
                                <div class="text-center"><button type="submit" id="submitButton" name="submit" title="Send Message">Send Message</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact