import './OrderList.css';
import React from "react";

interface Props {
    name: string,
    total: number,
    quantity: number,
    remove: () => void
}

const OrderList: React.FC<Props> = ({name, quantity, total, remove}) => {
    return (
        <div className="orderList">
            <p>{name}</p>
            <span>x{quantity}</span>
            <b>{total} KGS</b>
            <button onClick={remove}>Remove</button>
        </div>
    );
};

export default OrderList;