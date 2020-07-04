import React from 'react';

import {Container, ChannelChat} from './styles.js'

import ChannelMessage from '../ChannelMessage'
import ChannelControls from '../ChannelControls'

import user1Pic from '../../images/steve.jfif'
import user2Pic from '../../images/alex.jpg'

export default class ChannelData extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            channelMessages: [
                {isNewMember: true, newMemberAnnouncement: 'Everyone welcome, ', newMemberName: 'Steve'},
                {messageUserName: 'Steve', messageThumb: true, userPic: user1Pic, messageContent: 'Hey, everyone!', isMention: false},
                {messageUserName: 'Steve', messageThumb: false, messageContent: 'Someone wants to play?', isMention: false},
                {messageUserName: 'Alex', messageThumb: true, userPic: user2Pic, messageContent: 'Hey, Steve!', isMention: false},
                {messageUserName: 'Alex', messageThumb: false, messageContent: 'Let\'s play some skywars match!', isMention: false},
                {messageUserName: 'Steve', messageThumb: true, userPic: user1Pic, messageContent: 'Can we play on 1.16 version?', isMention: false},
                {messageUserName: 'Steve', messageThumb: false, messageContent: 'I\'m really excited for this new update.', isMention: false},
                {messageUserName: 'Steve', messageThumb: false, messageContent: 'I\'m downloading new version right now.', isMention: false},
                {messageUserName: 'Alex', messageThumb: true, userPic: user2Pic, messageContent: 'Yeah, of course. I\'m starting download new version right now.', isMention: false},
                {messageUserName: 'Alex', messageThumb: false, messageContent: 'Some stuff to full the chat, full the chat', isMention: false},
                {messageUserName: 'Alex', messageThumb: false, messageContent: 'Some stuff to full the chat, Some stuff to full the chat', isMention: false},
                {messageUserName: 'Alex', messageThumb: false, messageContent: 'Some stuff to full the chat', isMention: false},
                {isNewMember: true, newMemberAnnouncement: 'Everyone welcome, ', newMemberName: 'Villager John', isMention: false},
                {isNewMember: true, newMemberAnnouncement: 'Look who is here. It\'s,', newMemberName: 'Villager Lilly', isMention: false},
                {messageUserName: 'Steve', messageThumb: true, userPic: user1Pic, messageContent: 'Some stuff to full the chat', isMention: false},
                {messageUserName: 'Steve', messageThumb: false, messageContent: 'Some stuff to full the chat, full the chat', isMention: false},
                {messageUserName: 'Steve', messageThumb: false, messageContent: 'Some stuff to full the chat', isMention: false},
                {messageUserName: 'Alex', messageThumb: false, messageContent: 'Some stuff to full the chat, full the chat', isMention: false},
                {messageUserName: 'Alex', messageThumb: false, messageContent: 'Some stuff to full the chat, Some stuff to full the chat', isMention: false},
                {messageUserName: 'Alex', messageThumb: false, messageContent: 'Some stuff to full the chat', isMention: false},
                {messageUserName: 'Steve', messageThumb: true, userPic: user1Pic, messageContent: 'Some stuff to full the chat', isMention: false},
                {messageUserName: 'Steve', messageThumb: false, messageContent: 'Some stuff to full the chat, full the chat', isMention: false},
                {messageUserName: 'Alex', messageThumb: true, userPic: user2Pic, messageContent: 'Hey @Steve', isMention: true, mentionValue:'@Steve'},
            ],
        }

        this.addMessage = this.addMessage.bind(this);

        this.lastMessageUser = ''

        this.messagesEnd = React.createRef();
    }    

    componentDidMount() {
        this.scrollToBottom();
      }
      
      componentDidUpdate() {
        this.scrollToBottom();
      }

    scrollToBottom = () => {
        console.log(this.messagesEnd);
        this.messagesEnd.scrollIntoView();
    }
    
    render(){
        return (
            <Container>
                <ChannelChat>
                    {this.state.channelMessages.map((msg,i) => {
                        this.lastMessageUser = msg.newMemberName || msg.messageUserName;
                        if(msg.isNewMember){                    
                            return <ChannelMessage
                            isNewMember={msg.isNewMember}
                            newMemberAnnouncement={msg.newMemberAnnouncement}
                            newMemberName={msg.newMemberName}
                            />
                        }
                        else{
                            return <ChannelMessage
                            messageUserName={msg.messageUserName}
                            messageThumb={msg.messageThumb}
                            userPic={msg.userPic}
                            messageContent={msg.messageContent}
                            isMention={msg.isMention}
                            mentionValue={msg.mentionValue}
                            />
                        }
                    })}
                    <div style={{ float:"left", clear: "both" }}
                        ref={(el) => { this.messagesEnd = el; }}>
                    </div>
                </ChannelChat>            
                <ChannelControls addMessage={this.addMessage}/>
            </Container>
        )
    }


    addMessage(newMessageValue, userName){
        let _newMessage;
        if(userName !== this.lastMessageUser){
            _newMessage = {messageUserName: userName, messageThumb: true, userPic: user1Pic, messageContent: newMessageValue}
        }
        else{
            _newMessage = {messageUserName: userName, messageThumb: false, messageContent: newMessageValue}
        }

        this.setState(state =>({
            channelMessages: [...state.channelMessages, _newMessage]
        }))
    
    }
}


