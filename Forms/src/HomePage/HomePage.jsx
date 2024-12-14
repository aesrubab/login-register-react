import { useState, useEffect } from 'react';
import ProductCard from './components/ProductCard';
import SearchBar from './components/SearchBar';

const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [pageSize, setPageSize] = useState(10);
    const [loading, setLoading] = useState(false);

    const getProducts = async () => {
        setLoading(true);
        try { 
            const response = await fetch(
                searchTerm 
                    ? `http://localhost:5000/api/products?searchTerm=${searchTerm}&pageSize=${pageSize}` 
                    : `http://localhost:5000/api/products?pageSize=${pageSize}`
            );
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
            const data = await response.json();
            setProducts(data.product);
        } catch (error) {
            console.error("Failed to fetch products:", error);
            setProducts([]); 
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getProducts();
    }, [searchTerm, pageSize]);

    return (
        <>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <div className="grid grid-cols-3 gap-10 p-10">
                {products.length === 0 ? (
                    <p className="col-span-3 text-center text-gray-500">No products found</p>
                ) : (
                    products.map(product => <ProductCard key={product.id} product={product} />)
                )}
                <button 
                    onClick={() => setPageSize(prevState => prevState + 5)} 
                    disabled={loading}
                    className="bg-red-500 text-white px-5 py-3 w-fit col-span-3 justify-self-center text-lg"
                >
                    {loading ? "Loading..." : "View More"}
                </button>
            </div>
        </>
    );
};

export default HomePage;
