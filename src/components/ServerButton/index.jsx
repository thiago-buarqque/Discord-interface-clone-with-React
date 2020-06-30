import React from 'react';

import {Button} from './styles.js'

const ServerButton = (props) =>{
    return (
        <Button isHome={props.isHome}
        hasMentions={props.hasMentions}
        qtdMentions={props.qtdMentions}
        hasMessages={props.hasMessages}>

        </Button>
    )
}

export default ServerButton;