import React from 'react';
import "./AnswerItem.css";
import iconLikeActive from "../img/icon-like-active.svg";
import iconLike from "../img/icon-like.svg";
import iconRepostActive from "../img/icon-repost-active.svg";
import iconRepost from "../img/icon-repost.svg";

class AnswerItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            answer: {
                userLike: props.userLike,
                countLikes: props.countLikes,
                userRepost: props.userRepost,
                countReposts: props.countReposts,
            }

        }
    }

    handleLikeQuestion = () => {
        if (this.state.answer.userLike) {
            this.state.answer.countLikes--;
        } else {
            this.state.answer.countLikes++;
        }
        this.state.answer.userLike = !this.state.answer.userLike;
        this.setState({answer: this.state.answer})
    };

    handleRepostQuestion = () => {
        if (this.state.answer.userRepost) {
            this.state.answer.countReposts--;
        } else {
            this.state.answer.countReposts++;
        }
        this.state.answer.userRepost = !this.state.answer.userRepost;
        this.setState({answer: this.state.answer})
    };

    render() {

        const likeSrc = this.state.answer.userLike ? iconLikeActive : iconLike;
        const likeTextColor = this.state.answer.userLike ? 'text-color-active' : 'text-color-inactive';
        const repostSrc = this.state.answer.userRepost ? iconRepostActive : iconRepost;
        const repostTextColor = this.state.answer.userRepost ? 'text-color-active' : 'text-color-inactive';

        return (
            <div className='answer-item-container' onClick={this.handleClick}>
                <img className='answer-item-author-photo' src={this.props.authorPhoto} alt='Loading...'/>
                <p className='answer-item-author-status'>{this.props.authorStatus}</p>
                <p className='answer-item-author-name'>{this.props.authorName}</p>
                <p className='answer-item-date'>{this.props.date}</p>
                <p className='answer-item-answer'>{this.props.answer}</p>

                <div className="answers-question-like-repost-container">
                    <img className="answers-question-like-img" src={likeSrc} alt='' onClick={this.handleLikeQuestion}/>
                    <p className={'answers-question-like-count ' + likeTextColor}>{this.state.answer.countLikes}</p>
                    <img className='answers-question-repost-img' src={repostSrc} alt='' onClick={this.handleRepostQuestion}/>
                    <p className={'answers-question-repost-count ' + repostTextColor}>{this.state.answer.countReposts}</p>
                </div>
            </div>
        );
    }
}

export default AnswerItem;