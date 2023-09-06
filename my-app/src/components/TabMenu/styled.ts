import styled from "styled-components"

export const StyledTabContainer = styled.div<{ theme: 'light_mode' | 'dark_mode' }>`
background: ${({theme}) => theme === 'dark_mode' ? '#1a1a1a' : '#fff'};
`
export const StyledTabItem = styled.button<{ theme: 'light_mode' | 'dark_mode' }>`
color: ${({theme}) => theme === 'dark_mode' ? '#fff' : '#1a1a1a'};
`