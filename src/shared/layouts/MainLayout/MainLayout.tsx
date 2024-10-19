import { ReactElement, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MainLayout.module.scss';
import { MobileView, BrowserView } from 'react-device-detect';

interface MainLayoutProps {
    className?: string;
    header: ReactElement;
    content: ReactElement;
    sidebar: ReactElement;
    navbar: ReactElement;
    toolbar?: ReactElement;
}

export const MainLayout = memo((props: MainLayoutProps) => {
    const { className, navbar, content, sidebar } = props;

    return (
        <div className={classNames(cls.MainLayout, {}, [className])}>
            <BrowserView>
                <div>{navbar}</div>
            </BrowserView>
            <MobileView>
                <div>{sidebar}</div>
            </MobileView>
            <div className={cls.content}>{content}</div>
        </div>
    );
});
