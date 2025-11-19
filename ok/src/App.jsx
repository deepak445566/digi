// src/App.js - UPDATED
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/ModernNavbar'
import HomePage from './components/HomePage'
import TrustedBy from './components/TrustedBy'
import AchievementStats from './components/AchievementStats'
import ClientSay from './components/ClientSay'
import Footer from './components/Footer'
import ServicesList from './pages/ServicesList'
import SubServicesPage from './pages/SubPage'
import Detailed from './pages/Detailed'
import PlanPage from './pages/PlanPage'
import CompanyProfile from './pages/company/CompanyProfile'
import Mission_Vission from './pages/company/Mission_Vission'
import Portfolio from './pages/company/Portfolio'
import WhyDigitalExpress from './pages/company/WhyDigitalExpress'
import Contact from './pages/Contact'
import TermsConditions from './pages/TermsConditions'
import CancellationRefundPolicy from './pages/CancellationRefundPolicy'
import PrivacyPolicy from './pages/Privacy'
import ShippingDelivery from './pages/ShippingDelivery'
import OwnerLogin from './pages/owner/OwnerLogin'
import OwnerDashboard from './pages/owner/OwnerDashboard'



const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* HOME ROUTE */}
        <Route
          path="/"
          element={
            <>
              <HomePage />
              <ServicesList/>
              <TrustedBy />
              <AchievementStats />
              <ClientSay />
             
            </>
          }
        />
        
        {/* SERVICES ROUTES */}
        <Route path="/services" element={<ServicesList />} />
        <Route path="/services/:id" element={<SubServicesPage />} />
        {/* YEH LINE ADD KARO */}
        <Route path="/services/:id/detailed" element={<Detailed />} />
        <Route path="/services/:id/plan/:planName" element={<PlanPage />} />

        <Route path="/company/companyprofile" element={<CompanyProfile />}/>

          <Route path="/company/mission_vission" element={<Mission_Vission />}/>

          <Route path="/company/portfolio" element={<Portfolio />}/>

               <Route path="/company/clientsay" element={<ClientSay />}/>

          <Route path="/company/whydigitalexpress" element={<WhyDigitalExpress />}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path='/term' element={<TermsConditions/>}/>
           <Route path='/cancel' element={<CancellationRefundPolicy/>}/>
             <Route path='/privacy' element={<PrivacyPolicy/>}/>
             <Route path='/ship' element={<ShippingDelivery/>}/>

<Route path="/owner/login" element={<OwnerLogin />} />
<Route path="/owner/dashboard" element={<OwnerDashboard />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App