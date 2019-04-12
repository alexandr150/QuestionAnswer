import React from 'react';
import {Link} from "react-router-dom";
import './Questions.css';
import './Filter.css';
import './NewQuestion.css';
import questionButton from "../img/questions-button.svg";
import profileButton from "../img/profile-button.png";
import addQuestionButton from "../img/add-question-button.svg";
import searchButton from "../img/search-button.svg";
import filterButton from "../img/filter-button.svg";
import iconBack from "../img/icon-back.svg";
import iconNotify from "../img/icon-notify.svg";
import NotificationsPopup from "../popups/NotificationsPopup";

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'autoAndMoto',
            notificationsPopupIsVisible: false,
        };
        this.changeNotifyPopupVisibility = this.changeNotifyPopupVisibility.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    changeNotifyPopupVisibility = () => {
        this.setState({notificationsPopupIsVisible: !this.state.notificationsPopupIsVisible})
    };

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        const notificationsPopup = this.state.notificationsPopupIsVisible ? <NotificationsPopup/> : '';

        return (
            <div className="basic-component-container">
                <div className='basic-scroller-container'>
                    <div className="basic-header-block">
                        <Link to={'/'}>
                            <img className='basic-icon-back' src={iconBack} alt=''/>
                        </Link>
                        <img className='basic-icon-notify' src={iconNotify} alt='' onClick={this.changeNotifyPopupVisibility}/>
                        <p className="basic-header">Задать вопрос</p>
                    </div>

                    <div className='new-question-block'>
                        <p className='new-question-block-item-text'>Заголовок вопроса:</p>
                        <input className='new-question-block-item' type='text'/>

                        <p className='new-question-block-item-text'>Вопрос:</p>
                        <input className='new-question-block-item' type='text'/>

                        <p className='new-question-block-item-text'>Тематика вопроса:</p>
                        <select className='new-question-block-item new-question-select' value={this.state.value} onChange={this.handleChange}>
                            <option value="autoAndMoto">Авто и мото</option>
                            <option value="businessAndFinance">Бизнес и финансы</option>
                            <option value="vk">ВКонтакте</option>
                            <option value="cityAnCountries">Города и страны</option>
                            <option value="esoterics">Эзотерика</option>
                            <option value="fun">Досуг и развлечение</option>
                            <option value="cooking">Кулинария</option>
                            <option value="animalsAndPlants">Животные и растения </option>
                            <option value="healthAndMedicine">Здоровье и медицина</option>
                        </select>

                        <button className='new-question-button'>Опубликовать мой вопрос</button>
                    </div>

                </div>
                {notificationsPopup}
                <div className='new-question-toolbar-buttons'>
                    <Link to='/'>
                        <img className='questions-button toolbar-button' alt='' src={questionButton}/>
                    </Link>
                    <Link to='/'>
                        <img className='profile-button toolbar-button' alt='' src={profileButton}/>
                    </Link>
                    <Link to='/new-question'>
                        <img className='add-question-button' alt='' src={addQuestionButton}/>
                    </Link>
                        <img className='search-button toolbar-button' alt='' src={searchButton}/>
                    <Link to='/filter'>
                        <img className='filter-button toolbar-button' alt='' src={filterButton}/>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Filter;