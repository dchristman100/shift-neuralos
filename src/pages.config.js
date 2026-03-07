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
import Book from './pages/Book';
import BrandHome from './pages/BrandHome';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import ExportAttract from './pages/ExportAttract';
import ExportBrandNeuralOS from './pages/ExportBrandNeuralOS';
import ExportConvert from './pages/ExportConvert';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import Platform from './pages/Platform';
import Pricing from './pages/Pricing';
import Resources from './pages/Resources';
import Results from './pages/Results';
import RevenueLeaks from './pages/RevenueLeaks';
import Roofing from './pages/Roofing';
import Packages from './pages/Packages';
import __Layout from './Layout.jsx';


export const PAGES = {
    "About": About,
    "AttractBook": AttractBook,
    "AttractEmptyPipeline": AttractEmptyPipeline,
    "AttractHome": AttractHome,
    "AttractHowItWorks": AttractHowItWorks,
    "AttractPricing": AttractPricing,
    "AttractResults": AttractResults,
    "Book": Book,
    "BrandHome": BrandHome,
    "Careers": Careers,
    "Contact": Contact,
    "ExportAttract": ExportAttract,
    "ExportBrandNeuralOS": ExportBrandNeuralOS,
    "ExportConvert": ExportConvert,
    "Home": Home,
    "HowItWorks": HowItWorks,
    "Platform": Platform,
    "Pricing": Pricing,
    "Resources": Resources,
    "Results": Results,
    "RevenueLeaks": RevenueLeaks,
    "Roofing": Roofing,
    "Packages": Packages,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};