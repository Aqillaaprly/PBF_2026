const ProductView = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-blue-500 text-center">
        Product Page
      </h1>

      <section className="mt-6 p-4 bg-gray-100 rounded shadow">
        <h2 className="text-xl font-semibold">Hero Section</h2>
        <p>Welcome to product page</p>
      </section>

      <section className="mt-4 p-4 bg-gray-200 rounded shadow">
        <h2 className="text-xl font-semibold">Main Content</h2>
        <p>List of products here</p>
      </section>
    </div>
  );
};

export default ProductView;