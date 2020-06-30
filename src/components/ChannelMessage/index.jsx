import React from 'react';

import {Container, RightArrow, MessageThumb, UserPic, MessageContent, Span, UserName, Announcement, MentionSpan} from './styles.js'

const ChannelMessage = (props) =>{
    if(props.isNewMember){
        return(
            <Container isAnnouncement={true}>
                <MessageThumb>
                    <RightArrow/>
                </MessageThumb>                
                <Announcement>{props.newMemberAnnouncement} <UserName>{props.newMemberName}</UserName></Announcement>
                
            </Container>
        )
    }
    else{
        return (    
            <Container messageThumb={props.messageThumb} isMention={props.isMention}>
                <MessageThumb isMention={props.isMention}>
                    {
                        props.messageThumb ? <UserPic src={props.userPic}/> : ''
                    }
                </MessageThumb>   
                            
                <MessageContent messageThumb={props.messageThumb}>     
                    {
                        props.messageThumb ? <UserName messageThumb={props.messageThumb}>{props.messageUserName}</UserName> : ''
                    }                
                    {
                        props.isMention ?
                        handleMentionMessage(props.messageContent,props.mentionValue)
                        : <Span>{props.messageContent}</Span>
                    }
                </MessageContent>
            </Container>
        )
    }    
}

const handleMentionMessage = (msg, mentionValue) => {
    const newMsg = msg.split(mentionValue);
    console.log('Entrou pow');
    console.log('Vai retornar isso: ', mentionValue);
    return(
        <Span>
            {
            newMsg[0]}<MentionSpan>{mentionValue}</MentionSpan>{newMsg[1] ? newMsg[1] : ''
            }
        </Span>
    )
}

export default ChannelMessage;