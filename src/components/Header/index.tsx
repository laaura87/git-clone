import React from "react";

import { Container, GithubLogo, SearchForm } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <GithubLogo />
      <SearchForm>
        <input placeholder="Enter Username or Repository" />
      </SearchForm>
    </Container>
  );
};

export default Header;
