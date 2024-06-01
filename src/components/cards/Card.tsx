import React from "react";
import './Card.css';

interface Props {
    id: number,
    img: string,
    name: string,
    price: number,
    onClickMe: () => void
}

const Card: React.FC<Props> = ({img, name, price, onClickMe, id}) => {
    return (
        <div className="card" onClick={onClickMe}>
            <img src={img} alt={name} className="card-img" />
            <div className="card-name">
                <h5>{name}</h5>
                <p>Price: <span>{price} KGS</span></p>
                <span>{id}</span>
            </div>
        </div>
    );
};

export default Card;