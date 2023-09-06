import styled from "styled-components"

export const StyledPostBtn = styled.button<{ theme: 'light_mode' | 'dark_mode' }>`
background-color: ${({theme}) => theme === 'dark_mode' ? 'rgba(200, 200, 200, 0)' : 'rgba(200, 200, 200, 0)'};
color: ${({theme}) => theme === 'dark_mode' ? '#fff' : '#1a1a1a'};
`