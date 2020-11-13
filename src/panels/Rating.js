import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Spinner from '@vkontakte/vkui/dist/components/Spinner/Spinner'


const osName = platform();


const Rating = props => (
	<Panel id={props.id}>

<PanelHeader left={<PanelHeaderButton onClick={props.go} data-to="home"> {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}

</PanelHeaderButton>}>

Рейтинг



</PanelHeader>

    </Panel>
);

Rating.propTypes = {
	id: PropTypes.string.isRequired,

};

export default Rating;
