import styled from "styled-components"

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
background: ${(props: any) => props.theme === 'dark' ? '#fff' : '#111'};
color: ${(props: any) => props.theme === 'dark' ? '#111' : '#fff'};
`