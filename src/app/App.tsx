import { Suspense, memo } from 'react';
import { Sidebar } from '@/widgets/Sidebar';
import { Navbar } from '@/widgets/Navbar';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';

const App = memo(() => {
    return (
        <div className={classNames('app', {})}>
            <Suspense fallback="">
                <MainLayout
                    sidebar={<Sidebar />}
                    navbar={<Navbar />}
                    content={<AppRouter />}
                    header={<Navbar />}
                />
            </Suspense>
        </div>
    );
});

export default App;
