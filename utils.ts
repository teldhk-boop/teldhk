import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, BatteryCharging, Globe, ShieldCheck, Zap, Play, Pause, Volume2, VolumeX, Maximize, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const CAROUSEL_IMAGES = [
  "https://lh7-rt.googleusercontent.com/docsz/AD_4nXcF6-uK4xL7bH4UCQREdURVyEIFV1TNRZRE1zA6fymAQFphNUGfS8U_ZskoAN8Wo_sQATVpLYj6h1306M04KUqTQcrPNgle3MzyhO2aixldvuDb7ZpYowjWdePOwpgFHLhDZSKPv94s3tcYPwrWOenGVPRtLpA?key=7ewXKUOIU8nU-qIj2J_ImQ",
  "https://lh7-rt.googleusercontent.com/docsz/AD_4nXehID14yTJsc25G57utZiP75JPm2RdqpC905eKnmFg9Fx5KplPRcIdzr8yMfazK8GslRSl4GJVAoFWiU3-H2rSDgwPttNPMJdcwzyax1rA_wJF1-470Ngp3jTJM-EZ3KZQbKHXH0Ws4XRrIT4eBAAlzReFNk1M?key=7ewXKUOIU8nU-qIj2J_ImQ",
  "https://lh7-rt.googleusercontent.com/docsz/AD_4nXftD_le42wYi2malubdgFsVuRl9vizOWcg0pQ6vIa8Y5I70wjm_TbrFnUlTuFE-MVZ4oGQSwd5UNLmGikWKeHTKMU2fi2Ag-YcoluZVYyMXjcwytFzWVGzbJoM6XvkXWd2jaLQHnq_HXGz_QPc7ZjchLUtX4yo?key=7ewXKUOIU8nU-qIj2J_ImQ",
  "https://lh7-rt.googleusercontent.com/docsz/AD_4nXcLsmh0lXIgiZHFAysyrty66xpaDH17aXMN9ZbXB5NzwYR8bw2KBvuI8hjCg1OOO72BZuV8l9Wk1aYpKoCM_uRT64w9Ly8rTIZo8FyqXGRtoAJuC8yRYm0NRCxlJZR2jWXY8C8CDFtw4YMgV4prRDDdrwNye3Y?key=7ewXKUOIU8nU-qIj2J_ImQ",
  "https://lh7-rt.googleusercontent.com/docsz/AD_4nXdz-WHSmr3hiZBAmk7o1QpWPKgACvA95FXHLjB_o1-yEN8s_m4Z9XCPD1PVEYQMiNNqfPXhosLu-du8l6yuQhwJhRP7Eh4fMrs_yjOttfHobqsEf_ce0_WHHtzDCLwhADTxXFqCLOeVdtgfUM4b1k40Y4hpqQ?key=7ewXKUOIU8nU-qIj2J_ImQ",
  "https://lh7-rt.googleusercontent.com/docsz/AD_4nXc4_5TiqJ0O24Ud_xJFesReXox1XQcx-c1794FdPMQ3DSoah-dcy9-IgHqkRczZ1rTbDBk0JtKD-v5rq8DoBcsBjxePKiwBhmBURKIhWpKVdIWM-c79iDwepx5b_EDa7cyr_H1FnK_-mU3cdakwYLA7wqgmvtk?key=7ewXKUOIU8nU-qIj2J_ImQ",
  "https://lh7-rt.googleusercontent.com/docsz/AD_4nXf2K0db7UeoDjb8WzAfak9CoPgVLfcLl_DbE6j8ZQqHSFvkr6m1Iz3zffH7L9lpv-Q4TBSNzaHnEXR7g_AA5HnH0rTwUr8DQy8wtXmb9q-ay9ek5-tZOZ51-c-I-Ihp7jyd_cHEAGy7JVIZzgec2RWGPsSbUY8?key=7ewXKUOIU8nU-qIj2J_ImQ",
  "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfp3kGuXa5zv_GaSn6EU5-TKOpsB_DPx03u98n9qLHuIp7wckj6537Zl2k9bcmwCkz6Mg1b251tJOYiQVJWA7Ok7EfFZXfjGgPbHKIx4T_Bh1xsmAbg1sf9KEYQOS65kIWP-zeRqEGK3in6cL2PpY8FiSENdcs?key=7ewXKUOIU8nU-qIj2J_ImQ",
  "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfopnjTKvoRsKQdaLH3caIZP_mXII1gV4AKkGkMQa7CJGKwhh3HQd1_6ZHXA53vq75qVbJjkVtfaosCHssV-LMfo8lrCy1pBzyGwTX4AMXGuc_lWw8hnRORtop0JdQDXQzLckZ_0_TUDxEWbzjH6gJcSlkcrik?key=7ewXKUOIU8nU-qIj2J_ImQ"
];

