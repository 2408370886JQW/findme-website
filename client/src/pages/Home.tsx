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
import { MapPin, Users, ShoppingBag, Shield, ArrowRight, CheckCircle, Sparkles, Heart, Coffee, Utensils, Film, Music } from "lucide-react";
import { motion } from "framer-motion";

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
  return (
    <div className="min-h-screen bg-[#F5F5F7]">
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
            <a href="#features" className="text-[#1D1D1F]/70 hover:text-[#FF453A] transition-colors font-medium">核心功能</a>
            <a href="#advantages" className="text-[#1D1D1F]/70 hover:text-[#FF453A] transition-colors font-medium">竞争优势</a>
            <a href="#model" className="text-[#1D1D1F]/70 hover:text-[#FF453A] transition-colors font-medium">商业模式</a>
            <a href="#contact" className="text-[#1D1D1F]/70 hover:text-[#FF453A] transition-colors font-medium">联系我们</a>
          </div>
          <Button className="bg-[#FF453A] hover:bg-[#E03E33] text-white font-semibold px-6">
            立即体验
          </Button>
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
                <span className="text-sm font-medium text-[#1D1D1F]">地图社交 × 本地生活</span>
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="font-['Montserrat'] font-extrabold text-5xl md:text-6xl lg:text-7xl text-[#1D1D1F] leading-tight">
                FIND ME
                <span className="block text-gradient-brand">发现我</span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-[#1D1D1F]/70 max-w-xl leading-relaxed">
                重构社交与消费的<span className="text-[#FF453A] font-semibold">真实连接</span>
                <br />
                用地图打造本地生活的完整闭环
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-[#FF453A] hover:bg-[#E03E33] text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-lg shadow-[#FF453A]/30 hover:shadow-xl hover:shadow-[#FF453A]/40 transition-all">
                  开始探索
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-[#1D1D1F]/20 text-[#1D1D1F] font-semibold px-8 py-6 text-lg rounded-xl hover:bg-[#1D1D1F]/5 transition-all">
                  了解更多
                </Button>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="font-['Montserrat'] font-bold text-3xl text-[#FF453A]">100%</div>
                  <div className="text-sm text-[#1D1D1F]/60">真实身份验证</div>
                </div>
                <div className="w-px h-12 bg-[#1D1D1F]/10" />
                <div className="text-center">
                  <div className="font-['Montserrat'] font-bold text-3xl text-[#FF453A]">85%</div>
                  <div className="text-sm text-[#1D1D1F]/60">线下活跃度</div>
                </div>
                <div className="w-px h-12 bg-[#1D1D1F]/10" />
                <div className="text-center">
                  <div className="font-['Montserrat'] font-bold text-3xl text-[#FF453A]">3.5x</div>
                  <div className="text-sm text-[#1D1D1F]/60">转化率提升</div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Right: Hero Image */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
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
                  className="absolute -left-8 top-1/4 bg-white rounded-xl p-4 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#FF453A]/10 flex items-center justify-center">
                      <Heart className="w-5 h-5 text-[#FF453A]" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#1D1D1F]">新朋友匹配</div>
                      <div className="text-sm text-[#1D1D1F]/60">距离你 500m</div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-4 bottom-1/3 bg-white rounded-xl p-4 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#FF9F0A]/10 flex items-center justify-center">
                      <Coffee className="w-5 h-5 text-[#FF9F0A]" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#1D1D1F]">精选咖啡厅</div>
                      <div className="text-sm text-[#FF453A] font-medium">8折优惠</div>
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
              三维融合  <span className="text-gradient-brand">完整闭环</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-[#1D1D1F]/70">
              社交 × 地图 × 消费   从认识到体验的一站式解决方案
            </motion.p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "真实社交",
                description: "100%真实身份验证\n85%线下活跃度保障\n告别虚假社交",
                color: "#FF453A"
              },
              {
                icon: MapPin,
                title: "地图发现",
                description: "基于位置的社交发现\n让你找到身边志同道合的朋友",
                color: "#FF9F0A"
              },
              {
                icon: ShoppingBag,
                title: "精选消费",
                description: "严选本地优质商家\n社交场景下的精准推荐\n不踩雷",
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
                <h3 className="font-['Montserrat'] font-bold text-2xl text-[#1D1D1F] mb-4">{item.title}</h3>
                <p className="text-[#1D1D1F]/70 leading-relaxed whitespace-pre-line">{item.description}</p>
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
              核心功能
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-[#1D1D1F]/70">
              打造从认识到体验的完整用户旅程
            </motion.p>
          </motion.div>
          
          {/* Feature 1: Map Social */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="grid lg:grid-cols-2 gap-12 items-center mb-24"
          >
            <div className="order-2 lg:order-1">
              <img 
                src="/images/feature-social.png" 
                alt="地图社交功能" 
                className="w-full max-w-md mx-auto"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#FF453A]/10 px-4 py-2 rounded-full">
                <MapPin className="w-4 h-4 text-[#FF453A]" />
                <span className="text-sm font-semibold text-[#FF453A]">地图社交</span>
              </div>
              <h3 className="font-['Montserrat'] font-bold text-3xl text-[#1D1D1F]">
                发现身边的有趣灵魂
              </h3>
              <p className="text-lg text-[#1D1D1F]/70 leading-relaxed">
                基于地图的社交发现，让你看到周围真实存在的人。<br />
                不再是冰冷的资料卡片，而是活生生的、就在你身边的朋友。
              </p>
              <ul className="space-y-3">
                {["实时位置展示，发现附近的人", "兴趣标签匹配，找到志同道合", "安全距离设置，保护个人隐私"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#FF453A]" />
                    <span className="text-[#1D1D1F]/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          
          {/* Feature 2: Curated Deals */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="grid lg:grid-cols-2 gap-12 items-center mb-24"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#FF9F0A]/10 px-4 py-2 rounded-full">
                <ShoppingBag className="w-4 h-4 text-[#FF9F0A]" />
                <span className="text-sm font-semibold text-[#FF9F0A]">精选团购</span>
              </div>
              <h3 className="font-['Montserrat'] font-bold text-3xl text-[#1D1D1F]">
                社交场景下的完美落地
              </h3>
              <p className="text-lg text-[#1D1D1F]/70 leading-relaxed">
                当你和新朋友聊得火热，准备见面时，我们为你精选了最适合的场所。<br />
                不是海量选择让你迷茫，而是精准推荐让你安心。
              </p>
              <ul className="space-y-3">
                {["严选优质商家，拒绝踩雷", "情侣/闺蜜/兄弟专属套餐", "一键下单，无缝衔接"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#FF9F0A]" />
                    <span className="text-[#1D1D1F]/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img 
                src="/images/feature-deals.png" 
                alt="精选团购功能" 
                className="w-full max-w-md mx-auto"
              />
            </div>
          </motion.div>
          
          {/* Feature 3: Trust & Safety */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 lg:order-1">
              <img 
                src="/images/feature-trust.png" 
                alt="信任与安全" 
                className="w-full max-w-md mx-auto"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#FF453A]/10 px-4 py-2 rounded-full">
                <Shield className="w-4 h-4 text-[#FF453A]" />
                <span className="text-sm font-semibold text-[#FF453A]">信任保障</span>
              </div>
<h3 className="font-['Montserrat'] font-bold text-3xl text-[#1D1D1F]">
                选得舒心，买得放心，用得安心
              </h3>
              <p className="text-lg text-[#1D1D1F]/70 leading-relaxed">
                100%真实身份验证，严格的商家准入标准。<br />
                我们不追求“便宜”，我们追求“不踩雷”。
              </p>
              <ul className="space-y-3">
                {["实名认证，杜绝虚假身份", "商家严选，品质有保障", "售后无忧，问题秒解决"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#FF453A]" />
                    <span className="text-[#1D1D1F]/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
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
              为什么选择 <span className="text-[#FF453A]">FIND ME</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-white/70">
              不是 COPY 美团  而是社交场景下的本地生活
            </motion.p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Comparison Card */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <div className="text-white/50 text-sm font-medium mb-4">传统团购平台</div>
              <h3 className="font-['Montserrat'] font-bold text-2xl mb-6">美团模式</h3>
              <ul className="space-y-4">
                {[
                  "泛商城，海量选择",
                  "核心价值：便宜",
                  "用户需要自己筛选",
                  "与社交场景割裂"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/60">
                    <div className="w-2 h-2 rounded-full bg-white/30" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
              className="bg-gradient-to-br from-[#FF453A] to-[#FF9F0A] rounded-2xl p-8 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                推荐
              </div>
              <div className="text-white/80 text-sm font-medium mb-4">地图社交平台</div>
              <h3 className="font-['Montserrat'] font-bold text-2xl mb-6">FIND ME 模式</h3>
              <ul className="space-y-4">
                {[
                  "精选推荐，场景匹配",
                  "核心价值：不踩雷",
                  "平台帮你严格筛选",
                  "社交场景无缝衔接"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white">
                    <CheckCircle className="w-5 h-5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
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
              三个关键词
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-[#1D1D1F]/70">
              入口 · 场景 · 闭环
            </motion.p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "入口",
                subtitle: "Entrance",
                description: "地图社交是本地生活的最佳入口。用户来地图是为了认识人、见面，这是最真实的需求起点。"
              },
              {
                number: "02",
                title: "场景",
                subtitle: "Scene",
                description: "团购是社交场景的完美落地。见面就需要场景、就一定会消费，这是最自然的转化路径。"
              },
              {
                number: "03",
                title: "闭环",
                subtitle: "Closed Loop",
                description: "从认识到体验的完整闭环。解决'去哪里、买什么、怎么选'，这是最完整的价值链条。"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="relative"
              >
                <div className="font-['Montserrat'] font-black text-8xl text-[#FF453A]/10 absolute -top-4 -left-2">
                  {item.number}
                </div>
                <div className="relative pt-12 pl-4">
                  <h3 className="font-['Montserrat'] font-bold text-3xl text-[#1D1D1F] mb-1">{item.title}</h3>
                  <div className="text-[#FF453A] font-medium mb-4">{item.subtitle}</div>
                  <p className="text-[#1D1D1F]/70 leading-relaxed">{item.description}</p>
                </div>
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
              <span className="text-xl font-medium">做社交 → </span>
              <span className="text-xl font-bold text-[#FF453A]">天然就是做本地生活</span>
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
              丰富的社交场景
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-[#1D1D1F]/70">
              无论是约会、闺蜜聚会还是兄弟小酌  我们都有完美方案
            </motion.p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Coffee, label: "咖啡约会", color: "#8B4513" },
              { icon: Utensils, label: "美食探店", color: "#FF453A" },
              { icon: Film, label: "电影之夜", color: "#1D1D1F" },
              { icon: Music, label: "音乐现场", color: "#FF9F0A" }
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
                <div className="font-semibold text-[#1D1D1F]">{item.label}</div>
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
              准备好开始你的探索了吗？
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-white/80 mb-10">
              加入 FIND ME  发现身边的精彩世界
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-[#FF453A] hover:bg-white/90 font-semibold px-8 py-6 text-lg rounded-xl shadow-lg">
                立即下载 App
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg rounded-xl">
                商家入驻
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1D1D1F] text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF453A] to-[#FF9F0A] flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <span className="font-['Montserrat'] font-extrabold text-xl">FIND ME</span>
              </div>
              <p className="text-white/60 max-w-md leading-relaxed">
                FIND ME 是一款创新的地图社交应用，致力于重构社交与消费的真实连接，让每一次相遇都有完美的落地场景。
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">产品</h4>
              <ul className="space-y-3 text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">核心功能</a></li>
                <li><a href="#" className="hover:text-white transition-colors">商家入驻</a></li>
                <li><a href="#" className="hover:text-white transition-colors">下载 App</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">联系我们</h4>
              <ul className="space-y-3 text-white/60">
                <li>qiwei.ji@faxianwo.me</li>
                <li>WeChat: JQW5958</li>
                <li>Tel: 18097665958</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/40">
            <p>© 2025 FIND ME. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
