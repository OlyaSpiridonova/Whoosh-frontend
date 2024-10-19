import { memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
    getLocationData,
    getLocationError,
    getLocationIsLoading,
} from '../../model/selectors/location';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchLocation } from '../../model/services/fetchLocations/fetchLocations';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader';
import { locationReducer } from '../../model/slice/locationSlice';
import { Icon } from '@/shared/UI/Icon';
import { PinComponent } from '@/shared/assets/icons/PinComponent';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Location.module.scss';

const reducers: ReducersList = {
    locations: locationReducer,
};

export const LocationComponent = memo(() => {
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getLocationIsLoading);
    const locations = useSelector(getLocationData);
    const error = useSelector(getLocationError);

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
