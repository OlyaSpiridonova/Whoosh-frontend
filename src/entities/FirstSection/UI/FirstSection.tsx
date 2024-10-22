import { ParcelTrack, SendParcel } from '@/entities/SendParcel';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/UI/Text';
import { Button } from '@/shared/UI/Button';
import { Icon } from '@/shared/UI/Icon';
import { ArrowRight, PlayComponent } from '@/shared/assets';
import { VStack } from '@/shared/UI/Stack';
import Video from '@/shared/assets/icons/Video.png';
import cls from './FirstSection.module.scss';

export const FirstSection = () => {
    return (
        <div className={classNames(cls.FirstSection)}>
            <div className={classNames(cls.FirstSection__first)}>
                <VStack
                    gap="80"
                    align="center"
                    justify="center"
                    className={cls.FirstSection__first_content}
                >
                    <VStack gap="30" justify="center">
                        <VStack gap="34">
                            <Text
                                size="size_l"
                                text="Our service started work in New York"
                            />
                            <Text
                                className={cls.FirstSection__first_text}
                                theme="accent"
                                text="We make delivery exactly at the time you need - we can start to fulfill the order a few minutes after it arrives, or we can deliver on a specific day and hour."
                            />
                        </VStack>
                        <Button
                            theme="outline"
                            color="blue"
                            addonRight={<Icon Svg={ArrowRight} />}
                            size="size_h5"
                        >
                            Read more
                        </Button>
                    </VStack>
                    <VStack
                        gap="22"
                        justify="center"
                        className={cls.FirstSection__first_video_wrapper}
                    >
                        <Text size="size_h4" text="How it works" />
                        <div className={cls.FirstSection__first_video}>
                            <img
                                className={cls.FirstSection__first_video_img}
                                src={Video}
                            />
                            <div className={cls.FirstSection__first_video_play}>
                                <Icon Svg={PlayComponent} />
                            </div>
                        </div>
                    </VStack>
                </VStack>
            </div>
            <VStack
                gap="72"
                align="center"
                justify="center"
                className={classNames(cls.FirstSection__second)}
            >
                <SendParcel />
                <ParcelTrack />
            </VStack>
        </div>
    );
};
