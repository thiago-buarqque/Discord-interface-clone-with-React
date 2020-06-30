import styled from 'styled-components';
import serverImg from '../../images/server_img.jpg';

export const Container = styled.div`
    grid-area: SC;

    display: flex;
    flex-direction: column;
    align-content: flex-end;
    align-items: flex-end;

    height: calc(100vh - 98px);

    background: #2f3136;

    transition: all .2s ease-in;

    height: calc(100vh - 98px);
    
    width: 100%;

    position: relative;
    
`

export const ChannelsBody = styled.div`
    height: 100%;
    width: 100%;
    
    overflow-y: scroll;

    transition: all .3s;

    //Give space for serverThumb
    margin-top: 90px;

    padding: 0px 5px 5px 5px;

    z-index: 0;

    ::-webkit-scrollbar {
        display: none;
    }
`

export const ServerThumb = styled.div`
    position: absolute;
    top -46px;
    left: 0;

    width: 100%;
    height: 135px;

    transition: all .3s ease-out;

    background: url(${serverImg});
    background-size: cover;
    background-position: center;    
`