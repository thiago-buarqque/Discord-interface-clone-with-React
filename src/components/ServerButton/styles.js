import styled from 'styled-components';

export const Button = styled.button`
    width: 48px;
    height: 48px;
    
    background: ${props => props.isHome ? '#7289da' : '#d4d4d4'};

    border: none;
    border-radius: 50%;

    cursor: pointer;

    transition: all .2s ease-out;

    margin-bottom: 8px;
    position: relative;

    flex-shrink: 0;

    &:hover{
        border-radius: 12px;
    }

    ::before{
        content: '';
        width: 9px;
        height: 9px;
        background: #fff;

        position: relative;
        left: -17px;

        border-radius: 50%;

        transition: all .2s;
        display: ${props => props.hasMessages ? 'block' : 'none'};
        z-index: 2;
    }

    &:hover:before{
        height: 20px;
        border-radius: 25%;
    }

    ::after{
        content: '${props => props.qtdMentions > 99 ? '99' : props.qtdMentions}';

        width: 14px;
        height: 14px;
        background: #f04747;

        position: absolute;
        bottom: 0px;
        right: 0px;

        border: 1px solid var(--primary);
        border-radius: 50%;

        color: #fff;
        font-size: 11px;

        display: ${props => props.hasMentions ? 'inline' : 'none'};
        z-index: 2;
    }
`