import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column';
export type FlexWrap = 'nowrap' | 'wrap';
export type FlexGap =
    | '4'
    | '7'
    | '8'
    | '9'
    | '16'
    | '17'
    | '20'
    | '22'
    | '24'
    | '29'
    | '30'
    | '34'
    | '36'
    | '37'
    | '39'
    | '40'
    | '48'
    | '50'
    | '66'
    | '72'
    | '80';

const justifyClasses: Record<FlexJustify, string> = {
    start: cls.justifyStart,
    center: cls.justifyCenter,
    end: cls.justifyEnd,
    between: cls.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
    start: cls.alignStart,
    center: cls.alignCenter,
    end: cls.alignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
    row: cls.directionRow,
    column: cls.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
    4: cls.gap4,
    7: cls.gap7,
    8: cls.gap8,
    9: cls.gap9,
    16: cls.gap16,
    17: cls.gap17,
    29: cls.gap29,
    20: cls.gap20,
    22: cls.gap22,
    24: cls.gap24,
    30: cls.gap30,
    34: cls.gap34,
    36: cls.gap36,
    37: cls.gap37,
    39: cls.gap39,
    40: cls.gap40,
    48: cls.gap48,
    50: cls.gap50,
    66: cls.gap66,
    72: cls.gap72,
    80: cls.gap80,
};

type DivProps = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>;

export interface FlexProps extends DivProps {
    className?: string;
    children: ReactNode;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction?: FlexDirection;
    gap?: FlexGap;
    max?: boolean;
    wrap?: FlexWrap;
}

export const Flex = (props: FlexProps) => {
    const {
        className,
        children,
        justify = 'start',
        align = 'center',
        direction = 'row',
        gap,
        max,
        wrap = 'nowrap',
        ...otherProps
    } = props;

    const classes = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gap && gapClasses[gap],
        cls[wrap],
    ];

    const mods: Mods = {
        [cls.max]: max,
    };

    return (
        <div className={classNames(cls.Flex, mods, classes)} {...otherProps}>
            {children}
        </div>
    );
};
