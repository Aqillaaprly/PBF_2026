import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProductView from "../../views/product";

export default function Produk() {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!isLogin) {
      router.push("/auth/login");
    }
  }, []);

  return <ProductView />;
}