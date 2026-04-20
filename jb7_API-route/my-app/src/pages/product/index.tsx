import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProductView from "../../views/product";

type Product = {
  id: string;
  name: string;
  price: number;
  size: string;
  category: string;
};

export default function Product() {
  const [isLogin, setIsLogin] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (!isLogin) {
      router.push("/auth/login");
    }
  }, [isLogin]);

  useEffect(() => {
    fetch("/api/product")
      .then((res) => res.json())
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  // kirim data ke view
  return <ProductView products={products} />;
}