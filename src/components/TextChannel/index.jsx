import React from 'react';

import {Container, ChannelNameContainer, HashTagIcon, ChannelName, ChannelOptions, Invite, ChannelSettings} from './styles.js'

const TextChannel = (props) =>{
    return (
        <Container isActive={props.isActive} hasMessages={props.hasMessages}>
            <ChannelNameContainer>
                <HashTagIcon/>

                <ChannelName isActive={props.isActive} hasMessages={props.hasMessages}>
                    {props.channelName}
                </ChannelName>  
            </ChannelNameContainer>               

            <ChannelOptions isActive={props.isActive}>
                <Invite/>
                <ChannelSettings/>
            </ChannelOptions>
        </Container>
    )
}

export default TextChannel;