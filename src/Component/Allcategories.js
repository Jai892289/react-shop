import { useState, useEffect } from "react";


// export default function Allcategories() {
//   const [data, setData] = useState(null);
  

//   useEffect(() => {
//     getData();
//   }, []);

//   const getData=async () =>{
//     const response = await fetch('https://fakestoreapi.com/products')
//     .then((response) =>response.json());
//     setData(response)
//   }

//   return (

    


//     <div className="container-new">


// <div class="row">
//   <div class="col-sm-2" >
//     <h4 s>Filters</h4>
//     <p>Some text..</p>
//   </div>
//   <div class="col-sm-10" >



//   <h2 className="title-new">Deal of the day</h2><hr/>

// <div className="products-new">

  
// {data && data.map((record)=>(
// <div key={record.id}>

// <div  class="card" >
//           <img src={record.image} alt={record.name}/>
//           <div class="card-body">
//             <h5 class="card-title">{record.name}</h5>
//             <p class="card-text">{record.desc}</p>
//             <p class="card-text">${record.price}</p>
//             <button className="btn btn-primary">Add to Cart</button>
//           </div>
//         </div>


// </div>


// ))}

//       </div>

//   </div>
// </div>



//          </div> )}













export default function Allcategories() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [q, setQ] = useState("");
  const [searchParam] = useState(["capital", "name", "numericCode"]);
  const [filterParam, setFilterParam] = useState(["All"]);

  useEffect(() => {
      fetch(
          "https://raw.githubusercontent.com/iamspruce/search-filter-painate-reactjs/main/data/countries.json"
      )
          .then((res) => res.json())
          .then(
              (result) => {
                  setIsLoaded(true);
                  setItems(result);
              },
              (error) => {
                  setIsLoaded(true);
                  setError(error);
              }
          );
  }, []);


 

  const data = Object.values(items);






  function search(items) {
      return items.filter((item) => {
          if (item.region == filterParam) {
              return searchParam.some((newItem) => {
                  return (
                      item[newItem]
                          .toString()
                          .toLowerCase()
                          .indexOf(q.toLowerCase()) > -1
                  );
              });
          } else if (filterParam == "All") {
              return searchParam.some((newItem) => {
                  return (
                      item[newItem]
                          .toString()
                          .toLowerCase()
                          .indexOf(q.toLowerCase()) > -1
                  );
              });
          }
      });
  }

  if (error) {
      return (
          <p>
              {error.message}, error,{" "}
            
          </p>
      );
  } else if (!isLoaded) {
      return <>loading...</>;
  } else {
      return (
          <div className="wrapper">


 <div class="row">
  <div class="col-sm-2" >


<div className="search-wrapper">
              <span className="sr-only">Search here </span>

                  <label htmlFor="search-form">
                      <input
                          type="search"
                          name="search-form"
                          id="search-form"
                          className="search-input"
                          placeholder="Search for..."
                          value={q}
                          onChange={(e) => setQ(e.target.value)}
                      />
                  </label>

                  <div className="select">
                  <span>Filter </span>
                      <select
                          onChange={(e) => {
                              setFilterParam(e.target.value);
                          }}
                          className="custom-select"
                          aria-label="Filter Countries By Region"
                      >
                          <option value="All">Filter By Region</option>
                          <option value="Africa">Africa</option>
                          <option value="Americas">America</option>
                          <option value="Asia">Asia</option>
                          <option value="Europe">Europe</option>
                          <option value="Oceania">Oceania</option>
                      </select>
                      <span className="focus"></span>
                  </div>
              </div>



  </div>
  <div class="col-sm-10" >
  <ul className="card-grid">
                  {search(data).map((item) => (
                      <li>
                          <article className="card" key={item.alpha3Code}>
                              <div className="card-image">
                                  <img
                                      src={item.flag.large}
                                      alt={item.name}
                                  />
                              </div>
                              <div className="card-content">
                                  <h2 className="card-name">{item.name}</h2>
                                  <ol className="card-list">
                                      <li>
                                          population:{" "}
                                          <span>{item.population}</span>
                                      </li>
                                     
                                  </ol>
                              </div>
                          </article>
                      </li>
                  ))}
              </ul>
    
    
    
    
    </div></div>

             






             
          </div>
      );
  }
}