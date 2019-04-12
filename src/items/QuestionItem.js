import React from 'react';
import './QuestionItem.css'
import {Redirect} from "react-router-dom";

class QuestionItem extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            redirectToAnswer: null
        }
    }

    handleClick = () => {
        this.setState({redirectToAnswer: this.props.questionId})
    };

    render() {
        if (this.state.redirectToAnswer) return <Redirect to={'/question/' + this.state.redirectToAnswer} />;

        const countAnswers = this.props.countAnswers;
        let textAnswers = countAnswers === 1 ? 'ответ' : 'ответов';
        if (countAnswers % 10 === 2 || countAnswers % 10 === 3 || countAnswers % 10 === 4) textAnswers = 'ответа';
        return (
            <div className='question-item-container' onClick={this.handleClick}>
                <img className='question-item-author-photo' src={this.props.authorPhoto} alt='Loading...'/>
                <p className='question-item-theme'>Тема: {this.props.theme}</p>
                <p className='question-item-question'>{this.props.question}</p>
                <p className='question-item-count-answers'>{countAnswers} {textAnswers}</p>
            </div>
        );
    }
}

export default QuestionItem;