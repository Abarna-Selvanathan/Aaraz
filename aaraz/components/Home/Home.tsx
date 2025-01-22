import React from "react";
import Image from "next/image";
import './Home.css';
import Link from 'next/link';
import "../../src/app/globals.css"



const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero">
        <Image src="/Image/heroimg-1.png" alt="Personalized Gift" width={1920} height={500} />
      </div>

      {/* New Launch Section */}
      <section className="section">
        <h1>New Launch</h1>
        <div className="cards">
          <div className="card">
            <Image src="/Image/polaroidPic.jpeg" alt="Polaroid Pic" width={300} height={300} />
            <h3>Polaroid Pic</h3>
            <p>Rs 1000</p>
          </div>
          <div className="card">
            <Image src="/Image/resinArt.jpeg" alt="Resin Letterstand" width={300} height={300} />
            <h3>Resin Letterstand</h3>
            <p>Rs 900</p>
          </div>
          <div className="card">
            <Image src="/Image/polaroidPic.jpeg" alt="Polaroid Pic" width={300} height={300} />
            <h3>Polaroid Pic</h3>
            <p>Rs 1000</p>
          </div>
          <div className="card">
            <Image src="/Image/resinArt.jpeg" alt="Resin Letterstand" width={300} height={300} />
            <h3>Resin Letterstand</h3>
            <p>Rs 900</p>
          </div>
          <div className="card">
            <Image src="/Image/polaroidPic.jpeg" alt="Polaroid Pic" width={300} height={300} />
            <h3>Polaroid Pic</h3>
            <p>Rs 1000</p>
          </div>
          <div className="card">
            <Image src="/Image/polaroidPic.jpeg" alt="Polaroid Pic" width={300} height={300} />
            <h3>Polaroid Pic</h3>
            <p>Rs 1000</p>
          </div>
        </div>
        <div className="viewDetails">
          <button>View All</button>
        </div>
      </section>

      {/* Offers Section */}
      <section className="section">
        <h1>Offers</h1>
        <div className="cards">
          <div className="card">
            <Image src="/Image/loveframe.png" alt="Love Frame" width={300} height={300} />
            <div className="saleprice">20%</div>
            <h3>Love Frame</h3>
            <p>Rs 2200</p>
          </div>
          <div className="card">
            <Image src="/Image/googleframe.png" alt="Google Frame" width={300} height={300} />
            <div className="saleprice">30%</div>
            <h3>Google Frame</h3>
            <p>Rs 1500</p>
          </div>
          <div className="card">
            <Image src="/Image/loveframe.png" alt="Love Frame" width={300} height={300} />
            <div className="saleprice">20%</div>
            <h3>Love Frame</h3>
            <p>Rs 2200</p>
          </div>
          <div className="card">
            <Image src="/Image/googleframe.png" alt="Google Frame" width={300} height={300} />
            <div className="saleprice">30%</div>
            <h3>Google Frame</h3>
            <p>Rs 1500</p>
          </div>
          <div className="card">
            <Image src="/Image/loveframe.png" alt="Love Frame" width={300} height={300} />
            <div className="saleprice">20%</div>
            <h3>Love Frame</h3>
            <p>Rs 2200</p>
          </div>
          <div className="card">
            <Image src="/Image/googleframe.png" alt="Google Frame" width={300} height={300} />
            <div className="saleprice">30%</div>
            <h3>Google Frame</h3>
            <p>Rs 1500</p>
          </div>
        </div>
        <div className="viewDetails">
          <button>View All</button>
        </div>
      </section>

      {/* Collections Section */}
      <section className="Collections-section">
        <h1>Collections</h1>
        <div className="Collections-cards">
          <div className="card">
            <Link href="/handmadegift">
              <Image src="/Image/polaroidPic.jpeg" alt="Handmade Gifts" width={300} height={300} />
              <h3>Handmade Gifts</h3>
            </Link>
          </div>

          <div className="card">
            <Link href="/resinart">
              <Image src="/Image/resinArt.jpeg" alt="Resin Arts" width={300} height={300} />
              <h3>Resin Arts</h3>
            </Link>
          </div>

          <div className="card">  
            <Link href="/frame">
              <Image src="/Image/frame.jpeg" alt="Frames" width={300} height={300} />
              <h3> Frames</h3>
            </Link>
          </div>

          <div className="card">
            <Link href="/walletcard">
              <Image src="/Image/walletCard.jpeg" alt="Wallet Cards" width={300} height={300} />
              <h3>Wallet Cards</h3>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <h2 className="faqh1">Frequently Asked Questions</h2>
        <ul className="faq">
          <li>
            <span>Preparation Time</span>
            <div>Preparation - 4 to 9 working days</div>
          </li>
          <li>
            <span>How to place COD order?</span>
            <div>Contact privacy via WhatsApp or email.</div>
          </li>
          <li>
            <span>How to share photos and details?</span>
            <div>Send them through the order form or WhatsApp.</div>
          </li>
          <li>
            <span>How to request for customization?</span>
            <div>Provide details in the customization section during checkout.</div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
