import { memo } from 'react';
import { LocationComponent } from '@/entities/Location';
import { Input } from '@/shared/UI/Input';
import { Button } from '@/shared/UI/Button';
import { HStack } from '@/shared/UI/Stack';
import { Icon } from '@/shared/UI/Icon';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    LogoComponent,
    SearchComponent,
    LockComponent,
    ProfileComponent,
    MenuComponent,
    MenuCloseComponent,
} from '@/shared/assets';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
    onOpenSidebar: () => void;
    isOpenSidebar: boolean;
}

export const Navbar = memo(
    ({ className, onOpenSidebar, isOpenSidebar }: NavbarProps) => {
        return (
            <>
                <header
                    className={classNames(cls.Navbar__desktop, {}, [className])}
                >
                    <HStack gap="66">
                        <Icon Svg={LogoComponent} />
                        <LocationComponent />
                    </HStack>
                    <Input
                        placeholder="Track a Package"
                        addonRight={<Icon Svg={SearchComponent} />}
                    />
                    <HStack gap="36">
                        <Button theme="clear">Send a Parcel</Button>
                        <Button theme="clear">Become a Courier</Button>
                        <Button theme="circle">
                            <Icon Svg={LockComponent} />
                        </Button>
                    </HStack>
                </header>

                <header
                    className={classNames(cls.Navbar__mobile, {}, [className])}
                >
                    <HStack gap="16" justify="between" max>
                        <Button theme="clear">
                            <Icon Svg={ProfileComponent} />
                        </Button>
                        <Icon Svg={LogoComponent} />
                        <Button
                            className={classNames(cls.Navbar__mobile_btn)}
                            theme="clear"
                            onClick={onOpenSidebar}
                        >
                            <Icon
                                Svg={
                                    isOpenSidebar
                                        ? MenuCloseComponent
                                        : MenuComponent
                                }
                            />
                        </Button>
                    </HStack>
                </header>
            </>
        );
    },
);
