import styled from "styled-components"

export const StyledtoggleThemeBtnLight = styled.button<{ theme: 'light_mode' | 'dark_mode' }>`
width: 100%;
height: 70px;
border: 1px solid ${({theme}) => theme === 'dark_mode' ? 'rgb(210, 209, 209)' : 'rgb(210, 209, 209)'} ;
background-color: ${({theme}) => theme === 'dark_mode' ? '#1a1a1a' : '#fff'};
color: ${({theme}) => theme === 'dark_mode' ? '#fff' : 'rgb(210, 209, 209)'};
box-shadow: ${({theme}) => theme === 'dark_mode' ? 'none' : 'inset 0 0 15px rgba(0, 0, 0, 0.5)'};
`
export const StyledtoggleThemeBtnDark = styled.button<{ theme: 'light_mode' | 'dark_mode' }>`
width: 100%;
height: 70px;
border: 1px solid ${({theme}) => theme === 'dark_mode' ? 'rgb(210, 209, 209)' : 'rgb(210, 209, 209)'} ;
background-color: ${({theme}) => theme === 'dark_mode' ? 'rgb(228, 228, 228)' : '#fff'};
color: ${({theme}) => theme === 'dark_mode' ? 'rgb(200, 200, 200)' : '#111'};
box-shadow: ${({theme}) => theme === 'dark_mode' ? 'inset 0 0 15px rgba(0, 0, 0, 0.8)' : 'none'};
`