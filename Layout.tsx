import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const carouselImages = [
    "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfIiOd5OduzajaOyXHcq7SiLqx8r39h_ttKFeHB0AXhYXHhZ_Z6VCC7vbafJoF4JvkxQvY0nW17nwIupU8lf7MKozZyhfaipv4SUDox58_Lyxk-VBhJFjO3mnS15onON6J4QN7KJKx5T8uCgYKq3RMYrxf6zg?key=7ewXKUOIU8nU-qIj2J_ImQ",
    "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfymqRVxABnpLqTGqN0CO1WLFiw_xis-n6pPgySgKqNvkLiR0UgL1DBuTU0Xkn7rWN4B9lJu385dee7Dbteg88gZNxz9BuJyQJa_V71We5j0JvhcaaKnrdTlO7jjgvpdiLWDW_3FT7p00kyKSCQloBcUMqDr0c?key=7ewXKUOIU8nU-qIj2J_ImQ",
    "https://lh7-rt.googleusercontent.com/docsz/AD_4nXdIpFxef8QQyGmFJMhDxLSMggmgLgqln-1l1CYdvf6GLng2tW2vDTt69H_KGlIRikPhlpJCqLi0e6NFcUKHeaJuibeMwDQSfoIQx5by8KwbappyqWqVdPZjVDceE7A-ZnaCL8tx_oTBFZiYvDX1pETkfrwOvQ?key=7ewXKUOIU8nU-qIj2J_ImQ",
    "https://lh7-rt.googleusercontent.com/docsz/AD_4nXc7zl-JZ8kLEiRaZMTDYAmETfRGV1I0sIB0RJG_HWy1OirSzAsJdOHIbavOWJFRjwLl86AQLZHG1-FFU7-b9wSquCbcHYnZ06LxK2nO8xHoUKF9TdVXewA5OL0GLHs56libTN_Ej8CFWyWfRUdBj6IPH0Rrww?key=7ewXKUOIU8nU-qIj2J_ImQ",
    "https://lh7-rt.googleusercontent.com/docsz/AD_4nXdMErsPjsvI3Iu98PzWk6KJD7Dt37p3rqaItQmiwQ9-w2A7NqZDvSRNYf8NgPXJDJBjgYWVPNpnTt865q3ZhiiK7wRHGHBGA-gtjJHoDXsycP0yVAYbcBphBq6MQxW6R7q_TN4zVB4KWLWU3fxBqaPAwYSPbOM?key=7ewXKUOIU8nU-qIj2J_ImQ"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl font-bold text-slate-900 mb-6">{t('about.title')}</h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                {t('about.desc')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={carouselImages[currentImageIndex]}
                  alt={`TELD About ${currentImageIndex + 1}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              
              {/* Indicators */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                {carouselImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentImageIndex ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/80'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{t('about.overview.title')}</h2>
            <div className="prose prose-slate text-slate-600">
              <p className="mb-4">
                {t('about.overview.p1')}
              </p>
              <p className="mb-4">
                {t('about.overview.p2')}
              </p>
              <p className="mb-4">
                {t('about.overview.p3')}
              </p>
              <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">{t('about.tech.title')}</h3>
              <p className="mb-4">
                {t('about.tech.p1')}
              </p>
              <p>
                {t('about.tech.p2')}
              </p>
            </div>
          </div>
          
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-6">{t('about.mission.title')}</h3>
            <blockquote className="text-lg font-medium text-blue-600 mb-6 italic">
              {t('about.mission.quote')}
            </blockquote>
            <p className="text-slate-600 mb-8">
              {t('about.mission.en')}
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-green-500 mt-1 flex-shrink-0" />
                <span className="text-slate-700">{t('about.mission.item1')}</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-green-500 mt-1 flex-shrink-0" />
                <span className="text-slate-700">{t('about.mission.item2')}</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-green-500 mt-1 flex-shrink-0" />
                <span className="text-slate-700">{t('about.mission.item3')}</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-green-500 mt-1 flex-shrink-0" />
                <span className="text-slate-700">{t('about.mission.item4')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
