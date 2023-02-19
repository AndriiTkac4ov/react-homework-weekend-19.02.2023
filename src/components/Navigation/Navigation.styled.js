import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavigationLink = styled(NavLink)`
    text-decoration: none;
    color: tomato;
    
    &.active{
        color: aquamarine;
    }
`;