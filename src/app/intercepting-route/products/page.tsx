import Link from 'next/link';

// ProductList component (app/products/page.js)
const ProductList = () => {
    return (
      <div style={{ padding: '20px' }}>
        <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Products</h1>
        <ul>
          <li>
            <Link href="/product/1" style={{ color: '#4A90E2' }}>Product 1 (Quick View)</Link>
          </li>
          <li>
            <Link href="/product/2" style={{ color: '#4A90E2' }}>Product 2 (Quick View)</Link>
          </li>
          <li>
            <Link href="/product/3" style={{ color: '#4A90E2' }}>Product 3 (Quick View)</Link>
          </li>
        </ul>
      </div>
    );
  };

export default ProductList;