import React from 'react';

import {Container, ChannelNameContainer, VolumeUpIcon, ChannelName, ChannelOptions, Invite, ChannelSettings} from './styles.js'

const Layout = (props) =>{
    return (
        <Container>
            <ChannelNameContainer>
                <VolumeUpIcon/>

                <ChannelName>
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

export default Layout;