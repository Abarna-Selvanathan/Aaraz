import Link from "next/link";
import '../Navbar/Navbar.css';
import "../../src/app/globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


const Navbar: React.FC = () => {
  return (
    <header className="navbar">
      <div className="navIcons">
        <div className="search-icon">
          <div className="fa fa-search" title="Search"></div>
        </div>
        <div className="logo">
          <img src="/Image/logo.png" alt="Company Logo" width={90} height={90} />
        </div>
        <div className="icons">
          <div className="user-icon" title="User Profile">
            <Link href="/account">
              <div className="fa fa-user" style={{color: 'white' }}></div>
            </Link>
          </div>
          <div className="cart-icon" title="Cart">
            <Link href="/cart">
              <div className="fas fa-cart-plus" style={{color: 'white' }}></div>
            </Link>
          </div>
        </div>
      </div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/frame">Frames</Link>
        <Link href="/resinart">Resin Arts</Link>
        <Link href="/walletcard">Wallet Cards</Link>
        <Link href="/handmadegift">Handmade Gifts</Link>
      </nav>
    </header>
  );
};

export default Navbar;
