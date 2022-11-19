import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontSize: 24,
    fontWeight: 900,

    [theme.fn.smallerThan('md')]: {
      fontSize: 50,
    },
  },
}));
