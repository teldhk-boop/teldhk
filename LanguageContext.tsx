import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const email = formData.get('email');
    const message = formData.get('message');
    
    const subject = encodeURIComponent(t('contact.form.subject').replace('{name}', name as string));
    const body = encodeURIComponent(t('contact.form.body').replace('{name}', name as string).replace('{phone}', phone as string).replace('{email}', email as string).replace('{message}', message as string));
    
    window.location.href = `mailto:teldhk@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">{t('contact.title')}</h1>
          <p className="text-xl text-slate-600">
            {t('contact.desc')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">{t('contact.info.title')}</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">{t('contact.info.phone')}</h3>
                  <a href="tel:+85264057279" className="text-lg text-blue-600 font-bold hover:underline">
                    +852 6405 7279
                  </a>
                  <p className="text-sm text-slate-500 mt-1">{t('contact.info.phone.desc')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600 flex-shrink-0">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">{t('contact.info.whatsapp')}</h3>
                  <a href="https://wa.me/85264057279" target="_blank" rel="noopener noreferrer" className="text-lg text-green-600 font-bold hover:underline">
                    +852 6405 7279
                  </a>
                  <p className="text-sm text-slate-500 mt-1">{t('contact.info.whatsapp.desc')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="text-blue-600">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">{t('contact.info.facebook')}</h3>
                  <a href="https://www.facebook.com/profile.php?id=61583207774081" target="_blank" rel="noopener noreferrer" className="text-lg text-blue-600 font-bold hover:underline">
                    {t('brand.name')}
                  </a>
                  <p className="text-sm text-slate-500 mt-1">{t('contact.info.facebook.desc')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">{t('contact.info.email')}</h3>
                  <a href="mailto:teldhk@gmail.com" className="text-lg text-blue-600 font-bold hover:underline">
                    teldhk@gmail.com
                  </a>
                  <p className="text-sm text-slate-500 mt-1">{t('contact.info.email.desc')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{t('contact.form.title')}</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">{t('contact.form.name')}</label>
                <input name="name" type="text" required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder={t('contact.form.name.placeholder')} />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">{t('contact.form.phone')}</label>
                <input name="phone" type="tel" required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder={t('contact.form.phone.placeholder')} />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">{t('contact.form.email')}</label>
                <input name="email" type="email" required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder={t('contact.form.email.placeholder')} />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">{t('contact.form.message')}</label>
                <textarea name="message" required rows={4} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder={t('contact.form.message.placeholder')}></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
                {t('contact.form.submit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
