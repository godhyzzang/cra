import React from "react";
import {
  Container,
  Section,
  Title,
  MentorsGrid,
  MentorsWrap,
} from "../../css/StyledComponents";
import MentorCard from "./MentorCard";
import mentorsData from "../../assets/mentors.json";
import recentMentorsData from "../../assets/recent-mentors.json";

const MentorsList = () => {
  return (
    <Container>
      <Section>
        <Title>Recent Mentors</Title>
        <MentorsGrid>
          {recentMentorsData.map((mentor) => (
            <MentorCard key={mentor.id} mentor={mentor} />
          ))}
        </MentorsGrid>
      </Section>
      <Section>
        <Title>Mentors</Title>
        <MentorsWrap>
          {mentorsData.map((mentor) => (
            <MentorCard key={mentor.id} mentor={mentor} />
          ))}
        </MentorsWrap>
      </Section>
    </Container>
  );
};

export default MentorsList;
