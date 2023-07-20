import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import { useState } from 'react';
import productService from '../../services/product-service';



const Cart = (props) => {
  const [productName, setProductName] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [formErrors, setFormErrors] = useState({});

  
  const handleAddProduct = (event) => {
    event.preventDefault();
      productService.addProduct(productName, productQuantity, productPrice)
    .then((response) => {

      setProductName('');
      setProductQuantity('');
      setProductPrice('');

      props.onClose();
    })
    .catch((error) => {
      const message = error.response.data.errors;
      setFormErrors(message);
    })

    }

    const handleEditProduct =(event )=>{
      event.preventDefault();
      productService.editProduct(props.product.id, productName, productQuantity, productPrice)
    .then((response) => {
      
      setProductName('');
      setProductQuantity('');
      setProductPrice('');
      props.onClose();
    })
    .catch((error) => {
      const message = error.response.data.errors;
      setFormErrors(message);
    })
    }
    


  return (
    <Modal onClose={props.onClose}>
      <div className={classes.total}>
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
            {formErrors?.name && (
              <div className={classes.error}>{formErrors.name[0]}</div>
            )}
        
       <input
          type="number"
          placeholder="Amount"
          value={productQuantity}
          onChange={(e) => setProductQuantity(e.target.value)}
        />
          {formErrors?.quantity && (
              <div className={classes.error}>{formErrors.quantity[0]}</div>
            )}        

        <input
          type="number"
          placeholder="Price"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
      {formErrors?.price && (
              <div className={classes.error}>{formErrors.price[0]}</div>
            )}  
      </div>



      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {props.action=="Add" &&<button className={classes.button} onClick={handleAddProduct } >{props.action}</button>
}
        {props.action=="Edit" && <button className={classes.button} onClick={handleEditProduct } >{props.action}</button>
        }
      </div>
    </Modal>
  );
};

export default Cart;
