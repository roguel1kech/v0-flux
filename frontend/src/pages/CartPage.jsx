import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';
import './CartPage.css';
import back from '../assets/icons/back.svg'

const CartPage = () => {
    const { cart, getTotal } = useContext(CartContext);
    const total = getTotal();

    return (
        <div className="cart-page">
            <nav className={'cant-nav'}>
                <Link to="/" className='go-back'>
                    <img src={back} alt='Иконка назад'/>
                </Link>
                <h1 className="cart-page__title">Корзина</h1>
            </nav>

            {cart.length === 0 ? (
                <div className="cart-empty">
                    <p>Ваша корзина пуста</p>
                    <Link to="/" className="button">
                        Вернуться к покупкам
                    </Link>
                </div>
            ) : (
                <>
                    <div className="cart-items">
                        {cart.map(item => (
                            <CartItem key={item.id} item={item} />
                        ))}
                    </div>

                    <div className="cart-summary">
                        <div className="cart-total">
                            <span>Итого:</span>
                            <span>{total} руб</span>
                        </div>
                        <button className="checkout-button">
                            Оформить заказ
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default CartPage;