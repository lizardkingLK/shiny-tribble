import { Input } from '@mantine/core';
import { IconAt } from '@tabler/icons';

export default function TextInput() {
    return (
        <Input
            icon={<IconAt />}
            placeholder="Your email"
        />
    );
}