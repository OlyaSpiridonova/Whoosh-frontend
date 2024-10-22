import { MouseEventHandler } from 'react';
import { VStack } from '../Stack';
import cls from './Popup.module.scss';

interface PopupProps {
    list: string[];
    onChoose: (item: string) => MouseEventHandler<HTMLDivElement>;
}

export const Popup = (props: PopupProps) => {
    const { list, onChoose } = props;

    return (
        <VStack className={cls.Popup} gap="16">
            {list.map((listItem) => (
                <div
                    key={listItem}
                    className={cls.Popup__item}
                    onClick={onChoose(listItem)}
                >
                    {listItem}
                </div>
            ))}
        </VStack>
    );
};
