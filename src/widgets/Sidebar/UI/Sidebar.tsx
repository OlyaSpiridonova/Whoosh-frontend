import { memo, useMemo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { LocationComponent } from '@/entities/Location';
import { HStack, VStack } from '@/shared/UI/Stack';
import { Button } from '@/shared/UI/Button';
import { CloseComponent, SearchComponent } from '@/shared/assets';
import { Icon } from '@/shared/UI/Icon';
import cls from './Sidebar.module.scss';
import { Input } from '@/shared/UI/Input';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const buttonsData = [
        {
            id: 1,
            name: 'Send a Parcel',
        },
        {
            id: 2,
            name: 'Become a Courier',
        },
        {
            id: 3,
            name: 'Affiliate Program',
        },
        {
            id: 4,
            name: 'Help & Support',
        },
    ];
    return (
        <VStack className={classNames(cls.Sidebar, {}, [className])} gap="44">
            <VStack gap="40">
                <LocationComponent />
                <Input
                    placeholder="Track a Package"
                    addonRight={<Icon Svg={SearchComponent} />}
                    size="l"
                />
            </VStack>

            <VStack gap="24">
                {buttonsData.map(({ id, name }) => (
                    <Button
                        key={id}
                        type="button"
                        className={cls.button}
                        theme="clear"
                    >
                        {name}
                    </Button>
                ))}
            </VStack>

            <Button className={cls.Sidebar__button} theme="filledBlue">
                Take a complex order
            </Button>
        </VStack>
    );
});
