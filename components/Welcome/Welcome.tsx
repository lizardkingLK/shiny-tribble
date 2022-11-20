import { Title, Text, Anchor } from '@mantine/core';
import Navbar from '../Navbar/Navbar';
import useStyles from './Welcome.styles';

export function Welcome() {
  const { classes } = useStyles();

  return (
    <>
      <Navbar />
      <Title className={classes.title} align="center" mt={100}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span">
          AC420
        </Text>
      </Title>
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        This is the preview of the site.{' '}
        <Anchor href="/home" size="lg">
          Sign Up
        </Anchor>{' '}here to start the awesomeness
      </Text>
    </>
  );
}
