import React from "react";
import '../App.css';
import './step/step.css'


import {Button, InputPassword,} from '../cards'
import {MainContext} from "../App";
import axios from "axios";
import {pageAfterLogin, serverUrl} from "../common/AppConstants";
import Cookies from "js-cookie";

function PasswordForm() {
    const {user, setUser} = React.useContext(MainContext);

    function handleChangeInput(propertyName, propertyValue) {
        user[propertyName] = propertyValue
        setUser(user)
    }

    async function creteUser(user) {
        console.log("createOrderFunc")
        await axios.post(serverUrl + `/auth/register`, user, {
            headers: {
                Authorization: "Bearer " + Cookies.get('access_token'),
                'X-CSRF-TOKEN': Cookies.get('csrf_token')
            }
        }).then(response => {
            console.log('response.data')
            console.log(response.data)
            Cookies.set('access_token', response.data.accessToken);
            console.log('Authenticated');
            window.location.href = pageAfterLogin;//may be need change to react redirect or history
        })
    }

    return (
        <>
            <div className="wrapper__content-password">
                <div className="content-registr-password">
                    <div className="content">
                        <div>
                            <div>
                                <h1 className="zgl__login--card--reg">Придумайте пароль</h1>
                            </div>
                        </div>
                        <div className="display__input--field">
                            <div className="input__regstr-password">
                                <InputPassword handleFunc={handleChangeInput} inputKey="password" text="Пароль"/>
                                <InputPassword handleFunc={handleChangeInput} inputKey="cpassword"
                                               text="Повторите пароль"/>
                                <div>
                                </div>
                                <div className="bl__password">
                                    {/* проверить пароли и отправить смс с кодом*/}
                                    <Button onClick={(e) => {
                                        console.log("click")
                                        console.log(user)
                                        creteUser(user)
                                    }}>Далее</Button>
                                </div>
                            </div>
                            <div className="cont__bl--card--reg">
                                <p>Уже есть аккаунт? <span>Войдите</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default PasswordForm;