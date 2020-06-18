import React from 'react';

function BrowsingHistory() {
    return (
        <section id="history" class="section-bg">
            <div class="container-fluid">
                <div class="section-header">
                    <h3 class="section-title">Browsing History</h3>
                    <span class="section-divider"></span>
                    <p class="section-description"><a class="section-description" href="">See All</a></p>
                </div>

                <div class="row no-gutters">

                    <div class="col-lg-4 col-md-6">
                        <div class="history-item wow fadeInUp">
                            <a href="#">
                                <img src="img/history/gallery-1.jpg" alt="" />
                            </a>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="history-item wow fadeInUp">
                            <a href="#">
                                <img src="img/history/gallery-2.jpg" alt="" />
                            </a>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="history-item wow fadeInUp">
                            <a href="#">
                                <img src="img/history/gallery-3.jpg" alt="" />
                            </a>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="history-item wow fadeInUp">
                            <a href="#">
                                <img src="img/history/gallery-4.jpg" alt="" />
                            </a>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="history-item wow fadeInUp">
                            <a href="#">
                                <img src="img/history/gallery-5.jpg" alt="" />
                            </a>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="history-item wow fadeInUp">
                            <a href="#">
                                <img src="img/history/gallery-6.jpg" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BrowsingHistory