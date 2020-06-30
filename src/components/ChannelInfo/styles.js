import styled from 'styled-components';

import {Hashtag as _Hashtag} from 'styled-icons/fa-solid'

import {Help as _Help} from 'styled-icons/material-sharp'

import {Notifications as _Notifications} from 'styled-icons/material'

import {People as _People, Search as _Search, Inbox as _Inbox} from 'styled-icons/material-rounded'

import {Pushpin as _Pushpin} from 'styled-icons/remix-fill'

export const Container = styled.div`
    grid-area: CI;
    
    max-height: 46px;

    background: #36393f;

    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 16px;

    z-index: 4;
`
export const ChannelNameContainer = styled.div`
    width: auto;
    position: relative;

    display: flex;
    flex-direction: row;
    align-items: center;
`
export const HashTag = styled(_Hashtag)`
    color: #8e9297;

    width: 20px;
    height: 20px;    
`
export const ChannelName = styled.span`
    color: #fff;
    font-weight: bold;
    margin-left: 8px;
`

export const ChannelTools = styled.div`
    width: auto;

    display: flex;
    flex-direction: row;
    align-items: center;

`
export const Notifications = styled(_Notifications)`
    color: #b9bbbe;

    width: 24px;
    height: 24px;

    margin: 0 8px;

    cursor: pointer;

    &:hover{
        color: #fff;
    }
`
export const PinedMessages = styled(_Pushpin)`
    color: #b9bbbe;

    width: 24px;
    height: 24px;

    margin: 0 8px;

    cursor: pointer;

    &:hover{
        color: #fff;
    }
`
export const MemberList = styled(_People)`
    color: #b9bbbe;

    width: 24px;
    height: 24px;

    margin: 0 8px;

    cursor: pointer;

    &:hover{
        color: #fff;
    }
`
export const SearchBox = styled.div`
    position:relative;
    width: auto;
    height: 25px;
    margin: 0 8px;
`

export const Search = styled.input`
    background: #202225;
    border: none;
    border-radius: 3px;
    color: #8e9297;

    width: 145px;
    height: 25px;
    padding: 5px;

    :focus{
        color: #fff;
        width: 230px;
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        content: 'Search';
    }
    :-ms-input-placeholder {
        content: 'Search';
    }
`
export const SearchIcon = styled(_Search)`
    color: #b9bbbe;

    width: 17px;
    height: 17px;

    margin: 0 8px;

    position: absolute;
    right: 0;
    top: 3px;

    z-index: 2;
`
export const Inbox = styled(_Inbox)`
    color: #b9bbbe;

    width: 24px;
    height: 24px;

    margin: 0 8px;

    cursor: pointer;

    &:hover{
        color: #fff;
    }
`
export const Help = styled(_Help)`
    color: #b9bbbe;

    width: 24px;
    height: 24px;

    cursor: pointer;

    &:hover{
        color: #fff;
    }

    margin: 0 8px;
`