import React from 'react';
import './sort.css';


function SortPopup({handleValue, items}) {
    const [visiblePopup, setVisiblePopup] = React.useState(false);
    const [activeItem, setActiveItem] = React.useState(0);
    const sortRef = React.useRef();
    const activeLabel = items[activeItem];

    const toggleVisiblePopup = () => {
        setVisiblePopup(!visiblePopup)
    };


    const handleOutsideClick = (e) => {
        if (!e.path.includes(sortRef.current)) {
            setVisiblePopup(false);
        }
    };
    const onSelectItem = (index) => {
        setActiveItem(index)
        // console.log("activeItem:"  + activeItem)
        if (handleValue)
            handleValue(items[activeItem])
    }

    React.useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);
    }, []);

    return (
        <>
            <div ref={sortRef} className="sortpopup__block">
                <span className='sort__span' onClick={toggleVisiblePopup}>{activeLabel}</ span>
            </div>
            {visiblePopup && <div className='sortpopup__wrapper-container'>
                <div className='sortpopup__wrapper'>
                    <ul className='ul--block'>
                        <li>
                            {items.map((name, index) => (
                                <li
                                    className={activeItem === index ? 'active' : ''}
                                    onClick={() => onSelectItem(index)}
                                    key={`${name}_${index}`}
                                >{name}</li>
                            ))}
                        </li>
                    </ul>
                </div>
            </div>}

        </>
    );
};


export default SortPopup;