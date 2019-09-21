import React from 'react';
import './AvitoCard.css';
import { ReactComponent as Logo } from './a.svg'; 

const AvitoLogo = () => (
    <Logo className="check-apartment-logo"/>
)
const AvitoCard = ( { phone, description, name, registrationDate, status, adress} ) => {
    return (
        <div className="modal-window">
            <h1 className="phone-number">{phone}</h1>
            <p className="description">{description}</p>
            <div className="card-section">
                <div className="person-info">
                  <a className="person-name person-info-line" href="#">{name}</a>
                  <span className="person-registrationDate person-info-line">{formatDateString(registrationDate)}</span>
                  <span className="person-status person-info-line">{status}</span>
                  <img className="person-avatar"></img>
                  <h4 className="adress-title">Адрес</h4>
                  <p className="person-adress">{adress}</p>
                </div>
                <button className="person-info-button">Пожаловаться</button>
            </div>
            <section className="check-apartment">
                <h3 className="check-apartment-title">Отчёт о проверке квартиры</h3>
                <p className="check-apartment-discription">Авито — интернет-сервис для размещения объявлений о товарах, вакансиях и резюме на рынке труда, а также услугах от частных лиц и компаний, занимающий второе место в мире и первое в России среди онлайн-классифайдов</p>
                <button className="check-apartment-button check">Проверить квартиру</button>
                <button className="check-apartment-button example">Пример отчёта</button>
                <AvitoLogo/>
            </section>
            <span className="check-apartment-danger">Не соглашайтесь на предоплату не соглашайтесь на предоплату</span>
        </div>
    )
}

const months = ['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря'];

function formatDateString(date) {
    const year = date.getFullYear();
    const month = months[date.getMonth()];
    return `На авито с ${month} ${year}`;
} // `На авито с ${месяц + год}`
export default AvitoCard ;