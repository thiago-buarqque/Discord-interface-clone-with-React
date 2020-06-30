import React from 'react';

import {Container,
ChannelNameContainer,
HashTag,
ChannelName,
ChannelTools,
Notifications,
PinedMessages,
MemberList,
SearchBox,
Search,
SearchIcon,
Inbox,
Help} from './styles.js'

const ChannelInfo = () =>{
    return (
        <Container>
            <ChannelNameContainer>
                <HashTag/>
                <ChannelName>
                    Geral
                </ChannelName>
            </ChannelNameContainer>

            <ChannelTools>
                <Notifications/>
                <PinedMessages/>
                <MemberList/>
                <SearchBox>
                    <Search type="text" placeholder="Search"/>
                    <SearchIcon/>
                </SearchBox>                

                <Inbox/>
                <Help/>
            </ChannelTools>

        </Container>
    )
}

export default ChannelInfo;