import formatDistanceToNow from 'date-fns/esm/fp/format';
import {
  Card,
  CardBody,
  CardHeader,
  CardPoster,
  CardText,
  CardTitle,
  CardFooter,
  Tag,
  Avatar,
  UserBox,
  UserInfo,
  UserName,
  Date as DateComponent,
} from './BlogCard.styled';

export const BlogCard = (props) => {
  const {name, postedAt, poster, tag, title, description, avatar} = props
  return <Card>
  <CardHeader>
    <CardPoster
      src={poster}
      alt={tag}
    />
  </CardHeader>
  <CardBody>
      <Tag>{tag}</Tag>
    <CardTitle>{title}</CardTitle>
    <CardText>
      {description}
    </CardText>
  </CardBody>
  <CardFooter>
    <UserBox>
        <Avatar src={avatar} alt={name } />
      <UserInfo>
        <UserName>{name}</UserName>
        <DateComponent>{formatDistanceToNow(new Date(postedAt))}</DateComponent>
      </UserInfo>
    </UserBox>
  </CardFooter>
</Card>
};
