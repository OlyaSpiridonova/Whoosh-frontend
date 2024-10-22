import { memo } from 'react';
import cls from './OurParters.module.scss';
import { Icon } from '@/shared/UI/Icon';
import {
    BoxComponent,
    BagMinComponent,
    AlvaComponent,
    TendoComponent,
    FagorComponent,
    RadioShackComponent,
    GuitarCenterComponent,
} from '@/shared/assets';
import { HStack, VStack } from '@/shared/UI/Stack';
import { Text } from '@/shared/UI/Text';
import { Button } from '@/shared/UI/Button';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Divider } from '@/shared/UI/Divider/Divider';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export const OurParters = memo(() => {
    const PartnersData = [
        {
            id: 1,
            name: 'Alva',
            icon: AlvaComponent,
        },
        {
            id: 2,
            name: 'Tendo',
            icon: TendoComponent,
        },
        {
            id: 3,
            name: 'Fagor',
            icon: FagorComponent,
        },
        {
            id: 4,
            name: 'RadioShack',
            icon: RadioShackComponent,
        },
        {
            id: 5,
            name: 'Guitar Center',
            icon: GuitarCenterComponent,
        },
        {
            id: 6,
            name: 'Alva',
            icon: AlvaComponent,
        },
        {
            id: 7,
            name: 'Tendo',
            icon: TendoComponent,
        },
        {
            id: 8,
            name: 'Fagor',
            icon: FagorComponent,
        },
        {
            id: 9,
            name: 'RadioShack',
            icon: RadioShackComponent,
        },
        {
            id: 10,
            name: 'Guitar Center',
            icon: GuitarCenterComponent,
        },
    ];

    return (
        <div className={cls.OurParters}>
            <Divider />
            <Button
                className={classNames(cls.OurParters__btn)}
                addonLeft={<Icon Svg={BagMinComponent} />}
                theme="outline"
            >
                Let's collaborate
            </Button>

            <VStack
                className={classNames(cls.OurParters__content)}
                gap="80"
                align="center"
                justify="center"
            >
                <HStack className={classNames(cls.OurParters__text)}>
                    <Text text="Our Partners" size="size_l" />
                </HStack>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={5}
                    centeredSlides={true}
                    navigation
                    style={{ maxWidth: '1100px' }}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    loop={true}
                >
                    {PartnersData.map((partner) => (
                        <SwiperSlide key={partner.id}>
                            <Icon
                                key={partner.id}
                                name={partner.name}
                                Svg={partner.icon}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </VStack>
        </div>
    );
});
