import React from 'react';

import {Container, AddFile, Input, Gift, Gif, Emoji} from './styles.js';

import _Gif from '../../images/icons/gif.svg'

export default class ChannelControls extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            newMessageValue:'',            
        }

        this.handleSubmitMessage = this.props.addMessage;

        this.handleChangeMessage = this.handleChangeMessage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render(){
        return(
            <Container>
                <AddFile/>
                <Input placeholder="Message #general" onChange={this.handleChangeMessage} value={this.state.newMessageValue} onKeyPress={this.handleSubmit}/>
                <Gift/>
                <Gif src={_Gif}/>
                <Emoji/>
            </Container>
        )
    }

    handleChangeMessage(e){
        this.setState({newMessageValue: e.target.value});
    }
    
    handleSubmit(e){
        if(e.key === 'Enter' && this.state.newMessageValue.trim() != ''){
            this.handleSubmitMessage(this.state.newMessageValue, 'Steve');
            this.setState({newMessageValue: ''});
        }
    }
}


