import { useState } from "react";

export default function ValidatedShoppingListForm({ addItem }) {
  const [formData, setFormData] = useState({ product: "", quantity: 0 });
  const [productIsValid, setProductIsValid] = useState(true);

  const validate = (product) => {
    if (product.length === 0) {
      setProductIsValid(false);
    } else setProductIsValid(true);
  };
  const handleChange = (e) => {
    if (e.target.name === "product") validate(e.target.value);
    setFormData((currData) => {
      return {
        ...currData,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (productIsValid) {
      addItem(formData);
      setFormData({ product: "", quantity: 0 });
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>
        Product is: {formData.product} and quantity is {formData.quantity}
      </h1>
      <label htmlFor="product">Product Name</label>
      <input
        type="text"
        name="product"
        id="product"
        placeholder="product name"
        onChange={handleChange}
        value={formData.product}
      />
      {!productIsValid && (
        <p style={{ color: "red" }}>Product name cannot be empty</p>
      )}
      <label htmlFor="quantity">Quantity</label>
      <input
        type="number"
        name="quantity"
        id="quantity"
        placeholder="quantity"
        onChange={handleChange}
        value={formData.quantity}
      />
      <button disabled={productIsValid} type="submit">Add Item</button>
    </form>
  );
}
