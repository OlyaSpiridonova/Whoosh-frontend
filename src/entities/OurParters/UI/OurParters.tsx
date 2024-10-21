import { memo } from 'react';
import cls from './OurParters.module.scss';
import { Icon } from '@/shared/UI/Icon';
import {
    BoxComponent,
    BagMinComponent,
    AlvaComponent,
    TendoComponent,
    FagorComponent,
    RadioShackComponent,
    GuitarCenterComponent,
} from '@/shared/assets';
import { HStack, VStack } from '@/shared/UI/Stack';
import { Text } from '@/shared/UI/Text';
import { Button } from '@/shared/UI/Button';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Divider } from '@/shared/UI/Divider/Divider';

export const OurParters = memo(() => {
    const PartnersData = [
        {
            id: 1,
            name: 'Alva',
            icon: AlvaComponent,
        },
        {
            id: 2,
            name: 'Tendo',
            icon: TendoComponent,
        },
        {
            id: 3,
            name: 'Fagor',
            icon: FagorComponent,
        },
        {
            id: 4,
            name: 'RadioShack',
            icon: RadioShackComponent,
        },
        {
            id: 5,
            name: 'Guitar Center',
            icon: GuitarCenterComponent,
        },
    ];

    return (
        <div className={cls.OurParters}>
            <Divider />
            <Button
                className={classNames(cls.OurParters__btn)}
                addonLeft={<Icon Svg={BagMinComponent} />}
                theme="outline"
            >
                Let's collaborate
            </Button>

            <VStack gap="80" align="center" justify="center">
                <HStack className={classNames(cls.OurParters__text)}>
                    <Text text="Our Partners" size="size_l" />
                </HStack>

                <HStack
                    className={classNames(cls.OurParters__logo)}
                    justify="between"
                    align="center"
                    gap="16"
                    max
                    wrap="wrap"
                >
                    {PartnersData.map((partner) => (
                        <Icon
                            key={partner.id}
                            name={partner.name}
                            Svg={partner.icon}
                        />
                    ))}
                </HStack>
            </VStack>
        </div>
    );
});
