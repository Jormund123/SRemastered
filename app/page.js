import { Footer, Navbar } from "../components";
import { About, Explore, Team, GetStarted, Hero, Insights, WhatsNew, Map, MoreProjects } from "../sections";

const Page = () => (
    <div className='bg-slate-900 overflow-hidden'>
        <Navbar />
        <Hero />
        <div className='relative'>
            <About />
            <div className='gradient-02 z-0' />
            <Explore />
            <MoreProjects />
        </div>
        <div className='relative'>
            <GetStarted />
            <div className='gradient-04 z-0' />
            <WhatsNew />
        </div>
        <Insights />
        <div className='relative'>
            <div className='gradient-04 z-0' />
            <Team />
        </div>
        <Map />
        <Footer />
    </div>
);

export default Page;
