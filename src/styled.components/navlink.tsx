import styled from 'styled-components';


interface NavProps {
    
    isActive?: boolean;
    noBackground?: boolean;
}

const NavLink  = styled.a<NavProps>`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
min-width: 100px;
text-decoration: none;
${({theme, color, isActive, noBackground})=>{

return `
background-color: ${isActive? theme.foreground['400'] : noBackground? 'transparent' :  theme.background['50']};
color: ${isActive?  theme.background['400'] : theme.secondary['800']};
&:hover{
  background-color:  ${isActive? theme.foreground['400'] : noBackground? 'transparent' : theme.secondary['500']};
  color: ${isActive? theme.background['400'] : noBackground? theme.secondary['300'] : theme.background['100']};  
}
`
}}

`
export default NavLink;