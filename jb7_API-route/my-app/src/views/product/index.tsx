import { useState } from "react";

type Product = {
  id: string;
  nama?: string;
  name?: string;
  harga?: number;
  price?: number;
  ukuran?: string;
  size?: string;
  warna?: string;
  color?: string;
  category?: string;
};

type Props = {
  products: Product[];
};

const ProductView = ({ products: initialProducts }: Props) => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [loading, setLoading] = useState(false);

  // Tugas 3: Refresh tanpa reload
  const handleRefresh = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/product");
      const json = await res.json();
      setProducts(json.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-blue-500 text-center">
        Product Page
      </h1>

      {/* HERO SECTION */}
      <section className="mt-6 p-4 bg-gray-100 rounded shadow">
        <h2 className="text-xl font-semibold">Hero Section</h2>
        <p>Welcome to product page</p>
      </section>

      {/* PRODUCT LIST */}
      <section className="mt-4 p-4 bg-gray-200 rounded shadow">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-semibold">Product List</h2>

          {/* Refresh Button */}
          <button
            onClick={handleRefresh}
            disabled={loading}
            className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 disabled:opacity-50"
          >
            {loading ? "Loading..." : "🔄 Refresh Data"}
          </button>
        </div>

        {products.length === 0 ? (
          <p>No products available</p>
        ) : (
          products.map((item) => (
            <div key={item.id} className="bg-white p-3 rounded mb-3 shadow">
              <h3 className="font-bold">{item.nama || item.name}</h3>
              <p>Price: {item.harga || item.price}</p>
              <p>Size: {item.ukuran || item.size}</p>
              {(item.warna || item.color) && (
                <p>Color: {item.warna || item.color}</p>
              )}
              {/* Tugas 2: Tampilkan category */}
              {item.category && (
                <p className="text-sm text-blue-500 font-medium">
                  Category: {item.category}
                </p>
              )}
            </div>
          ))
        )}
      </section>
    </div>
  );
};

export default ProductView;