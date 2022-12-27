import { useState, useEffect } from "react";


export default function Data() {
  const [data, setData] = useState(null);
  

  useEffect(() => {
    getData();
  }, []);

  const getData=async () =>{
    const response = await fetch('https://fakestoreapi.com/products')
    .then((response) =>response.json());
    setData(response)
  }

  return (
    <div className="container-new">
            <h2 className="title-new">Deal of the day</h2><hr/>

    <div className="products-new">

      
{data && data.slice(0,5).map((record)=>(
    <div key={record.id}>

<div  class="card" >
              <img src={record.image} alt={record.name}/>
              <div class="card-body">
                <h5 class="card-title">{record.name}</h5>
                <p class="card-text">{record.desc}</p>
                <p class="card-text">${record.price}</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>


    </div>

    
))}

          </div>
         </div> )}


