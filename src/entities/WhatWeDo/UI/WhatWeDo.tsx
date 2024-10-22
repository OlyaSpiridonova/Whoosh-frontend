import { memo } from 'react';
import { Text } from '@/shared/UI/Text';
import City from '@/shared/assets/icons/City.png';
import cls from './WhatWeDo.module.scss';
import { HStack, VStack } from '@/shared/UI/Stack';
import { Button } from '@/shared/UI/Button';
import {
    CalculatorComponent,
    PaperWorkComponent,
    PaymentComponent,
} from '@/shared/assets';
import { link } from 'fs';
import { CardPayment } from '../model/types';
import { Icon } from '@/shared/UI/Icon';
import { Link } from 'react-router-dom';

export const WhatWeDo = memo(() => {
    const cardData: CardPayment[] = [
        {
            id: 1,
            icon: CalculatorComponent,
            title: 'Online',
            link: 'https://google.com',
            linkText: 'calculation',
            description:
                'Instant calculation of the cost in the order form, the price is updated in the process of filling out the form',
        },
        {
            id: 2,
            icon: PaperWorkComponent,
            title: 'Minimum paperwork',
            description:
                'You can place an order for courier or freight delivery without registration and contract.',
        },
        {
            id: 3,
            icon: PaymentComponent,
            title: 'Convenient payment',
            description:
                'You can pay for delivery by card or in cash at any of the order addresses. For legal entities non-cash is available.',
        },
    ];

    return (
        <div className={cls.WhatWeDo}>
            <img src={City} alt="city" className={cls.WhatWeDo__city} />
            <div className={cls.WhatWeDo__bg}>
                <VStack gap="39" align="center" justify="center">
                    <VStack gap="29" align="center" justify="center">
                        <Text text="What we do" size="size_l" />
                        <Text
                            className={cls.WhatWeDo__text}
                            text="Express courier service in the city. We are a reliable logistics partner for delivery services for online stores and restaurants!"
                            size="size_h3"
                            theme="normal"
                            align="center"
                        />
                    </VStack>

                    <VStack gap="36" align="center" justify="center">
                        <HStack
                            gap="50"
                            wrap="wrap"
                            align="center"
                            justify="center"
                        >
                            {cardData.map((card) => (
                                <div
                                    key={card.id}
                                    className={cls.WhatWeDo__card}
                                >
                                    <VStack
                                        gap="21"
                                        className={cls.WhatWeDo__card_content}
                                    >
                                        <VStack
                                            gap="31"
                                            className={
                                                cls.WhatWeDo__card_header
                                            }
                                        >
                                            <div
                                                className={
                                                    cls.WhatWeDo__card_icon
                                                }
                                            >
                                                <Icon Svg={card.icon} />
                                            </div>
                                            <HStack gap="8">
                                                <Text
                                                    text={card.title}
                                                    size="size_h4"
                                                />
                                                {card.link && (
                                                    <Link
                                                        className={
                                                            cls.WhatWeDo__card_link
                                                        }
                                                        to={card.link}
                                                        target="_blank"
                                                    >
                                                        {card.linkText}
                                                    </Link>
                                                )}
                                            </HStack>
                                        </VStack>
                                        <Text
                                            className={cls.WhatWeDo__card_descr}
                                            text={card.description}
                                            theme="normal"
                                        />
                                    </VStack>
                                </div>
                            ))}
                        </HStack>

                        <Button theme="filledYellow" size="size_h5">
                            Get started!
                        </Button>
                    </VStack>
                </VStack>
            </div>
        </div>
    );
});
