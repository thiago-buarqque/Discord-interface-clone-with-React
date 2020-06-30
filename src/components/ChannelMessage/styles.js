import styled from 'styled-components';

import {ArrowNarrowRight} from 'styled-icons/heroicons-solid'

export const Container = styled.div`
    display: flex;
    align-items: center;

    ${props => props.messageThumb ? 'margin-top: 14px;' : ''}
    ${props => props.isAnnouncement ? 'margin-top: 8px;' : ''}
     
    ${props => props.messageThumb ? 'padding: 0px;' : 'padding: 0 0 5px 0;'}

    ${props => props.isMention ? 
        `background: #413F3F;
         border-left: 2px solid #FFA839;`
        : ''}

    position: relative;
`

export const RightArrow = styled(ArrowNarrowRight)`
    color: #43b581;
    width: 20px;
    height: 20px;
`
export const Announcement = styled.span`
    color: #8e9297;
    font-size: 14px;
`

export const MessageThumb = styled.div`
    width: 72px;
    height: auto;

    display: flex;
    align-items: center;
    justify-content: center;

    ${props => props.isMention ? 
        `padding-right: 5px;`
        : ''
    }
`
export const UserPic = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`
export const MessageContent = styled.div`
    width: auto;

    display: flex;
    flex-direction: ${props => props.messageThumb ? 'column' : 'row'};
    justify-content: space-between;

    position: relative;
`

export const UserName = styled.span`
    color: #fff;
    font-weight: bold;
    margin-bottom: 3px;
    font-size: 14px;
    ${props => props.messageThumb ? 'margin-top: -4px;' : ''}
`


export const Span = styled.span`
    color: #c4c4c4;
    font-size: 14px;
`

export const MentionSpan = styled.span`
    color: #5D80D6 !important;
    font-size: 14px; 

        cursor: pointer;

    &:hover{
        text-decoration: underline #5D80D6 !important;
    }
`