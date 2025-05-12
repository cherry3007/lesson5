import React from 'react';

const App = () => {
  return (
    <div className="center-container">
      <header className="header">
        <div className="container">
          <nav className="nav">
            <img src="./src/assets/logo.png" alt="Logo" />
            <ul>
              <li>Home</li>
              <li>Menu</li>
              <li>Services</li>
              <li>Offers</li>
            </ul>
            <img src="./src/assets/icon.png" alt="Icon" className="icon" />
            <button className="contact"><img src="./src/assets/phone.png" alt="Phone" /> Contact</button>
          </nav>
          <div className="header-content">
            <div className="header-content_text">
              <h1>Dive into Delights Of Delectable <span style={{ color: "#39DB4A" }}>Food</span></h1>
              <p>Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
              <button className="order">Order Now</button>
              <p className="p">Watch Video</p>
              <img src="./src/assets/pause.png" alt="" className="img" />
            </div>
            <img src="./src/assets/Intersect.png" alt="" className="img2" />
          </div>
        </div>
      </header>
      <section className="section">
        <div className="container">
          <div className="section-content">
            <h1>Customer Favorites</h1>
            <h2>Popular Categories</h2>
            <div className="section-content_cards">
              <div className="section-content_card">
                <img src="./src/assets/card.png" alt="" />
                <h3>Main Dish</h3>
                <p>(86 dishes)</p>
              </div>
              <div className="section-content_card">
                <img src="./src/assets/card1.png" alt="" />
                <h3>Break Fast</h3>
                <p>(12 break fast)</p>
              </div>
              <div className="section-content_card">
                <img src="./src/assets/card2.png" alt="" />
                <h3>Dessert</h3>
                <p>(48 dessert)</p>
              </div>
              <div className="section-content_card">
                <img src="./src/assets/card3.png" alt="" />
                <h3>Browse All</h3>
                <p>(255 Items)</p>
              </div>
            </div>
          </div>
          <div className="section-content_2">
            <h2>Special Dishes</h2>
            <h3>Standout Dishes From Our Menu</h3>
            <img src="./src/assets/strelki.png" alt="" className="imgg" />
            <div className="section-content_cards2">
              <div className="section-content_card2">
                <img src="./src/assets/salad.png" alt="" />
                <h4>Fattoush salad</h4>
                <p>Description of the item</p>
                <h5><span style={{ color: "#FF6868" }}>$</span>24.00</h5>
                <h6>⭐️4.9</h6>
              </div>
              <div className="section-content_card2">
                <img src="./src/assets/salad1.png" alt="" />
                <h4>Vegetable salad</h4>
                <p>Description of the item</p>
                <h5><span style={{ color: "#FF6868" }}>$</span>26.00</h5>
                <h6>⭐️4.6</h6>
              </div>
              <div className="section-content_card2">
                <img src="./src/assets/salad2.png" alt="" />
                <h4>Egg vegi salad</h4>
                <p>Description of the item</p>
                <h5><span style={{ color: "#FF6868" }}>$</span>23.00</h5>
                <h6>⭐️4.5</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section2">
        <div className="container">
          <img src="./src/assets/chef.png" alt="" />
          <div className="section_2">
            <h1>Testimonials</h1>
            <h2>What Our Customers Say About Us</h2>
            <p>“I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable”</p>
            <img src="./src/assets/customer.png" alt="" className="customer" />
          </div>
        </div>
      </section>
      <section className="services">
        <div className="container">
          <div className="services-left">
            <p className="subtitle">OUR STORY & SERVICES</p>
            <h2>Our Culinary Journey <br /> And Services</h2>
            <p className="description">
              Rooted in passion, we curate unforgettable dining experiences and offer exceptional services,
              blending culinary artistry with warm hospitality.
            </p>
            <button className="btn-explore">Explore</button>
          </div>
          <div className="services-right">
            <div className="service-box">
              <img src="./src/assets/vector.png" alt="Catering" />
              <h4>CATERING</h4>
              <p>Delight your guests with our flavors and presentation</p>
            </div>
            <div className="service-box">
              <img src="./src/assets/vector1.png" alt="Fast Delivery" />
              <h4>FAST DELIVERY</h4>
              <p>We deliver your order promptly to your door</p>
            </div>
            <div className="service-box">
              <img src="./src/assets/vector2.png" alt="Online Ordering" />
              <h4>ONLINE ORDERING</h4>
              <p>Explore menu & order with ease using our Online Ordering</p>
            </div>
            <div className="service-box">
              <img src="./src/assets/vector3.png" alt="Gift Cards" />
              <h4>GIFT CARDS</h4>
              <p>Give the gift of exceptional dining with Foodi Gift Cards</p>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-column">
          <img src="./src/assets/logo.png" alt="Logo" />            <p>Savor the artistry where every dish is a culinary masterpiece</p>
          </div>
          <div className="footer-column">
            <h4>Useful links</h4>
            <ul>
              <li>About us</li>
              <li>Events</li>
              <li>Blogs</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Main Menu</h4>
            <ul>
              <li>Home</li>
              <li>Offers</li>
              <li>Menus</li>
              <li>Reservation</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Contact Us</h4>
            <p>example@email.com</p>
            <p>+64 958 248 966</p>
            <p>Social media</p>
          </div>
        </div>
        <p className="footer-bottom">© 2023 Dcode | All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
