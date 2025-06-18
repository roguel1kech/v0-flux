import presentImg from "../assets/welcomeAssets/images/present_frog.png";
import sprite from "../assets/icons/sprite.svg";
import CardInfo from "./CardInfo/CardInfo";
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductCard({ price, id, model, symbol, ...otherProps }) {
    const { addToCart } = useContext(CartContext);
    const [isInfoOpen, setIsInfoOpen] = useState(false);

    const handleAddToCart = (e) => {
        e.stopPropagation();
        addToCart({
            id,
            price,
            name: model,
            image: presentImg,
            symbol,
            model
        });
    };

    return (
        <>
            <article
                className="present"
                onClick={() => setIsInfoOpen(true)}
                role="button"
                tabIndex={0}
            >
                <div className="present__info">
                    <img
                        className="present__img"
                        src={presentImg}
                        alt={`Подарок: ${model}`}
                    />
                    <div className="present__do">
                        <button
                            className="present__favourite icons-bg"
                            aria-label="Добавить в избранное"
                        >
                            <svg aria-hidden="true">
                                <use href={`${sprite}#icon-favourite`}></use>
                            </svg>
                        </button>
                        <button
                            className="present__basket icons-bg"
                            onClick={handleAddToCart}
                            aria-label="Добавить в корзину"
                        >
                            <svg aria-hidden="true">
                                <use href={`${sprite}#icon-basket`}></use>
                            </svg>
                        </button>
                    </div>
                </div>
                <p className="present__price">{price} руб</p>
            </article>

            <CardInfo
                isOpen={isInfoOpen}
                onClose={() => setIsInfoOpen(false)}
                model={model}
                symbol={symbol}
                presentImg={presentImg}
                price={price}
                handleAddToCart = {handleAddToCart}
            />
        </>
    );
}