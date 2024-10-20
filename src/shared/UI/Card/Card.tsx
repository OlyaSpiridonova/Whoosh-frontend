import { memo, ReactElement, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '../Text';
import { HStack, VStack } from '../Stack';
import cls from './Card.module.scss';

interface CardProps {
    className?: string;
    title: string;
    icon: ReactElement;
    chilren?: ReactNode;
    description: string;
}

export const Card = memo((props: CardProps) => {
    const { className, title, chilren, icon, description } = props;
    return (
        <div className={classNames(cls.Card, {}, [className])}>
            <VStack gap="36">
                <VStack gap="17">
                    <Text text={title} size="size_h4" />
                    <HStack gap="8">
                        <div className={cls.Card__icon}>{icon}</div>
                        {chilren}
                    </HStack>
                </VStack>
                <Text text={description} size="size_m" theme="normal" />
            </VStack>
        </div>
    );
});
