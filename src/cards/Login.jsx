import React from "react";
import '../App.css';
import { Button } from '../cards'
import NumberFormat from "react-number-format";
import { post } from "axios";
import Cookies from 'js-cookie';
import { pageAfterLogin, serverUrl } from "../common/AppConstants";

function Login() {
    const [phoneNumber, setPhoneNumber] = React.useState("");
    const [password, setPassword] = React.useState("");
    const handleSubmit = () => {
        post(
            serverUrl + "/auth/login", {
            username: phoneNumber,
            password: password
        },
            {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Access-Control-Allow-Origin": true
                }
            }
        ).then(function (response) {
            console.log('try to auth');
            if (response.data.accessToken) {
                Cookies.set('access_token', response.data.accessToken);
                console.log('Authenticated');
                window.location.href = pageAfterLogin;//may be need change to react redirect or history
            } else {
                console.log('auth failed: no accessToken');

            }
        }).catch(function (error) {
            console.log('Error on Authentication');
            console.log(error);
        });
    };

    return (
        (
            <>
                <div className="content">
                    <div>
                        <div>
                            <h1 className="zgl__login--card--reg">Войдите</h1>
                            <div className="bl__registr">
                                <p>Заполните поля, чтобы войти в аккаунт</p>
                            </div>
                        </div>
                    </div>
                    <div className="display__input--field">
                        <div className="input__regstr">
                            <NumberFormat
                                className="field"
                                format='###########'
                                mask='_'
                                id={"username"}
                                name={"username"}
                                placeholder="Номер телефона"
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                            <input
                                type={"password"}
                                id={"password"}
                                name={"password"}
                                placeholder="Пароль"
                                className="field"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <div>
                            </div>
                            <Button onClick={handleSubmit}>Войти</Button>
                        </div>
                    </div>
                </div>
            </>
        )
    );
}


export default Login;