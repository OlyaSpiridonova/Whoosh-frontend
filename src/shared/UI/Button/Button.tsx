import {
    ButtonHTMLAttributes,
    ForwardedRef,
    ReactElement,
    ReactNode,
    forwardRef,
} from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export type ButtonTheme =
    | 'clear'
    | 'outline'
    | 'filled'
    | 'circle'
    | 'filledBlue';
export type ButtonColor = 'normal' | 'error' | 'success' | 'blue';
export type ButtonSize = 'size_m' | 'size_l' | 'size_xl' | 'size_h5';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    children: ReactNode;
    fullWidth?: boolean;
    color?: ButtonColor;
    addonLeft?: ReactElement;
    addonRight?: ReactElement;
    active?: boolean;
}

export const Button = forwardRef(
    (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
        const {
            className,
            children,
            theme = 'outline',
            square,
            disabled,
            size = 'size_m',
            fullWidth,
            addonLeft,
            addonRight,
            color = 'normal',
            active = false,
            ...otherProps
        } = props;

        const mods: Mods = {
            [cls.square]: square,
            [cls.disabled]: disabled,
            [cls.fullWidth]: fullWidth,
            [cls.withAddon]: Boolean(addonLeft) || Boolean(addonRight),
            [cls.active]: Boolean(active),
        };

        return (
            <button
                type="button"
                className={classNames(cls.Button, mods, [
                    className,
                    cls[theme],
                    cls[size],
                    cls[color],
                    active ? cls.active : '',
                    ,
                ])}
                disabled={disabled}
                {...otherProps}
                ref={ref}
            >
                <div className={cls.addonLeft}>{addonLeft}</div>
                {children}
                <div className={cls.addonRight}>{addonRight}</div>
            </button>
        );
    },
);
