import { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { Icon } from '@/shared/UI/Icon';
import { LogoComponent } from '@/shared/assets/icons/LogoComponent';
import { PinComponent } from '@/shared/assets/icons/PinComponent';
import { LocationComponent } from '@/entities/Location';
import { Input } from '@/shared/UI/Input';
import { SearchComponent } from '@/shared/assets/icons/Search';
import { Button } from '@/shared/UI/Button';
import { LockComponent } from '@/shared/assets/icons/Lock';
import { HStack } from '@/shared/UI/Stack';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <HStack gap="48">
                <Icon Svg={LogoComponent} />
                <LocationComponent />
            </HStack>
            <Input
                placeholder="Track a Package"
                addonRight={<Icon Svg={SearchComponent} />}
            />
            <HStack gap="32">
                <Button theme="clear">Send a Parcel</Button>
                <Button theme="clear">Become a Courier</Button>
                <Button theme="circle">
                    <Icon Svg={LockComponent} />
                </Button>
            </HStack>
        </header>
    );
});
