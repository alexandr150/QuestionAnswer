import React from 'react';
import {Link} from "react-router-dom";
import './Questions.css';
import './Filter.css';
import questionButton from "../img/questions-button.svg";
import profileButton from "../img/profile-button.png";
import addQuestionButton from "../img/add-question-button.svg";
import searchButton from "../img/search-button.svg";
import filterButton from "../img/filter-button-active.svg";
import iconBack from "../img/icon-back.svg";
import iconNotify from "../img/icon-notify.svg";
import iconCheckInactive from "../img/icon-check-inactive.svg";
import iconCheckActive from "../img/icon-check-active.svg";
import NotificationsPopup from "../popups/NotificationsPopup";
import SearchPopup from "../popups/SearchPopup";

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allRubrics: false,
            autoAndMoto: false,
            businessAndFinance: false,
            vk: false,
            cityAnCountries: false,
            esoterics: false,
            fun: false,
            cooking: false,
            animalsAndPlants: false,
            healthAndMedicine: false,
            notificationsPopupIsVisible: false,
            searchPopupIsVisible: false
        };
        this.changeNotifyPopupVisibility = this.changeNotifyPopupVisibility.bind(this);
        this.changeSearchPopupVisibility = this.changeSearchPopupVisibility.bind(this);

    }

    changeNotifyPopupVisibility = () => {
        this.setState({notificationsPopupIsVisible: !this.state.notificationsPopupIsVisible})
    };

    changeSearchPopupVisibility = () => {
        this.setState({searchPopupIsVisible: !this.state.searchPopupIsVisible})
    };

    handleClick = (target) => {
        switch (target) {
            case 0:
                this.setState({allRubrics: !this.state.allRubrics});
                break;
            case 1:
                this.setState({autoAndMoto: !this.state.autoAndMoto});
                break;
            case 2:
                this.setState({businessAndFinance: !this.state.businessAndFinance});
                break;
            case 3:
                this.setState({vk: !this.state.vk});
                break;
            case 4:
                this.setState({cityAnCountries: !this.state.cityAnCountries});
                break;
            case 5:
                this.setState({esoterics: !this.state.esoterics});
                break;
            case 6:
                this.setState({fun: !this.state.fun});
                break;
            case 7:
                this.setState({cooking: !this.state.cooking});
                break;
            case 8:
                this.setState({animalsAndPlants: !this.state.animalsAndPlants});
                break;
            case 9:
                this.setState({healthAndMedicine: !this.state.healthAndMedicine});
                break;
            default:
                break;
        }
    };

    render() {

        const allRubricsSrc = this.state.allRubrics ? iconCheckActive : iconCheckInactive;
        const autoAndMotoSrc = this.state.autoAndMoto ? iconCheckActive : iconCheckInactive;
        const businessAndFinanceSrc = this.state.businessAndFinance ? iconCheckActive : iconCheckInactive;
        const vkSrc = this.state.vk ? iconCheckActive : iconCheckInactive;
        const cityAnCountriesSrc = this.state.cityAnCountries ? iconCheckActive : iconCheckInactive;
        const esotericsSrc = this.state.esoterics ? iconCheckActive : iconCheckInactive;
        const funSrc = this.state.fun ? iconCheckActive : iconCheckInactive;
        const cookingSrc = this.state.cooking ? iconCheckActive : iconCheckInactive;
        const animalsAndPlantsSrc = this.state.animalsAndPlants ? iconCheckActive : iconCheckInactive;
        const healthAndMedicineSrc = this.state.healthAndMedicine ? iconCheckActive : iconCheckInactive;

        const notificationsPopup = this.state.notificationsPopupIsVisible ? <NotificationsPopup/> : '';
        const searchPopup = this.state.searchPopupIsVisible ? <SearchPopup/> : '';

        return (
            <div className="basic-component-container">
                <div className='basic-scroller-container'>
                    <div className="basic-header-block">
                        <Link to={'/'}>
                            <img className='basic-icon-back' src={iconBack} alt=''/>
                        </Link>
                        <img className='basic-icon-notify' src={iconNotify} alt='' onClick={this.changeNotifyPopupVisibility}/>
                        <p className="basic-header">Фильтр</p>
                    </div>
                    <p className="filter-text">Выберете темы отображаемых вопросов</p>

                    <div className='filter-filters-block'>
                        <p className='filter-item'>Все рубрики</p>
                        <img className='filter-item-checked' src={allRubricsSrc} alt='' onClick={()=>this.handleClick(0)}/>

                        <p className='filter-item'>Авто и мото</p>
                        <img className='filter-item-checked' src={autoAndMotoSrc} alt='' onClick={()=>this.handleClick(1)}/>

                        <p className='filter-item'>Бизнес и финансы</p>
                        <img className='filter-item-checked' src={businessAndFinanceSrc} alt='' onClick={()=>this.handleClick(2)}/>

                        <p className='filter-item'>ВКонтакте</p>
                        <img className='filter-item-checked' src={vkSrc} alt='' onClick={()=>this.handleClick(3)}/>

                        <p className='filter-item'>Города и страны</p>
                        <img className='filter-item-checked' src={cityAnCountriesSrc} alt='' onClick={()=>this.handleClick(4)}/>

                        <p className='filter-item'>Эзотерика </p>
                        <img className='filter-item-checked' src={esotericsSrc} alt='' onClick={()=>this.handleClick(5)}/>

                        <p className='filter-item'>Досуг и развлечение</p>
                        <img className='filter-item-checked' src={funSrc} alt='' onClick={()=>this.handleClick(6)}/>

                        <p className='filter-item'>Кулинария </p>
                        <img className='filter-item-checked' src={cookingSrc} alt='' onClick={()=>this.handleClick(7)}/>

                        <p className='filter-item'>Животные и растения </p>
                        <img className='filter-item-checked' src={animalsAndPlantsSrc} alt='' onClick={()=>this.handleClick(8)}/>

                        <p className='filter-item'>Здоровье и медицина</p>
                        <img className='filter-item-checked' src={healthAndMedicineSrc} alt='' onClick={()=>this.handleClick(9)}/>

                    </div>
                </div>
                {notificationsPopup}

                <div className='basic-toolbar-buttons'>
                    <Link to='/'>
                        <img className='questions-button toolbar-button' alt='' src={questionButton}/>
                    </Link>
                    <Link to='/'>
                        <img className='profile-button toolbar-button' alt='' src={profileButton}/>
                    </Link>
                    <Link to='/new-question'>
                        <img className='add-question-button' alt='' src={addQuestionButton}/>
                    </Link>
                    <img className='search-button toolbar-button' alt='' src={searchButton} onClick={this.changeSearchPopupVisibility}/>
                    <Link to='/filter'>
                        <img className='filter-button toolbar-button' alt='' src={filterButton}/>
                    </Link>
                </div>
                {searchPopup}
            </div>
        );
    }
}

export default Filter;