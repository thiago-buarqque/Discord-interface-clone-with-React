import styled from 'styled-components';

import {KeyboardArrowDown, Add} from 'styled-icons/material-rounded'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    height: 18px;
    cursor: pointer;
    position: relative;
    
    margin-top: 15px;
    margin-bottom: 5px;

    &:hover span{
        color: #fff;
    }
`
export const ChannelNameSection  = styled.div`
    width: auto;
`
export const SectionName  = styled.span`
    font-weight: 600;
    text-transform: uppercase;
    color: #8e9297;
    font-size: 12px;
    line-height: 14px;
    margin-left: 3px;

    &:hover{
        color: #fff;
    }
`
export const OpenChannelIcon  = styled(KeyboardArrowDown)`
    color: #8e9297;
    width: 8px;
    height: 8px;

    &:hover{
        color: #fff;
    }
`
export const AddChannel = styled(Add)`
    color: #8e9297;
    width: 22px;
    height: 22px;
    margin-right: 10px;

    &:hover{
        color: #fff;
    }
`