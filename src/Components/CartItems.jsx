import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { TbTrash } from "react-icons/tb";

const CartItems = () => {
  const { getTotalCartAmount, all_products, cartItems, removeFromCart } =
    useContext(ShopContext);

  return (
    <section className="max-padd-container pt-28">
      <table className="w-full mx-auto">
        <thead>
          <tr className="bg-slate-900/10 regular-18 sm:regular-22 text-start p-12s">
            <th className="p-1 py-2">Products</th>
            <th className="p-1 py-2">Title</th>
            <th className="p-1 py-2">Price</th>
            <th className="p-1 py-2">Quantity</th>
            <th className="p-1 py-2">Total</th>
            <th className="p-1 py-2">Remove</th>
          </tr>
        </thead>
        <tbody>
          {all_products.map((product) => {
            const quantity = cartItems[product.id];

            if (quantity > 0) {
              console.log("Image URL:", product.image); // Log the image URL for debugging

              return (
                <tr
                  key={product.id}
                  className="border-b text-gray-30 border-slate-900/20 p-6 medium-14 text-center"
                >
                  <td className="flexCenter">
                    <img
                      src={product.image}
                      alt="prdtImg"
                      height={100}
                      width={100}
                      className=" rounded-lg ring-1 ring-slate-900/5my-1"
                    />
                  </td>
                  <td>
                    <div className="line-clamp-3">{product.name}</div>
                  </td>
                  <td>{product.new_price}</td>

                  <td>{quantity}</td>
                  <td>{(product.new_price * quantity).toFixed(2)}</td>
                  <td>
                    <div className="bold-22 pl-14">
                      <TbTrash onClick={() => removeFromCart(product.id)} />
                    </div>
                  </td>
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </table>

      {/*cart details*/}
      <div className="flex flex-col gap-20 my-16 p-8 md:flex-row rounded-md bg-white w-full max-w-[666x]">
        <div className="flex flex-col gap=10">
          <h4 className="bold-20 ">Summury</h4>
          <div>
            <div className="flexBetween py-4">
              <h4 className="medium-16">SubTotal:</h4>
              <h4 className="text-gray-30 font-semibold">${0}</h4>
            </div>
            <hr />
            <div className="flexBetween py-4">
              <h4 className="medium-16">Shippping Fee:</h4>
              <h4 className="text-gray-30 font-semibold">Free</h4>
            </div>
            <hr />
            <div className="flexBetween py-4">
              <h4 className="bold-18">Total:</h4>
              <h4 className="bold-18">${0}</h4>
            </div>
          </div>
          <button className="btn_dark_rounded w-44">Checkout</button>
          <div className="flex flex-col gap-10">
            <h4 className="bold-20 capitalize">Your coupon code enter here:</h4>
            <div className="flexBetween pl-5 h-12 bg-primary rounded-full ring-1 ring-slate-900/10">
              <input
                type="text"
                placeholder="coupon code"
                className="bg-transparent border-none outline-none"
              />
              <br />
              <button className="btn_dark_rounded">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartItems;
