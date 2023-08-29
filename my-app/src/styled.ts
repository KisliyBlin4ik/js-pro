import styled from "styled-components"

export const StyledWrapper = styled.div<{ theme: 'light' | 'dark' }>`
background: ${({ theme }) => theme === 'dark' ? '#1a1a1a' : '#fff'};
`

export const StyledContainer = styled.div<{theme: 'light' | 'dark'}>`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
max-width: 500px;
width: 100%;
gap: 30px;
padding: 30px;
border: 1px solid rgb(210, 209, 209);
background: ${({ theme }) => theme === 'dark' ? '#1a1a1a' : '#fff'};
color: ${({ theme }) => theme === 'dark' ? '#fff' : '#111'};
`
export const StyledForm = styled.form<{theme: 'light' | 'dark'}>`
font-size: 20px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
max-width: 500px;
width: 100%;
gap: 30px;
padding: 30px;
border: 1px solid rgb(210, 209, 209);
background: ${({ theme }) => theme === 'dark' ? '#1a1a1a' : 'rgb(242, 242, 242)'};
color: ${({ theme }) => theme === 'dark' ? '#fff' : '#111'};
`

export const StyledPageTemplate = styled.div<{ theme: 'light' | 'dark' }>`
color: ${({ theme }) => theme === 'dark' ? '#fff' : '#1a1a1a'};
`
