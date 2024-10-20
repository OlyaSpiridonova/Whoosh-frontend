import { memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader';
import { Icon } from '@/shared/UI/Icon';
import { PinComponent } from '@/shared/assets';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    getLocationData,
    getLocationError,
    getLocationIsLoading,
} from '../../model/selectors/location';
import { fetchLocation } from '../../model/services/fetchLocations/fetchLocations';
import { locationReducer } from '../../model/slice/locationSlice';

import cls from './Location.module.scss';

const reducers: ReducersList = {
    locations: locationReducer,
};

export const LocationComponent = memo(() => {
    const dispatch = useAppDispatch();

    const [location, setLocation] = useState('');

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
            <div className={classNames(cls.Location)}>
                <Icon Svg={PinComponent} />
                <span className={cls.Location__name}>{location}</span>
            </div>
        </DynamicModuleLoader>
    );
});
