import { Anchor, Container, Grid, Text, Title } from '@mantine/core';
import useStyles from './Navbar.styles';
import { ColorSchemeToggle } from '../ThemeToggle/ThemeToggle';
import Search from '../Search/Search';

export default function Navbar() {
    const { classes } = useStyles();

    return (
        <Container size={'xl'} my={20}>
            <Grid justify={'space-between'} align={'center'}>
                <Grid.Col span={3}>
                    <Anchor href="/" underline={false}>
                        <Text className={classes.anchor}>
                            AC420
                        </Text>
                    </Anchor>
                </Grid.Col>

                <Grid.Col span={8}>
                    <Search />
                </Grid.Col>

                <Grid.Col span={1}>
                    <Grid justify={'flex-end'} align={'center'}>
                        <ColorSchemeToggle />
                    </Grid>
                </Grid.Col>
            </Grid >
        </Container>
    );
}