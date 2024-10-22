import { Suspense, memo, useState } from 'react';
import { Sidebar } from '@/widgets/Sidebar';
import { Navbar } from '@/widgets/Navbar';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';

const App = memo(() => {
    const [isOpenSidebar, setIsOpenSidebar] = useState(false);

    const onToggleSidebar = () => {
        setIsOpenSidebar((prev) => !prev);
    };

    return (
        <div className={classNames('app', {})}>
            <Suspense fallback="">
                <MainLayout
                    sidebar={<Sidebar />}
                    navbar={
                        <Navbar
                            onOpenSidebar={onToggleSidebar}
                            isOpenSidebar={isOpenSidebar}
                        />
                    }
                    content={<AppRouter />}
                    header={
                        <Navbar
                            onOpenSidebar={onToggleSidebar}
                            isOpenSidebar={isOpenSidebar}
                        />
                    }
                    isOpenSidebar={isOpenSidebar}
                />
            </Suspense>
        </div>
    );
});

export default App;
