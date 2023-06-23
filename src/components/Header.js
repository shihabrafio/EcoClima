import React from 'react';
import { styled } from 'styled-components';

const Header = () => (
  <Head>
    <LOGO>
      <IMG src="./cloudy.png" alt="cloud icon" />
      <h2>ECOCLIMA</h2>
    </LOGO>
    <FORM>
      <SPAN>
        search
      </SPAN>
      <INPUT name="name" type="text" placeholder="country" />
      <H4>Air Quality Indexes</H4>
    </FORM>
  </Head>
);

export default Header;

const Head = styled.header`
    align-items: baseline;
`;

const IMG = styled.img`
  width: 70px;
`;

const FORM = styled.form`
  padding-top: 13%;
  display: flex;
  gap: 4%;
`;

const SPAN = styled.span`
  margin-top: 3%;
  margin-left: 2%;
`;

const LOGO = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const INPUT = styled.input`
  width: 82%;
height: 3vh;
`;

const H4 = styled.h4`
  margin-top: 0%;
`;
