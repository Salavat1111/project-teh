import React from "react";

function ReadOnlyParam({paramName, value, img}) {
    return <div className="order__content">
        <div className="container__fasource">
            <div className="svg__content">
                {img}
            </div>
            <div className="">
                <p className="title__menu">{paramName}</p>
                <p className="title__text">{value}</p>
            </div>
        </div>

    </div>
}
export default ReadOnlyParam;