import React from "react";
import ReadOnlyParam from "./inputs/ReadOnlyParam";

function AddressInput({paramName, placeHolder, img, editable, setValue, visible}) {
    const [items, setItems] = React.useState([]);
    const [activeItem, setActiveItem] = React.useState(0);
    const [showPopup, setShowPopup] = React.useState(false);
    const [activeLabel, setActiveLabel] = React.useState(placeHolder);
    const onSelectItem = (e, index) => {
        console.log("onSelectItem index:" + index)

        setActiveItem(index)
        setShowPopup(false)
        setActiveLabel(items[index])
        setValue(paramName, items[index])
    }

    async function getAddresses(event) {
        console.log("addrInput")
        console.log(event)
        let url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
        let token = "f019553965d0c4ba18ed2ddb215c3c11cfaf4878";
        let query = event.target.value;

        let options = {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Token " + token
            },
            body: JSON.stringify({query: query})
        }

        fetch(url, options)
            .then(response => response.text())
            .then(result => {
                let suggestionItems = JSON.parse(result).suggestions.map(item => item.value);
                setItems(suggestionItems)
                setShowPopup(true)
                setActiveLabel(query)
            })
            .catch(error => {
                console.log("error", error)
                console.log("11111")
            });
    }

    function getListItems() {
        return <>
            {items.map((name, index) => {
                let li = <li
                    // className={activeItem === index ? 'active' : ''}
                    onClick={(e) => onSelectItem(e, index)}
                    key={`${index}`}>{name}</li>
                return li
            })}
        </>;
    }

    return visible ?
        editable ?
            <>
                <div className="block__setting-input">
                    <p>{paramName}</p>
                    <input onInput={(e) => getAddresses(e)} className='sort__span2'
                           onKeyDown={(e) => {
                               //if up button
                               // setActiveItem(activeItem + 1)
                               //if down button
                               // setActiveItem(activeItem + 1)
                               console.log("onKeyDown: " + activeItem)
                           }}
                           value={activeLabel}/>
                    {showPopup && <div className='sortpopup__wrapper'>
                        <ul>
                            {getListItems()}
                        </ul>
                    </div>}
                </div>
            </> :
            <ReadOnlyParam value={placeHolder} img={img} paramName={paramName}/> :
        <></>;
}

export default AddressInput;