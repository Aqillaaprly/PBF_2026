import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Praktikum Next.js Pages Router</h1>
      <p>Mahasiswa D4 Teknik Informatika</p>

      <Link href="/about">
        Go to About Page
      </Link>
    </div>
  );
}