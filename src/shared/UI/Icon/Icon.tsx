import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, 'onClick'>;
interface IconBaseProps extends SvgProps {
    className?: string;
    Svg: React.FC<SvgProps>;
}

interface NotСlickable extends IconBaseProps {
    clickable?: false;
}

interface Сlickable extends IconBaseProps {
    clickable: true;
    onClick: () => void;
}

type IconProps = NotСlickable | Сlickable;

export const Icon = memo((props: IconProps) => {
    const {
        className,
        Svg,
        width = 32,
        height = 32,
        clickable,
        ...otherProps
    } = props;

    const icon = (
        <Svg
            className={classNames(cls.Icon, {}, [className])}
            width={width}
            height={height}
            {...otherProps}
        />
    );

    if (clickable) {
        return (
            <button
                type="button"
                className={cls.button}
                onClick={props.onClick}
                style={{ width, height }}
            >
                {icon}
            </button>
        );
    }

    return icon;
});
