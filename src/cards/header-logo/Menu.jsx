import react from "react";
import React from "react";
import './logo.css';
import {Link} from 'react-router-dom';


function Menu({ items }) {

    const [activeItem, setActiveItem] = react.useState()


    const onSelectItem = (index) => {
        setActiveItem(index)
    }




    return (
        <div className="conteinet__menu">
            {items && items.map((name, index,) =>
                <div
                    className={activeItem === index ? 'bl__value-items active' : 'bl__value-items'}
                    onClick={() => onSelectItem(index)} key={`${name}_${index}`}
                >
                    <Link to={name.href}>
                        <span className="1">{name.icon}</span>
                        <Link to={name.href}>{name.value}</Link>
                    </Link>
                </div>
            )}
        </div>
    );
}


export default Menu;