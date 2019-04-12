import React from 'react';
import connect from '@vkontakte/vkui-connect-mock';
import Questions from './components/Questions';

import { Route, Switch} from "react-router-dom";
import Loader from "./components/Loader";
import Answers from "./components/Answers";
import Filter from "./components/Filter";
import NewQuestion from "./components/NewQuestion";


class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			fetchedUser: null,
		};
	}

	componentDidMount() {
		connect.subscribe((e) => {
			switch (e.detail.type) {
				case 'VKWebAppGetUserInfoResult':
					this.setState({ fetchedUser: e.detail.data }, ()=>console.log(this.state.fetchedUser));

					break;
				default:
					console.log(e.detail.type);
			}
		});
		connect.send('VKWebAppGetUserInfo', {});
	}

	render() {
		return (
			<Switch location={this.props.location}>
				<Route exact path="/" render={() => <Loader/>} />

				<Route exact path="/questions" render={props =>
                    <Questions {...props}
							   fetchedUser={this.state.fetchedUser}
                    />}
                />

				<Route exact path="/question/:id" render={props =>
                    <Answers {...props}
							   fetchedUser={this.state.fetchedUser}
                    />}
                />

				<Route exact path="/filter" render={props =>
                    <Filter {...props}
							   fetchedUser={this.state.fetchedUser}
                    />}
                />

				<Route exact path="/new-question" render={props =>
                    <NewQuestion {...props}
							   fetchedUser={this.state.fetchedUser}
                    />}
                />

			</Switch>
		);
	}
}

export default App;
