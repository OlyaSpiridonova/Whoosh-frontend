import { memo } from 'react';
import cls from './SecondSection.module.scss';
import { HStack, VStack } from '@/shared/UI/Stack';
import { Text } from '@/shared/UI/Text';
import {
    MotoComponent,
    SupportComponent,
    RouteComponent,
    BagComponent,
} from '@/shared/assets';
import { Icon } from '@/shared/UI/Icon';
import { CardData } from '../model/types';
import { Card } from '@/shared/UI/Card';

export const SecondSection = memo(() => {
    const cardData: CardData[] = [
        {
            id: 1,
            title: 'Become a Courier',
            icon: <Icon Svg={MotoComponent} />,
            chilren: <Icon Svg={RouteComponent} />,
            description:
                'You choose a schedule. You decide how much and when to earn. Earnings from day one',
        },
        {
            id: 2,
            title: 'Help & Support',
            icon: <Icon Svg={SupportComponent} />,
            description:
                'Door-to-door delivery \nin 90 minutes or at your convenience',
        },
        {
            id: 3,
            title: 'Affiliate Program',
            icon: <Icon Svg={BagComponent} />,
            description:
                'Use our service and feel \nnew quality of this traditional service!',
        },
    ];

    return (
        <div className={cls.SecondSection}>
            <VStack gap="39" align="center">
                <VStack gap="29" align="center">
                    <Text
                        text="Express delivery market revolution"
                        size="size_l"
                        align="center"
                    />
                    <Text
                        className={cls.SecondSection__text}
                        text="Express courier service in the city. We are a reliable logistics partner for delivery  services for online stores and restaurants!"
                        size="size_h3"
                        align="center"
                        theme="normal"
                    />
                </VStack>

                <HStack gap="50" wrap="wrap" align="center" justify="center">
                    {cardData.map((card) => (
                        <Card
                            title={card.title}
                            icon={card.icon}
                            chilren={card.chilren}
                            description={card.description}
                            key={card.title}
                        />
                    ))}
                </HStack>
            </VStack>
        </div>
    );
});
