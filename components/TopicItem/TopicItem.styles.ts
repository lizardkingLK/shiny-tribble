import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  button: {
    color: theme.colorScheme === 'dark' ? theme.white  : theme.colors.blue[4],
    display: 'flex',
    justifyContent: 'flex-start',
    fontSize: 14,
  },
}));
