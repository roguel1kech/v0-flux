import ProductCard from "./ProductCard";

export default function ProductGrid({products}) {
    return (
        <section className="presents-section">
            {products.map((p) => (
                <ProductCard key={p.id} price={p.price} {...p} onClick={() => {
                }}/>
            ))}
        </section>
    );
}
