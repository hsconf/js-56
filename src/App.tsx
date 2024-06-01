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
        price: number
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
        const item = { name, price };
        setOrder((prevOrder) => [...prevOrder, item]);
    };
    console.log(order);
    return (
        <>
        <div className="container">
            <OrderList/>
            <div className="menu-right">
                <h3>Add items:</h3>
                {menuArray.map((item) => (
                    <Card onClickMe={() => click(item.name, item.price)} key={item.id} img={item.img} name={item.name} price={item.price} id={item.id} />
                ))}
            </div>
        </div>
    </>
    )
};

export default App