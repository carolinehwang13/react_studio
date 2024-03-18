import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem.js";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

let idxtoitem = {}

bakeryData.forEach((item, index) => {
  idxtoitem[index] = item.name;
})

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  const [cartPrice, setCartPrice] = useState(0);
  // map of index num to

  const emptycart = bakeryData.map(() => 0);
  // let idxtoitem = {}

  // bakeryData.forEach((item, index) => {
  //   idxtoitem[index] = item.name;
  // })

  console.log(idxtoitem)


  // for (let i = 0; i < bakeryData.length(); i++){
  //   idxtoitem[i] = bakeryData[i].name;
  // }
  // const idxtoitem = bakeryData.map((item, index) => {index : item.name})

  const [cartContents, setCartContents] = useState(emptycart);

  return (
    <div className="App">
      <h1>My Bakery</h1>
      <div id="bakery">
        {bakeryData.map((item, index) => (
          <BakeryItem
            image={item.image}
            name={item.name}
            description={item.description}
            price={item.price}
            totalPrice={cartPrice}
            increment={setCartPrice}
            cart={cartContents}
            setCart={setCartContents}
            myindex={index}
          />
        ))}
      </div>
      <div>
        <h2>Cart</h2>
        <p>Total price: {cartPrice}</p>
        {/* {cartContents} */}
        {printCart(cartContents)}
      </div>
    </div>
  );
}

function printCart(cart) {

  let contents = "";
  let copy = {...cart}

  for (let i =0; i < cart.length; i++){
    if (cart[i] > 0){
      contents = contents + cart[i] + "x " + idxtoitem[i] + " ";
    }
  }

  // copy.map( (value, index) => {
  //   contents += "amt: " + {value} + " item: ";
  //   return value;
  // }
  // );

  return (
    <p>{contents}</p>
    );
}

// function printItem(key, value) {
//   return { key } + ": " + { value };
// }

export default App;
