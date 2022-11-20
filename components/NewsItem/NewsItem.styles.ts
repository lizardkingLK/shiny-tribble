import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  heading: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontSize: 24,
  },
  count: {
    color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.black,
    fontSize: 18,
    fontWeight: 700
  }
}));
