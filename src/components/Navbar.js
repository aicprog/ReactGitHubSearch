import React from 'react';
import styled from 'styled-components';
// import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  return (<Wrapper><h3>Github Search</h3></Wrapper>);
};

const Wrapper = styled.nav`
	padding: 1.5rem;
	margin: 1rem;
	background: var(--clr-white);
	text-align: center;
	//color: #ff5d5c;
	color: var(--clr-grey-5);
	opacity: 1;
	/* display: grid;
  grid-template-columns: auto auto 100px;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;  */
	h4 {
		margin-bottom: 0;
		font-weight: 400;
	}

	h3 {
		text-align: center;
	}
	img {
		width: 35px !important;
		height: 35px;
		border-radius: 50%;
		object-fit: cover;
	}
	button {
		background: transparent;
		border: transparent;
		font-size: 1.2rem;
		text-transform: capitalize;
		letter-spacing: var(--spacing);
		color: var(--clr-grey-5);
		cursor: pointer;
	}
`;

export default Navbar;
