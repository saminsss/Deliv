import React from 'react';

function CategoryBar(props) {
    const childrenComponent = props.children.map(child => {
        return (
            <a href={'/#intro'}>{child}</a>
        )
    })
    return (
        <li class="col-lg-3">
            <a data-toggle="collapse" class="collapsed" href="#category1">{props.parent}<i class="ion-android-remove"></i></a>
            <div id="category1" class="collapse" data-parent="#category1">
                <p>
                    {childrenComponent}
                </p>
            </div>
        </li>
    );
}


export default CategoryBar