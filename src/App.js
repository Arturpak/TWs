import React, { useState, useEffect, Component } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';
import Alert from '@vkontakte/vkui/dist/components/Alert/Alert';



import Home from './panels/Home';

import Rating from './panels/Rating';
import { render } from 'react-dom';
import { Switch, Epic, Tabbar } from '@vkontakte/vkui';
import Profile from './panels/Profile';
import Feed from './panels/Feed';
import Squads from './panels/Squads';


















class App extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
		activePanel: 'home',
		activeStory: 'home',
		fetchedUser: null,
		popout: null,
	  };
	  this.closePopout = this.closePopout.bind(this);
	  this.onStoryChange = this.onStoryChange.bind(this);
	  
	}
	


	useEffect()  {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_dark';
				document.body.attributes.setNamedItem(schemeAttribute);
			
		}
	
	});
    }

	componentDidMount() {
	  bridge.subscribe((e) => {
		switch (e.detail.type) {
		  case 'VKWebAppGetUserInfoResult':
			this.setState({ fetchedUser: e.detail.data, activePanel: 'home' });
			break;
		  case 'VKWebAppShowWallPostBoxResult':
			this.openPopout()
			break;

		  default:
			console.log(e.detail.type);

		}
		
	  });
	  
	}

  

		
	
	/**
	 	<Epic activeStory={this.state.activeStory} tabbar={
	
	*/
			






	onStoryChange (e) {
		this.setState({ activeStory: e.currentTarget.dataset.story })
	  }
	go = (e) => {
	  this.setState({ activePanel: e.currentTarget.dataset.to })
	};
	
	share = () => {
	  bridge.send("VKWebAppShowWallPostBox", {"message": "Даровааааа!", "attachments": "https://vk.com/arturpakkk?z=photo163967138_457270435%2Falbum163967138_0%2Frev"});
	}
	openPopout = () => {
	  this.setState({ popout:
		<Alert
		  actions={[{
			title: 'Ок',
			autoclose: true,
			style: 'destructive'
		  }]}
		  onClose={this.closePopout}
		>
		  <h2>Спасибо Егор!</h2>
		  <p>Я рад, что ты сделал репост!</p>
		</Alert>
	  });
	}
	closePopout = () => {
	  this.setState({ popout: null });
	}



	
	render() {
	  return (
		<View popout={this.state.popout} activePanel={this.state.activePanel}>
		  <Home     id="home"   share={this.share} fetchedUser={this.state.fetchedUser} go={this.go}  />
		  <Feed     id="feed"     go={this.go}  />
		  
		  <Rating   id="rating"   go={this.go} />
		  <Profile  id="profile"  go={this.go} />
		  <Squads   id="squads"   go={this.go} />
		  

		</View>
	  );
	}
  }
  export default App;