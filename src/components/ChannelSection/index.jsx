import React from 'react';

import {Container, ChannelNameSection, SectionName, OpenChannelIcon, AddChannel} from './styles.js';

const ChannelSection = (props) =>{
    return (
        <Container>
            <ChannelNameSection>
                <OpenChannelIcon/>
                <SectionName>{props.sectionName}</SectionName>
            </ChannelNameSection>
            <AddChannel/>
        </Container>
    )
}

export default ChannelSection;