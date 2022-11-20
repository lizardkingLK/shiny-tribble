import { Container, Grid, Title, } from '@mantine/core';
import NewsItem from '../NewsItem/NewsItem';
import TopicItem from '../TopicItem/TopicItem';
import useStyles from './Home.styles';

export default function Navbar() {
    const { classes } = useStyles();

    return (
        <Container size={'xl'} my={20}>
            <Grid justify={'space-between'} align={'flex-start'}>
                <Grid.Col span={3}>
                    <Title className={classes.title}>
                        Topics
                    </Title>
                    <hr />
                    <TopicItem topicTitle={'Countries'} />
                    <TopicItem topicTitle={'Cultures'} />
                    <TopicItem topicTitle={'Environments'} />
                    <TopicItem topicTitle={'Survival'} />
                    <TopicItem topicTitle={'Rainings'} />
                    <TopicItem topicTitle={'Days'} />
                    <TopicItem topicTitle={'Fastings'} />
                </Grid.Col>
                <Grid.Col span={9}>
                    <Title className={classes.title}>
                        Trending
                    </Title>
                    <hr />
                    <NewsItem />
                    <NewsItem />
                </Grid.Col>
            </Grid >
        </Container >
    );
}