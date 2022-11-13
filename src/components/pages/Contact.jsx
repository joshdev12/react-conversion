import React from 'react'

function Contact() {
  return (
    <div>
     
      <div className="profile-contact">
        <div className="profile-text">
            <div>
                <div>
                  <h2>BLOG CONTACT</h2>
                </div>
                <div>
                  <p>Home/ <span> Contact</span></p>
                </div>
           </div>
        </div>
      </div>

      <section className="content-section">
      <div className="content-container-full">
            <div className="content-container1">
                <div className="content-text1">
                    <h3>We are waiting to assist you..!</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                </div>
                <div className="content-iframe">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.0749681382626!2d4.566931014283183!3d7.781876194391822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1037895c78efeac5%3A0xac5ed308fc48ad34!2sOIC%20Hub!5e0!3m2!1sen!2sng!4v1656290321679!5m2!1sen!2sng" width="600" height="450" style={{"border":"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <section className="content-form">
                    <div className="content-container"> 
                        <form action="" style={{"width": "60%"}}>
                            <input type="text" placeholder="Your Name" size="30" required />
                            <input type="text" placeholder="Subject" size="30" required />
                            <input type="email" placeholder="Email" size="30" required />
                            <input type="text" placeholder="Company" size="30" />
                            <textarea name="message" id="" cols="50" rows="15" placeholder="message"></textarea>
                            <div className="content-but">
                              <button><a href="">SEND</a></button>
                            </div>
                        </form>
                        <div className="content-left">
                            <h3>DaliyShop</h3>
                            <p>Lorem ipsum dolor sit amet consectetur <br />
                                 adipisicing elit. Quibusdam eaque culpa rerum earum commodi <br />
                                  maiores?
                            </p>
                            <div className="icon-content">
                                <a href="">
                                    <i className="fas fa-home"></i>
                                    <span>Ville,AL 35813, USA</span>
                                </a>
                                <a href="">
                                    <i className="fas fa-phone-alt"></i>
                                    <span>+234-9041-620-570</span>
                                </a>
                                <a href="">
                                    <i className="fas fa-envelope"></i>
                                   <span>joshuaajayi012@gmail.com</span> 
                                </a>
                               
                            </div>
                        </div>
                  </div>
                </section>

            </div>
        </div>
      </section>

      <section class="newsletter-section">
        <div class="newsletter-container">
            <h3>SUBSCRIBE OUR NEWSLETTER</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
        </div>
        <div class="newsletter-subscribe">
            <input type="email" placeholder="Enter Your Email" size="30" />
            <span> <a href="">SUBSCRIBE</a></span>

        </div>
      </section>

    </div>
  )
}

export default Contact
