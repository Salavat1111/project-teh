import React from "react";
// import '../App.css';
import './btn-burger.css'
// import { BtnMenu } from '../../cards'
import Cookies from "js-cookie";

function BtnItem(props) {

    function logout() {
        console.log("logout")
    }

    function login() {
        console.log("login")
    }
    let value = props.value;
    return <>
        <div onClick={()=>console.log(value)}>{value}</div>
    </>
};

function BtnBurger(props) {
    let accessToken = Cookies.get('access_token');
    let loginOrLogoutValue = accessToken==undefined? "Войти":"Выйти";
    console.log(accessToken)
    let loginOrLogoutBtn = <BtnItem value={loginOrLogoutValue}/>;
    const items = [
        loginOrLogoutBtn,
    ]
    const [onClickBtn, setOnClickBtn] = React.useState(false)
    return (
        <>
            <div className={onClickBtn ? 'center active' : 'center'} onClick={() => setOnClickBtn(!onClickBtn)}>
                <span />
            </div>
            {/*<BtnMenu items={items} active={onClickBtn} setActive={setOnClickBtn} />*/}
        </>
    );
}

export default BtnBurger;