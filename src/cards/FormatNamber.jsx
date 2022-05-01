import React from "react";
import NumberFormat from "react-number-format";
import '../App.css';
import './step/step.css'
import { MainContext } from '../App';
import { Button } from '.'

function FormatNamber() {

    const [inputValue, setInputValue] = React.useState({})

    const nextDisabled = !inputValue.formattedValue || inputValue.formattedValue.includes('_')



    const { onNextStep } = React.useContext(MainContext);
    const onClickNextStep = () => {
        onNextStep();
    }


    return (
        <>
           <div className="wrapper__content-namber">
            <div className="content-registr-namber">
            <div className="content">
                <div>
                    <div>
                        <h1 className="zgl__login--card--reg">Введите номер</h1>

                    </div>
                </div>
                <div className="display__input--field">
                    <div className="input__regstr-namber">
                        <NumberFormat
                            className="field"
                            format='+# (###) ###-##-##'
                            mask='_'
                            placeholder="+7 (999) 333-22-11"
                            value={inputValue.value}
                            onValueChange={(values) => setInputValue(values)}
                        />
                        <div>
                        </div>
                        <div className="bl__namber">
                        <Button
                            onClick={onClickNextStep}
                            disabled={nextDisabled}>
                            Далее
                        </Button>
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


export default FormatNamber;