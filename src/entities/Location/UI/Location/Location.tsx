import { memo, useCallback, useEffect, useState } from 'react';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader';
import { Icon } from '@/shared/UI/Icon';
import { PinComponent } from '@/shared/assets';
import { classNames } from '@/shared/lib/classNames/classNames';
import { locationReducer } from '../../model/slice/locationSlice';

import cls from './Location.module.scss';
import { Popup } from '@/shared/UI/Popup/Popup';
import { VStack } from '@/shared/UI/Stack';

const reducers: ReducersList = {
    locations: locationReducer,
};

export const LocationComponent = memo(() => {
    // в случае получения данных с сервера

    // const dispatch = useAppDispatch();
    // const locations = useSelector(getLocationData);

    const locationsData = [
        {
            id: 1,
            name: 'NY, Manhattan',
        },
        {
            id: 2,
            name: 'New York',
        },
        {
            id: 3,
            name: 'Los Angeles',
        },
        {
            id: 4,
            name: 'San Francisco',
        },
        {
            id: 5,
            name: 'Chicago',
        },
        {
            id: 6,
            name: 'Boston',
        },
        {
            id: 7,
            name: 'Houston',
        },
        {
            id: 8,
            name: 'Philadelphia',
        },
        {
            id: 9,
            name: 'Dallas',
        },
        {
            id: 10,
            name: 'San Diego',
        },
        {
            id: 11,
            name: 'Seattle',
        },
    ];
    const [location, setLocation] = useState(locationsData[0].name);
    const [isVisiblePopup, setIsVisiblePopup] = useState(false);

    const onVisiblePopup = useCallback(() => {
        setIsVisiblePopup((prev) => !prev);
    }, []);

    const onChooseLocation = (location: string) => {
        // setLocation(location);
        setIsVisiblePopup(false);
    };

    // в случае получения данных с сервера

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const res = await dispatch(fetchLocation());
    //         if (res.payload?.length) {
    //             setLocation(res.payload[0]?.name);
    //         }
    //     };
    //     fetchData();
    // }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <VStack gap="16">
                <div
                    className={classNames(cls.Location)}
                    onClick={onVisiblePopup}
                >
                    <Icon Svg={PinComponent} />
                    <span className={cls.Location__name}>{location}</span>
                </div>
                {isVisiblePopup && (
                    <Popup
                        list={
                            locationsData?.map((location) => location.name) ||
                            []
                        }
                        onChoose={(listItem: string) => () =>
                            onChooseLocation(listItem)
                        }
                    />
                )}
            </VStack>
        </DynamicModuleLoader>
    );
});
