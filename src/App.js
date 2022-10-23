// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";
import List from "./List";
import Top from "./Top";

function App() {
  const [products,setProducts]=useState([
    {
      id : 1,
      name : 'iphone',
      price : 140000,
      picture : "https://www.stuttgarter-nachrichten.de/media.media.4d1897c2-dbdb-47e6-a3b8-fad2e0fb06f5.original1024.jpg"
    },
    {
      id : 2,
      name : 'oneplus',
      price : 60000,
      picture : "https://i.gadgets360cdn.com/large/oneolus_nord_2t_ce_2_lite_winfutre_1652794667679.jpg?downsize=400:*"
    },
    {
      id : 3,
      name : 'nokia',
      price : 20000,
      picture : "https://www.notebookcheck.net/uploads/tx_nbc2/4_zu_3_Nokia_G21.jpg"
    },
    {
      id : 4,
      name : 'nothing',
      price : 3000,
      picture:"https://www.androidheadlines.com/wp-content/uploads/2022/06/Black-Nothing-Phone-1-featured-render-leak.jpg"
    },
    {
      id : 5,
      name : 'samsung',
      price : 110000,
      picture : "https://www.sammyfans.com/wp-content/uploads/2021/08/galaxy-z-fold-3-ftrd-img.jpg"

    },
    {
      id : 6,
      name : 'sony',
      price : 40000,
      picture : "https://classyprice.com.bd/images/Sony-Xperia-4.jpg"
    },

  ])
  const [list,setList]= useState([])

let addToCart=(abc)=>{
  setList([...list,abc])
}
let removeFromCart=(efg)=>{
const indexVal = list.findIndex(obj => obj.id === efg.id);
list.splice(indexVal,1);
setList([...list])
// alert(efg.id)
}

  return (
    <>
    <div>
      <Top/>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            {
              products.map((items)=>{
                return <Card collection={items} click={addToCart} check={list}/>
              })
            }
          </div>
        </div>
        <div className="col-lg-4">
          <List  hello={list} remove={removeFromCart}/>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
