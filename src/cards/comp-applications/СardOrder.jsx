import React from "react";
import react, {useEffect, useState} from "react";
import './AppOrder.css';
import {Button, InputText} from '../../cards';
import {FaAngleDown} from "react-icons/fa"; // стрелка вниз
import {serverUrl} from "../../common/AppConstants";
import axios from "axios";
import Cookies from "js-cookie";
// import logos from '../img/2.png';
// import Button from '../Button.jsx'
// import InputTimeDate from "../InputTimeDate";
// import InputText from "../InputText";


// import Logo from "../Logo";
// import BtnBurger from '../BtnBurger';


async function getOrders() {
    const url = serverUrl + `/fixer/api/user/orders`;
    const res = await axios.get(url, {
        headers: {
            Authorization: `Bearer ${Cookies.get('access_token')}`,
            'X-CSRF-TOKEN': Cookies.get('csrf_token')
        }
    });
    return res.data;
}

function СardOrder() {
    const [orderList, setOrderList] = useState([])

    useEffect(
        () => {
            getOrders().then(response => {
                let res = response.map(order => {
                    return <OrderItem key={order?.id} name={order.parameters[0]?.value}/>
                })
                setOrderList(res)
            })
        }, []
    )

    return (
        <>
            <div className="content__order-visible">
                <Button>Мои заказы</Button>
                <a>История</a>
            </div>
            <OrderItem key={"1"} name={"Холодильник"}/>
            <OrderItem key={"2"} name={"Печка"}/>
            <OrderItem key={"3"} name={"Телевизор"}/>
            {orderList}
        </>
    );
}


function OrderItem({order, name}) {
    const [blOrderVisebled, setBlOrderVisebled] = react.useState()

    const visbeledItemsBlock = () => {
        setBlOrderVisebled(!blOrderVisebled)
    }
    return <div className={blOrderVisebled ? 'order--bl active' : 'order--bl'}>
        <div className="order__block--visible">
            <div className="bl__text--order">
                <div className="block__order-section">
                   <p className="">{name}</p>
                </div>
                <div className="block__order-section">
                   <p className="">23/12/2022</p>
                </div>
               <div className="block__order-section">
                   <p className="">В работе</p>
               </div>



               <div className='svg__order--bl'>
                <FaAngleDown
                    onClick={visbeledItemsBlock}
                    className={blOrderVisebled ? 'svg__icons active' : 'svg__icons'}
                />
            </div>
            </div>
            
        </div>
        {blOrderVisebled ? (
            <div className="input__regstr">
                {/* <InputText placeholder="Адрес" onChange={(e) => {
                    console.log("ssss")
                }}/>
                <InputText placeholder="Адрес" onChange={(e) => {
                    console.log("ssss")
                }}/> */}
                <div>
                    <div className="block__address">
                          <div className="addres">
                              <p>Адрес:</p>
                          </div>
                          <div className="addres__text">
                              <p>г. Самара, ул. Ново-Садовая 13б. кв-17.</p>
                          </div>
                    </div>
                    <div className="block__time__date">
                         <div className="section__block__time">
                            <div className="time__block">
                                 <p>Время:</p>
                            </div>
                            <div className="addres__text">
                                 <p>18:00</p>
                            </div>
                         </div>
                         <div className="section__block__date">
                            <div className="time__block">
                                 <p>Дата:</p>
                            </div>
                            <div className="addres__text">
                                 <p>23.04.22</p>
                            </div>
                         </div>
                    </div>
                    <div className="block__textarrey">
                          <div className="texterrey">
                              <p>Описание</p>
                          </div>
                          <div className="textarrey__text">
                              <p>Сломался холодильник не можем включить, течет, сломана ручка, нужен мастер.</p>
                          </div>
                    </div>


<div className="btn__setting">

<div className="btn__setting__container">
    <Button>
        Сохранить
    </Button>
</div>
{/* {savedInfo} */}
<div className="btn__setting__container">
    <Button>Удалить</Button>
</div>
</div>


                </div>
            </div>



        ) : <div></div>

        }
    </div>
        ;
}


export default СardOrder;