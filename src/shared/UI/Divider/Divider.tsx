import { BoxComponent } from '@/shared/assets';
import { Icon } from '../Icon';
import { HStack } from '../Stack';
import cls from './Divider.module.scss';

export const Divider = () => {
    return (
        <HStack className={cls.Divider} gap="34" align="center">
            <span className={cls.Divider__line} />
            <div>
                <Icon Svg={BoxComponent} />
            </div>
            <span className={cls.Divider__line} />
        </HStack>
    );
};
