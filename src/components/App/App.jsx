import {
  BlogCard,
  Container,
  Section,
  Heading,
  Statistics,
  ForbesList,
  CryptoHistory,
} from 'components';

import blogCardData from '../../data/article.json'
import forbesData from '../../data/forbes.json'

// const {name, postedAt, poster, tag, title, description, avatar} = blogCardData

export const App = () => {
  return (
    <Section>
      <Container>
        <Heading marginBottom="50px" textAlign="center">
          Task 1
        </Heading>
        {/* <BlogCard name={ name} postedAt={postedAt} poster={poster} tag={tag} title={title} description={description} avatar={avatar} /> */}

        <BlogCard {...blogCardData} />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 2
        </Heading>
        <Statistics />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 3
        </Heading>
        <ForbesList list={forbesData} />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 4
        </Heading>
        <CryptoHistory />
      </Container>
    </Section>
  );
};
