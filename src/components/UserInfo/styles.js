import styled from 'styled-components';

import steve from '../../images/steve.jfif';

import {Mic as _Mic} from 'styled-icons/material';

import {Settings as _Settings} from 'styled-icons/material-sharp';

import {Headphones as _Headphones} from 'styled-icons/evaicons-solid';

export const Container = styled.div`
    grid-area: UI;

    background: #292b2f;

    height: 100%;

    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    
    padding:8px;

    cursor: pointer;
`

export const UserDetails = styled.div`
    width: auto;
    position: relative;

    display: grid;
    flex-direction: column;
    padding-left: 8px;
`
export const UserData = styled.div`
    width: auto;
    position: relative;

    display: flex;
`
export const UserIcon = styled.div`
    width: 32px;
    height: 32px;

    position: relative;

    background url(${steve});
    background-size: cover;
    background-position: cente;

    border-radius: 50%;

    ::after{
        content: '';

        width: 9px;
        height: 9px;

        position: absolute;
        right:0;
        bottom: 0;

        background: #43b581;

        display: inline;
        border-radius: 50%;
    }
`
export const UserName = styled.span`
    color: #fff;
    font-size: 14px;
    font-weight: bold;
`
export const UserId = styled.span`
    color: #8e9297;
    font-size: 12px;
`
export const UserControls = styled.div`
    width: auto;
    position: relative;
`
export const Mic = styled(_Mic)`
    color: #8e9297;
    width: 32px;
    height: 32px;
    padding: 6px;

    border-radius: 3px;

    &:hover{
        background: rgba(79,84,92,0.32);
    }
`
export const Headphone = styled(_Headphones)`
    color: #8e9297;
    width: 32px;
    height: 32px;
    padding: 6px;

    border-radius: 3px;

    margin: 0 1px;

    &:hover{
        background: rgba(79,84,92,0.32);
    }
`
export const Settings = styled(_Settings)`
    color: #8e9297;
    width: 32px;
    height: 32px;

    border-radius: 3px;

    padding: 6px;

    &:hover{
        background: rgba(79,84,92,0.32);
    }
`