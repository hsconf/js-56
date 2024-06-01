import './App.css'
import React from "react";
import Card from "./components/cards/Card";
import OrderList from "./components/order/OrderList";
import burger from "./assets/burger.png";
import cheeseburger from "./assets/cheeseburger.png";
import coffee from "./assets/coffee.png";
import cola from "./assets/cola.png";
import potato from "./assets/potato.png";
import tea from "./assets/tea.png";

const App = () => {

    interface orderItem {
        name: string,
        price: number,
        quantity: number
    }

    const menuArray = [
        {img: burger, name: 'Burger', price: 80, id: 10},
        {img: cola, name: 'Cola', price: 40, id: 20},
        {img: cheeseburger, name: 'Cheeseburger', price: 90, id: 30},
        {img: coffee, name: 'Coffee', price: 70, id: 40},
        {img: potato, name: 'Potato', price: 45, id: 50},
        {img: tea, name: 'Tea', price: 50, id: 60},
    ];

    const [order, setOrder] = React.useState<orderItem[]>([]);

    const click = (name: string, price: number) => {
        const existingIndex = order.findIndex((item) => item.name === name);
        if (existingIndex !== -1) {
            const updatedOrder = [...order];
            updatedOrder[existingIndex].quantity++;
            setOrder(updatedOrder);
        } else {
            const newItem = { name, price, quantity: 1 };
            setOrder((prevOrder) => [...prevOrder, newItem]);
        }
    };

    const calculateTotal = () => {
        return order.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const remove = (name: string) => {
        const updated = order.filter(item => item.name !== name);
        setOrder(updated)
    };

    return (
        <div className="container">
            <div className="menu left-menu">
                <h3>Order Details:</h3>
                {order.length > 0 ? (
                    order.map((item, index) => (
                        <OrderList remove={() => remove(item.name)} key={index} name={item.name}
                                   quantity={item.quantity} total={item.price * item.quantity}/>
                    ))
                ) : (
                    <div>Empty</div>
                )}
                <div>Total: {calculateTotal()}</div>
            </div>

            <div className="menu right-menu">
                <h3>Add items:</h3>
                {menuArray.map((item) => (
                    <Card onClickMe={() => click(item.name, item.price)} key={item.id} img={item.img} name={item.name}
                          price={item.price} id={item.id}/>
                ))}
            </div>
        </div>
    );
};

export default App;
