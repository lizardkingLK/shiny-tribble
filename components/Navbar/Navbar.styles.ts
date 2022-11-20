import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  anchor: {
    color: theme.colorScheme === 'dark' ? theme.colors.yellow[4]  : theme.colors.blue[4] ,
    fontSize: 24,
    fontWeight: 900,
    fontFamily: 'Roboto Mono',    
  },
}));
