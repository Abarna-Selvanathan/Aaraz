import React from "react";
import Image from "next/image";
import "../../src/app/globals.css"
import "../Frame-collection/Frame.css";

const CollectionFrame: React.FC = () => {
  return (
    <>
      <section className="Collections">
        <h1>Collections Of Frames</h1>
        <div className="products">
            <div className="product" >
              <Image src="/Image/loveframe.png" alt="Love Frame" width={300} height={300} />
              <h3>Love Frame</h3>
              <p>Rs 2200</p>
            </div>

            <div className="product" >
              <Image src="/Image/googleframe.png" alt="Love Frame" width={300} height={300} />
              <h3>Google Frame</h3>
              <p>Rs 2200</p>
            </div>

            <div className="product" >
              <Image src="/Image/frame.jpeg" alt="Love Frame" width={300} height={300} />
              <h3>Illustration Frame</h3>
              <p>Rs 3200</p>
            </div>

            <div className="product" >
              <Image src="/Image/nameframe.jpeg" alt="Love Frame" width={300} height={300} />
              <h3>Name Frame</h3>
              <p>Rs 1500</p>
            </div>

            <div className="product" >
              <Image src="/Image/redheart.png" alt="Love Frame" width={300} height={300} />
              <h3>Red Heart</h3>
              <p>Rs 900</p>
            </div>

            <div className="product" >
              <Image src="/Image/loveframe.png" alt="Love Frame" width={300} height={300} />
              <h3>Love Frame</h3>
              <p>Rs 2200</p>
            </div>
        </div>
      </section>
    </>
  );
};

export default CollectionFrame;
