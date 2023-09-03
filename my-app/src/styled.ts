import styled from "styled-components"

export const StyledWrapper = styled.div<{ theme: 'light_mode' | 'dark_mode' }>`
background: ${({theme}) => theme === 'dark_mode' ? '#1a1a1a' : '#fff'};
`

export const StyledContainer = styled.div<{ theme: 'light_mode' | 'dark_mode' }>`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
max-width: 500px;
width: 100%;
gap: 30px;
padding: 30px;
border: 1px solid rgb(210, 209, 209);
background: ${({theme}) => theme === 'dark_mode' ? '#1a1a1a' : '#fff'};
color: ${({theme}) => theme === 'dark_mode' ? '#fff' : '#111'};
`
export const StyledForm = styled.form<{theme: 'light_mode' | 'dark_mode'}>`
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
background: ${({theme}) => theme === 'dark_mode' ? '#1a1a1a' : 'rgb(242, 242, 242)'};
color: ${({theme}) => theme === 'dark_mode' ? '#fff' : '#111'};
`

export const StyledPageTemplate = styled.main<{ theme: 'light_mode' | 'dark_mode' }>`
color: ${({theme}) => theme === 'dark_mode' ? '#fff' : '#1a1a1a'};
`

export const StyledPopupContent = styled.div<{ theme: 'light_mode' | 'dark_mode' }>`
background-color: ${({theme}) => theme === 'dark_mode' ? '#1a1a1a' : 'rgb(242, 242, 242)'};
color: ${({theme}) => theme === 'dark_mode' ? '#fff' : '#111'};
`

export const StyledPopUpMenu = styled.div<{ openMenu: true | false , theme: 'light_mode' | 'dark_mode' }>`
left: ${({openMenu}) => openMenu === true ? '0' : '-250px'};
background-color: ${({theme}) => theme === 'dark_mode' ? '#1a1a1a' : '#fff'};
`