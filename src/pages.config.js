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
import Book from './pages/Book';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import Pricing from './pages/Pricing';
import Results from './pages/Results';
import RevenueLeaks from './pages/RevenueLeaks';
import BrandHome from './pages/BrandHome';
import About from './pages/About';
import Platform from './pages/Platform';
import Roofing from './pages/Roofing';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import Resources from './pages/Resources';
import AttractHome from './pages/AttractHome';
import AttractHowItWorks from './pages/AttractHowItWorks';
import AttractEmptyPipeline from './pages/AttractEmptyPipeline';
import AttractResults from './pages/AttractResults';
import AttractPricing from './pages/AttractPricing';
import AttractBook from './pages/AttractBook';
import ExportPackage from './pages/ExportPackage';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Book": Book,
    "Home": Home,
    "HowItWorks": HowItWorks,
    "Pricing": Pricing,
    "Results": Results,
    "RevenueLeaks": RevenueLeaks,
    "BrandHome": BrandHome,
    "About": About,
    "Platform": Platform,
    "Roofing": Roofing,
    "Contact": Contact,
    "Careers": Careers,
    "Resources": Resources,
    "AttractHome": AttractHome,
    "AttractHowItWorks": AttractHowItWorks,
    "AttractEmptyPipeline": AttractEmptyPipeline,
    "AttractResults": AttractResults,
    "AttractPricing": AttractPricing,
    "AttractBook": AttractBook,
    "ExportPackage": ExportPackage,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};