import { MainPage } from '@/pages/MainPage';
import { AppRoutes, getRouteMain } from '@/shared/consts/router';
import { AppRoutesProps } from '@/shared/types/router';

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <MainPage />,
    },
};
