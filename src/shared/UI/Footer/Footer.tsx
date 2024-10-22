import { HStack, VStack } from '../Stack';
import { Text } from '../Text';
import { Icon } from '../Icon';
import {
    SymbolsComponent,
    BlueLocation,
    FacebookComponent,
    VkComponent,
    YoutubeComponent,
    InstaComponent,
    PyroComponent,
    PoliceComponent,
} from '@/shared/assets';
import cls from './Footer.module.scss';

export const Footer = () => {
    const menuData = [
        'About company',
        'Contact',
        'Rules',
        'FAQ',
        'Reviews',
        'Cargo transportation',
        'Tariffs',
    ];

    const servicesData = [
        'Online stores',
        'Legal entity',
        'API Integration',
        'Contract',
        'Jobs',
        'Courier job',
        'The blog',
    ];

    const socialData = [
        {
            id: 1,
            icon: FacebookComponent,
        },
        {
            id: 2,
            icon: VkComponent,
        },
        {
            id: 3,
            icon: YoutubeComponent,
        },
        {
            id: 4,
            icon: InstaComponent,
        },
    ];

    return (
        <VStack className={cls.Footer} gap="24" justify="center" align="center">
            <HStack
                className={cls.Footer__content}
                gap="66"
                justify="center"
                align="start"
                wrap="wrap"
            >
                <div className={cls.Footer__about}>
                    <Text
                        className={cls.Footer__about_title}
                        text="About Whoosh"
                        theme="heading"
                        size="size_hd"
                    />
                    <div className={cls.Footer__about_icon}>
                        <Icon Svg={SymbolsComponent} width={40} height={40} />
                    </div>
                    <Text
                        className={cls.Footer__about_text}
                        text="Express delivery of documents and parcels for organizations, express delivery of correspondence, purchases and other goods"
                        size="size_s"
                        theme="normal"
                    />
                </div>
                <div className={cls.Footer__menu}>
                    <Text text="Menu" theme="heading" size="size_hd" />
                    <hr className={cls.Footer__menu_hr} />
                    <VStack gap="7">
                        {menuData.map((item) => (
                            <Text
                                key={item}
                                text={item}
                                theme="normal"
                                size="size_s"
                            />
                        ))}
                    </VStack>
                </div>
                <div className={cls.Footer__services}>
                    <Text text="Services" theme="heading" size="size_hd" />
                    <hr className={cls.Footer__services_hr} />
                    <VStack gap="7">
                        {servicesData.map((item) => (
                            <Text
                                key={item}
                                text={item}
                                theme="normal"
                                size="size_s"
                            />
                        ))}
                    </VStack>
                </div>
                <div className={cls.Footer__contact}>
                    <Text text="Contact us" theme="heading" size="size_hd" />
                    <hr className={cls.Footer__contact_hr} />
                    <VStack gap="24">
                        <a
                            className={cls.Footer__contact_tel}
                            href="tel:88009345959"
                        >
                            8 800 934 5959
                        </a>

                        <HStack gap="12" align="start">
                            <Icon Svg={BlueLocation} />
                            <Text
                                className={cls.Footer__contact_address}
                                text="2545 W. Diversey Ave. 3rd Floor Chicago, IL 60647"
                                size="size_s"
                                theme="normal"
                            />
                        </HStack>
                    </VStack>
                    <HStack gap="24" className={cls.Footer__contact_social}>
                        {socialData.map((social) => (
                            <div
                                className={cls.Footer__contact_social_icon}
                                key={social.id}
                            >
                                <Icon key={social.id} Svg={social.icon} />
                            </div>
                        ))}
                    </HStack>
                </div>
            </HStack>

            <VStack className={cls.Footer__bottom} gap="24" max>
                <HStack className={cls.Footer__divider} gap="34" align="center">
                    <span className={cls.Footer__divider_line} />
                    <span className={cls.Footer__divider_name}>Made by</span>
                    <span className={cls.Footer__divider_line} />
                </HStack>

                <HStack justify="between" max className={cls.Footer__policy}>
                    <Text
                        text="© 2022. All rights reserved."
                        size="size_s"
                        theme="normal"
                    />
                    <div className={cls.Footer__icon}>
                        <Icon Svg={PyroComponent} />
                    </div>
                    <HStack gap="12">
                        <Icon Svg={PoliceComponent} />
                        <Text text="Privacy policy" />
                    </HStack>
                </HStack>
            </VStack>
        </VStack>
    );
};
