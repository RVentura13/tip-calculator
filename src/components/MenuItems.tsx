import { Dispatch } from "react";
import { formatCurrency } from "../helpers/formatCurrency";
import type { MenuItem } from "../types";
import type { OrderActions } from "../reducers/order-reducers";

type MenuItemProps = {
  item: MenuItem;
  dispatch: Dispatch<OrderActions>;
};

export const MenuItems = ({ item, dispatch }: MenuItemProps) => {
  return (
    <button
      className="flex justify-between rounded-lg border-2 border-teal-400 w-full p-3 hover:bg-teal-200"
      onClick={() => dispatch({ type: "add-order", payload: { item } })}
    >
      <p>{item.name}</p>
      <p className="font-black">{formatCurrency(item.price)}</p>
    </button>
  );
};
