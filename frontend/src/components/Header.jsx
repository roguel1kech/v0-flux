import outIcon from "../assets/icons/balance_min.svg";
import inIcon from "../assets/icons/balance_plus.svg";
import profileIcon from "../assets/icons/profile.svg";
import { Link } from "react-router-dom";

export default function Header({ balance, setBalance }) {
  return (
    <header className="header container">
      <nav className="header__nav">
        <div className="balance">
          <button
            className="balance__button balance__block-button__out"
            onClick={() => setBalance(balance - 100)}
          >
            <img src={outIcon} alt="minus" />
          </button>
          <p className="balance__block-money">{balance} руб</p>
          <button
            className="balance__button balance__block-button__in"
            onClick={() => setBalance(balance + 100)}
          >
            <img src={inIcon} alt="plus" />
          </button>
        </div>
        <div className="profile">
          <Link to="/profile" className="profile">
            <img className="profile__link-img" src={profileIcon} alt="profile" />
          </Link>
        </div>
      </nav>
    </header>
);
}
