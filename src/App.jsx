import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import NavigationTracker from '@/lib/NavigationTracker'
import { pagesConfig } from './pages.config'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import CallWidget from '@/components/ui/callwidget';

import RevenueEnginePlans from './pages/RevenueEnginePlans';
import ExportRevenueEnginePlans from './pages/ExportRevenueEnginePlans';
import ExportDashboardPreview from './pages/ExportDashboardPreview';
import ExportBookACall from './pages/ExportBookACall';
import ExportHowItWorks from './pages/ExportHowItWorks';
import ExportRevenueLeaks from './pages/ExportRevenueLeaks';
import ExportResults from './pages/ExportResults';
import ExportAttractEmptyPipeline from './pages/ExportAttractEmptyPipeline';
import Blog from './pages/Blog';
import Features from './pages/Features';
import Integrations from './pages/Integrations';
import CaseStudies from './pages/CaseStudies';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import MasterExport from './pages/MasterExport';
import ExportNeuralOSDashboard from './pages/ExportNeuralOSDashboard';
import ExportROICalculator from './pages/ExportROICalculator';
import NeuralOSDashboard from './pages/NeuralOSDashboard';
import Onboarding from './pages/Onboarding';
import LeakDetector from './pages/LeakDetector';
import ROICalculator from './pages/ROICalculator';
import DocumentsDownload from './pages/DocumentsDownload';
import CustomerPortal from './pages/CustomerPortal';
import Calculator from './pages/Calculator';


const { Pages, Layout, mainPage } = pagesConfig;
const mainPageKey = mainPage ?? Object.keys(Pages)[0];
const MainPage = mainPageKey ? Pages[mainPageKey] : <></>;

const LayoutWrapper = ({ children, currentPageName }) =>
  <Layout currentPageName={currentPageName}>{children}</Layout>;

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  // Show loading spinner while checking app public settings or auth
  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Handle authentication errors
  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      // Redirect to login automatically
      navigateToLogin();
      return null;
    }
  }

  // Render the main app
  return (
    <Routes>
      <Route path="/" element={
        <LayoutWrapper currentPageName={mainPageKey}>
          <MainPage />
        </LayoutWrapper>
      } />
      {Object.entries(Pages).map(([path, Page]) => (
        <Route
          key={path}
          path={`/${path}`}
          element={
            <LayoutWrapper currentPageName={path}>
              <Page />
            </LayoutWrapper>
          }
        />
      ))}
      <Route path="/RevenueEnginePlans" element={<LayoutWrapper currentPageName="RevenueEnginePlans"><RevenueEnginePlans /></LayoutWrapper>} />
      <Route path="/ExportRevenueEnginePlans" element={<LayoutWrapper currentPageName="ExportRevenueEnginePlans"><ExportRevenueEnginePlans /></LayoutWrapper>} />
      <Route path="/ExportHowItWorks" element={<LayoutWrapper currentPageName="ExportHowItWorks"><ExportHowItWorks /></LayoutWrapper>} />
      <Route path="/ExportRevenueLeaks" element={<LayoutWrapper currentPageName="ExportRevenueLeaks"><ExportRevenueLeaks /></LayoutWrapper>} />
      <Route path="/ExportResults" element={<LayoutWrapper currentPageName="ExportResults"><ExportResults /></LayoutWrapper>} />
      <Route path="/ExportAttractEmptyPipeline" element={<LayoutWrapper currentPageName="ExportAttractEmptyPipeline"><ExportAttractEmptyPipeline /></LayoutWrapper>} />
      <Route path="/Blog" element={<LayoutWrapper currentPageName="Blog"><Blog /></LayoutWrapper>} />
      <Route path="/Features" element={<LayoutWrapper currentPageName="Features"><Features /></LayoutWrapper>} />
      <Route path="/Integrations" element={<LayoutWrapper currentPageName="Integrations"><Integrations /></LayoutWrapper>} />
      <Route path="/CaseStudies" element={<LayoutWrapper currentPageName="CaseStudies"><CaseStudies /></LayoutWrapper>} />
      <Route path="/PrivacyPolicy" element={<LayoutWrapper currentPageName="PrivacyPolicy"><PrivacyPolicy /></LayoutWrapper>} />
      <Route path="/TermsOfService" element={<LayoutWrapper currentPageName="TermsOfService"><TermsOfService /></LayoutWrapper>} />
      <Route path="/CookiePolicy" element={<LayoutWrapper currentPageName="CookiePolicy"><CookiePolicy /></LayoutWrapper>} />
      <Route path="/MasterExport" element={<LayoutWrapper currentPageName="MasterExport"><MasterExport /></LayoutWrapper>} />
      <Route path="/NeuralOSDashboard" element={<LayoutWrapper currentPageName="NeuralOSDashboard"><NeuralOSDashboard /></LayoutWrapper>} />
      <Route path="/ExportDashboardPreview" element={<LayoutWrapper currentPageName="ExportDashboardPreview"><ExportDashboardPreview /></LayoutWrapper>} />
      <Route path="/ExportBookACall" element={<LayoutWrapper currentPageName="ExportBookACall"><ExportBookACall /></LayoutWrapper>} />
      <Route path="/Onboarding" element={<LayoutWrapper currentPageName="Onboarding"><Onboarding /></LayoutWrapper>} />
      <Route path="/LeakDetector" element={<LayoutWrapper currentPageName="LeakDetector"><LeakDetector /></LayoutWrapper>} />
      <Route path="/ROICalculator" element={<LayoutWrapper currentPageName="ROICalculator"><ROICalculator /></LayoutWrapper>} />
      <Route path="/DocumentsDownload" element={<LayoutWrapper currentPageName="DocumentsDownload"><DocumentsDownload /></LayoutWrapper>} />
      <Route path="/CustomerPortal" element={<LayoutWrapper currentPageName="CustomerPortal"><CustomerPortal /></LayoutWrapper>} />
      <Route path="/Calculator" element={<LayoutWrapper currentPageName="Calculator"><Calculator /></LayoutWrapper>} />
      <Route path="/ExportNeuralOSDashboard" element={<LayoutWrapper currentPageName="ExportNeuralOSDashboard"><ExportNeuralOSDashboard /></LayoutWrapper>} />
      <Route path="/ExportROICalculator" element={<LayoutWrapper currentPageName="ExportROICalculator"><ExportROICalculator /></LayoutWrapper>} />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};


function App() {

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <NavigationTracker />
          <AuthenticatedApp />
          <CallWidget />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App