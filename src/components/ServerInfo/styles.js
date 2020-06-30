import styled from 'styled-components';

import {KeyboardArrowDown} from 'styled-icons/material-rounded'

export const Container = styled.div`
    ${
        props => props.changeBackgroundServerInfo ? 'background: var(--secondary);' : ''
    }

    height: 46px;

    ${
        props => props.changeBackgroundServerInfo ? 'box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;' : ''
    }

    transition: all .3s;

    position: relative;

    z-index: 2;
`

export const ServerNameContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    ${
        props => !props.changeBackgroundServerInfo ?
        `background: rgb(0,0,0);
        background: linear-gradient(180deg, var(--secondary) 0%, rgba(0,0,0,0.4458158263305322) 45%, rgba(0,212,255,0) 100%);`
        : ''
    }    

    height: 46px;
    width: 100%;
    

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 14px;
` 

export const ServerName = styled.span`
    color: #fff;
    font-size: 0.95em;
    font-weight: 600;
`
export const OpenServerInfo = styled(KeyboardArrowDown)`
    color: #fff;

    width: 24px;
    height: 24px;

    cursor: pointer;
`