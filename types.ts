import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Building2, Car, Zap, Globe, Bus, Truck, Factory, Home, X, Battery, BarChart3, MessageSquare, Plane, Ship, Flame, Landmark, Navigation, MoreHorizontal } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { domesticCasesZh, hongKongCasesZh, internationalCasesZh, partnerCategoriesZh } from '../data/casesZh';
import { domesticCasesEn, hongKongCasesEn, internationalCasesEn, partnerCategoriesEn } from '../data/casesEn';
import { CaseDetail } from '../data/types';

export default function Cases() {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'domestic' | 'international' | 'hongkong'>('hongkong');
  const [activeCategory, setActiveCategory] = useState<string>('全部');
  const [selectedCase, setSelectedCase] = useState<CaseDetail | null>(null);

  const categoriesZh = ["全部", "公共交通", "公共快充站", "地產", "物流", "空港", "微網"];
  const categoriesEn = ["All", "Public Transportation", "Public Fast Charging Station", "Real Estate", "Logistics", "Airport", "Microgrid"];
  const categories = language === 'zh' ? categoriesZh : categoriesEn;

  useEffect(() => {
    setActiveCategory(language === 'zh' ? '全部' : 'All');
  }, [language]);

  const domesticCases = language === 'zh' ? domesticCasesZh : domesticCasesEn;
  const hongKongCases = language === 'zh' ? hongKongCasesZh : hongKongCasesEn;
  const internationalCases = language === 'zh' ? internationalCasesZh : internationalCasesEn;
  const partnerCategoriesData = language === 'zh' ? partnerCategoriesZh : partnerCategoriesEn;

  const partnerCategories = partnerCategoriesData.map(cat => ({
    ...cat,
    icon: cat.iconName === 'Zap' ? <Zap className="w-5 h-5" /> :
          cat.iconName === 'Car' ? <Car className="w-5 h-5" /> :
          cat.iconName === 'Building2' ? <Building2 className="w-5 h-5" /> :
          cat.iconName === 'Plane' ? <Plane className="w-5 h-5" /> :
          cat.iconName === 'Ship' ? <Ship className="w-5 h-5" /> :
          cat.iconName === 'Battery' ? <Battery className="w-5 h-5" /> :
          cat.iconName === 'Landmark' ? <Landmark className="w-5 h-5" /> :
          cat.iconName === 'Navigation' ? <Navigation className="w-5 h-5" /> :
          <MoreHorizontal className="w-5 h-5" />
  }));

  const displayCases = activeTab === 'domestic' ? domesticCases : activeTab === 'international' ? internationalCases : hongKongCases;

  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">{t('cases.title')}</h1>
          <p className="text-xl text-slate-600">
            {t('cases.desc')}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1 rounded-xl shadow-sm border border-slate-200 inline-flex">
            <button
              onClick={() => setActiveTab('hongkong')}
              className={`px-8 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'hongkong'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              {t('cases.tab.hongkong')}
            </button>
            <button
              onClick={() => setActiveTab('domestic')}
              className={`px-8 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'domestic'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              {t('cases.tab.domestic')}
            </button>
            <button
              onClick={() => setActiveTab('international')}
              className={`px-8 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'international'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              {t('cases.tab.international')}
            </button>
          </div>
        </div>

        {activeTab === 'domestic' && (
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        <div className="grid gap-10 mb-24">
          {(activeTab === 'domestic' 
            ? domesticCases.filter(c => activeCategory === categories[0] || c.category === activeCategory)
            : activeTab === 'international'
            ? internationalCases
            : hongKongCases.filter(c => activeCategory === categories[0] || c.category === activeCategory)
          ).map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-slate-200"
            >
              <div className="grid md:grid-cols-3">
                <div className="h-64 md:h-auto bg-slate-200 relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 md:col-span-2 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">{item.title}</h2>
                  <div className="flex items-center text-slate-500 mb-4 text-sm">
                    <MapPin size={16} className="mr-1" />
                    {item.location}
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                  <button
                    onClick={() => setSelectedCase(item)}
                    className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-blue-50 px-6 py-2.5 font-medium text-blue-600 transition-all hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-600/20"
                  >
                    <span className="absolute right-0 flex h-full w-12 translate-x-full items-center justify-center bg-blue-700 transition-all duration-300 group-hover:translate-x-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                    <span className="transition-all duration-300 group-hover:-translate-x-4">{t('cases.btn.details')}</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Case Detail Modal */}
        <AnimatePresence>
          {selectedCase && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCase(null)}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative bg-white rounded-3xl shadow-2xl w-full max-w-3xl overflow-hidden max-h-[90vh] overflow-y-auto flex flex-col"
              >
                {/* Top side: Image Area */}
                <div className="w-full relative h-[300px] md:h-[400px] flex-shrink-0">
                  <img
                    src={selectedCase.image}
                    alt={selectedCase.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                  
                  <button
                    onClick={() => setSelectedCase(null)}
                    className="absolute top-6 right-6 p-2 bg-black/40 hover:bg-black/60 text-white/90 hover:text-white rounded-full backdrop-blur-sm transition-colors z-10"
                  >
                    <X size={20} />
                  </button>

                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {selectedCase.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-white/20 backdrop-blur-md text-xs font-semibold rounded-full border border-white/30 shadow-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center text-white/90 text-sm font-medium bg-black/30 w-fit px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/10">
                      <MapPin size={16} className="mr-1.5 text-blue-400" />
                      {selectedCase.location}
                    </div>
                  </div>
                </div>

                {/* Bottom side: Content Area */}
                <div className="w-full p-8 md:p-10 bg-white relative">
                  <div className="mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight leading-tight">{selectedCase.title}</h2>
                    <div className="h-1 w-12 bg-blue-500 rounded-full mb-6"></div>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      {selectedCase.desc}
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="group bg-gradient-to-br from-blue-50 to-blue-50/30 p-6 rounded-2xl border border-blue-100/50 hover:border-blue-200 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-blue-100 text-blue-600 rounded-lg group-hover:scale-110 transition-transform">
                          <Battery size={20} />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900">{t('cases.modal.charging')}</h3>
                      </div>
                      <p className="text-slate-600 leading-relaxed pl-12">
                        {selectedCase.details.chargingPiles}
                      </p>
                    </div>

                    <div className="group bg-gradient-to-br from-emerald-50 to-emerald-50/30 p-6 rounded-2xl border border-emerald-100/50 hover:border-emerald-200 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg group-hover:scale-110 transition-transform">
                          <BarChart3 size={20} />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900">{t('cases.modal.energy')}</h3>
                      </div>
                      <p className="text-slate-600 leading-relaxed pl-12">
                        {selectedCase.details.energySaving}
                      </p>
                    </div>

                    <div className="group bg-gradient-to-br from-amber-50 to-amber-50/30 p-6 rounded-2xl border border-amber-100/50 hover:border-amber-200 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-amber-100 text-amber-600 rounded-lg group-hover:scale-110 transition-transform">
                          <MessageSquare size={20} />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900">{t('cases.modal.feedback')}</h3>
                      </div>
                      <p className="text-slate-600 leading-relaxed pl-12 italic">
                        "{selectedCase.details.feedback}"
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Partners Section */}
        <div className="bg-white rounded-3xl p-12 shadow-sm border border-slate-200">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-[#0099cc] mb-8 tracking-wide">{t('cases.partners.title')}</h2>
            <div className="border-l-4 border-[#0099cc] pl-4 mb-6">
              <h3 className="text-xl font-bold text-white bg-[#0099cc] inline-block px-4 py-1 rounded-r-md">{t('cases.partners.subtitle')}</h3>
            </div>
            <p className="text-lg text-slate-600 max-w-4xl leading-relaxed">
              {t('cases.partners.desc')}
            </p>
          </div>

          <div className="columns-1 lg:columns-2 gap-x-16">
            {partnerCategories.map((cat, idx) => (
              <div key={idx} className="break-inside-avoid mb-12">
                <div className="flex items-center gap-3 mb-6 border-b border-slate-200 pb-2">
                  <div className="bg-[#8cc63f] text-white px-4 py-1.5 rounded-sm flex items-center gap-2">
                    {cat.icon}
                    <h3 className="text-lg font-bold tracking-wider">{cat.title}</h3>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  {cat.partners.map((partner, i) => (
                    <div 
                      key={i} 
                      className="bg-white text-slate-700 px-4 py-2 rounded-md text-sm font-medium border border-slate-200 hover:border-[#0099cc] hover:text-[#0099cc] transition-all duration-300 shadow-sm hover:shadow-md cursor-default"
                    >
                      {partner}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-blue-900 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-6">{t('cases.partners.target.title')}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {[
                t('cases.partners.target.1'),
                t('cases.partners.target.2'),
                t('cases.partners.target.3'),
                t('cases.partners.target.4')
              ].map((item, i) => (
                <div key={i} className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10 text-sm">
                  <p className="leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
