import {motion, AnimatePresence} from 'framer-motion';
import {createPortal} from 'react-dom';
import {useState, useEffect} from 'react';
import './WelcomeModal.css';
import frogImage from '../../assets/welcomeAssets/images/present_frog.png';
import hatImage from '../../assets/welcomeAssets/images/present_hat.png';
import diamondImage from '../../assets/welcomeAssets/images/present_diamond.png';
// import frogBg from '../../assets/welcomeAssets/images/frog_bg.jpg';
// import hatBg from '../../assets/welcomeAssets/images/hat_bg.jpg';
// import diamondBg from '../../assets/welcomeAssets/images/diamond_bg.jpg';
import tapIcon from '../../assets/welcomeAssets/icons/tap_icon.svg';


const WelcomeModal = ({isOpen, onClose}) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="welcome-content"
                    initial={{scale: 0.8, opacity: 0}}
                    animate={{scale: 1, opacity: 1}}
                    exit={{scale: 0.8, opacity: 0}}
                    onClick={onClose}
                >
                    <motion.h3
                        initial={{y: -20}}
                        animate={{y: 0}}
                        className="welcome-subtitle"
                    >
                        ДОБРО ПОЖАЛОВАТЬ В
                    </motion.h3>

                    <motion.h1
                        initial={{y: -20}}
                        animate={{y: 0}}
                        className="welcome-name"
                    >
                        FLUX
                    </motion.h1>

                    <motion.div
                        className="floating-icon"
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 5, -5, 0]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut"
                        }}
                    >
                        <div className="stack">
                            <div className="card left">
                                <img className="item" src={diamondImage} alt=""/>
                            </div>

                            <div className="card right">
                                <img className="item" src={hatImage} alt=""/>
                            </div>

                            <div className="card center">
                                <img className="item" src={frogImage} alt=""/>
                            </div>
                        </div>

                    </motion.div>

                    <motion.div
                        className="click-prompt"
                        animate={{
                            opacity: [0.5, 1, 0.5],
                            scale: [1, 1.05, 1]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    >
                        <img src={tapIcon} alt={'иконка нажатия'}/>
                    </motion.div>

                    <motion.h2
                        className="subtitle"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 0.5}}
                    >
                        МАГАЗИН
                        КОЛЛЕКЦИОННЫХ
                        ПОДАРКОВ
                    </motion.h2>


                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
};

export default WelcomeModal;