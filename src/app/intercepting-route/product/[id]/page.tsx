const ProductPage = ({ params }: {params: {id: number}}) => {
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Product {params.id}</h1>
      <p>This is the full product page with all details.</p>
    </div>
  );
};
export default ProductPage