import React from 'react';
import {Link} from "react-router-dom";
import './Questions.css'
import {Redirect} from "react-router-dom";
import {answers, questionDetail} from "../test/TestData";
import questionButton from "../img/questions-button.svg";
import profileButton from "../img/profile-button.png";
import addQuestionButton from "../img/add-question-button.svg";
import searchButton from "../img/search-button.svg";
import filterButton from "../img/filter-button.svg";
import vkLinkBg from "../img/vk-link-bg.svg";
import './Answers.css';
import arc from "../img/arc.svg";
import iconSend from "../img/icon-send.svg";
import iconLike from "../img/icon-like.svg";
import iconLikeActive from "../img/icon-like-active.svg";
import iconRepost from "../img/icon-repost.svg";
import iconRepostActive from "../img/icon-repost-active.svg";
import AnswerItem from "../items/AnswerItem";
import iconBack from "../img/icon-back.svg";
import iconNotify from "../img/icon-notify.svg";
import NotificationsPopup from "../popups/NotificationsPopup";
import SearchPopup from "../popups/SearchPopup";


class Answers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authorName: 'Артем Шевченко',
            authorPhoto: 'https://ptzgovorit.ru/sites/default/files/styles/885x100proc/public/insert_images/-gle7n-jy8u.jpg?itok=i5KpNzAT',
            authorStatus: 'Эрудит',
            authorId: '53083705',
            question: questionDetail,
            answers: answers,
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

    handleLikeQuestion = () => {
        if (this.state.question.userLike) {
            this.state.question.countLikes--;
        } else {
            this.state.question.countLikes++;
        }
        this.state.question.userLike = !this.state.question.userLike;
        this.setState({question: this.state.question})
    };

    handleRepostQuestion = () => {
        if (this.state.question.userRepost) {
            this.state.question.countReposts--;
        } else {
            this.state.question.countReposts++;
        }
        this.state.question.userRepost = !this.state.question.userRepost;
        this.setState({question: this.state.question})
    };

    render() {


        if (!this.props.fetchedUser) return <Redirect to='/'/>;
        const listAnswers = this.state.answers.map((answer) =>
            <AnswerItem
                key={answer.id.toString()}
                authorPhoto={answer.authorPhoto}
                authorStatus={answer.authorStatus}
                authorName={answer.authorName}
                date={answer.date}
                answer={answer.answer}
                userLike={answer.userLike}
                countLikes={answer.countLikes}
                userRepost={answer.userRepost}
                countReposts={answer.countReposts}
            />
        );
        const likeSrc = this.state.question.userLike ? iconLikeActive : iconLike;
        const likeTextColor = this.state.question.userLike ? 'text-color-active' : 'text-color-inactive';
        const repostSrc = this.state.question.userRepost ? iconRepostActive : iconRepost;
        const repostTextColor = this.state.question.userRepost ? 'text-color-active' : 'text-color-inactive';

        const notificationsPopup = this.state.notificationsPopupIsVisible ? <NotificationsPopup/> : '';
        const searchPopup = this.state.searchPopupIsVisible ? <SearchPopup/> : '';

        return (
            <div className="answers-container">
                <div className="basic-scroller-container">
                    <div className={'basic-white-top-block'}>
                        <Link to={'/'}>
                            <img className='basic-questions-icon-back' src={iconBack} alt=''/>
                        </Link>
                        <img className='basic-questions-icon-notify' src={iconNotify} alt='' onClick={this.changeNotifyPopupVisibility}/>
                        <div className="basic-user-profile">
                            <img className="basic-arc" src={arc} alt=''/>
                            <img className="basic-user-photo" src={this.state.authorPhoto} alt=''/>
                            <p className='basic-user-status'>{this.state.authorStatus}</p>
                            <p className='basic-user-name'>{this.state.authorName}</p>
                        </div>
                    </div>

                    <a className='vk-link-container' href={'https://vk.com/id' + this.state.authorId}>
                        <img className="answers-user-vk-link" src={vkLinkBg} alt=''/>
                    </a>

                    <div className="answers-question-block">
                        <p className='answers-question-theme'>Тема: {this.state.question.theme}</p>
                        <p className='answers-question-date'>{this.state.question.date}</p>
                        <p className='answers-question'>{this.state.question.question}</p>
                        <p className='answers-question-detail'>{this.state.question.questionsInDetail}</p>
                        <div className="answers-question-like-repost-container">
                            <img className="answers-question-like-img" src={likeSrc} alt=''
                                 onClick={this.handleLikeQuestion}/>
                            <p className={'answers-question-like-count ' + likeTextColor}>{this.state.question.countLikes}</p>
                            <img className='answers-question-repost-img' src={repostSrc} alt=''
                                 onClick={this.handleRepostQuestion}/>
                            <p className={'answers-question-repost-count ' + repostTextColor}>{this.state.question.countReposts}</p>
                        </div>
                    </div>
                    <p className="answers-text">Ответы на вопрос</p>
                    <div className="answers-list-answers">
                        {listAnswers}
                    </div>
                    <img className={'answers-new-answer-send'} src={iconSend} alt=''
                         onClick={() => console.log('Sending')}/>
                    <input className='answers-new-answer' type='text' placeholder={'Ваш ответ'}/>

                </div>
                {notificationsPopup}
                <div className='answers-toolbar-buttons'>
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

export default Answers;