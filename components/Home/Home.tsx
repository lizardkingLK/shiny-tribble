import { Container, Grid, Text, Title, } from '@mantine/core';
import NewsItem from '../NewsItem/NewsItem';
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
                    <Text>News</Text>
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