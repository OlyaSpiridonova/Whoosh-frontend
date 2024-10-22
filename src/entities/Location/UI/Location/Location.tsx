import { memo, useCallback, useEffect, useState } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader';
import { Icon } from '@/shared/UI/Icon';
import { PinComponent } from '@/shared/assets';
import { classNames } from '@/shared/lib/classNames/classNames';
import { fetchLocation } from '../../model/services/fetchLocations/fetchLocations';
import { locationReducer } from '../../model/slice/locationSlice';

import cls from './Location.module.scss';
import { Popup } from '@/shared/UI/Popup/Popup';
import { useSelector } from 'react-redux';
import { getLocationData } from '../../model/selectors/location';
import { VStack } from '@/shared/UI/Stack';

const reducers: ReducersList = {
    locations: locationReducer,
};

export const LocationComponent = memo(() => {
    const dispatch = useAppDispatch();

    const locations = useSelector(getLocationData);
    const [location, setLocation] = useState('');
    const [isVisiblePopup, setIsVisiblePopup] = useState(false);

    const onVisiblePopup = useCallback(() => {
        setIsVisiblePopup((prev) => !prev);
    }, []);

    const onChooseLocation = (location: string) => {
        setLocation(location);
        setIsVisiblePopup(false);
    };

    useEffect(() => {
        const fetchData = async () => {
            const res = await dispatch(fetchLocation());
            if (res.payload?.length) {
                setLocation(res.payload[0]?.name);
            }
        };
        fetchData();
    }, [dispatch]);

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
                        list={locations?.map((location) => location.name) || []}
                        onChoose={(listItem: string) => () =>
                            onChooseLocation(listItem)
                        }
                    />
                )}
            </VStack>
        </DynamicModuleLoader>
    );
});
