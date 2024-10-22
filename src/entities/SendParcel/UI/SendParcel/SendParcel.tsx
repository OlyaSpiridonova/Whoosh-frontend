import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    onFootComponent,
    InfoComponent,
    TruckComponent,
    CarComponent,
} from '@/shared/assets';
import { HStack, VStack } from '@/shared/UI/Stack';
import { Text } from '@/shared/UI/Text';
import { Icon } from '@/shared/UI/Icon';
import { Button } from '@/shared/UI/Button';
import { FormSendParcel } from '../FormSendParcel/FormSendParcel';
import cls from './SendParcel.module.scss';

export const SendParcel = memo(() => {
    const [isActive, setIsActive] = useState([false, false, false]);

    const onSetActiveButton = (index: number) => () => {
        setIsActive((prevState) => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    return (
        <div className={classNames(cls.SendParcel)}>
            <VStack gap="34">
                <VStack gap="20">
                    <HStack gap="16">
                        <Text text="Send a Parcel" size="size_h4" />
                        <Icon Svg={InfoComponent} />
                    </HStack>
                    <HStack>
                        <Button
                            className={classNames(cls.SendParcel__button_first)}
                            theme="filled"
                            active={isActive[0]}
                            onClick={onSetActiveButton(0)}
                        >
                            <VStack>
                                <Icon Svg={onFootComponent} />
                                <Text
                                    className={
                                        cls.SendParcel__button_first_text
                                    }
                                    text="up to 10lb"
                                    size="size_xs"
                                    theme={isActive[0] ? 'primary' : 'normal'}
                                />
                            </VStack>
                        </Button>
                        <Button
                            className={classNames(
                                cls.SendParcel__button_second,
                            )}
                            theme="filled"
                            active={isActive[1]}
                            onClick={onSetActiveButton(1)}
                        >
                            <VStack>
                                <Icon Svg={CarComponent} />
                                <Text
                                    className={
                                        cls.SendParcel__button_second_text
                                    }
                                    text="up to 130lb"
                                    size="size_xs"
                                    theme={isActive[1] ? 'primary' : 'normal'}
                                />
                            </VStack>
                        </Button>
                        <Button
                            className={classNames(cls.SendParcel__button_third)}
                            theme="filled"
                            active={isActive[2]}
                            onClick={onSetActiveButton(2)}
                        >
                            <VStack>
                                <Icon Svg={TruckComponent} />
                                <Text
                                    className={
                                        cls.SendParcel__button_third_text
                                    }
                                    text="over 130lb"
                                    size="size_xs"
                                    theme={isActive[2] ? 'primary' : 'normal'}
                                />
                            </VStack>
                        </Button>
                    </HStack>
                </VStack>
                <FormSendParcel />
            </VStack>
        </div>
    );
});
