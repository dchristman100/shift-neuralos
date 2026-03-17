/**
 * pages.config.js - Page routing configuration
 * 
 * This file is AUTO-GENERATED. Do not add imports or modify PAGES manually.
 * Pages are auto-registered when you create files in the ./pages/ folder.
 * 
 * THE ONLY EDITABLE VALUE: mainPage
 * This controls which page is the landing page (shown when users visit the app).
 * 
 * Example file structure:
 * 
 *   import HomePage from './pages/HomePage';
 *   import Dashboard from './pages/Dashboard';
 *   import Settings from './pages/Settings';
 *   
 *   export const PAGES = {
 *       "HomePage": HomePage,
 *       "Dashboard": Dashboard,
 *       "Settings": Settings,
 *   }
 *   
 *   export const pagesConfig = {
 *       mainPage: "HomePage",
 *       Pages: PAGES,
 *   };
 * 
 * Example with Layout (wraps all pages):
 *
 *   import Home from './pages/Home';
 *   import Settings from './pages/Settings';
 *   import __Layout from './Layout.jsx';
 *
 *   export const PAGES = {
 *       "Home": Home,
 *       "Settings": Settings,
 *   }
 *
 *   export const pagesConfig = {
 *       mainPage: "Home",
 *       Pages: PAGES,
 *       Layout: __Layout,
 *   };
 *
 * To change the main page from HomePage to Dashboard, use find_replace:
 *   Old: mainPage: "HomePage",
 *   New: mainPage: "Dashboard",
 *
 * The mainPage value must match a key in the PAGES object exactly.
 */
import About from './pages/About';
import AttractBook from './pages/AttractBook';
import AttractEmptyPipeline from './pages/AttractEmptyPipeline';
import AttractHome from './pages/AttractHome';
import AttractHowItWorks from './pages/AttractHowItWorks';
import AttractPricing from './pages/AttractPricing';
import AttractResults from './pages/AttractResults';
import Blog from './pages/Blog';
import Book from './pages/Book';
import BrandHome from './pages/BrandHome';
import Careers from './pages/Careers';
import CaseStudies from './pages/CaseStudies';
import Contact from './pages/Contact';
import CookiePolicy from './pages/CookiePolicy';
import ExportAttract from './pages/ExportAttract';
import ExportAttractEmptyPipeline from './pages/ExportAttractEmptyPipeline';
import ExportBookACall from './pages/ExportBookACall';
import ExportBrandNeuralOS from './pages/ExportBrandNeuralOS';
import ExportConvert from './pages/ExportConvert';
import ExportDashboardPreview from './pages/ExportDashboardPreview';
import ExportHowItWorks from './pages/ExportHowItWorks';
import ExportResults from './pages/ExportResults';
import ExportRevenueEnginePlans from './pages/ExportRevenueEnginePlans';
import ExportRevenueLeaks from './pages/ExportRevenueLeaks';
import Features from './pages/Features';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import Integrations from './pages/Integrations';
import MasterExport from './pages/MasterExport';
import Packages from './pages/Packages';
import Platform from './pages/Platform';
import Pricing from './pages/Pricing';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Resources from './pages/Resources';
import Results from './pages/Results';
import RevenueEnginePlans from './pages/RevenueEnginePlans';
import RevenueLeaks from './pages/RevenueLeaks';
import Roofing from './pages/Roofing';
import TermsOfService from './pages/TermsOfService';
import __Layout from './Layout.jsx';


export const PAGES = {
    "About": About,
    "AttractBook": AttractBook,
    "AttractEmptyPipeline": AttractEmptyPipeline,
    "AttractHome": AttractHome,
    "AttractHowItWorks": AttractHowItWorks,
    "AttractPricing": AttractPricing,
    "AttractResults": AttractResults,
    "Blog": Blog,
    "Book": Book,
    "BrandHome": BrandHome,
    "Careers": Careers,
    "CaseStudies": CaseStudies,
    "Contact": Contact,
    "CookiePolicy": CookiePolicy,
    "ExportAttract": ExportAttract,
    "ExportAttractEmptyPipeline": ExportAttractEmptyPipeline,
    "ExportBookACall": ExportBookACall,
    "ExportBrandNeuralOS": ExportBrandNeuralOS,
    "ExportConvert": ExportConvert,
    "ExportDashboardPreview": ExportDashboardPreview,
    "ExportHowItWorks": ExportHowItWorks,
    "ExportResults": ExportResults,
    "ExportRevenueEnginePlans": ExportRevenueEnginePlans,
    "ExportRevenueLeaks": ExportRevenueLeaks,
    "Features": Features,
    "Home": Home,
    "HowItWorks": HowItWorks,
    "Integrations": Integrations,
    "MasterExport": MasterExport,
    "Packages": Packages,
    "Platform": Platform,
    "Pricing": Pricing,
    "PrivacyPolicy": PrivacyPolicy,
    "Resources": Resources,
    "Results": Results,
    "RevenueEnginePlans": RevenueEnginePlans,
    "RevenueLeaks": RevenueLeaks,
    "Roofing": Roofing,
    "TermsOfService": TermsOfService,
}

export const pagesConfig = {
    mainPage: "BrandHome",
    Pages: PAGES,
    Layout: __Layout,
};