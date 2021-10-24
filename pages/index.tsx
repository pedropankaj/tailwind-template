import type { NextPage } from "next";

import Header from '../components/Header'
import Overview from '../components/Overview'
import HowItWorks from '../components/HowItWorks'
import Features from "../components/Features";
import Faq from "../components/Faq";
import CostCenter from "../components/CostCenter";
import Footer from "../components/Footer";

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
