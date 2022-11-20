import { Button } from '@mantine/core';
import useStyles from './TopicItem.styles';

export default function TopicItem({ topicTitle }: { topicTitle: String }) {
    const { classes } = useStyles();

    return (
        <Button variant='subtle' className={classes.button} mt={20} fullWidth>
            {topicTitle}
        </Button>
    );
}