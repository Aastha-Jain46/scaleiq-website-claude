import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';

import WhoWeAre from './pages/about/WhoWeAre';
import WhatWeDo from './pages/about/WhatWeDo';
import HowWeGrow from './pages/about/HowWeGrow';
import FoundersNote from './pages/about/FoundersNote';

import Leadership from './pages/people/Leadership';
import OurCulture from './pages/people/OurCulture';
import JoinUs from './pages/people/JoinUs';

import OurCompanies from './pages/portfolio/OurCompanies';
import ImpactGrowth from './pages/portfolio/ImpactGrowth';

import WhomWeServe from './pages/work/WhomWeServe';
import OurServices from './pages/work/OurServices';

import CaseStudies from './pages/resources/CaseStudies';
import CaseStudyDetail from './pages/resources/CaseStudyDetail';
import Blogs from './pages/resources/Blogs';
import BlogArticle from './pages/resources/BlogArticle';

import ContactUs from './pages/contact/ContactUs';
import ForInvestors from './pages/contact/ForInvestors';
import ForPartners from './pages/contact/ForPartners';
import ForPortfolioCompanies from './pages/contact/ForPortfolioCompanies';

import Legal from './pages/Legal';

function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about/who-we-are" element={<WhoWeAre />} />
          <Route path="/about/what-we-do" element={<WhatWeDo />} />
          <Route path="/about/how-we-grow" element={<HowWeGrow />} />
          <Route path="/about/founders-note" element={<FoundersNote />} />

          <Route path="/people-culture/leadership" element={<Leadership />} />
          <Route path="/people-culture/our-culture" element={<OurCulture />} />
          <Route path="/people-culture/join-us" element={<JoinUs />} />

          <Route path="/portfolio/our-companies" element={<OurCompanies />} />
          <Route path="/portfolio/impact-growth" element={<ImpactGrowth />} />

          <Route path="/our-work/whom-we-serve" element={<WhomWeServe />} />
          <Route path="/our-work/our-services" element={<OurServices />} />

          <Route path="/resources/case-studies" element={<CaseStudies />} />
          <Route path="/resources/case-studies/:slug" element={<CaseStudyDetail />} />
          <Route path="/resources/blogs" element={<Blogs />} />
          <Route path="/resources/blogs/:slug" element={<BlogArticle />} />

          <Route path="/contact" element={<ContactUs />} />
          <Route path="/contact/investors" element={<ForInvestors />} />
          <Route path="/contact/partners" element={<ForPartners />} />
          <Route path="/contact/portfolio-companies" element={<ForPortfolioCompanies />} />

          <Route path="/terms" element={<Legal title="Terms of Use" />} />
          <Route path="/privacy" element={<Legal title="Privacy Statement" />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
