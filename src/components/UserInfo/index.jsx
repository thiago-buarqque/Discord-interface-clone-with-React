import React from 'react';

import {Container, UserData, UserIcon, UserDetails, UserName, UserId, UserControls, Mic, Headphone, Settings} from './styles.js'

const UserInfo = () =>{
    return (
        <Container>
            
            <UserData>                
                <UserIcon isOnline></UserIcon>
                <UserDetails>
                    <UserName>Steve</UserName>
                    <UserId>#9584</UserId>
                </UserDetails>                
            </UserData>
            <UserControls>
                <Mic/>
                <Headphone/>
                <Settings/>
            </UserControls>
        </Container>
    )
}

export default UserInfo;