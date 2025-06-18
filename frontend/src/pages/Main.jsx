import { useState, useEffect } from "react";
import Header from "../components/Header";
import FiltersNav from "../components/FiltersNav";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";
import "../styles/reset.css";
import "../styles/index.css";
import "../styles/filters.css";
 export default function Main() {
     const [balance, setBalance] = useState(0);
     const [searchTerm, setSearchTerm] = useState("");
     const [products, setProducts] = useState([]);
 
     useEffect(() => {
         // Explicit HTTP since Flask is running without HTTPS
        fetch("/api/gifts")
            .then(async (res) => {
                const text = await res.text();
                if (!res.ok) {
                    console.error("Non-OK response:", res.status, text);
                    throw new Error(`Server returned ${res.status}`);
                }
                try {
                    return JSON.parse(text);
                } catch (e) {
                    console.error("Response was not valid JSON:", text);
                    throw e;
                }
            })
            .then(setProducts)
            .catch((err) => {
                console.error("Fetch error:", err);
            });
     }, []);
 
     const filtered = products.filter((p) =>
         String(p.price).includes(searchTerm.trim())
     );
 
     return (
         <div className="content">
             <Header balance={balance} setBalance={setBalance} />
             <main className="content">
                 <FiltersNav searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                 <ProductGrid products={filtered} onClick={() => {}} />
             </main>
             <Footer />
         </div>
     );
 }