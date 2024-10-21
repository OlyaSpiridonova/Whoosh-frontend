import { memo, useState } from 'react';
import cls from './TextSection.module.scss';
import { Divider } from '@/shared/UI/Divider/Divider';
import { Text } from '@/shared/UI/Text';
import { Button } from '@/shared/UI/Button';

export interface TextSectionProps {
    className?: string;
    text: string;
    maxSymbols?: number;
}

export const TextSection = memo((props: TextSectionProps) => {
    const { className, text, maxSymbols = 300 } = props;

    const [isCollapsed, setIsCollapsed] = useState(true);

    const truncatedText = isCollapsed ? `${text.slice(0, maxSymbols)}` : text;

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className={cls.TextSection}>
            <Divider />
            <div className={cls.TextSection__text}>
                <Text text={truncatedText} theme="normal">
                    <Button
                        className={cls.TextSection__wrapper}
                        onClick={toggleCollapse}
                        theme="clear"
                    >
                        <div className={cls.TextSection__btn}>
                            <span className={cls.TextSection__btn_point}></span>
                            <span className={cls.TextSection__btn_point}></span>
                            <span className={cls.TextSection__btn_point}></span>
                        </div>
                    </Button>
                </Text>
            </div>
        </div>
    );
});
