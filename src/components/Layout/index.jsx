import React from 'react';
import {AppLayout} from './styles.js'

import ServersList from '../ServersList'
import ServerInfo from '../ServerInfo'
import ServerChannels from '../ServerChannels'
import UserInfo from '../UserInfo'
import ChannelInfo from '../ChannelInfo'
import ChannelData from '../ChannelData'
import ServerUsers from '../ServerUsers'

export default class Layout extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            changeBackgroundServerInfo: false,
        }

        this.changeBackgroundServerInfoState = this.changeBackgroundServerInfoState.bind(this);
    }

    render(){
        return (
            <AppLayout>
                <ServersList/>
                <ServerInfo changeBackgroundServerInfo={this.state.changeBackgroundServerInfo}/>
                <ServerChannels changeBackgroundServerInfoState={this.changeBackgroundServerInfoState}/>
                <UserInfo/>
                <ChannelInfo/>
                <ChannelData/>
                <ServerUsers/>
            </AppLayout>
        )
    }
    
    changeBackgroundServerInfoState(newState){
        console.log('Entrou isso', newState);
        this.setState({changeBackgroundServerInfo: newState});
        console.log('Virou isso', this.state.changeBackgroundServerInfo);
    }
}
