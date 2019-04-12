import React from 'react';
import iconNotify from '../img/icon_notifications.svg';
import './NotificationsPopup.css';

class NotificationsPopup extends React.Component {

    render() {
        return (
            <div className="notifications-popup-container">
                <img className={"notifications-popup-img"} src={iconNotify} alt={''}/>
                <p className="notifications-popup-header"> Включить оповещения?</p>
                <p className="notifications-popup-text">Узнавайте об ответах на ваши вопросы</p>
                <button className="notifications-popup-button" onClick={()=>console.log('Notify')}>Включить оповещения</button>
            </div>
        );
    }
}

export default NotificationsPopup;