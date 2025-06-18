import {motion, AnimatePresence} from 'framer-motion';
import {createPortal} from 'react-dom';
import styles from './CardInfo.module.css';
import back from '../../assets/icons/back.svg'
import like from '../../assets/icons/favourite.svg'
import {useContext} from "react";
import {CartContext} from "../../context/CartContext";
export default function CardInfo({isOpen, onClose, model, symbol, presentImg, price, handleAddToCart}) {
    const { addToCart } = useContext(CartContext);
    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className={styles.overlay}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    onClick={onClose}
                >
                    <motion.section
                        className={styles.card}
                        initial={{scale: 0.8, opacity: 0}}
                        animate={{scale: 1, opacity: 1}}
                        exit={{scale: 0.8, opacity: 0}}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <nav className={styles.controls}>
                            <button onClick={onClose}>
                                <img src={back} alt='Иконка назад'/>
                            </button>
                            <button><img src={like} alt='Иконка понравилось'/></button>
                        </nav>
                        <div className={styles.main}>
                            <img src={presentImg} alt="Подарок" className={styles.image}/>
                            <div className={styles.header}>
                                <h2>{model}</h2>
                                <p>{symbol}</p>
                            </div>
                            <div className={styles.details}>
                                <DetailRow label="Модель" value="Duskhopper"/>
                                <DetailRow label="Фон" value="Steel Grey"/>
                                <DetailRow label="Коллекция" value="Bull of Heaven"/>
                            </div>
                        </div>

                        <footer className={styles.footer}>
                            <p>{price} руб</p>
                            <button onClick={handleAddToCart}>Добавить в корзину</button>
                        </footer>
                    </motion.section>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
}

function DetailRow({label, value}) {
    return (
        <div className={styles.detailRow}>
            <p>{label}</p>
            <p>{value}</p>
        </div>
    );
}
