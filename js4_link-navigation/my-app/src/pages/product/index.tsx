import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Produk() {
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!isLogin) {
      router.push('/auth/login');
    }
  }, []);

  return <div>Produk User Page</div>;
}