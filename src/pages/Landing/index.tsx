import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import { Logo } from '../../images';

import { Container, Wrapper, Main, Location, EnterApp } from './styles';

const Landing: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Logo />

        <Main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças</p>
        </Main>

        <Location>
          <strong>Brasília DF</strong>
          <span>São Sebastião</span>
        </Location>

        <EnterApp>
          <a href="#">
            <FiArrowRight size={26} color="#707070" />
          </a>
        </EnterApp>
      </Wrapper>
    </Container>
  );
};

export default Landing;
