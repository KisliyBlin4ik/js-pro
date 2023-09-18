import styled from "styled-components"

export const StyledPopUpMenuItem = styled.div<{ theme: 'light_mode' | 'dark_mode' }>`
background-color: ${({theme}) => theme === 'dark_mode' ? '#1a1a1a' : '#fff'};
color: ${({theme}) => theme === 'dark_mode' ? '#fff' : '#1a1a1a'};
border-bottom: 1px solid rgb(210, 209, 209);
padding: 23px;
font-size: 20px;
`

export const StyledPopUpMenu = styled.div<{ open: 'open' | 'close' , theme: 'light_mode' | 'dark_mode' }>`
left: ${({open}) => open === 'open' ? '0' : '-250px'};
background-color: ${({theme}) => theme === 'dark_mode' ? '#1a1a1a' : '#fff'};
`