import React from 'react'

function Blog(){
    return(
        <div>
            
            <div className="profile-fashion">
                <div className="profile-text">
                    <h2>BLOG ARCHIVE</h2>
                    <p>Home/ <span> Blog Acrhive</span></p>
                </div>
             </div>

             <div className="section-container">
            <div className="section-column">
                <div className="section-inner-column">
                        <section className="section-right-container" style={{"padding-top": "1%"}}>
                            <div className="category-head">
                                <h3> Category</h3>
                                <div className="category-line">  <hr /></div>
                                <span>Men</span>
                                <span>Women</span>
                                <span>Kids</span>
                                <span>Electronics</span>
                                <span>sport</span>
                            </div>  
                            <div className="tag">
                                <div className="tag-head" style={{"padding-top": "22px"}}>
                                    <h3>Tags</h3>
                                    <div className="tag-line">  <hr /></div>
                                </div>
                                <div className="tag-content">
                                    <div className="tag-container">
                                        <a href="">Fashion</a> 
                                        <a href="">Ecommerce</a>  
                                        <a href="">Shop</a>  
                                         <br />
                                        <a href="">Hand Bag</a> 
                                        <a href="">Laptop</a> 
                                         <br />
                                        <a href="">Head Phone</a> 
                                        <a href="">Pen Drive</a>   
                                    </div>
                                </div>
                            </div>
                            
                            <div className="shop-by-price">
                                <div className="shop-by-price-head" style={{"padding-top": "22px"}}>
                                    <h3>Shop By Price</h3>
                                    <div className="shop-by-price-line">  <hr /></div>
                                </div>
                                <div className="shop-container">
                                    <form action="">
                                        <div className="shop-amount-section">
                                            <span>Amount:-</span>
                                            <input type="number" name="quatity" min="0" max="300" step="1" value="1" />
                                    </div>
                                        <div className="shop-submit-section">
                                            <p> $0 - $300</p>
                                            <span style={{"margin": "8px"}}>
                                            <button className="shop-submit-but"><a href=""> Submit</a></button>
                                            </span>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="shop-by-color">
                                <div className="shop-by-color-head" style={{"padding-top": "22px"}}>
                                    <h3>Shop By color</h3>
                                    <div className="tag-line">  <hr /></div>
                                </div>
                                <div className="shop-by-color-section">
                                    <div className="color-red"></div>
                                    <div style={{"background-color": "yellow;"}} className="color-red"></div>
                                    <div style={{"background-color": "rgba(138, 98, 138, 0.377)"}} className="color-red"></div>
                                    <div style={{"background-color": "rgb(133, 13, 231)"}} className="color-red"></div>
                                    <div style={{"background-color": "rgb(0, 4, 255)"}} className="color-red"></div>
                                    <div style={{"background-color": "rgb(255, 255, 255)"}} className="color-red"></div>
                                    <div style={{"background-color": "rgb(0, 0, 0)"}} className="color-red"></div>
                                    <div style={{"background-color": "rgb(0, 241, 72)"}} className="color-red"></div>
                                    <div style={{"background-color": "rgb(0, 255, 234)"}} className="color-red"></div>
                                    <div style={{"background-color": "rgb(255, 0, 200)"}} className="color-red"></div>
                                </div>
                            </div>
                            <div className="recently-views">
                                <div className="recently-views-head" style={{"padding-top": "22px"}}>
                                    <h3>Recently Views</h3>
                                    <div className="recently-views-line">  <hr /></div>
                                </div>
                                <div className="recently-views-post">
                                    <div className="post1">
                                    <img src="image/pass1.jpg" alt="image" />
                                    <div className="post-text">
                                            <div>
                                                <p> Producer Name </p>
                                            </div>
                                            <div style={{"padding-top": "10px"}}>
                                                <p> 1 * 3250 </p>
                                            </div>
                                    </div>
                                    </div>
                                    <div className="post1">
                                        <img src="image/pass2.jpg" alt="image" />
                                        <div className="post-text">
                                            <div>
                                                <p> Producer Name </p>
                                            </div>
                                            <div style={{"padding-top": "10px"}}>
                                                <p> 1 * 3250 </p>
                                            </div>
                                    </div>
                                    </div>
                                    <div className="post1">
                                        <img src="image/pass3.jpg" alt="image" />
                                        <div className="post-text">
                                            <div>
                                                <p> Producer Name </p>
                                            </div>
                                            <div style={{"padding-top": "10px"}}>
                                                <p> 1 * 3250 </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="top-rated-products">
                                <div className="top-rated-products-head" style={{"padding-top": "22px"}}>
                                    <h3>Top Rated Product</h3>
                                    <div className="top-rated-products-line">  <hr /></div>
                                </div>
                                <div className="product-post">
                                    <img src="image/pass3.jpg" alt="image" />
                                    <div className="product-text">
                                        <div>
                                            <p> Producer Name </p>
                                        </div>
                                        <div style={{"padding-top": "10px"}}>
                                            <p> 1 * 3250 </p>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="product-post">
                                    <img src="image/pass2.jpg" alt="image" />
                                    <div className="product-text">
                                        <div>
                                            <p> Producer Name </p>
                                        </div>
                                        <div style={{"padding-top": "10px"}}>
                                            <p> 1 * 3250 </p>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="product-post">
                                    <img src="image/pass1.jpg" alt="image" />
                                    <div className="product-text">
                                        <div>
                                            <p> Producer Name </p>
                                        </div>
                                        <div style={{"padding-top": "10px"}}>
                                            <p> 1 * 3250 </p>
                                        </div>
                                    </div>
                                    
                                </div>

                            </div>
                        </section>
                        <section className="section-left">
                            <div className="section-left-container">
                                <nav className="inner-nav">
                                    <ul className="inner-ul">
                                        <form action="">
                                            <span>Sort by:-</span>
                                            <input list="search" name="search" style={{"width": "120px"}} />
                                            <datalist id="search">
                                                <option value="Type" />
                                                <option value="Name(A-Z)" />
                                                <option value="Size(big-small)" />
                                                <option value="Time(new-old)" />
                                            </datalist>
                                        </form>

                                    </ul>
                                </nav>
                                <div className="image-section">
                                    <div className="image-container">
                                        <div className="image-section1">
                                            <img src="image/1.jpg" alt="image" />
                                            <div className="image-text">
                                                <div className="text1">
                                                    <p>Lorem ipsum dolor sit.</p>
                                                    <div className="text2">
                                                        <p>$10-$20</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="image-section1">
                                            <img src="image/1.jpg" alt="image" />
                                            <div className="image-text">
                                                <div className="text1">
                                                    <p>Lorem ipsum dolor sit.</p>
                                                    <div className="text2">
                                                        <p>$10-$20</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="image-section1">
                                            <img src="image/1.jpg" alt="image" />
                                            <div className="image-text">
                                                <div className="text1">
                                                    <p>Lorem ipsum dolor sit.</p>
                                                    <div className="text2">
                                                        <p>$10-$20</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="image-section1">
                                            <img src="image/1.jpg" alt="image" />
                                            <div className="image-text">
                                                <div className="text1">
                                                    <p>Lorem ipsum dolor sit.</p>
                                                    <div className="text2">
                                                        <p>$10-$20</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="image-section1">
                                            <img src="image/1.jpg" alt="image" />
                                            <div className="image-text">
                                                <div className="text1">
                                                    <p>Lorem ipsum dolor sit.</p>
                                                    <div className="text2">
                                                        <p>$10-$20</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="image-section1">
                                            <img src="image/1.jpg" alt="image" />
                                            <div className="image-text">
                                                <div className="text1">
                                                    <p>Lorem ipsum dolor sit.</p>
                                                    <div className="text2">
                                                        <p>$10-$20</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="image-section1">
                                            <img src="image/1.jpg" alt="image" />
                                            <div className="image-text">
                                                <div className="text1">
                                                    <p>Lorem ipsum dolor sit.</p>
                                                    <div className="text2">
                                                        <p>$10-$20</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="image-section1">
                                            <img src="image/1.jpg" alt="image" />
                                            <div className="image-text">
                                                <div className="text1">
                                                    <p>Lorem ipsum dolor sit.</p>
                                                    <div className="text2">
                                                        <p>$10-$20</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="image-section1">
                                            <img src="image/1.jpg" alt="image" />
                                            <div className="image-text">
                                                <div className="text1">
                                                    <p>Lorem ipsum dolor sit.</p>
                                                    <div className="text2">
                                                        <p>$10-$20</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="image-section1">
                                            <img src="image/1.jpg" alt="image" />
                                            <div className="image-text">
                                                <div className="text1">
                                                    <p>Lorem ipsum dolor sit.</p>
                                                    <div className="text2">
                                                        <p>$10-$20</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="image-section1">
                                            <img src="image/1.jpg" alt="image" />
                                            <div className="image-text">
                                                <div className="text1">
                                                    <p>Lorem ipsum dolor sit.</p>
                                                    <div className="text2">
                                                        <p>$10-$20</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="image-section1">
                                            <img src="image/1.jpg" alt="image" />
                                            <div className="image-text">
                                                <div className="text1">
                                                    <p>Lorem ipsum dolor sit.</p>
                                                    <div className="text2">
                                                        <p>$10-$20</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="image-section1">
                                            <img src="image/1.jpg" alt="image" />
                                            <div className="image-text">
                                                <div className="text1">
                                                    <p>Lorem ipsum dolor sit.</p>
                                                    <div className="text2">
                                                        <p>$10-$20</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="image-section1">
                                            <img src="image/1.jpg" alt="image" />
                                            <div className="image-text">
                                                <div className="text1">
                                                    <p>Lorem ipsum dolor sit.</p>
                                                    <div className="text2">
                                                        <p>$10-$20</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>                                                      
                                    
                                
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

        </div>


    )
}

export default Blog