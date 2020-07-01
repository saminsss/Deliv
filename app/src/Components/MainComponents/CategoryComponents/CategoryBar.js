import React from 'react';

function CategoryBar(props) {
    const subtitleComponent = props.subtitle.map((sub, i) => {
        return (
            <a href={props.subtitlelink[i]}>{sub}</a>
        )
    });

    let toggleLink = "#category"+props.categorynumber;
    let toggleId = "category"+props.categorynumber; 

    return (
        <li class="col-lg-3">
            <a data-toggle="collapse" class="collapsed" href={toggleLink}>{props.title}<i class="ion-android-remove"></i></a>
            <div id={toggleId} class="collapse" data-parent={toggleLink}>
                <p>
                    {subtitleComponent}
                </p>
            </div>
        </li>
    );
}


export default CategoryBar