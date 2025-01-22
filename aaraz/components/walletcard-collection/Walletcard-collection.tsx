import React from "react";
import Image from "next/image";
import "../walletcard-collection/Walletcard-collection.css";
import "../../src/app/globals.css"

// Define the type for each product
interface Product {
  imageSrc: string;
  altText: string;
  title: string;
  price: string;
}

const WalletCardsCollection: React.FC = () => {
  const products: Product[] = [
    {
      imageSrc: "/Image/Calendar Wallet card.png",
      altText: "Calendar Wallet Card",
      title: "Calendar Wallet Card",
      price: "Rs 1000",
    },
    {
      imageSrc: "/Image/Love Bank Wallet card.png",
      altText: "Love Bank Wallet Card",
      title: "Love Bank Wallet Card",
      price: "Rs 1000",
    },
    {
      imageSrc: "/Image/walletCard.jpeg",
      altText: "Wallet Card",
      title: "Wallet Card",
      price: "Rs 1000",
    },
    {
      imageSrc: "/Image/Map wallet card.png",
      altText: "Map Wallet Card",
      title: "Map Wallet Card",
      price: "Rs 1000",
    },
  ];

  return (
    <>
      <section className="Collections">
        <h1>Collections Of Wallet Cards</h1>
        <div className="products">
          {products.map((product, index) => (
            <div className="product" key={index}>
              <Image
                src={product.imageSrc}
                alt={product.altText}
                width={200}
                height={200}
              />
              <h3>{product.title}</h3>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default WalletCardsCollection;
