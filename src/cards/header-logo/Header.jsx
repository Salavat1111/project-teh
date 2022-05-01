import React from "react";
import './logo.css';
import {Logo, Menu,} from '../header-logo';
import {loginUrl, userSettingsUrl} from "../../common/AppConstants";
import {Link} from "react-router-dom";

function Header({items, isLogin, user}) {
    return (
        <div className="wrapper__container-header">
            <Logo/>
            <Menu items={items}/>
            <div className="border__line-block"></div>
            <div className="block__lastName">
                {
                    isLogin ?
                        <Link to={userSettingsUrl}>{user.firstName} {user.secondName}</Link> :
                        <Link to={userSettingsUrl}>Войти</Link>
                }
            </div>
        </div>
    );
}


export default Header;