import { Dispatch, useMemo } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from "../helpers/formatCurrency";
import { OrderActions } from "../reducers/order-reducers";

type OrderTotalsProps = {
  order: OrderItem[];
  tip: number;
  dispatch: Dispatch<OrderActions>;
};

export const OrderTotals = ({ order, tip, dispatch }: OrderTotalsProps) => {
  const subtotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );

  const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order]);
  const totalAmount = useMemo(() => subtotalAmount + tipAmount, [tip, order]);

  return (
    <>
      <div className="space-y-3">
        <h2 className="text-2xl font-black">Totales y propinas</h2>
        <p>
          Subtotal a pagar:{" "}
          <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
        </p>
        <p>
          Propina:{" "}
          <span className="font-bold">{formatCurrency(tipAmount)}</span>
        </p>
        <p>
          Total a pagar:{" "}
          <span className="font-bold">{formatCurrency(totalAmount)}</span>
        </p>
      </div>
      <button
        className="w-full bg-black p-3 uppercase text-white text-bold mt-10 disabled:opacity-10"
        disabled={totalAmount === 0}
        onClick={() => dispatch({ type: "place-order" })}
      >
        Guardar orden
      </button>
    </>
  );
};
