import React from 'react';
import './sort.css';


function QuestionBlock({ outline, itemsQuestionBlock, icons, activeItem, setActiveItem, onSelectItem}) {
    const [visibleQuestion, setVisibleQuestion] = React.useState(false);
    const sortRef = React.useRef();

    const teggleVisibleQuestion = () => {
        setVisibleQuestion(!visibleQuestion)
    };


    const handleOutsideClickQuestion = (e) => {
        if (!e.path.includes(sortRef.current)) {
            setVisibleQuestion(false);
        }
    };

    React.useEffect(() => {
        document.body.addEventListener('click', handleOutsideClickQuestion);
    }, []);

    // const [activeItem, setActiveItem] = React.useState(0)
    // const onSelectItem = (index) => {
    //     setActiveItem(index)
    // }
    // const activeLabel = itemsQuestionBlock[activeItem];

    return (
        <>
            <div className='question__block' ref={sortRef}>
                <span onClick={teggleVisibleQuestion}>
                    {icons.map((icon) =>
                        <span className={`icon__svg ${outline ? 'icon__svg--outline' : ''}`}>{icon}</span>
                    )}
                </span>
            </div>

            {visibleQuestion && <div className='sortpopup__wrapper-quest'>
                <div className='section__items'>
                    {itemsQuestionBlock.map((text, index) => (
                        <p 
                        key={`${text}${index}`}
                        className={activeItem === index ? 'active__p active' : ''}
                        onClick={() => onSelectItem(index)}
                        >
                            {text}
                        </p>
                    ))}
                </div>
            </div>}
        </>
    );
};


export default QuestionBlock;