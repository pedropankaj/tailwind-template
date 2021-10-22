import type { NextPage } from "next";

import Header from '../component/Header'
import Overview from '../component/Overview'
import HowItWorks from '../component/HowItWorks'
import Features from "../component/Features";
import Faq from "../component/Faq";
import CostCenter from "../component/CostCenter";
import Footer from "../component/Footer";

const Home: NextPage = () => {
  return (
    <div className="relative overflow-hidden">
      <Header />
      <main>
        <Overview />

        <HowItWorks />

        <Features />

        <Faq />

        <CostCenter />
        
        <Footer />
      </main>
    </div>
  );
};

export default Home;
