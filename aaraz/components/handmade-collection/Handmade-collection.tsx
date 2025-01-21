import React from "react";
import Image from "next/image";
import '../handmade-collection/Handmade-collection.css'
import "../../src/app/globals.css"

const HandmadegiftCollection: React.FC = () => {
  return (
    <>
     

      <section className="Collections">
        <h1>Collections Of Handmade Gifts</h1>
        <div className="products">
          <div className="product">
            <Image src="/Image/Explosion box.png" alt="Explosion Box" width={300} height={300} />
            <h3>Explosion Box</h3>
            <p>Rs 1200</p>
          </div>
          <div className="product">
            <Image src="/Image/PHOTO BOOK.png" alt="Photo Box" width={300} height={300} />
            <h3>Photo Box</h3>
            <p>Rs 1200</p>
          </div>
          <div className="product">
            <Image src="/Image/PHOTO BOOK.png" alt="Photo Book" width={300} height={300} />
            <h3>Photo Book</h3>
            <p>Rs 1500</p>
          </div>
          <div className="product">
            <Image src="/Image/roundPhoto Collage .jpeg" alt="Round Photo Collage" width={300} height={300} />
            <h3>Round Photo Collage</h3>
            <p>Rs 2500</p>
          </div>
          <div className="product">
            <Image src="/Image/squrePhotocollage.jpeg" alt="Square Photo Collage" width={300} height={300} />
            <h3>Square Photo Collage</h3>
            <p>Rs 2900</p>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default HandmadegiftCollection;
