import React from 'react';
import Loading from "../img/loading.gif";
import {Redirect} from "react-router-dom";
import './Loader.css';

class Loader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            redirectTo: null,
            loadedData: null,
        };

        setTimeout(()=> this.setState({
            redirectTo: '/questions'
        }), 1000)
    }

    render() {
        if (this.state.redirectTo) return(<Redirect to={this.state.redirectTo}/>);
        return (
            <div className='loader-container'>
                <img className='centered' src={Loading} alt='Loading...'/>
            </div>
        );
    }
}

export default Loader;