import React from 'react';

function ProductsBox(props) {
    return (
        <div class="col-lg-3">
            <div class="box wow fadeInUp">
                <h4>{props.title}</h4>
                <img src={props.imgUrl} alt="" />
                <ul>
                    <li><i class={props.availabilityIcon}></i><a href={props.link}>{props.availability}</a></li>
                </ul>
            </div>
        </div>
    );
}

export default ProductsBox