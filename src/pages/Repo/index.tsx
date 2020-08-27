import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Breadcrumb,
  RepoIcon,
  States,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon,
} from "./styles";

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />
        <Link className={"username"} to={"/laaura87"}>
          laaura87
        </Link>

        <span>/</span>

        <Link className={"reponame"} to={"/laaura87/yt-downloader"}>
          yt-downloader
        </Link>
      </Breadcrumb>

      <p>a website with a downloader videos of youtube</p>

      <States>
        <li>
          <StarIcon />
          <b>9</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>0</b>
          <span>forks</span>
        </li>
      </States>

      <LinkButton
        href={"https://github.com/laaura87/downloader-youtube-nodejs"}
      >
        <GithubIcon />
        <span>View On GitHub</span>
      </LinkButton>
    </Container>
  );
};

export default Repo;
