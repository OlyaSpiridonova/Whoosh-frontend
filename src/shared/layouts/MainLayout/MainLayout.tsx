import { ReactElement, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MainLayout.module.scss';
import { Footer } from '@/shared/UI/Footer/Footer';

interface MainLayoutProps {
    className?: string;
    header: ReactElement;
    content: ReactElement;
    sidebar: ReactElement;
    navbar: ReactElement;
    toolbar?: ReactElement;
    isOpenSidebar: boolean;
}

export const MainLayout = memo((props: MainLayoutProps) => {
    const { className, navbar, content, sidebar, isOpenSidebar } = props;

    return (
        <div className={classNames(cls.MainLayout, {}, [className])}>
            <div>{navbar}</div>
            {isOpenSidebar && <div>{sidebar}</div>}
            <div className={cls.content}>{content}</div>
            <Footer />
        </div>
    );
});
