import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  input: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    marginRight: 10,
    minWidth: '100%'
  },
}));
