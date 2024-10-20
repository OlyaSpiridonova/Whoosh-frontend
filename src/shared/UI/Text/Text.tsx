import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export type TextTheme =
    | 'primary'
    | 'error'
    | 'accent'
    | 'normal'
    | 'placeholder';

export type TextAlign = 'right' | 'left' | 'center';

export type TextSize =
    | 'size_xs'
    | 'size_s'
    | 'size_m'
    | 'size_l'
    | 'size_h4'
    | 'size_ph';

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
    bold?: boolean;
    'data-testid'?: string;
}

type HeaderTagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    size_s: 'h1',
    size_m: 'h2',
    size_l: 'h3',
    size_h4: 'h4',
    size_xs: 'h5',
    size_ph: 'h6',
};

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        theme = 'primary',
        align = 'left',
        size = 'size_m',
        'data-testid': dataTestId = 'Text',
        bold,
    } = props;

    const HeaderTag = mapSizeToHeaderTag[size];

    const additionalClasses = [className, cls[theme], cls[align], cls[size]];

    return (
        <div
            className={classNames(
                cls.Text,
                { [cls.bold]: bold },
                additionalClasses,
            )}
        >
            {title && <HeaderTag className={cls.title}>{title}</HeaderTag>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
