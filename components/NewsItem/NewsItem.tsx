import { ActionIcon, Grid } from '@mantine/core';
import { IconChevronDown, IconChevronUp } from '@tabler/icons';

const ButtonTheme = (theme: any) => {
    return {
        backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6],
    }
}

export default function ItemCard() {

    return (
        <Grid>
            <Grid.Col span={1}>
                <ActionIcon
                    onClick={() => console.log('clicked')}
                    size="lg"
                    sx={(theme) => ButtonTheme(theme)}
                >
                    <IconChevronUp size={20} stroke={1.5} />
                </ActionIcon>
                <ActionIcon
                    onClick={() => console.log('clicked')}
                    size="lg"
                    sx={(theme) => ButtonTheme(theme)}
                >
                    <IconChevronDown size={20} stroke={1.5} />
                </ActionIcon>
            </Grid.Col>
            <Grid.Col span={2}>Image</Grid.Col>
            <Grid.Col span={9}>Description</Grid.Col>
        </Grid>
    );
}