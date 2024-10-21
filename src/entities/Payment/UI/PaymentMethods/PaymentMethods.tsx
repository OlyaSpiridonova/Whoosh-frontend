import { memo } from 'react';
import { Slider } from '@/shared/UI/Slider/Slider';
import Amex from '@/shared/assets/icons/amex.png';
import GPay from '@/shared/assets/icons/G-Pay.png';
import Mastercard from '@/shared/assets/icons/mastercard.png';
import Visa from '@/shared/assets/icons/visa.png';
import Sofort from '@/shared/assets/icons/sofort.png';
import UnionPay from '@/shared/assets/icons/union-pay.png';
import cls from './PaymentMethods.module.scss';
import { Text } from '@/shared/UI/Text';

export const PaymentMethods = memo(() => {
    const iconsData = [
        {
            id: 1,
            icon: Amex,
        },
        {
            id: 2,
            icon: GPay,
        },
        {
            id: 3,
            icon: Mastercard,
        },
        {
            id: 4,
            icon: Visa,
        },
        {
            id: 5,
            icon: Sofort,
        },
        {
            id: 6,
            icon: UnionPay,
        },
        {
            id: 7,
            icon: Amex,
        },
        {
            id: 8,
            icon: GPay,
        },
        {
            id: 9,
            icon: Mastercard,
        },
        {
            id: 10,
            icon: Visa,
        },
        {
            id: 11,
            icon: Sofort,
        },
        {
            id: 12,
            icon: UnionPay,
        },
    ];
    return (
        <div className={cls.PaymentMethods}>
            <Text text="Payment methods" size="size_l" align="center" />
            <Slider icons={iconsData} />
        </div>
    );
});
