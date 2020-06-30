import styled from 'styled-components';

import {Hashtag} from 'styled-icons/fa-solid';

import {PersonAdd} from 'styled-icons/evaicons-solid';

import {Settings} from 'styled-icons/material-sharp';

export const Container = styled.div`
    width: 224px;
    height: 32px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2px;

    position: relative;

    background: ${props => props.isActive ? 'rgba(79,84,92,0.32)' : 'transparent'};
    border-radius: 5px;

    cursor: pointer;

    transition: all .2s;

    &:hover{
        background: rgba(79,84,92,0.32);
    }

    &:hover span{
        color: #fff;
    }

    &:hover div{
        opacity: 1;
    }

    padding: 3px;

    ::before{
        width: 7px;
        height: 7px;

        content: '';

        z-index:2;

        background: #fff;

        border-radius: 50%;

        position: absolute;
        left: -8px;

        display: ${props => props.hasMessages ? 'block' : 'none'}
    }
`
export const ChannelNameContainer = styled.div`
    width: auto;

    position: relative;
`
export const HashTagIcon = styled(Hashtag)`
    width: 18px;
    height: 18px;

    color: #8e9297;

    transition: color .2s;

`
export const ChannelName = styled.span`
    color: ${props => props.isActive || props.hasMessages? '#fff' : '#8e9297'};

    margin-left: 7px;

    transition: color .2s;

    font-size: 15px;
    font-weight: bold;
`
export const ChannelOptions = styled.div`
    width: auto;
    position: relative;

    transition: opacity .2s;

    opacity: ${props => props.isActive ? '1' : '0'};
`
export const Invite = styled(PersonAdd)`
    width: 14px;
    height: 14px;
    
    color: #8e9297;

    transition: color .2s;

    &:hover{
        color: #fff;   
    }
`
export const ChannelSettings = styled(Settings)`
    width: 14px;
    height: 14px;

    color: #8e9297;

    margin: 0 5px;

    transition: color .2s;

    &:hover{
        color: #fff;
    }
`