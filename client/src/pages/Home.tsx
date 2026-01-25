/**
 * FIND ME Official Website - Home Page
 * 
 * Design System: Urban Heatmap Modernism
 * - Primary: #FF453A (Brand Red)
 * - Secondary: #FF9F0A (Warm Orange)
 * - Background: #F5F5F7 (Apple Gray White)
 * - Foreground: #1D1D1F (Deep Gray Black)
 * 
 * Typography:
 * - Headings: Montserrat ExtraBold
 * - Body: Roboto Regular
 */

import { Button } from "@/components/ui/button";
import { MapPin, Users, ShoppingBag, Shield, ArrowRight, CheckCircle, Sparkles, Heart, Coffee, Utensils, Film, Music, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
} as const;

export default function Home() {
  const { t, language, setLanguage, dir } = useLanguage();
  
  return (
    <div className="min-h-screen bg-[#F5F5F7]" dir={dir}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF453A] to-[#FF9F0A] flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <span className="font-['Montserrat'] font-extrabold text-xl text-[#1D1D1F]">FIND ME</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-[#1D1D1F]/70 hover:text-[#FF453A] transition-colors font-medium">{t("nav.features")}</a>
            <a href="#advantages" className="text-[#1D1D1F]/70 hover:text-[#FF453A] transition-colors font-medium">{t("nav.advantages")}</a>
            <a href="#model" className="text-[#1D1D1F]/70 hover:text-[#FF453A] transition-colors font-medium">{t("nav.model")}</a>
            <a href="#contact" className="text-[#1D1D1F]/70 hover:text-[#FF453A] transition-colors font-medium">{t("nav.contact")}</a>
          </div>
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <Button
              variant="outline"
              size="sm"
              className="border-[#FF453A]/30 text-[#FF453A] hover:bg-[#FF453A]/10"
              onClick={() => setLanguage(language === 'zh' ? 'ug' : 'zh')}
            >
              {language === 'zh' ? 'ئۇيغۇرچە' : '中文'}
            </Button>
            <Button className="bg-[#FF453A] hover:bg-[#E03E33] text-white font-semibold px-6">
              {t("nav.cta")}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5F5F7] via-white to-[#FFF5F4]" />
        
        {/* Decorative circles */}
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-gradient-to-br from-[#FF453A]/10 to-[#FF9F0A]/10 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-gradient-to-br from-[#FF9F0A]/10 to-[#FF453A]/10 blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-[#FF453A]/20">
                <Sparkles className="w-4 h-4 text-[#FF453A]" />
                <span className="text-sm font-medium text-[#1D1D1F]">{t("hero.badge")}</span>
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="font-['Montserrat'] font-extrabold text-5xl md:text-6xl lg:text-7xl text-[#1D1D1F] leading-tight">
                {t("hero.title")}
                <span className="block text-gradient-brand">{t("hero.subtitle")}</span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-[#1D1D1F]/70 max-w-xl leading-relaxed">
                {t("hero.desc.1")}<span className="text-[#FF453A] font-semibold">{t("hero.desc.highlight")}</span>
                <br />
                {t("hero.desc.2")}
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-[#FF453A] hover:bg-[#E03E33] text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-lg shadow-[#FF453A]/30 hover:shadow-xl hover:shadow-[#FF453A]/40 transition-all">
                  {t("hero.btn.explore")}
                  <ArrowRight className={`w-5 h-5 ${dir === 'rtl' ? 'mr-2 rotate-180' : 'ml-2'}`} />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-[#1D1D1F]/20 text-[#1D1D1F] font-semibold px-8 py-6 text-lg rounded-xl hover:bg-[#1D1D1F]/5 transition-all">
                  {t("hero.btn.more")}
                </Button>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="font-['Montserrat'] font-bold text-3xl text-[#FF453A]">{t("hero.stat.1.value")}</div>
                  <div className="text-sm text-[#1D1D1F]/60">{t("hero.stat.1.label")}</div>
                </div>
                <div className="w-px h-12 bg-[#1D1D1F]/10" />
                <div className="text-center">
                  <div className="font-['Montserrat'] font-bold text-3xl text-[#FF453A]">{t("hero.stat.2.value")}</div>
                  <div className="text-sm text-[#1D1D1F]/60">{t("hero.stat.2.label")}</div>
                </div>
                <div className="w-px h-12 bg-[#1D1D1F]/10" />
                <div className="text-center">
                  <div className="font-['Montserrat'] font-bold text-3xl text-[#FF453A]">{t("hero.stat.3.value")}</div>
                  <div className="text-sm text-[#1D1D1F]/60">{t("hero.stat.3.label")}</div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Right: Hero Image */}
            <motion.div 
              initial={{ opacity: 0, x: dir === 'rtl' ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative">
                <img 
                  src="/images/hero-illustration.png" 
                  alt="FIND ME 地图社交概念图" 
                  className="w-full h-auto rounded-2xl"
                />
                {/* Floating cards */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className={`absolute ${dir === 'rtl' ? '-right-8' : '-left-8'} top-1/4 bg-white rounded-xl p-4 shadow-xl`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#FF453A]/10 flex items-center justify-center">
                      <Heart className="w-5 h-5 text-[#FF453A]" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#1D1D1F]">{t("hero.card.1.title")}</div>
                      <div className="text-sm text-[#1D1D1F]/60">{t("hero.card.1.desc")}</div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className={`absolute ${dir === 'rtl' ? '-left-4' : '-right-4'} bottom-1/3 bg-white rounded-xl p-4 shadow-xl`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#FF9F0A]/10 flex items-center justify-center">
                      <Coffee className="w-5 h-5 text-[#FF9F0A]" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#1D1D1F]">{t("hero.card.2.title")}</div>
                      <div className="text-sm text-[#FF453A] font-medium">{t("hero.card.2.desc")}</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Value Proposition */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.h2 variants={fadeInUp} className="font-['Montserrat'] font-extrabold text-4xl md:text-5xl text-[#1D1D1F] mb-6">
              {t("value.title.1")}  <span className="text-gradient-brand">{t("value.title.2")}</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-[#1D1D1F]/70">
              {t("value.subtitle")}
            </motion.p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                titleKey: "value.1.title",
                descKey: "value.1.desc",
                color: "#FF453A"
              },
              {
                icon: MapPin,
                titleKey: "value.2.title",
                descKey: "value.2.desc",
                color: "#FF9F0A"
              },
              {
                icon: ShoppingBag,
                titleKey: "value.3.title",
                descKey: "value.3.desc",
                color: "#FF453A"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                className="group relative bg-[#F5F5F7] rounded-2xl p-8 hover:bg-white hover:shadow-2xl hover:shadow-[#FF453A]/10 transition-all duration-500"
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <item.icon className="w-8 h-8" style={{ color: item.color }} />
                </div>
                <h3 className="font-['Montserrat'] font-bold text-2xl text-[#1D1D1F] mb-4">{t(item.titleKey)}</h3>
                <p className="text-[#1D1D1F]/70 leading-relaxed whitespace-pre-line">{t(item.descKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-[#F5F5F7]">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.h2 variants={fadeInUp} className="font-['Montserrat'] font-extrabold text-4xl md:text-5xl text-[#1D1D1F] mb-6">
              {t("features.title")}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-[#1D1D1F]/70">
              {t("features.subtitle")}
            </motion.p>
          </motion.div>
          
          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                titleKey: "features.1.title",
                subtitleKey: "features.1.subtitle",
                descKey: "features.1.desc",
                color: "#FF453A"
              },
              {
                icon: ShoppingBag,
                titleKey: "features.2.title",
                subtitleKey: "features.2.subtitle",
                descKey: "features.2.desc",
                color: "#FF9F0A"
              },
              {
                icon: Shield,
                titleKey: "features.3.title",
                subtitleKey: "features.3.subtitle",
                descKey: "features.3.desc",
                color: "#FF453A"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                className="bg-white rounded-2xl p-8 hover:shadow-2xl hover:shadow-[#FF453A]/10 transition-all duration-500"
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <item.icon className="w-8 h-8" style={{ color: item.color }} />
                </div>
                <h3 className="font-['Montserrat'] font-bold text-2xl text-[#1D1D1F] mb-1">{t(item.titleKey)}</h3>
                <div className="text-[#FF453A] font-medium mb-4">{t(item.subtitleKey)}</div>
                <p className="text-[#1D1D1F]/70 leading-relaxed whitespace-pre-line">{t(item.descKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section id="advantages" className="py-24 bg-[#1D1D1F] text-white">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.h2 variants={fadeInUp} className="font-['Montserrat'] font-extrabold text-4xl md:text-5xl mb-6">
              {t("advantages.title")}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-white/70">
              {t("advantages.subtitle")}
            </motion.p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { titleKey: "advantages.1.title", descKey: "advantages.1.desc", icon: Shield },
              { titleKey: "advantages.2.title", descKey: "advantages.2.desc", icon: MapPin },
              { titleKey: "advantages.3.title", descKey: "advantages.3.desc", icon: Users },
              { titleKey: "advantages.4.title", descKey: "advantages.4.desc", icon: ShoppingBag }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FF453A]/20 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-[#FF453A]" />
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl mb-3">{t(item.titleKey)}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{t(item.descKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section id="model" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.h2 variants={fadeInUp} className="font-['Montserrat'] font-extrabold text-4xl md:text-5xl text-[#1D1D1F] mb-6">
              {t("model.title")}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-[#1D1D1F]/70">
              {t("model.subtitle")}
            </motion.p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                titleKey: "model.1.title",
                subtitleKey: "model.1.subtitle",
                descKey: "model.1.desc",
                icon: Users
              },
              {
                titleKey: "model.2.title",
                subtitleKey: "model.2.subtitle",
                descKey: "model.2.desc",
                icon: ShoppingBag
              },
              {
                titleKey: "model.3.title",
                subtitleKey: "model.3.subtitle",
                descKey: "model.3.desc",
                icon: MapPin
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="relative bg-[#F5F5F7] rounded-2xl p-8"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#FF453A]/10 flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-[#FF453A]" />
                </div>
                <h3 className="font-['Montserrat'] font-bold text-3xl text-[#1D1D1F] mb-1">{t(item.titleKey)}</h3>
                <div className="text-[#FF453A] font-medium mb-4">{t(item.subtitleKey)}</div>
                <p className="text-[#1D1D1F]/70 leading-relaxed whitespace-pre-line">{t(item.descKey)}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-16 text-center"
          >
            <div className="inline-block bg-[#1D1D1F] text-white px-8 py-4 rounded-xl">
              <span className="text-xl font-medium">{t("model.conclusion")} </span>
              <span className="text-xl font-bold text-[#FF453A]">{t("model.conclusion.highlight")}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scene Categories */}
      <section className="py-24 bg-[#F5F5F7]">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.h2 variants={fadeInUp} className="font-['Montserrat'] font-extrabold text-4xl md:text-5xl text-[#1D1D1F] mb-6">
              {t("scenarios.title")}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-[#1D1D1F]/70">
              {t("scenarios.subtitle")}
            </motion.p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Coffee, labelKey: "scenario.1", color: "#8B4513" },
              { icon: Utensils, labelKey: "scenario.2", color: "#FF453A" },
              { icon: Film, labelKey: "scenario.3", color: "#1D1D1F" },
              { icon: Music, labelKey: "scenario.4", color: "#FF9F0A" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-xl hover:shadow-[#FF453A]/10 transition-all duration-300 group cursor-pointer"
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <item.icon className="w-8 h-8" style={{ color: item.color }} />
                </div>
                <div className="font-semibold text-[#1D1D1F]">{t(item.labelKey)}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/cta-bg.png" 
            alt="CTA Background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF453A] to-[#FF9F0A] opacity-90" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="font-['Montserrat'] font-extrabold text-4xl md:text-5xl text-white mb-6">
              {t("cta.title")}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-white/80 mb-10">
              {t("cta.subtitle")}
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-[#FF453A] hover:bg-white/90 font-semibold px-8 py-6 text-lg rounded-xl shadow-lg">
                {t("cta.btn.download")}
                <ArrowRight className={`w-5 h-5 ${dir === 'rtl' ? 'mr-2 rotate-180' : 'ml-2'}`} />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg rounded-xl">
                {t("cta.btn.merchant")}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1D1D1F] text-white py-16">
        <div className="container mx-auto px-6">
          {/* App 下载二维码区域 */}
          <div className="mb-12 pb-12 border-b border-white/10">
            <h3 className="font-['Montserrat'] font-bold text-2xl text-center mb-2">{t("footer.download.title")}</h3>
            <p className="text-white/60 text-center mb-8">{t("footer.download.subtitle")}</p>
            <div className="flex justify-center gap-12 flex-wrap">
              {/* iOS 下载 */}
              <div className="text-center">
                <div className="w-32 h-32 bg-white rounded-xl flex items-center justify-center mb-3 mx-auto">
                  <div className="text-[#1D1D1F] text-center">
                    <Smartphone className="w-8 h-8 mx-auto mb-1 text-[#FF453A]" />
                    <span className="text-xs font-medium">{t("footer.ios.qr")}</span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2 text-white/80">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <span className="font-medium">{t("footer.ios")}</span>
                </div>
                <p className="text-white/50 text-sm mt-1">{t("footer.ios.desc")}</p>
              </div>
              
              {/* Android 下载 */}
              <div className="text-center">
                <div className="w-32 h-32 bg-white rounded-xl flex items-center justify-center mb-3 mx-auto">
                  <div className="text-[#1D1D1F] text-center">
                    <Smartphone className="w-8 h-8 mx-auto mb-1 text-[#34C759]" />
                    <span className="text-xs font-medium">{t("footer.android.qr")}</span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2 text-white/80">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.523 15.341c-.5 0-.908.406-.908.908s.408.908.908.908c.5 0 .908-.406.908-.908s-.408-.908-.908-.908zm-11.046 0c-.5 0-.908.406-.908.908s.408.908.908.908c.5 0 .908-.406.908-.908s-.408-.908-.908-.908zm11.4-6.744l1.5-2.598c.084-.145.034-.33-.111-.414-.145-.084-.33-.034-.414.111l-1.52 2.633c-1.17-.533-2.484-.83-3.872-.83s-2.702.297-3.872.83l-1.52-2.633c-.084-.145-.269-.195-.414-.111-.145.084-.195.269-.111.414l1.5 2.598c-2.545 1.379-4.268 3.981-4.268 6.953h18.37c0-2.972-1.723-5.574-4.268-6.953z"/>
                  </svg>
                  <span className="font-medium">{t("footer.android")}</span>
                </div>
                <p className="text-white/50 text-sm mt-1">{t("footer.android.desc")}</p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF453A] to-[#FF9F0A] flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <span className="font-['Montserrat'] font-extrabold text-xl">FIND ME</span>
              </div>
              <p className="text-white/60 max-w-md leading-relaxed whitespace-pre-line">
                {t("footer.about")}
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">{t("footer.product")}</h4>
              <ul className="space-y-3 text-white/60">
                <li><a href="#features" className="hover:text-white transition-colors">{t("footer.product.features")}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t("footer.product.merchant")}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t("footer.product.download")}</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">{t("footer.contact")}</h4>
              <ul className="space-y-3 text-white/60">
                <li>qiwei.ji@faxianwo.me</li>
                <li>WeChat: JQW5958</li>
                <li>Tel: 18097665958</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/40">
            <p>{t("footer.copyright")}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
