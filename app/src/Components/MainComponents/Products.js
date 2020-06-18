import React from 'react';
import ProductsBox from "./ProductsComponents/ProductsBox"

function Products() {
    return (
        <section id="products" class="section-bg">
            <div class="container">
                <div class="section-header">
                    <h3 class="section-title">Browse stores, programs, and more</h3>
                    <span class="section-divider"></span>
                    <p class="section-description">Explore more</p>
                </div>

                <div class="row">

                    <ProductsBox
                        title="Coupons"
                        imgUrl="img/products/product-1.jpg"
                        link="/#"
                        availability="Unvailable"
                        availabilityIcon="ion-android-remove-circle"
                    />

                    <ProductsBox
                        title="Outlet"
                        imgUrl="img/products/product-2.jpg"
                        link="/#intro"
                        availability="Available"
                        availabilityIcon="ion-android-checkmark-circle"
                    />

                    <ProductsBox
                        title="Warehouse Deals"
                        imgUrl="img/products/product-3.jpg"
                        link="/#intro"
                        availability="Available"
                        availabilityIcon="ion-android-checkmark-circle"
                    />

                    <ProductsBox
                        title="Subscribe and Save"
                        imgUrl="img/products/product-1.jpg"
                        link="/#intro"
                        availability="Available"
                        availabilityIcon="ion-android-checkmark-circle"
                    />

                    <ProductsBox
                        title="Phones"
                        imgUrl="img/products/product-2.jpg"
                        link="/#intro"
                        availability="Available"
                        availabilityIcon="ion-android-checkmark-circle"
                    />

                </div>
            </div>
        </section>
    );
}

export default Products