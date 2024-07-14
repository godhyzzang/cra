import React from "react";
import {
  Card,
  Avatar,
  Name,
  Role,
  Stats,
  StatItem,
  FollowButton,
} from "../../css/StyledComponents";

const MentorCard = ({ mentor }) => {
  return (
    <Card>
      <Avatar src={mentor.image} alt={mentor.name} />
      <Name>{mentor.name}</Name>
      <Role>{mentor.role}</Role>
      <Stats>
        <StatItem>{mentor.tasks} Tasks</StatItem>
        <StatItem>{mentor.reviews} Reviews</StatItem>
        <StatItem>{mentor.rating} ★</StatItem>
      </Stats>
      <FollowButton>Follow</FollowButton>
    </Card>
  );
};

export default MentorCard;
