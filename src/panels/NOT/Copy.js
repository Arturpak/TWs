class App extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
		activePanel: 'home',
		fetchedUser: null,
		popout: null,
	  };
	  this.closePopout = this.closePopout.bind(this);
	  
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
	  bridge.send('VKWebAppGetUserInfo', {});
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
		  <Home id="home" share={this.share} fetchedUser={this.state.fetchedUser} go={this.go} />
		  <Feed id="feed" go={this.go} />
		  <Rating id="rating" go={this.go} />
		  <Profile id="profile" go={this.go} />
		  <Squads id="squads" go={this.go} />
		  
		</View>
	  );
	}
  }
  export default App;







  		

<Div class="Tabbar"> 
	        <Epic>
			<Tabbar>
			
			<TabbarItem   onClick={go} data-to="feed" >
				<Icon28NewsfeedOutline />		
			</TabbarItem>

			<TabbarItem   onClick={go} data-to="rating" >
				<Icon28FavoriteOutline />		
			</TabbarItem>

			<TabbarItem   onClick={go} data-to="profile" >
				<Icon28UserOutline />		
			</TabbarItem>



			</Tabbar>
			</Epic>
			</Div>

	</Panel>

);




























<View activePanel="header">
<Panel id="header">
  <PanelHeader>
	Header
  </PanelHeader>
  <Header>
	Рекомендации
  </Header>
  <Separator />
  <Header aside={<Link>Показать все</Link>}>
	Плейлисты
  </Header>
  <Separator />
  <Header aside={<Link>Добавленные<Icon16Dropdown /></Link>} indicator={16}>
	Мои видео
  </Header>
  <Separator />

  <Header aside={<Icon24Dismiss />}>
	Недавние
  </Header>


  <Separator />
  <Header indicator={<Counter size="s" mode="prominent">3</Counter>} aside={<Link>Показать все</Link>}>
	Заявки в друзья
  </Header>
  <Separator />



  <Header subtitle="SOHN — Conrad" aside={<Link>Показать все</Link>}>
	Похожее на
  </Header>
  <div style={{ marginBottom: 100 }}/>
  <Separator />
  <Header mode="secondary">Важные</Header>
  <Separator />
  <Header mode="secondary" aside={<Link>Показать все</Link>}>
	Приглашения
  </Header>
  <Separator />
  <Header mode="secondary" indicator="667" aside={<Icon16Chevron />}>
	Фотографии
  </Header>
  <Separator />
  <Header mode="secondary" indicator={<Counter size="s" mode="prominent">3</Counter>} aside={<Link>Показать все</Link>}>
	Приглашения
  </Header>
</Panel>
</View>




subtitle="SOHN — Conrad" 