import React from 'react';

import {Container, ServerThumb, ChannelsBody} from './styles.js';

import ChannelSection from '../ChannelSection'
import TextChannel from '../TextChannel'
import VoiceChannel from '../VoiceChannel'

export default class ServerChannels extends React.Component{
    constructor(props){
        super(props);        

        this.channelsBodyRef = React.createRef();
        this.serverThumbRef = React.createRef();
        this.containerRef = React.createRef();
    }

    componentDidMount(){
        this.channelsBodyRef.current.addEventListener('scroll', this.handleScroll.bind(this));
    }

    handleScroll(e){
        let serverThumbHeight = window.getComputedStyle(this.serverThumbRef.current).getPropertyValue('height').split('px')[0];

        if(this.channelsBodyRef.current.scrollTop > 0){
            //Redefine scroll for 1 because margin-top changed
            this.channelsBodyRef.current.scrollTop = 1;    

            this.serverThumbRef.current.style.height = '0px';                   
            this.channelsBodyRef.current.style.marginTop = '0px';
            this.props.changeBackgroundServerInfoState(true);
        }
        else if(this.channelsBodyRef.current.scrollTop <= 0){
            this.serverThumbRef.current.style.height = '135px'; 
            this.channelsBodyRef.current.style.marginTop = '90px';            
            this.props.changeBackgroundServerInfoState(false);
        }
    }

    render(){
        return (
            <Container ref={this.containerRef}>                      
                <ServerThumb ref={this.serverThumbRef}/>
                <ChannelsBody ref={this.channelsBodyRef}>
                    <ChannelSection sectionName={'Chats'}/>
                    <TextChannel channelName={'Geral'} isActive/>
                    <TextChannel channelName={'Events'} />
                    <TextChannel channelName={'Social'} hasMessages={true}/>
    
                    <ChannelSection sectionName={'Voice channels'}/>
                    <VoiceChannel channelName={'Skywars'}/>
                    <VoiceChannel channelName={'Creative'}/>
                    <VoiceChannel channelName={'Survival'}/>
                    <VoiceChannel channelName={'Hardcore'}/>
                    <VoiceChannel channelName={'Lives'}/>         
    
                    <ChannelSection sectionName={'PVP'}/>
                    <VoiceChannel channelName={'Room 1'}/>
                    <VoiceChannel channelName={'Room 2'}/>
                    <VoiceChannel channelName={'Room 3'}/>
                    <VoiceChannel channelName={'Room 4'}/>
                    <VoiceChannel channelName={'Room 5'}/>     

                    <ChannelSection sectionName={'PVP 2'}/>
                    <VoiceChannel channelName={'Room 1'}/>
                    <VoiceChannel channelName={'Room 2'}/>
                    <VoiceChannel channelName={'Room 3'}/>
                    <VoiceChannel channelName={'Room 4'}/>
                    <VoiceChannel channelName={'Room 5'}/>      
                </ChannelsBody>
            </Container>
        )
    }
}
