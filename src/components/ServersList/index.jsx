import React from 'react';
import {Container, Divider} from './styles.js';
import ServerButton from '../ServerButton'

const ServersList = () =>{
    return (
        <Container>
            <ServerButton isHome/>
            <Divider/>
            <ServerButton hasMentions qtdMentions={100}/>
            <ServerButton/>
            <ServerButton hasMessages/>
            <ServerButton hasMessages hasMentions qtdMentions={12}/>
        </Container>
    )
}

export default ServersList;