import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./CreateProduct.css";


// const fetchQuery = async ({ uri, method = "GET", body = null }) => {
//   for (let [key, value] of body) {
//     console.log(`${key} - ${value}`);
//   }
//   const response = await fetch(uri, {
//     method: method,
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: body !== null ? JSON.stringify(body) : null,
//   });
//   const data = await response.json();
//   return data;
// };

const CreateProduct = () => {
  let history = useHistory();
  const [product, setProduct] = useState({
    title: "",
    price: "",
    quantity: "",
    description: "",
    image: "",
    education: "",
    topic: "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("product", product);

    // const data = fetchQuery({
    //   uri: ,
    //   method: "POST",
    //   body: formData,
    // });
    axios.post("http://localhost:4000/products", formData);
    // localStorage.setItem("token", data.token);
    history.push("/products");
  };

  return (
    <div className="cp">
      <div className="form-container">
        <form action="" className="" onSubmit={handleSubmit}>
          <div className="row">
            {/* <label htmlFor="">Title</label> */}
            <input
              type="text"
              name="title"
              value={product.title}
              className="in"
              onChange={handleChange}
              placeholder="Title"
            />
          </div>
          <div className="row num">
            <div className="row">
              <label htmlFor="">Price</label>
              <input
                type="number"
                name="price"
                className="in"
                id="price"
                value={product.price}
                onChange={handleChange}
              />
            </div>
            <div className="row">
              <label htmlFor="">Quantity</label>
              <input
                type="number"
                name="quantity"
                id="quantity"
                className="in"
                value={product.quantity}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            {/* <label htmlFor="">Description</label> */}
            <textarea
              type="text"
              name="description"
              id="description"
              className="in"
              value={product.description}
              onChange={handleChange}
              placeholder="Description"
            />
          </div>
          <div className="row img">
            {/* <label htmlFor="">Product Image</label> */}
            <input
              type="file"
              name="image"
              id="image"
              className="in"
              value={product.image}
              onChange={handleChange}
              // onChange={(e) => handleFiles(e.target.files)}
              placeholder="Product Image"
            />
            {/* <div className="image-container">
              <div className="main-image">Main Image</div>
              <div className="thumbnails">
                <div className="im">Image 1</div>
                <div className="im">Image 2</div>
                <div className="im">Image 3</div>
              </div>
            </div> */}
          </div>
          <div className="num">
            {/* <h3>Categories</h3> */}
            <div className="row">
              <select
                name="education"
                id="education"
                value={product.education}
                onChange={handleChange}
              >
                <option value="Preschool">Preschool</option>
                <option value="Primary">Primary</option>
                <option value="Junior High School">Junior High School</option>
                <option value="Senior High School">Senior High School</option>
              </select>
            </div>
            <div className="row">
              <select
                name="topic"
                id="topic"
                value={product.topic}
                onChange={handleChange}
              >
                <option value="Children">Children</option>
                <option value="Story Books">Story Books</option>
                <option value="Technology">Technology</option>
                <option value="Programming">Programming</option>
                <option value="Health">Health</option>
                <option value="Science">Science</option>
                <option value="Business">Business</option>
                <option value="Inspirational">Inspirational</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <button type="Submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
