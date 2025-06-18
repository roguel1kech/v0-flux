import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import tabMarket from "../../assets/icons/tab_market.svg";
import tabBasket from "../../assets/icons/add2basket.svg";
import tabFilters from "../../assets/icons/filters_sticks.svg";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(true);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <motion.nav
            animate={{
                y: isOpen ? "0%" : "110%"
            }}
            transition={{ duration: 0.3 }}
            className="footer footer__nav container"
        >
            <motion.button className="nav-tab" onClick={handleClick} aria-label="Главная"
                    animate={{
                        y: isOpen ? "-100%" : "-150%"
                    }}
            >
                <img src={tabMarket} alt="Маркет главная" />
            </motion.button>
            <div className="menu">
                <Link to="/cart" className="menu__item menu__basket" aria-label="Мои подарки">
                    <img src={tabBasket} alt="Корзина" />
                </Link>
            </div>
            <div className="menu">
                <Link className="menu__item menu__filters" aria-label="Мои подарки">
                    <img src={tabFilters} alt="" />
                </Link>
            </div>
        </motion.nav>
    );
}