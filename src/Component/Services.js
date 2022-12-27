import { useNavigate } from "react-router-dom";
import { useGetAllProductsQuery } from '../features/productsApi';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';
const Services = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
const dispatch = useDispatch();
const navigate = useNavigate();
  
const handleAddToCart =(product)=>{
dispatch(addToCart(product));
navigate("/cart");
}
  return (
    <div className="home-container">
      {isLoading ? (
        <p>Loading....</p>
      ) : error ? (
        <p>an error occured</p>
      ) : (
        <>
          <h2 className="title-new">Shop Nearby You</h2>
          <hr />
          <div className="products">
          {data.map(product => <div key={product.id}>


            <div class="card" >
              <img src={product.image} alt={product.name}/>
              <div class="card-body">
                <h5 class="card-title">{product.name}</h5>
                <p class="card-text">{product.desc}</p>
                <p class="card-text">${product.price}</p>
                <button onClick={() =>handleAddToCart(product)} className="btn btn-primary">Add to Cart</button>
              </div>
            </div>




          </div>
          )}


</div>
        </>
      )}

    </div>
  );
};

export default Services
