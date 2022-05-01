import React from "react";
import './footer.css';




function Footer() {

    return (
        <div className="container__wrapper">
            <div className="content__block--flex">
                <div className="block__white">
                    <div className="">
                        <li>ПОЛЬЗОВАТЕЛЯМ</li>
                        <li>ПАРТНЁРАМ</li>
                        <li>О НАС</li>
                    </div>
                    <div className="">
                        <li>связаться с нами</li>
                        <li>тел: 8 800 888 30 30</li>
                        <li>teh@email.ru</li>
                    </div>

                </div>
                <div className="block__grey">
                    <div className="">
                        <p>
                            Твой Техник это команда профессионалов,
                            которые готовы сделать качественный ремонт
                            бытовой техники для вашего комфорта.
                        </p>
                        <p>
                            Мы прилагаем все усилия, чтобы предоставить нашим клиентам лучшие услуги по ремонту бытовой техники. Часто клиенты приходят к нам с жалобами «мой холодильник не охлаждается быстро», «одна из конфорок на моей плите больше не работает» и т. д. Хорошо, если у вас есть эти или похожие жалобы, тогда Вам нужно заполнить анкету, и мы обещаем восстановить комфорт вашего дома в кратчайшие сроки.
                        </p>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Footer;