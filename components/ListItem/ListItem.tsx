import { Card, Text, Button, Group } from '@mantine/core';
import React from 'react';

export default function ItemCard() {
    return (
        <Card mt={20} shadow="sm" p="lg" radius="md" withBorder>
            <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>Norway Fjord Adventures</Text>
            </Group>

            <Text size="sm" color="dimmed">
                With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                activities on and around the fjords of Norway
            </Text>

            <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                Book classic tour now
            </Button>
        </Card>
    );
}