import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/fetch";
import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
  CalendarHeading,
  RepoIcon,
  Tab,
} from "./styles";

import ProfileData from "../../components/ProfileData";
import RepoCard from "../../components/RepoCard";
import RandomCalendar from "../../components/RandomCalendar";

import { APIUser, APIRepo } from "../../@types";

interface Data {
  user?: APIUser;
  repos?: APIRepo[];
  error?: string;
}

const Profile: React.FC = () => {
  const { username = "laaura87" } = useParams();

  const user = useFetch<APIUser>(`https://api.github.com/users/${username}`);

  let repo = useFetch<APIRepo[]>(
    `https://api.github.com/users/${username}/repos`
  );

  const suffledRepos = repo?.sort(() => 0.5 - Math.random());
  const slicedRepos = suffledRepos?.slice(0, 6);

  repo = slicedRepos;
  if (!user || !repo) {
    return <h1>Loading...</h1>;
  }

  const TabContent = () => (
    <div className="content">
      <RepoIcon />
      <span className="label">Repositories</span>
      <span className="number">{user?.public_repos}</span>
    </div>
  );

  return (
    <Container>
      <Tab className="desktop">
        <div className="wrapper">
          <span className="offset" />
          <TabContent />
        </div>

        <span className="line" />
      </Tab>

      <Main>
        <LeftSide>
          <ProfileData
            username={user.login}
            name={user.name}
            avatarUrl={user.avatar_url}
            followers={user.followers}
            following={user.following}
            company={user.company}
            location={user.location}
            email={user.email}
            blog={user.blog}
          />
        </LeftSide>

        <RightSide>
          <Tab className="mobile">
            <TabContent />
            <span className="line" />
          </Tab>

          <Repos>
            <h2>Random repos</h2>
            <div>
              {repo?.map((item) => {
                return (
                  <RepoCard
                    key={item.name}
                    username={item.owner.login}
                    reponame={item.name}
                    description={item.description}
                    language={item.language}
                    stars={item.stargazers_count}
                    forks={item.forks}
                  />
                );
              })}
            </div>
          </Repos>

          <CalendarHeading>Random calendar</CalendarHeading>

          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
