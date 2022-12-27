import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export default function Categories() {
  const [data, setData] = useState(null);
  

  useEffect(() => {
    getData();
  }, []);

  const getData=async () =>{
    const response = await fetch('https://fakestoreapi.com/products')
    .then((response) =>response.json());
    setData(response)
  }
console.log(data)
  return (
    <div className="container-news">
            <h2 className="title-new">Choose you are looking for</h2><hr/>

    <div className="products-new">

      
{data?.slice(0, 13).map((record) => (
                  <div key={record.id}>

                      <div class="card-new">
                          <div className="new-col">
                          <Link className="navbar-brand" to="/Allcategories">    
                                  <img src={record.image} alt={record.name} /></Link></div> 
                     
                  </div>


    </div>

    
))}

          </div>
         </div> )}


