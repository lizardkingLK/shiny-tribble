import { ActionIcon, Badge, DefaultMantineColor, Grid, Group, Image, Text } from '@mantine/core';
import { IconChevronDown, IconChevronUp } from '@tabler/icons';
import useStyles from './NewsItem.styles';

const ButtonTheme = (theme: any) => {
    return {
        backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6],
    }
}

const NewsItemImage = () => {
    return (
        <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            <Image
                radius="md"
                src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                height={120}
                alt="Norway"
            />
        </div>
    );
}

const NewsBadge = ({ badgeContent, badgeColor }: { badgeContent: String, badgeColor: DefaultMantineColor | undefined }) => {
    return (
        <Badge color={badgeColor}>{badgeContent}</Badge>
    );
}

export default function NewsItem() {
    const { classes } = useStyles();

    return (
        <Grid align={'space-between'} mt={20}>
            <Grid.Col span={1}>
                <ActionIcon
                    onClick={() => console.log('clicked')}
                    size='lg'
                    sx={(theme) => ButtonTheme(theme)}
                >
                    <IconChevronUp size={20} stroke={1.5} />
                </ActionIcon>
                <Text my={10} className={classes.count}>123</Text>
                <ActionIcon
                    onClick={() => console.log('clicked')}
                    size='lg'
                    sx={(theme) => ButtonTheme(theme)}
                >
                    <IconChevronDown size={20} stroke={1.5} />
                </ActionIcon>
            </Grid.Col>
            <Grid.Col span={2}>
                <NewsItemImage />
            </Grid.Col>
            <Grid.Col span={9}>
                <Group>
                    <Text className={classes.heading}>
                        Lorem Ipsum is simply dummy text
                    </Text>
                    <NewsBadge badgeColor={'red'} badgeContent={'Country'} />
                    <NewsBadge badgeColor={'cyan'} badgeContent={'Beautiful'} />
                </Group>
                <Text>
                    of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                </Text>
            </Grid.Col>
        </Grid>
    );
}