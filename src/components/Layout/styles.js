import styled from 'styled-components';

// ServersList -> SL
// ServerInfo -> SI
// ServerChannels - > SC
// UserInfo - > UI
// ChannelInfo -> CI
// ChannelData - > CD
// ServerUsers -> SU

export const AppLayout = styled.div`
    display: grid;

    height: 100vh;

    grid-template-areas:
    "SL SI CI CI"
    "SL SC CD SU"
    "SL UI CD SU";

    grid-template-rows: 46px auto 52px;
    grid-template-columns: 72px 240px auto 240px;
`