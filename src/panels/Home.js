import React from 'react';
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import View from '@vkontakte/vkui/dist/components/View/View';
/** Активное */
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';                                       /** Главная панель           */
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';                     /** панель с линией          */
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';   /** Панель с нажикой кнопкой */
import Button from '@vkontakte/vkui/dist/components/Button/Button';                                    /** Кнопка                   */
import Card from '@vkontakte/vkui/dist/components/Card/Card';                                          /** Плитки                   */
import Group from '@vkontakte/vkui/dist/components/Group/Group';                                       /** Группы с линиями         */
import Div from '@vkontakte/vkui/dist/components/Div/Div';                                             /** Компонент с паддингами   */
import Header from '@vkontakte/vkui/dist/components/Header/Header';                                    /** Панель без линии         */
import CardScroll from '@vkontakte/vkui/dist/components/CardScroll/CardScroll';                        /** Группа со скроллом       */
import Separator from '@vkontakte/vkui/dist/components/Separator/Separator';
import Link from '@vkontakte/vkui/dist/components/Link/Link';
import Counter from '@vkontakte/vkui/dist/components/Counter/Counter';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import InfoRow from '@vkontakte/vkui/dist/components/InfoRow/InfoRow';
import PromoBanner from '@vkontakte/vkui/dist/components/PromoBanner/PromoBanner';





/** Нективное */
import Input from '@vkontakte/vkui/dist/components/Input/Input';
import Switch from '@vkontakte/vkui/dist/components/Switch/Switch';
import HorizontalScroll from '@vkontakte/vkui/dist/components/HorizontalScroll/HorizontalScroll';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import CellButton from '@vkontakte/vkui/dist/components/CellButton/CellButton';
import PanelHeaderClose from '@vkontakte/vkui/dist/components/PanelHeaderClose/PanelHeaderClose';
import Footer from '@vkontakte/vkui/dist/components/Footer/Footer';
import Placeholder from '@vkontakte/vkui/dist/components/Placeholder/Placeholder';
import Tappable from '@vkontakte/vkui/dist/components/Tappable/Tappable';
import Tooltip from '@vkontakte/vkui/dist/components/Tooltip/Tooltip';

/** Нижний бар */
import Epic from '@vkontakte/vkui/dist/components/Epic/Epic'; 
import Tabbar from '@vkontakte/vkui/dist/components/Tabbar/Tabbar';
import TabbarItem from '@vkontakte/vkui/dist/components/TabbarItem/TabbarItem';

/** Иконки */
import Icon28NewsfeedOutline from '@vkontakte/icons/dist/28/newsfeed_outline';
import Icon28EditOutline from '@vkontakte/icons/dist/28/edit_outline';
import Icon28FavoriteOutline from '@vkontakte/icons/dist/28/favorite_outline';
import Icon28UserOutline from '@vkontakte/icons/dist/28/user_outline';

/** Картинки */
import lap24 from '../img/Lap24.png';

 

