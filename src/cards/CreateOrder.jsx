import React, {useEffect, useState} from "react";
import '../App.css';
import logos from '../img/2.png';
import {FaInfoCircle} from "react-icons/fa";
import {Button, InputTimeDate, InputText,} from '../cards'
import {SortPopup, QuestionBlock} from "./components";
import axios from "axios";
import Cookies from "js-cookie";
import {serverUrl} from "../common/AppConstants";
import AddressInput from "./AddressInput";

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

async function createOrder(order) {
    console.log("createOrderFunc")
    await axios.post(serverUrl + `/fixer/api/order/create`, order, {
        headers: {
            Authorization: "Bearer " + Cookies.get('access_token'),
            'X-CSRF-TOKEN': Cookies.get('csrf_token')
        }
    }).then(response => {
        console.log('response.data')
        console.log(response.data)
    })
}

async function getOrderModel() {
    console.log("getOrderModel")
    await axios.post(serverUrl + `/fixer/api/order/model`, {}, {
        headers: {
            Authorization: "Bearer " + Cookies.get('access_token'),
            'X-CSRF-TOKEN': Cookies.get('csrf_token')
        }
    }).then(response => {
        console.log('response.data')
        console.log(response.data)
    })
}

function CreateOrder() {

    const [technicalTypes, setTechnicalTypes] = useState([])
    const [address, setAddress] = useState("")
    const [technicType, setTechnicType] = useState([])
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [comment, setComment] = useState([])

    useEffect(() => {
        getTechnicalTypes().then(response => {
                console.log("technicalTypes: " + response);
                setTechnicalTypes(response.listValues)
            }
        )
    }, [setTechnicalTypes]);

    return (
        <div className="content__repair">
            <div>
                <img className="repair__page-img" alt="" src={logos}/>
            </div>

            <div className="input__regstr">
                <AddressInput handleValue={setAddress} placeholder="??????????" editable ={true}/>
                <SortPopup handleValue={setTechnicType} items={technicalTypes}/>
                <div className="block__time-date">
                    <InputTimeDate handleValue={setTime} placeholder="??????????"/>
                    <QuestionBlock
                        outline
                        icons={[<FaInfoCircle/>]}
                        items={['???????????????? ?????????? ?????? ?????? ?????????????? ??????????. ???????????? "?? 16:00 ???? 18:00"']}
                    />

                    <InputTimeDate handleValue={setDate} text="????????"/>
                    <QuestionBlock
                        icons={[<FaInfoCircle/>]}
                        items={['???????????????? ?????????? ?????? ?????? ?????????????? ????????. ???????????? "22.02.2022"']}
                    />
                </div>
                <textarea onChange={(e) => setComment(e.target.value)}
                          placeholder="???????????????? ?????? ??????????????????"/>
                <Button onClick={(e) => {
                    const order = {
                        "executor": "89275785698", // change to null and assign on back
                        "status": "OPEN",
                        "parameters": [{
                                "name": "?????? ??????????",
                                "attrId": "11",
                                "type": "TEXT",
                                "value": address
                            }, {
                                "name": "?????? ??????????",
                                "attrId": "1",
                                "type": "LIST",
                                "value": technicType
                            }, {
                                "name": "?????????? ????????????????",
                                "attrId": "8",
                                "type": "DATE",
                                "value": date
                            }, {
                                "name": "???????????????? ?????? ??????????????????",
                                "attrId": "6",
                                "type": "TEXT",
                                "value": comment
                            }
                        ]
                    }
                    console.log('order')
                    createOrder(order)
                    // createOrder(userId, newOrder);
                }} disabled={false}>??????????????????</Button>
            </div>
            <div className="bl_heitgh--crOrder"></div>
        </div>
    );
}

export default CreateOrder;
