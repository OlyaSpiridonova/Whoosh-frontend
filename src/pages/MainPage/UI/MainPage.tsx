import { Page } from '@/widgets/Page';
import { FirstSection } from '@/entities/FirstSection';
import { SecondSection } from '@/entities/ SecondSection';
import { OurParters } from '@/entities/OurParters';

const MainPage = () => {
    return (
        <Page>
            <FirstSection />
            <SecondSection />
            <OurParters />
        </Page>
    );
};

export default MainPage;
