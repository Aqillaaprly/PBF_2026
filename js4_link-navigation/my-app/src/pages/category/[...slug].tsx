import { useRouter } from 'next/router';

export default function Category() {
  const { query } = useRouter();

  return (
    <div>
      <h1>Category Page</h1>
      <ul>
        {Array.isArray(query.slug) &&
          query.slug.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
      </ul>
    </div>
  );
}