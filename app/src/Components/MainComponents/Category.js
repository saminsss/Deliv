import React from 'react';
import CategoryBar from "./CategoryComponents/CategoryBar";

function Category() {
    return (
        <section id="category">
            <div class="container">

                <div class="section-header">
                    <h3 class="section-title">Shop by Category</h3>
                    <span class="section-divider"></span>
                </div>

                <ul id="category-list" class="row wow fadeInUp">
                    <CategoryBar 
                        parent="Books"
                        children={["All Books", "Text Books", "Kindle Books", "Other Books"]}
                        childrenLinks={["/#intro", "/#intro", "/#intro", "/#intro"]}
                    />

                    <li class="col-lg-3">
                        <a data-toggle="collapse" href="#category2" class="collapsed">Video Games<i class="ion-android-remove"></i></a>
                        <div id="category2" class="collapse" data-parent="#category2">
                            <p>
                                <a href="#intro">All Video Games</a>
                                <a href="#intro">PC Gaming</a>
                                <a href="#intro">Today's Deal</a>
                            </p>
                        </div>
                    </li>

                    <li class="col-lg-3">
                        <a data-toggle="collapse" href="#category3" class="collapsed">Music, Movies and TV Shows<i class="ion-android-remove"></i></a>
                        <div id="category3" class="collapse" data-parent="#category3">
                            <p>
                                <a href="#intro">All Movies and TV Shows</a>
                                <a href="#intro">All Music</a>
                                <a href="#intro">New and Future Releases</a>
                            </p>
                        </div>
                    </li>

                    <li class="col-lg-3">
                        <a data-toggle="collapse" href="#category4" class="collapsed">Electronics, Computers and Office<i class="ion-android-remove"></i></a>
                        <div id="category4" class="collapse" data-parent="#category4">
                            <p>
                                <a href="#intro">All Electronics</a>
                                <a href="#intro">Electronics Deals</a>
                                <a href="#intro">TV and Home Theatre</a>
                                <a href="#intro">Headphones and Speakers</a>
                                <a href="#intro">Camera, Photo and Video</a>
                                <a href="#intro">Cell Phones and Accessories</a>
                            </p>
                        </div>
                    </li>

                    <li class="col-lg-3">
                        <a data-toggle="collapse" href="#category5" class="collapsed">Home, Garden Pets and Tools<i class="ion-android-remove"></i></a>
                        <div id="category5" class="collapse" data-parent="#category5">
                            <p>
                                <a href="#intro">All home</a>
                                <a href="#intro">Furniture</a>
                                <a href="#intro">Decor</a>
                            </p>
                        </div>
                    </li>

                    <li class="col-lg-3">
                        <a data-toggle="collapse" href="#category6" class="collapsed">Grocery and Whole Food Market<i class="ion-android-remove"></i></a>
                        <div id="category6" class="collapse" data-parent="#category6">
                            <p>
                                <a href="#intro">Grocery</a>
                                <a href="#intro">Natural and Organic</a>
                                <a href="#intro">Whole Foods Market</a>
                            </p>
                        </div>
                    </li>

                    <li class="col-lg-3">
                        <a data-toggle="collapse" href="#category7" class="collapsed">Health and Beauty<i class="ion-android-remove"></i></a>
                        <div id="category7" class="collapse" data-parent="#category7">
                            <p>
                                <a href="#intro">Beauty</a>
                                <a href="#intro">Luxury Beauty</a>
                                <a href="#intro">Health and Personal Care</a>
                                <a href="#intro">Household Supplies</a>
                            </p>
                        </div>
                    </li>
                </ul>

            </div>
        </section>
    );
}

export default Category