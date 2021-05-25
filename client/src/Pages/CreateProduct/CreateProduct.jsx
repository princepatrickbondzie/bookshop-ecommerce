import { useState } from "react";
// import axios from "axios";
import { useHistory } from "react-router-dom";
import "./CreateProduct.css";
// import { formatNumber } from "../../helpers/utils";

const CreateProduct = () => {
  let history = useHistory();
  const [previewSource, setPreviewSource] = useState();
  const [product, setProduct] = useState({
    title: "",
    price: "",
    quantity: "",
    description: "",
    image: "",
    education: "",
    topic: "",
  });

  const url = "http://localhost:4000/products";

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setProduct({ ...product, [e.target.name]: e.target.files[0] });
    };
    previewFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", product.title);
    formData.append("price", product.price);
    formData.append("quantity", product.quantity);
    formData.append("description", product.description);
    formData.append("education", product.education);
    formData.append("topic", product.topic);
    formData.append("image", product.image);

    try {
      const res = await fetch(url, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }

    // axios.post("http://localhost:4000/products", formData);
    // localStorage.setItem("token", data.token);
    // history.push("/products");

    // const data = await res.data;
    // setProduct({ ...product, product: data.product });
    // setProduct([]);
    history.push("/products");
  };

  return (
    <div className="cp">
      <div className="form-container">
        <form className="" onSubmit={handleSubmit}>
          <div className="row">
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
          <div className="row img upload-container">
            <label htmlFor="file-upload" className="custom-file-upload">
              <i className="fa fa-cloud-upload"></i> Custom Upload
            </label>
            <input
              type="file"
              name="image"
              id="file-upload"
              className="in"
              onChange={handleFileUpload}
              placeholder="Product Image"
            />
          </div>
          <div className="product-image-display row">
            {/* {setPreviewSource && <img src={setPreviewSource} alt="" />} */}
          </div>
          <div>
            <p></p>
          </div>
          <div className="num">
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
                <option value="Other">Other</option>
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
          <button type="Submit" id="bttn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
