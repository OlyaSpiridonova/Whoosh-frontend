import { memo } from 'react';
import cls from './ParcelTrack.module.scss';
import { Text } from '@/shared/UI/Text';
import { Input } from '@/shared/UI/Input';
import { SearchBase } from '@/shared/assets';
import { Icon } from '@/shared/UI/Icon';
import { VStack } from '@/shared/UI/Stack';

export const ParcelTrack = memo(() => {
    return (
        <div className={cls.ParcelTrack}>
            <VStack gap="9">
                <Text size="size_h4" text="Track a package" />
                <Input
                    placeholder="Enter code"
                    addonRight={<Icon Svg={SearchBase} />}
                    theme="filled"
                />
            </VStack>
        </div>
    );
});
