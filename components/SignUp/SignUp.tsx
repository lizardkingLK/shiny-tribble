import { Title, Text, Anchor } from '@mantine/core';
import useStyles from './SignUp.styles';

export function SignUp() {
  const { classes } = useStyles();

  return (
    <>
      <Title className={classes.title} align="center" mt={100}>
        <Text inherit variant="text" component="span">
          Sign Up
        </Text>
      </Title>
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        {/* This is the preview of the site.{' '}
                <Anchor href="/signup" size="lg">
                    Sign Up
                </Anchor>{' '}here to start the awesomeness */}
      </Text>
    </>
  );
}
