import React from 'react';
import BrowsingHistoryBox from './BrowsingHistoryComponents/BrowsingHistoryBox';

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

                    <BrowsingHistoryBox
                        imgUrl="img/history/gallery-1.jpg"
                        imgLink="/#intro"
                    />

                    <BrowsingHistoryBox
                        imgUrl="img/history/gallery-2.jpg"
                        imgLink="/#intro"
                    />

                    <BrowsingHistoryBox
                        imgUrl="img/history/gallery-3.jpg"
                        imgLink="/#intro"
                    />

                    <BrowsingHistoryBox
                        imgUrl="img/history/gallery-4.jpg"
                        imgLink="/#intro"
                    />

                    <BrowsingHistoryBox
                        imgUrl="img/history/gallery-5.jpg"
                        imgLink="/#intro"
                    />

                    <BrowsingHistoryBox
                        imgUrl="img/history/gallery-6.jpg"
                        imgLink="/#intro"
                    />
                </div>
            </div>
        </section>
    );
}

export default BrowsingHistory