import React, { useState }  from 'react'


export default function TariffCard(props) {

    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };

    return(
        <div className={"tariff-card " +(props.isSelected?"selected":"tariff-card")}>
        <header className="tariff-name" style={{backgroundColor: props.nameColor}}>Безлимитный {props.name}</header>
        <div className="tariff-price" style={{backgroundColor: props.priceColor}}>{props.price} руб/мес</div>
        <div className="tariff-speed">До {props.speed} Мбит/сек</div>
        <footer className="tariff-addInfo">Объем включенного трафика не ограничен</footer>
        <button className="tariff-button" onClick={handleChange}> {checked?"Тариф выбран": "Выберите тариф"}</button>
        </div>
    )
}



