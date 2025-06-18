import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Profile from "./pages/Profile";
import WelcomeModal from './components/WelcomeModal/WelcomeModal';
import { useState } from "react";
import CartPage from "./pages/CartPage";
import { CartProvider } from "./context/CartContext"; // Добавьте импорт

export default function App() {
    const [isWelcomeOpen, setIsWelcomeOpen] = useState(true);

    return (
        <CartProvider>
            <div className="app">
                <WelcomeModal
                    isOpen={isWelcomeOpen}
                    onClose={() => setIsWelcomeOpen(false)}
                />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/cart" element={<CartPage />} />
                </Routes>
            </div>
        </CartProvider>
    );
}