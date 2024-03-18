// TODO: create a component that displays a single bakery item

export default function myBakeryItem({
  image,
  name,
  description,
  price,
  increment,
  totalPrice,
  cart,
  setCart,
  myindex,
}) {

  // const cartCopy = { ...cart };
  let cartCopy = [];

  // function addCart(){
  //   cartCopy = {...cart};
  //   cartCopy[index] += 1;
  //   console.log(cartCopy);
  // }

  // function addCart()

  const addToCart = () => setCart(cart.map((value, index) => {
    if (index == myindex){
      return value + 1;
    }else{
      return value;
    }
  }));

  const addCartPrice = () => increment(totalPrice + price);

  function hi() {
    // addCart();
    addToCart();
    addCartPrice();
    console.log(cart);
  }

  return (
    <div>
      <img id="itemImage" src={image} />
      <h1>{name}</h1>
      <p>{description}</p>
      <div id="priceCart">
        <p>{price}</p>
        <button onClick={hi}>Add to Cart</button>
      </div>
    </div>
  );
}

// function incrementPrice(increment, totalPrice, price){
//   increment(totalPrice + price)
// }
