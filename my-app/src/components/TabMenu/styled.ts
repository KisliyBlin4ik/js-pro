import styled from "styled-components"

export const StyledTabContainer = styled.div<{ theme: 'light_mode' | 'dark_mode' }>`
background: ${({theme}) => theme === 'dark_mode' ? '#1a1a1a' : '#c7c7c7'};
`
export const StyledTabItem = styled.button<{ theme: 'light_mode' | 'dark_mode' }>`
color: ${({theme}) => theme === 'dark_mode' ? '#fff' : '#1a1a1a'};
`
export const StyledSortItem = styled.select<{ theme: 'light_mode' | 'dark_mode' }>`
color: ${({theme}) => theme === 'dark_mode' ? '#fff' : '#1a1a1a'};
`