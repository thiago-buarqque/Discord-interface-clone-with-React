import styled from 'styled-components';

export const Container = styled.div`
    grid-area: SU;

    max-height: calc(100vh - 46px);

    overflow-y: scroll;

    display: flex;
    flex-direction: column;

    padding: 0 5px;

    background: #2f3136;

    ::-webkit-scrollbar {
        width: 4px;        
    }
       
    ::-webkit-scrollbar-track {
        background:  #2f3136;
        border-radius:5px;
    }
       
    ::-webkit-scrollbar-thumb {
    background-color: #202225;
    outline: 1px solid #202225;
    border-radius:5px;
    }

    scrollbar-color: #202225 transparent !important;
    scrollbar-width: thin;
`
export const UsersServerFlag = styled.span`
    color: #c4c4c4;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 12px;

    cursor: default;

    padding: 0 8px;

    margin-top: 24px;
    margin-bottom: 8px;

`
export const User = styled.div`
    width: 100%;
    height: 50px;

    display: flex;
    align-items: center;

    border-radius: 3px;

    padding: 5px 8px;

    cursor: pointer;

    &:hover{
        background: rgba(79, 84, 92, 0.16);
    }
    margin: 1px 0;
`

export const UserInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`
export const PicContainer = styled.div`
    position: relative;

    width: 32px;
    height: 32px;

    border-radius: 50%;

    flex-shrink: 0;

    ::after{
        content: '';

        width: 10px;
        height: 10px;

        position: absolute;
        right:0;
        bottom: 0;

        background: #43b581;

        display: inline;
        z-index:2;
        border-radius: 50%;
    }
`
export const UserPic = styled.img`
    width: 32px;
    height: 32px;

    border-radius: 50%;

    flex-shrink: 0;

    position: relative;
`
export const UserName = styled.span`
    color: #DCDDDE;

    font-size:14px;
    font-weight: bold;

`
export const UserStatus = styled.span`
    color: #9d9d9e;

    font-size: 11px;
`