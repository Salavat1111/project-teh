import React from "react";
import './step.css';
import '../../macro.css';
import {Button} from '../../cards'
import {MainContext} from '../../App';
import Pages from '../../img/1.png';

function HomeRepair({props}) {
    const {onNextStep} = React.useContext(MainContext);

    return (

        <div className="conteiner__wr__homepage">
            <div className="block__button--homerepair">
                <div className="wr__homepage">
                    <div className="d-flex content__wr__homepage">
                        <div className="block__rapair">
                            <h1>Ремонт бытовой техники</h1>
                            <h3>
                                Вам нужна помощь в ремонте бытовой техники? Великолепно!
                                Вы нашли нужное место, оставайтесь с нами, и мы обещаем,
                                что не пожалеете!
                            </h3>
                            <h4>Как мы работаем?</h4>
                        </div>
                        <div className="block__page">
                            <img src={Pages}/>
                        </div>
                    </div>
                    <div className="message__block">
                        <p>
                            Мы работаем по вашим заявкам! <br/>
                            Опишите свою проблему, укажите сроки и мы обязательно вам поможем!
                         </p>
                    </div>

                    <Button
                        onClick={onNextStep}
                        homerepair
                    >Оставить заявку</Button>
                </div>
            </div>
        </div>
    );
}


export default HomeRepair;