const Home = ({ share, id, go, fetchedUser }) => (           
	


	<Panel id={id}> 
	
	
	
	<PanelHeader  left={<PanelHeaderButton><Icon28EditOutline/></PanelHeaderButton>}>
		Твичер
	</PanelHeader>
	
		<Group  > 	
		
		<Header subtitle="НАШИ СКВАДЫ" indicator={<Counter size="s" mode="prominent">3</Counter>} aside={<Link onClick={go} data-to="squads">Показать все</Link>}  >
        
      </Header>
		
			<CardScroll>	
				<Header style={{ width: 144, height: 160}}> 	
					    <Card  size="m" mode="shadow" style={{ width: 144, height: 96 }}>
					        <img style={{ width: 144, height: 96 }}  src={lap24}/>			
					    </Card >  
				    <div style={{ marginBottom: 10 }}/>
					    <InfoRow >
                            Артурио
                        </InfoRow>
				</Header >
			</CardScroll>
		</Group>

		<Group  header={<Header mode="secondary">Новости</Header>}>	
		
		<Div>
			</Div>
				<Div>
					<Button size="xl" level="1" onClick={go} data-to="rating">
						Переход на рейтинг
					</Button>							
				</Div>	
				<Div>
					<Button size="xl" level="1" href="https://www.twitch.tv/BITSYXA">
						Переход на Twitch
					</Button>		
				</Div>
		     	<Div>
		          	<Button size="xl" level="2" onClick={share} >
               Сделать пост
                   </Button>
		         	</Div>
			    <Div>
					<Button size="xl" level="1" onClick={go} data-to="profile">
						Профиль
					</Button>		
				</Div>
				<Div>
					<Button size="xl" level="1" onClick={go} data-to="feed">
						Новости
					</Button>		
				</Div>

			</Group>	

	
		<Epic tabbar={
            <Tabbar>

				<TabbarItem> 
					
			        <Icon28NewsfeedOutline/>
					 Новости
		  		</TabbarItem>

                <TabbarItem > 
			        <Icon28NewsfeedOutline/>
					Профиль
			    </TabbarItem>

			</Tabbar>
		             }>

            <View id="feed" activePanel="feed">
                <Panel id="feed">
                    <PanelHeader>Новости</PanelHeader>
                </Panel>
            </View>

			<View id="home" activePanel="home">
                <Panel id="home">
                    <PanelHeader>Дом</PanelHeader>
                </Panel>
            </View>
			</Epic>

	</Panel>
	

);

class Example extends React.Component {
	constructor (props) {
	  super(props);
  
	  this.state = {
		activeStory: 'profile'
	  };
	  this.onStoryChange = this.onStoryChange.bind(this);
	}
  
	onStoryChange (e) {
	  this.setState({ activeStory: e.currentTarget.dataset.story })
	}

	render () {

		return (
		  <Epic activeStory={this.state.activeStory} tabbar={
			<Tabbar>
			  <TabbarItem
				onClick={this.onStoryChange}
				selected={this.state.activeStory === 'feed'}
				data-story="feed"
				text="Новости"
			  ><Icon28NewsfeedOutline /></TabbarItem>
			  <TabbarItem
				onClick={this.onStoryChange}
				selected={this.state.activeStory === 'services'}
				data-story="services"
				text="Сервисы"
				><Icon28NewsfeedOutline /></TabbarItem>
			  <TabbarItem
				onClick={this.onStoryChange}
				selected={this.state.activeStory === 'messages'}
				data-story="messages"
				label="12"
				text="Сообщения"
				><Icon28NewsfeedOutline /></TabbarItem>
			  <TabbarItem
				onClick={this.onStoryChange}
				selected={this.state.activeStory === 'clips'}
				data-story="clips"
				text="Клипы"
				><Icon28NewsfeedOutline /></TabbarItem>
			  <TabbarItem
				onClick={this.onStoryChange}
				selected={this.state.activeStory === 'profile'}
				data-story="profile"
				text="Профиль"
				><Icon28NewsfeedOutline /></TabbarItem>
			</Tabbar>
		  }>
			<View id="feed" activePanel="feed">
			  <Panel id="feed">
				<PanelHeader>Новости</PanelHeader>
			  </Panel>
			</View>
			<View id="services" activePanel="services">
			  <Panel id="services">
				<PanelHeader>Сервисы</PanelHeader>
			  </Panel>
			</View>
			<View id="messages" activePanel="messages">
			  <Panel id="messages">
				<PanelHeader>Сообщения</PanelHeader>
			  </Panel>
			</View>
			<View id="clips" activePanel="clips">
			  <Panel id="clips">
				<PanelHeader>Клипы</PanelHeader>
			  </Panel>
			</View>
			<View id="profile" activePanel="profile">
			  <Panel id="profile">
				<PanelHeader>Профиль</PanelHeader>
			  </Panel>
			</View>
		  </Epic>
		)
	  }
	}
	




 



Home.propTypes = {

	
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,


	
	share: PropTypes.func,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
		
	}),
	
};




export default Home;
