import React from "react";
import '../App.css';
import './step/step.css'
import classNames from 'classnames';


function Button({children, disabled, onClick, outline, homerepair,}) {

    return (
        <div>
            <button
                disabled={disabled}
                onClick={onClick}
                className={classNames('btn__burger', {
                    'button--outline': outline,
                    'button--homerepair': homerepair,
                    'button--disabled': disabled,
                })}>
                {children}
            </button>
        </div>
    );
}

export default Button;