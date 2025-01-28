import { addToCart } from "../../lib/actions/customer.actions";
import CartItem from "./CartItem";

export default function Cart() {
  const dummycart = [
    { id: 1, name: "Item 1", price: 10 },
    { id: 2, name: "Item 2", price: 20 },
  ];

  // const handleRemove = (id) => {
  //   setCart(cart.filter((item) => item.id !== id));
  // };

  // const getTotalPrice = () => {
  //   return cart.reduce((total, item) => total + item.price, 0);
  // };

  return (
    <div className="max-w-lg py-4 ">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {dummycart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        dummycart.map((item) => <CartItem key={item.id} item={item} />)
      )}
      <div className="mt-4 flex justify-between items-center">
        <p
          onClick={() => {
            addToCart(
              [
                {
                  productId: "6798e3dce96330e2b0f4342e",
                  quantity: "8",
                },
              ],
              "6798e3679f752a58e69f3b48"
            );
          }}
          className="bg-red-500 cursor-pointer"
        >
          Add
        </p>
        <h3 className="text-xl font-semibold">Total: </h3>
        <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600">
          Checkout
        </button>
      </div>
    </div>
  );
}
