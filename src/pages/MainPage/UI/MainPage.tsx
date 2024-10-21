import { Page } from '@/widgets/Page';
import { FirstSection } from '@/entities/FirstSection';
import { SecondSection } from '@/entities/SecondSection';
import { OurParters } from '@/entities/OurParters';
import { WhatWeDo } from '@/entities/WhatWeDo';

const MainPage = () => {
    return (
        <Page>
            <FirstSection />
            <SecondSection />
            <OurParters />
            <WhatWeDo />
        </Page>
    );
};

export default MainPage;
