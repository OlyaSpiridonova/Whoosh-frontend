import React, { useCallback, useRef } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Left, Right } from '@/shared/assets';
import cls from './Slider.module.scss';
import { Icon } from '../Icon';
import { Button } from '../Button';

interface SliderProps {
    icons: {
        id: number;
        icon: string;
    }[];
}

export const Slider: React.FC<SliderProps> = ({ icons }) => {
    const sliderRef = useRef<SwiperRef | null>(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    return (
        <div className={cls.Slider}>
            <Button
                onClick={handlePrev}
                className={cls.navButton}
                theme="clear"
            >
                <Icon Svg={Left} />
            </Button>

            <Swiper
                ref={sliderRef}
                modules={[Navigation, Pagination]}
                slidesPerView={6}
                navigation
                style={{ maxWidth: '1024px', margin: '54px' }}
            >
                {icons.map((icon, index) => (
                    <SwiperSlide key={index} style={{ minWidth: '188px' }}>
                        <img src={icon.icon} alt="icon" />
                    </SwiperSlide>
                ))}
            </Swiper>

            <Button
                onClick={handleNext}
                className={cls.navButton}
                theme="clear"
            >
                <Icon Svg={Right} />
            </Button>
        </div>
    );
};
