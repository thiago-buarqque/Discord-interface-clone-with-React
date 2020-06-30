import React from 'react';

import {Container, ServerName, OpenServerInfo, ServerNameContainer} from './styles.js'

const ServerInfo = (props) =>{
    console.log(`Isso foi o que chegou`,props.changeBackgroundServerInfo);
    return (
        <Container changeBackgroundServerInfo={props.changeBackgroundServerInfo}>            
            <ServerNameContainer changeBackgroundServerInfo={props.changeBackgroundServerInfo}>
                <ServerName>Minecraft server</ServerName>
                <OpenServerInfo/>
            </ServerNameContainer>                    
        </Container>
    )
}
export default ServerInfo;