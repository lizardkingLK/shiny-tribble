import { Input } from '@mantine/core';
import { IconSearch } from '@tabler/icons';
import useStyles from './Search.styles';

export default function Search() {
    const { classes } = useStyles();

    return (
        <Input
            className={classes.input}
            icon={<IconSearch />}
            placeholder="Search..."
        />
    );
}