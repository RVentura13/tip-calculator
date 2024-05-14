import { Dispatch } from "react";
import { formatCurrency } from "../helpers/formatCurrency";
import type { OrderItem } from "../types";
import { OrderActions } from "../reducers/order-reducers";

type OrderContentsProps = {
  order: OrderItem[];
  dispatch: Dispatch<OrderActions>;
};

export const OrderContents = ({ order, dispatch }: OrderContentsProps) => {
  return (
    <div>
      <h2 className="text-4xl font-black">Consumo</h2>
      <div className="space-y-3 mt-10">
        {order.map((item) => (
          <div
            className="flex justify-between items-center border-t border-gray-200 p-5 last-of-type:border-b"
            key={item.id}
          >
            <div>
              <p className="text-base">
                {item.name} - {formatCurrency(item.price)}{" "}
              </p>
              <p className="text-sm font-black">
                Cantidad: {item.quantity} -{" "}
                {formatCurrency(item.price * item.quantity)}
              </p>
            </div>
            <button
              className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
              onClick={() =>
                dispatch({ type: "remove-order", payload: { id: item.id } })
              }
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
