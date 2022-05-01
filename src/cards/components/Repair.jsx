import './sort.css';
import logos from '../../img/2.png';
import {FaInfoCircle} from "react-icons/fa";
import {Button, InputText, InputTimeDate,} from '../../cards'
import {QuestionBlock, SortPopup} from "../components";
import axios from "axios";
import Cookies from "js-cookie";
import React, {useEffect, useState} from "react";
import {serverUrl} from "../../common/AppConstants";

async function getTechnicalTypes() {
    const url = serverUrl + `/fixer/api/attrs/1`;
    const res = await axios.get(url, {
        headers: {
            Authorization: `Bearer ${Cookies.get('access_token')}`,
            'X-CSRF-TOKEN': Cookies.get('csrf_token')
        }
    });
    return res.data;
}

function Repair({user, userService,ф}) {
    const [technicalTypes, setTechnicalTypes] = useState([])
    const [order, setOrder] = useState({"status": "OPEN", "parameters":[]})

    useEffect(() => {
        getTechnicalTypes().then(response => {
                console.log("technicalTypes: " + response);
                setTechnicalTypes(response.listValues)
            }
        )
    }, []);

    //todo open page only when user registred
    //todo load parameters by model in future

    function onCreate() {
        order["executor"] = "89275785698"
        console.log("createOrder start: " + JSON.stringify(order))
        userService.createOrder(order)
            .then(r => {console.log("created order " + JSON.stringify(r))})
            .catch(r=>{console.log("cant create order " + JSON.stringify(r))})
    }

    function setOrderParameter(parameter) {
        let newOrder = {...order}
        if (isExistParam(newOrder, parameter.attrId)) {
            newOrder.parameters.forEach(
                function (item, i) {
                    if (item.attrId == parameter.attrId)
                        newOrder.parameters[i] = parameter;
                });
        } else {
            newOrder.parameters.push(parameter)
        }

        setOrder(newOrder)

        function isExistParam(order, attrId) {
            for (let p of order.parameters) {
                if (p.attrId == attrId) {
                    return true
                }
            }
            return false
        }
    }


    // пробросил из компонента QuestionBlock itemsQuestionBlock, activeItem
    // const activeLabel = itemsQuestionBlock[activeItem];
    const [activeItem, setActiveItem] = React.useState(0)
    const onSelectItem = (index) => {
        setActiveItem(index)
    }

    const  itemsQuestionBlock = ['c 8:00 до 12:00', 'с 12:00 до 18:00', 'c 18:00 до 20:00']
    const activeLabel = itemsQuestionBlock[activeItem]
    //прокинуть от родительского компонента к дочернему все стейты и масси
    // пробросил из компонента QuestionBlock itemsQuestionBlock, activeItem
    return (
        <div className="wrapper__content-repair">
            <div className="content-registr-repair">
                <div className="content__repair">
                    <div>
                        <img className="repair__page-img" alt="" src={logos}/>
                    </div>
                    <div className="input__regstr">
                        <InputText placeholder="Адрес" onChange={(e) =>{
                            let parameter = {
                                "name": "Ваш Адрес",
                                "attrId": "11",
                                "type": "TEXT",
                                "value": e.target.value
                            };
                            setOrderParameter(parameter);
                        }}/>
                        <SortPopup
                            items={technicalTypes}
                            onChange={(e) =>{
                                let parameter = {
                                    "name": "Что чиним",
                                    "attrId": "1",
                                    "type": "LIST",
                                    "value": e.target.value /*active list item*/
                                };
                                setOrderParameter(parameter);
                            }}
                        />
                        <div className="block__time-date">
                            <QuestionBlock
                                outline
                                icons={[<FaInfoCircle/>]}
                                itemsQuestionBlock={itemsQuestionBlock}
                                activeItem={activeItem}
                                setActiveItem={setActiveItem}
                                onSelectItem={onSelectItem}
                                />
                            <InputTimeDate placeholder={activeLabel} 
                        
                            onChange={(e) =>{
                                let parameter = {
                                    "name": "Время",
                                    "attrId": "46",
                                    "type": "TIME",
                                    "value": e.target.value
                                };
                                setOrderParameter(parameter);
                            }}/>
                            <InputTimeDate placeholder="дата" onChange={(e) =>{
                                let parameter = {
                                    "name": "Дата",
                                    "attrId": "8",
                                    "type": "DATE",
                                    "value": e.target.value
                                };
                                setOrderParameter(parameter);
                            }}/>
                            <QuestionBlock
                                icons={[<FaInfoCircle/>]}
                                itemsQuestionBlock={['Напишите любую для Вас удобную дату. Пример "22.02.2022"']}
                            />
                        </div>
                        <textarea placeholder="напишите что случилось"
                                  onChange={(e) =>{
                            let parameter = {
                                "name": "Напишите что произошло",
                                "attrId": "6",
                                "type": "TEXT",
                                "value": e.target.value
                            };
                            setOrderParameter(parameter);
                        }}></textarea>
                    </div>
                </div>
            </div>
            <div>
                <Button onClick={onCreate}>отправить</Button>
            </div>
        </div>
    );
}


export default Repair;