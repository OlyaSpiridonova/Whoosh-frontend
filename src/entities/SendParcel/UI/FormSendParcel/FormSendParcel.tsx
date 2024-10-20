import { memo, useState } from 'react';
import { HStack, VStack } from '@/shared/UI/Stack';
import {
    CloseComponent,
    PointComponent,
    WayComponent,
    YelowLocationComponent,
} from '@/shared/assets';
import { Input } from '@/shared/UI/Input';
import { Icon } from '@/shared/UI/Icon';
import { Button } from '@/shared/UI/Button';

export const FormSendParcel = memo(() => {
    const [pickupLocation, setPickupLocation] = useState('');
    const [dropLocation, setDropLocation] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!pickupLocation || !dropLocation) return;
        console.log('Pickup Location:', pickupLocation);
        console.log('Drop Location:', dropLocation);
        handleClear();
    };

    const handleClear = () => {
        setPickupLocation('');
        setDropLocation('');
    };

    const onChangePickupLocation = (value: string) => {
        setPickupLocation(value);
    };

    const onChangeDropLocation = (value: string) => {
        setDropLocation(value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <VStack gap="40">
                <HStack gap="16">
                    <VStack gap="8" align="center">
                        <Icon Svg={PointComponent} />
                        <Icon Svg={WayComponent} />
                        <Icon Svg={YelowLocationComponent} />
                    </VStack>

                    <VStack gap="37">
                        <Input
                            label="Pickup location"
                            placeholder="location"
                            theme="accent"
                            value={pickupLocation}
                            onChange={onChangePickupLocation}
                        />
                        <Input
                            label="Drop location"
                            placeholder="location"
                            theme="accent"
                            value={dropLocation}
                            onChange={onChangeDropLocation}
                        />
                    </VStack>
                </HStack>
                <VStack gap="16">
                    <Button theme="filledBlue" size="size_h5" type="submit">
                        Order
                    </Button>
                    <Button
                        theme="clear"
                        addonLeft={<Icon Svg={CloseComponent} />}
                        fullWidth
                        onClick={handleClear}
                    >
                        Clear All
                    </Button>
                </VStack>
            </VStack>
        </form>
    );
});
