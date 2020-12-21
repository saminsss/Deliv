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
                        categorynumber="1"
                        title="Books"
                        subtitle={["All Books", "Text Books", "Kindle Books", "Other Books"]}
                        subtitlelink={["/#intro", "/#browse", "/#intro", "/#intro"]}
                    />

                    <CategoryBar 
                        categorynumber="2"
                        title="Video Games"
                        subtitle={["All Video Games", "PC Gaming", "Today's Deal"]}
                        subtitlelink={["/#intro", "/#intro", "/#browse"]}
                    />

                    <CategoryBar 
                        categorynumber="3"
                        title="Music, Movies and TV Shows"
                        subtitle={["All Movies and TV Shows", "All Music", "New and Future Releases"]}
                        subtitlelink={["/#intro", "/#intro", "/#browse"]}
                    />

                    <CategoryBar 
                        categorynumber="4"
                        title="Electronics, Computers and Office"
                        subtitle={["All Electronics", "TV and Home Theatre", "Headphones and Speakers", "Camera, Photo and Video", "Cell Phones and Accessories"]}
                        subtitlelink={["/#intro", "/#intro", "/#browse", "/#intro", "/#browse"]}
                    />

                    <CategoryBar 
                        categorynumber="5"
                        title="Grocery and Whole Food Market"
                        subtitle={["Grocery", "Natural and Organic", "Whole Foods Market"]}
                        subtitlelink={["/#intro", "/#intro", "/#browse"]}
                    />
                </ul>

            </div>
        </section>
    );
}

export default Category