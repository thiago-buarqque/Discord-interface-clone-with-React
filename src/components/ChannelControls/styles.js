import styled from 'styled-components';

import {AddCircle} from 'styled-icons/material-rounded'
import {Gift as _Gift} from 'styled-icons/boxicons-solid'
import {Happy2} from  'styled-icons/icomoon'


export const Container = styled.div`
    width: auto;
    height: 44px;

    background: #40444b;
    border-radius: 8px;

    position: absolute;
    bottom: 20px;
    left: 16px;
    right: 16px;

    padding: 10px;

    display: flex;
    align-items: center;
`


export const AddFile = styled(AddCircle)`
    color: #fff;
    opacity: 0.75;

    width: 30px;
    height: 30px;

    margin: 8px;

    transition: opacity .2s;
    cursor: pointer;
    
    &:hover{
        opacity: 1;
    }

    
`
export const Input = styled.input`
    width: 100%;
    background: transparent;
    border: none;
    color: #DCDDDE;
    padding: 0 8px;
    font-size: 14px;


    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: hsla(0,0%,100%,0.3);
    }
    
    :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: hsla(0,0%,100%,0.3);
    }
    
    ::-ms-input-placeholder { /* Microsoft Edge */
        color: hsla(0,0%,100%,0.3);
    }
`
export const Gift = styled(_Gift)`
    color: #fff;
    opacity: 0.75;

    width: 28px;
    height: 28px;

    margin: 0 8px;

    transition: opacity .2s;
    cursor: pointer;

    &:hover{
        opacity: 1;
    }
    
`
export const Gif = styled.img`
    color: #fff;
    opacity: 0.75;

    width: 29px;
    height: 29px;

    margin: 0 8px;

    transition: opacity .2s;
    cursor: pointer;

    &:hover{
        opacity: 1;
    }
`
export const Emoji = styled(Happy2)`
    color: #fff;
    opacity: 0.75;

    width: 26px;
    height: 26px;

    margin: 0 8px;

    transition: opacity .2s;
    cursor: pointer;

    &:hover{
        opacity: 1;
    }
`