import { Page } from '@/widgets/Page';
import { FirstSection } from '@/entities/FirstSection';
import { SecondSection } from '@/entities/SecondSection';
import { OurParters } from '@/entities/OurParters';
import { WhatWeDo } from '@/entities/WhatWeDo';
import { PaymentMethods } from '@/entities/Payment';

const MainPage = () => {
    return (
        <Page>
            <FirstSection />
            <SecondSection />
            <OurParters />
            <WhatWeDo />
            <PaymentMethods />
        </Page>
    );
};

export default MainPage;
