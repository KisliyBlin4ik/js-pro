import styled from "styled-components"

export const StyledPopupContent = styled.div<{ theme: 'light_mode' | 'dark_mode' }>`
background-color: ${({theme}) => theme === 'dark_mode' ? '#1a1a1a' : 'rgb(242, 242, 242)'};
color: ${({theme}) => theme === 'dark_mode' ? '#fff' : '#111'};
`

export const StyledPopupClose = styled.a<{ theme: 'light_mode' | 'dark_mode' }>`
color: ${({theme}) => theme === 'dark_mode' ? '#fff' : '#1a1a1a'};
`