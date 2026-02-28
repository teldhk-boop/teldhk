import { motion } from 'framer-motion';
import { Building2, Truck, Home, Factory, Bus } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Solutions() {
  const { t } = useLanguage();

  const solutions = [
    {
      title: t('solutions.bus.title'),
      icon: <Bus className="w-8 h-8" />,
      desc: t('solutions.bus.desc'),
      color: "bg-blue-500"
    },
    {
      title: t('solutions.public.title'),
      icon: <Building2 className="w-8 h-8" />,
      desc: t('solutions.public.desc'),
      color: "bg-indigo-500"
    },
    {
      title: t('solutions.logistics.title'),
      icon: <Truck className="w-8 h-8" />,
      desc: t('solutions.logistics.desc'),
      color: "bg-cyan-500"
    },
    {
      title: t('solutions.enterprise.title'),
      icon: <Factory className="w-8 h-8" />,
      desc: t('solutions.enterprise.desc'),
      color: "bg-emerald-500"
    },
    {
      title: t('solutions.residential.title'),
      icon: <Home className="w-8 h-8" />,
      desc: t('solutions.residential.desc'),
      color: "bg-orange-500"
    }
  ];

  return (
    <div className="bg-white min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">{t('solutions.title')}</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t('solutions.desc')}
          </p>
        </div>

        {/* 5 Networks Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {solutions.map((sol, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-all group"
            >
              <div className={`${sol.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                {sol.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{sol.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {sol.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Architecture Section */}
        <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/50 to-transparent pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-8">{t('solutions.arch.title')}</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-4">{t('solutions.arch.step1.title')}</h3>
                <ul className="space-y-4">
                  {[
                    t('solutions.arch.step1.item1'),
                    t('solutions.arch.step1.item2'),
                    t('solutions.arch.step1.item3'),
                    t('solutions.arch.step1.item4'),
                    t('solutions.arch.step1.item5')
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 bg-white/5 p-3 rounded-lg">
                      <span className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-sm font-bold">{i + 1}</span>
                      <span>{item.split('. ')[1] || item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-4">{t('solutions.arch.step2.title')}</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {t('solutions.arch.step2.desc')}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold text-blue-400 mb-1">{t('solutions.arch.step2.comp')}</div>
                    <div className="text-xs text-slate-400">{t('solutions.arch.step2.analysis')}</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold text-green-400 mb-1">{t('solutions.arch.step2.elec')}</div>
                    <div className="text-xs text-slate-400">{t('solutions.arch.step2.analysis')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
