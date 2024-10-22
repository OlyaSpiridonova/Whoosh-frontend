import { ReactNode, useState } from 'react';
import cls from './Tooltip.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '../Icon';
import { Button } from '../Button';

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, 'onClick'>;
interface TooltipProps {
    className?: string;
    icon: React.FC<SvgProps>;
    text?: string;
}
export const Tooltip = ({ className, icon, text }: TooltipProps) => {
    const [isActive, setIsActive] = useState(false);

    const toggleActive = () => {
        setIsActive((prev) => !prev);
    };

    return (
        <div className={classNames(cls.Tooltip, {}, [className])}>
            <div
                className={classNames(cls.Tooltip__icon, {
                    [cls.active]: isActive,
                })}
                onMouseEnter={toggleActive}
                onMouseLeave={toggleActive}
            >
                <Icon Svg={icon} />
            </div>
            {isActive && <div className={cls.Tooltip__text}>{text}</div>}
        </div>
    );
};