export default function Home() {
  const { t, language } = useLanguage();
  const bgVideoRef = useRef<HTMLVideoElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Auto-scroll carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((prev) => (prev + 3 >= CAROUSEL_IMAGES.length ? 0 : prev + 3));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev + 3 >= CAROUSEL_IMAGES.length ? 0 : prev + 3));
  };

  const prevSlide = () => {
    setCarouselIndex((prev) => (prev - 3 < 0 ? Math.floor((CAROUSEL_IMAGES.length - 1) / 3) * 3 : prev - 3));
  };

  const handleBgTimeUpdate = () => {
    if (bgVideoRef.current) {
      if (bgVideoRef.current.currentTime >= 253) {
        bgVideoRef.current.currentTime = 240;
        bgVideoRef.current.play().catch(() => {});
      }
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && Number.isFinite(videoRef.current.duration) && videoRef.current.duration > 0) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      setProgress((current / duration) * 100);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current && Number.isFinite(videoRef.current.duration) && videoRef.current.duration > 0) {
      const seekTo = (parseFloat(e.target.value) / 100) * videoRef.current.duration;
      videoRef.current.currentTime = seekTo;
      setProgress(parseFloat(e.target.value));
    }
  };

  const toggleFullScreen = () => {
    if (containerRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        containerRef.current.requestFullscreen();
      }
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video 
            ref={bgVideoRef}
            autoPlay 
            muted 
            loop
            playsInline 
            onTimeUpdate={handleBgTimeUpdate}
            onLoadedMetadata={() => {
              if (bgVideoRef.current) {
                bgVideoRef.current.currentTime = 240;
                bgVideoRef.current.play().catch(() => {});
              }
            }}
            className={`absolute inset-0 w-full h-full object-cover ${language === 'en' ? 'scale-[1.8] object-center' : 'scale-[1.35] object-center'}`}
          >
            <source src="https://cdn-cf-east.streamable.com/video/mp4/55qnux.mp4?Expires=1772471506183&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ&Signature=Mm53Vf1luR8JkhXn6ryvbDY5w4iIQaKzkHlyS4ejzYnASt8x3uwpyvToTT-4FWJBw88mfVCsoOnL1BJgPQsnWlNGq-QBxOzAPtPd18poAcj2WABIclrKu1uDbCjK708G3C9EjOMaRSzN0y1AX1Kc8aJwuGDRtVRAO8uK0329CbXqAju9491zWj7~xDuzPVLMEdtGBn0qtZ3PFzhRs1V0HG8Ere61z7Ssj-SwTUUTlW~XFlmwMUZ94I42VHQ1wah41G5~LRN9FTZ8vt~i21D6880hVLRS25iUNrLtSA1zM0-irLn4nawg1v8kyilo0nc3SLmDufMGNF5fGqO41RZt-w__#t=240,253" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`max-w-3xl ${language === 'en' ? 'mt-32 lg:mt-48' : ''}`}
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              {t('home.hero.title1')}<br />
              <span className="text-blue-400">{t('home.hero.title2')}</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              {t('home.hero.desc')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all flex items-center gap-2 shadow-lg shadow-blue-600/30">
                {t('home.hero.btn.products')} <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-lg font-semibold transition-all">
                {t('home.hero.btn.contact')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="w-full bg-black">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-[21/9] overflow-hidden bg-black group"
          ref={containerRef}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <video 
            ref={videoRef}
            className="w-full h-full object-cover object-[center_85%] cursor-pointer"
            autoPlay
            muted
            loop
            playsInline
            onTimeUpdate={handleTimeUpdate}
            onClick={togglePlay}
          >
            <source src="https://cdn-cf-east.streamable.com/video/mp4/55qnux.mp4?Expires=1772471506183&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ&Signature=Mm53Vf1luR8JkhXn6ryvbDY5w4iIQaKzkHlyS4ejzYnASt8x3uwpyvToTT-4FWJBw88mfVCsoOnL1BJgPQsnWlNGq-QBxOzAPtPd18poAcj2WABIclrKu1uDbCjK708G3C9EjOMaRSzN0y1AX1Kc8aJwuGDRtVRAO8uK0329CbXqAju9491zWj7~xDuzPVLMEdtGBn0qtZ3PFzhRs1V0HG8Ere61z7Ssj-SwTUUTlW~XFlmwMUZ94I42VHQ1wah41G5~LRN9FTZ8vt~i21D6880hVLRS25iUNrLtSA1zM0-irLn4nawg1v8kyilo0nc3SLmDufMGNF5fGqO41RZt-w__" type="video/mp4" />
            {t('home.video.unsupported')}
          </video>

          {/* Custom Controls Overlay */}
          <div className={`absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent px-6 py-8 transition-opacity duration-300 flex flex-col gap-4 ${isHovering || !isPlaying ? 'opacity-100' : 'opacity-0'}`}>
            {/* Progress Bar */}
            <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden cursor-pointer relative group/progress">
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={progress || 0} 
                onChange={handleSeek}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
              <div 
                className="h-full bg-blue-500 rounded-full pointer-events-none group-hover/progress:bg-blue-400 transition-colors"
                style={{ width: `${progress}%` }}
              />
            </div>
            
            {/* Controls */}
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center gap-6">
                <button onClick={togglePlay} className="hover:text-blue-400 transition-colors focus:outline-none">
                  {isPlaying ? <Pause size={28} fill="currentColor" /> : <Play size={28} fill="currentColor" />}
                </button>
                <button onClick={toggleMute} className="hover:text-blue-400 transition-colors focus:outline-none">
                  {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                </button>
              </div>
              <button onClick={toggleFullScreen} className="hover:text-blue-400 transition-colors focus:outline-none">
                <Maximize size={24} />
              </button>
            </div>
          </div>
          
          {/* Big Center Play Button (shows when paused) */}
          {!isPlaying && (
            <div 
              className="absolute inset-0 flex items-center justify-center cursor-pointer"
              onClick={togglePlay}
            >
              <div className="w-20 h-20 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 hover:bg-black/60 hover:scale-110 transition-all duration-300 shadow-2xl">
                <Play size={40} fill="currentColor" className="ml-2" />
              </div>
            </div>
          )}
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{t('home.why.title')}</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              {t('home.why.desc')}
            </p>
          </div>

          {/* 3D Tech Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {[
              { label: t('home.stat.cities'), value: t('home.stat.cities.value'), color: "from-blue-500 to-cyan-400" },
              { label: t('home.stat.piles'), value: t('home.stat.piles.value'), color: "from-emerald-500 to-teal-400" },
              { label: t('home.stat.market'), value: t('home.stat.market.value'), sub: t('home.stat.market.unit'), color: "from-indigo-500 to-purple-400" },
              { label: t('home.stat.users'), value: t('home.stat.users.value'), color: "from-orange-500 to-amber-400" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30, rotateX: 20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                className="relative group perspective-1000"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl blur-xl -z-10" />
                <div className="relative h-full p-8 bg-white rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 transform-gpu group-hover:-translate-y-2 group-hover:rotate-x-12 flex flex-col items-center justify-center text-center">
                  <div className={`inline-block text-transparent bg-clip-text bg-gradient-to-r ${stat.color} text-4xl md:text-5xl font-black tracking-tight mb-3 drop-shadow-sm`}>
                    {stat.value}
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <div className="text-slate-500 font-semibold tracking-wide uppercase text-sm">{stat.label}</div>
                    {stat.sub && <span className="text-slate-400 text-xs bg-slate-100 px-2 py-0.5 rounded-full">{stat.sub}</span>}
                  </div>
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-white/40 to-transparent rounded-tr-2xl pointer-events-none" />
                  <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl`} />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-12 h-12 text-blue-500" />,
                title: t('home.feature1.title'),
                desc: t('home.feature1.desc')
              },
              {
                icon: <Zap className="w-12 h-12 text-blue-500" />,
                title: t('home.feature2.title'),
                desc: t('home.feature2.desc')
              },
              {
                icon: <ShieldCheck className="w-12 h-12 text-blue-500" />,
                title: t('home.feature3.title'),
                desc: t('home.feature3.desc')
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100"
              >
                <div className="mb-6 bg-blue-50 w-20 h-20 rounded-2xl flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Image Carousel */}
          <div className="relative max-w-7xl mx-auto mt-24 px-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-slate-900">{t('home.partners.title')}</h2>
            </div>
            <div className="overflow-hidden py-8">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${(carouselIndex / 3) * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(CAROUSEL_IMAGES.length / 3) }).map((_, groupIndex) => (
                  <div key={groupIndex} className="w-full min-w-full flex-shrink-0 flex justify-center gap-6 px-4">
                    {[0, 1, 2].map(offset => {
                      const imgIndex = groupIndex * 3 + offset;
                      if (imgIndex >= CAROUSEL_IMAGES.length) {
                        return null;
                      }
                      return (
                        <div key={offset} className="w-[calc(33.333%-1rem)] flex-shrink-0 flex items-center justify-center h-40 md:h-56">
                          <img 
                            src={CAROUSEL_IMAGES[imgIndex]} 
                            alt="全球戰略合作夥伴" 
                            className="w-full h-full object-contain mix-blend-multiply scale-110"
                            style={{ imageRendering: 'high-quality' }}
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: Math.ceil(CAROUSEL_IMAGES.length / 3) }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCarouselIndex(idx * 3)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    Math.floor(carouselIndex / 3) === idx ? 'bg-blue-600' : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2072&auto=format&fit=crop" 
            alt="EV Charging Station" 
            className="w-full h-full object-cover"
            style={{ imageRendering: 'high-quality' }}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-blue-900/80 mix-blend-multiply" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">{t('home.cta.title')}</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            {t('home.cta.desc')}
          </p>
          <Link to="/contact" className="inline-block bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl hover:scale-105 transform duration-200">
            {t('home.cta.btn')}
          </Link>
        </div>
      </section>
    </div>
  );
}
