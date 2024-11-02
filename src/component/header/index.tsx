import { Link } from "@mui/material";
import "./header.scss";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img
          src="https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-pizza-logo-design-png-image_5683063.png"
          alt=""
          width={100}
        />
      </div>
      <nav className="header__nav">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/news">New</Link>
          </li>
          <li>
            <Link href="/quiz">Quiz</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
