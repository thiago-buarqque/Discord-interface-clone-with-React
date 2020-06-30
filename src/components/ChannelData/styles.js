import styled from 'styled-components';

export const Container = styled.div`
    grid-area: CD;

    display: flex;
    flex-direction: column;

    max-height:calc(100vh - 46px);

    background: #36393f;

    padding: 0 0 16px 0px;
    
    position: relative;

    z-index: 2;
`

export const ChannelChat = styled.div`
    height: calc(100vh - 120px);
    padding: 10px 0;    

    overflow-y: auto;

    ::-webkit-scrollbar {
        width: 8px;        
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