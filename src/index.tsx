import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import '@/app/styles/index.scss';
import { StoreProvider } from './app/providers/StoreProvider';
const container = document.getElementById('root');

if (!container) {
    throw new Error(
        'Контейнер root не найденю Не удалось вмонтировать реакт приложение',
    );
}

const root = createRoot(container);
root.render(
    <BrowserRouter>
        <StoreProvider>
            <App />
        </StoreProvider>
    </BrowserRouter>,
);
