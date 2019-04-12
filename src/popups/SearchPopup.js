import React from 'react';
import './SearchPopup.css';
import iconSend from "../img/icon-search-popup.svg";

class SearchPopup extends React.Component {

    render() {
        return (
            <div className="search-popup-container">
                <input className='search-popup-input' type='text' placeholder={'Поиск вопросов'}/>
                <img className={'search-popup-icon'} src={iconSend} alt=''
                     onClick={() => console.log('Search')}/>
            </div>
        );
    }
}

export default SearchPopup;