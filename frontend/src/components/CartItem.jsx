import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './CartItem.css';

const CartItem = ({ item }) => {
    const { removeFromCart, updateQuantity } = useContext(CartContext);

    return (
        <div className="cart-item">
            <div className="cart-item__container">
                <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item__container-image"
                />
            </div>

            <div className="cart-item__info">
                <h4 className="cart-item__name">{item.name}</h4>
                <p className="cart-item__price">{item.price}</p>
                <div className="cart-item__controls">
                    <div className="quantity-control">
                        <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            aria-label="Уменьшить количество"
                        >
                            -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            aria-label="Увеличить количество"
                        >
                            +
                        </button>
                    </div>
                </div>
                <button
                    className="cart-item__remove"
                    onClick={() => removeFromCart(item.id)}
                    aria-label="Удалить из корзины"
                >
                    Удалить
                </button>
            </div>
        </div>
    );
};

export default CartItem;