import React from "react";

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

const Profile: React.FC = () => {
  const TabContent = () => {
    return (
      <div className="content">
        <RepoIcon />
        <span className="label">Repositories</span>
        <span className="number">6</span>
      </div>
    );
  };

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
            username={"laaura87"}
            name={"Laura Izabel"}
            avatarUrl={"https://avatars0.githubusercontent.com/u/40806730?v=4"}
            followers={7}
            following={7}
            company={"never"}
            location={"Caruaru, Pernambuco"}
            email={"lauraizabel2563@gmail.com"}
            blog={undefined}
          />
        </LeftSide>

        <RightSide>
          <Tab className="mobile">
            <TabContent />
            <span className="line"></span>
          </Tab>
          <Repos>
            <h2>Random Repos</h2>

            <div>
              {[1, 2, 3, 4, 5, 6].map((n) => {
                return (
                  <RepoCard
                    key={n}
                    username={"laaura87"}
                    reponame={"yt-downloader"}
                    description={
                      "a website with a downloader videos of youtube"
                    }
                    language={"JavaScript"}
                    stars={3}
                    forks={2}
                  />
                );
              })}
            </div>
          </Repos>

          <CalendarHeading>Random Calendar</CalendarHeading>

          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
