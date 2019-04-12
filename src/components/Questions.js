import React from 'react';
import {Link} from "react-router-dom";
import './Questions.css';
import {Redirect} from "react-router-dom";
import QuestionItem from "../items/QuestionItem";
import {questions} from "../test/TestData";
import questionButton from "../img/questions-button-active.svg";
import profileButton from "../img/profile-button.png";
import addQuestionButton from "../img/add-question-button.svg";
import searchButton from "../img/search-button.svg";
import filterButton from "../img/filter-button.svg";
import arc from "../img/arc.svg";
import NotificationsPopup from "../popups/NotificationsPopup";
import iconBack from "../img/icon-back.svg";
import iconNotify from "../img/icon-notify.svg";
import SearchPopup from "../popups/SearchPopup";


class Questions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: questions,
            userStatus: 'Новичек',
            rating: 15,
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

    render() {
        if (!this.props.fetchedUser) return <Redirect to='/'/>;
        const listQuestions = this.state.questions.map((question) =>
            <QuestionItem
                key={question.id.toString()}
                questionId={question.id}
                authorPhoto={question.authorPhoto}
                theme={question.theme}
                question={question.question}
                countAnswers={question.countAnswers}
            />
        );

        const notificationsPopup = this.state.notificationsPopupIsVisible ? <NotificationsPopup/> : '';
        const searchPopup = this.state.searchPopupIsVisible ? <SearchPopup/> : '';

        return (
            <div className="questions-container">
                <div className='basic-scroller-container'>
                    <div className={'basic-white-top-block'}>
                        <Link to={'/'}>
                            <img className='basic-questions-icon-back' src={iconBack} alt=''/>
                        </Link>
                        <img className='basic-questions-icon-notify' src={iconNotify} alt='' onClick={this.changeNotifyPopupVisibility}/>
                        <div className="basic-user-profile">
                            <img className="basic-arc" src={arc} alt=''/>
                            <img className="basic-user-photo" src={this.props.fetchedUser.photo_200} alt=''/>
                            <p className='basic-user-status'>{this.state.userStatus}</p>
                            <p className='basic-user-name'>{this.props.fetchedUser.first_name} {this.props.fetchedUser.last_name}</p>
                        </div>
                    </div>

                    <div className="questions-rating-block">
                        <span className='rating-text-grey'>Рейтинг: </span>
                        <span className='rating-text-blue'>{this.state.rating}</span>
                    </div>
                    <div className="questions-list-questions">
                        {listQuestions}
                    </div>
                </div>
                {notificationsPopup}
                <div className='questions-toolbar-buttons'>
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

export default Questions;