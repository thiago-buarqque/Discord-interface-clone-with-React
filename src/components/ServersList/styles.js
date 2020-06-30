import styled from 'styled-components';

export const Container = styled.div`
    grid-area: SL;

    max-height: 100vh;
    
    background: #202225;

    display: flex;
    flex-direction: column;
    
    align-items: center;

    padding: 15px 0;
    
    overflow-y: scroll;

    z-index: 2;

    ::-webkit-scrollbar {
        display: none;
    }
`

export const Divider = styled.span`
    background: rgba(255,255,255,0.06);
    width: 50%;
    height: 2px;
    margin-bottom: 10px;
`