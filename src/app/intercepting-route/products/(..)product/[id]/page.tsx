'use client'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const styles = {
    modalOverlay: {
    position: "absolute" as "absolute", // Type assertion here
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContent: {
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '5px',
      maxWidth: '500px',
      width: '100%',
    },
    closeButton: {
      backgroundColor: '#4A90E2',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '5px',
      cursor: 'pointer',
    },
};

const Modal = ({ isOpen, onClose, children }: {isOpen: any, onClose: any, children: React.ReactNode}) => {
    if (!isOpen) return null;
  
    return (
      <div style={styles.modalOverlay}>
        <div style={styles.modalContent}>
          {children}
          <button onClick={onClose} style={styles.closeButton}>Close</button>
        </div>
      </div>
    );
};
  
// ProductModal component (app/products/(..)product/[id]/page.js)
const ProductModal = ({ params }: {params: {id: number}}) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
      setIsOpen(true);
  }, []);

  const handleClose = () => {
      setIsOpen(false);
      router.back();
  };

  return (
      <Modal isOpen={isOpen} onClose={handleClose}>
        <h2 style={{ fontSize: '20px', marginBottom: '10px' }}>Quick View: Product {params.id}</h2>
        <p>This is a modal view of the product.</p>
        <p>Add more product details here...</p>
      </Modal>
  );
};

export default ProductModal;