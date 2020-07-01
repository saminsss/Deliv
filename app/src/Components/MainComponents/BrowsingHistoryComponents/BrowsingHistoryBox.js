import React from 'react';

function BrowsingHistoryBox(props) {
    return (
        <div class="col-lg-4 col-md-6">
            <div class="history-item wow fadeInUp">
                <a href={props.imgLink}>
                    <img src={props.imgUrl} alt="" />
                </a>
            </div>
        </div>
    );
}


export default BrowsingHistoryBox