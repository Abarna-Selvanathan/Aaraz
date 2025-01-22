import React from "react";
import Image from "next/image";
import '../resin-collection/Resin-collection.css'
import "../../src/app/globals.css"

const ResinArtsCollection: React.FC = () => {
  return (
    <>
   

      <section className="Collections">
        <h1>Collections Of Resin Arts</h1>
        <div className="products">
          <div className="product">
            <Image src="/Image/Resin Frame.jpeg" alt="Love Frame" width={300} height={300} />
            <h3>Resin Frame</h3>
            <p>Rs 2200</p>
          </div>
          <div className="product">
            <Image src="/Image/Resin letter keychains.jpeg" alt="Love Frame" width={300} height={300} />
            <h3>Letter Keychain</h3>
            <p>Rs 400</p>
          </div>
          <div className="product">
            <Image src="/Image/name stand.jpeg" alt="Love Frame" width={300} height={300} />
            <h3>Name Stand</h3>
            <p>Rs 1000</p>
          </div>
          <div className="product">
            <Image src="/Image/resinArt.jpeg" alt="Love Frame" width={300} height={300} />
            <h3>Letter & Photo Stand</h3>
            <p>Rs 1500</p>
          </div>
          <div className="product">
            <Image src="/Image/Preservation.jpeg" alt="Love Frame" width={300} height={300} />
            <h3>Resin Preservation</h3>
            <p>Rs 3000</p>
          </div>
        </div>
      </section>

     
    </>
  );
};

export default ResinArtsCollection;
