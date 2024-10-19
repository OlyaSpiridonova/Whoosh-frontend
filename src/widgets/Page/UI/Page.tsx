import { MutableRefObject, ReactNode, memo, useRef, UIEvent } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Page.module.scss';

interface PageProps {
    className?: string;
    children: ReactNode;
}

export const Page = memo((props: PageProps) => {
    const { className, children } = props;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;

    return (
        <main
            ref={wrapperRef}
            className={classNames(cls.Page, {}, [className])}
        >
            {children}
        </main>
    );
});
