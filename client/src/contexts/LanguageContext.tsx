import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'zh' | 'ug';

type Translations = {
  [key in Language]: {
    [key: string]: string;
  };
};

const translations: Translations = {
  zh: {
    // Navigation
    "nav.features": "核心功能",
    "nav.advantages": "竞争优势",
    "nav.model": "商业模式",
    "nav.contact": "联系我们",
    "nav.cta": "立即体验",
    
    // Hero Section
    "hero.badge": "地图社交 × 本地生活",
    "hero.title": "FIND ME",
    "hero.subtitle": "发现我",
    "hero.desc.1": "重构社交与消费的",
    "hero.desc.highlight": "真实连接",
    "hero.desc.2": "用地图打造本地生活的完整闭环",
    "hero.btn.explore": "开始探索",
    "hero.btn.more": "了解更多",
    "hero.stat.1.value": "100%",
    "hero.stat.1.label": "真实身份验证",
    "hero.stat.2.value": "85%",
    "hero.stat.2.label": "线下活跃度",
    "hero.stat.3.value": "3.5x",
    "hero.stat.3.label": "转化率提升",
    "hero.card.1.title": "新朋友匹配",
    "hero.card.1.desc": "距离你 500m",
    "hero.card.2.title": "精选咖啡厅",
    "hero.card.2.desc": "8折优惠",
    
    // Core Value Section
    "value.title.1": "三维融合",
    "value.title.2": "完整闭环",
    "value.subtitle": "社交 × 地图 × 消费   从认识到体验的一站式解决方案",
    "value.1.title": "真实社交",
    "value.1.desc": "100%真实身份验证\n85%线下活跃度保障\n告别虚假社交",
    "value.2.title": "地图发现",
    "value.2.desc": "基于位置的社交发现\n让你找到身边志同道合的朋友",
    "value.3.title": "精选消费",
    "value.3.desc": "严选本地优质商家\n社交场景下的精准推荐\n不踩雷",
    
    // Features Section
    "features.title": "核心功能",
    "features.subtitle": "为真实社交而生的创新功能",
    "features.1.title": "地图社交",
    "features.1.subtitle": "Map Social",
    "features.1.desc": "基于实时位置发现附近的人\n查看共同兴趣与活动轨迹\n让相遇更自然、更有温度",
    "features.2.title": "场景推荐",
    "features.2.subtitle": "Smart Venue",
    "features.2.desc": "AI智能匹配约会场景\n根据双方偏好推荐最佳去处\n让每次相遇都有完美落地",
    "features.3.title": "安全认证",
    "features.3.subtitle": "Verified",
    "features.3.desc": "多维度真实身份验证\n社交行为信用评分\n让社交更安心、更放心",
    
    // Advantages Section
    "advantages.title": "竞争优势",
    "advantages.subtitle": "为什么选择 FIND ME",
    "advantages.1.title": "真实性保障",
    "advantages.1.desc": "100%真实身份验证，85%线下活跃度保障，告别虚假社交",
    "advantages.2.title": "场景闭环",
    "advantages.2.desc": "从认识到约会的完整闭环，让每次相遇都有完美的落地场景",
    "advantages.3.title": "精准匹配",
    "advantages.3.desc": "基于位置、兴趣、行为的多维度匹配，让相遇更有质量",
    "advantages.4.title": "商业生态",
    "advantages.4.desc": "严选本地优质商家，社交场景下的精准推荐，实现三方共赢",
    
    // Business Model Section
    "model.title": "商业模式",
    "model.subtitle": "社交即消费  连接即价值",
    "model.1.title": "C端用户",
    "model.1.subtitle": "User",
    "model.1.desc": "免费使用基础功能\n付费解锁高级特权\n会员订阅制",
    "model.2.title": "B端商家",
    "model.2.subtitle": "Merchant",
    "model.2.desc": "精准流量导入\n场景化营销工具\n佣金+广告收入",
    "model.3.title": "平台价值",
    "model.3.subtitle": "Platform",
    "model.3.desc": "社交数据沉淀\n消费行为洞察\n本地生活生态",
    "model.conclusion": "做社交 →",
    "model.conclusion.highlight": "天然就是做本地生活",
    
    // Scenarios Section
    "scenarios.title": "丰富的社交场景",
    "scenarios.subtitle": "无论是约会、闺蜜聚会还是兄弟小酌  我们都有完美方案",
    "scenario.1": "咖啡约会",
    "scenario.2": "美食探店",
    "scenario.3": "电影之夜",
    "scenario.4": "音乐现场",
    
    // CTA Section
    "cta.title": "准备好开始你的探索了吗？",
    "cta.subtitle": "加入 FIND ME  发现身边的精彩世界",
    "cta.btn.download": "立即下载 App",
    "cta.btn.merchant": "商家入驻",
    
    // Footer
    "footer.download.title": "立即下载 FIND ME",
    "footer.download.subtitle": "扫码下载  开启你的探索之旅",
    "footer.ios": "App Store",
    "footer.ios.desc": "iPhone / iPad",
    "footer.ios.qr": "iOS 二维码",
    "footer.android": "安卓下载",
    "footer.android.desc": "Android 手机",
    "footer.android.qr": "Android 二维码",
    "footer.about": "FIND ME 是一款创新的地图社交应用\n致力于重构社交与消费的真实连接\n让每一次相遇都有完美的落地场景",
    "footer.product": "产品",
    "footer.product.features": "核心功能",
    "footer.product.merchant": "商家入驻",
    "footer.product.download": "下载 App",
    "footer.contact": "联系我们",
    "footer.copyright": "© 2025 FIND ME. All rights reserved."
  },
  ug: {
    // Navigation - 修复：يادرولۇق → ئاساسىي (更本地化)
    "nav.features": "ئاساسىي ئىقتىدارلار",
    "nav.advantages": "رىقابەت ئەۋزەللىكى",
    "nav.model": "سودا ئەندىزىسى",
    "nav.contact": "بىز بىلەن ئالاقىلىشىڭ",
    "nav.cta": "دەرھال سىناش",
    
    // Hero Section
    "hero.badge": "خەرىتە ئىجتىمائىي ئالاقە × يەرلىك تۇرمۇش",
    "hero.title": "FIND ME",
    "hero.subtitle": "مېنى بايقاش",
    "hero.desc.1": "ئىجتىمائىي ئالاقە ۋە ئىستېمالنىڭ",
    "hero.desc.highlight": "ھەقىقىي باغلىنىشى",
    "hero.desc.2": "خەرىتە ئارقىلىق يەرلىك تۇرمۇشنىڭ تولۇق ھالقىسىنى قۇرۇش",
    "hero.btn.explore": "ئىزدىنىشنى باشلاش",
    "hero.btn.more": "تېخىمۇ كۆپ چۈشىنىش",
    "hero.stat.1.value": "100%",
    "hero.stat.1.label": "ھەقىقىي كىملىك دەلىللەش",
    "hero.stat.2.value": "85%",
    // 修复：تورسىز → يەردىكى (线下活跃度)
    "hero.stat.2.label": "يەردىكى ئاكتىپلىق",
    "hero.stat.3.value": "3.5x",
    "hero.stat.3.label": "ئايلاندۇرۇش نىسبىتى ئېشىشى",
    "hero.card.1.title": "يېڭى دوست ماسلاشتۇرۇش",
    "hero.card.1.desc": "سىزدىن 500m يىراق",
    "hero.card.2.title": "تاللانغان قەھۋەخانا",
    // 修复：8 ئېتىبار → 20% ئېرزانلاش (8折优惠)
    "hero.card.2.desc": "20% ئېرزانلاش",
    
    // Core Value Section - 修复：ئۈچ ئۆلچەملىك → ئۈچ تەرەپلىك
    "value.title.1": "ئۈچ تەرەپلىك بىرلەشتۈرۈش",
    "value.title.2": "تولۇق ھالقا",
    "value.subtitle": "ئىجتىمائىي ئالاقە × خەرىتە × ئىستېمال   تونۇشتىن تەجرىبىگىچە بىر قەدەملىك ھەل قىلىش چارىسى",
    "value.1.title": "ھەقىقىي ئىجتىمائىي ئالاقە",
    // 修复：خوشلىشىش → خوش قىلىش (告别)，تورسىز → يەردىكى
    "value.1.desc": "100% ھەقىقىي كىملىك دەلىللەش\n85% يەردىكى ئاكتىپلىق كاپالىتى\nيالغان ئىجتىمائىي ئالاقىدىن خوش قىلىش",
    "value.2.title": "خەرىتە بايقاش",
    "value.2.desc": "ئورۇنغا ئاساسلانغان ئىجتىمائىي بايقاش\nئەتراپىڭىزدىكى ئوخشاش قىزىقىشلىق دوستلارنى تېپىش",
    "value.3.title": "تاللانغان ئىستېمال",
    "value.3.desc": "يەرلىك سۈپەتلىك سودىگەرلەرنى قاتتىق تاللاش\nئىجتىمائىي كۆرۈنۈشتە توغرا تەۋسىيە\nخاتالىقسىز",
    
    // Features Section - 修复：يادرولۇق → ئاساسىي
    "features.title": "ئاساسىي ئىقتىدارلار",
    "features.subtitle": "ھەقىقىي ئىجتىمائىي ئالاقە ئۈچۈن يارىتىلغان يېڭىلىق ئىقتىدارلار",
    "features.1.title": "خەرىتە ئىجتىمائىي ئالاقە",
    "features.1.subtitle": "Map Social",
    // 修复：ئىللىق → ئىسسىقلىق (温度)
    "features.1.desc": "ۋاقىتلىق ئورۇنغا ئاساسەن يېقىن ئەتراپتىكى كىشىلەرنى بايقاش\nئورتاق قىزىقىش ۋە پائالىيەت ئىزلىرىنى كۆرۈش\nئۇچرىشىشنى تېخىمۇ تەبىئىي تېخىمۇ ئىسسىقلىق قىلىش",
    "features.2.title": "كۆرۈنۈش تەۋسىيىسى",
    "features.2.subtitle": "Smart Venue",
    "features.2.desc": "سۈنئىي ئەقىل ئۇچرىشىش كۆرۈنۈشىنى ئەقىلانە ماسلاشتۇرىدۇ\nئىككى تەرەپنىڭ مايىللىقىغا قاراپ ئەڭ ياخشى جاينى تەۋسىيە قىلىش\nھەر قېتىملىق ئۇچرىشىشنىڭ مۇكەممەل يەرگە چۈشۈشىنى تەمىنلەش",
    "features.3.title": "بىخەتەرلىك دەلىللەش",
    "features.3.subtitle": "Verified",
    "features.3.desc": "كۆپ ئۆلچەملىك ھەقىقىي كىملىك دەلىللەش\nئىجتىمائىي ھەرىكەت ئىشەنچ باھاسى\nئىجتىمائىي ئالاقىنى تېخىمۇ خاتىرجەم قىلىش",
    
    // Advantages Section
    "advantages.title": "رىقابەت ئەۋزەللىكى",
    "advantages.subtitle": "نېمىشقا FIND ME نى تاللايسىز",
    "advantages.1.title": "ھەقىقىيلىق كاپالىتى",
    // 修复：تورسىز → يەردىكى，خوشلىشىش → خوش قىلىش
    "advantages.1.desc": "100% ھەقىقىي كىملىك دەلىللەش 85% يەردىكى ئاكتىپلىق كاپالىتى يالغان ئىجتىمائىي ئالاقىدىن خوش قىلىش",
    "advantages.2.title": "كۆرۈنۈش ھالقىسى",
    "advantages.2.desc": "تونۇشتىن ئۇچرىشىشقىچە تولۇق ھالقا ھەر قېتىملىق ئۇچرىشىشنىڭ مۇكەممەل يەرگە چۈشۈش كۆرۈنۈشى بار",
    "advantages.3.title": "توغرا ماسلاشتۇرۇش",
    "advantages.3.desc": "ئورۇن قىزىقىش ھەرىكەتكە ئاساسلانغان كۆپ ئۆلچەملىك ماسلاشتۇرۇش ئۇچرىشىشنى تېخىمۇ سۈپەتلىك قىلىش",
    "advantages.4.title": "سودا ئېكولوگىيىسى",
    "advantages.4.desc": "يەرلىك سۈپەتلىك سودىگەرلەرنى قاتتىق تاللاش ئىجتىمائىي كۆرۈنۈشتە توغرا تەۋسىيە ئۈچ تەرەپنىڭ ئورتاق مەنپەئەتىنى ئەمەلگە ئاشۇرۇش",
    
    // Business Model Section
    "model.title": "سودا ئەندىزىسى",
    "model.subtitle": "ئىجتىمائىي ئالاقە دېگەنلىك ئىستېمال  باغلىنىش دېگەنلىك قىممەت",
    // 修复：C تەرەپ → ئىشلەتكۈچىلەر (更本地化)
    "model.1.title": "ئىشلەتكۈچىلەر",
    "model.1.subtitle": "User",
    "model.1.desc": "ئاساسىي ئىقتىدارلارنى ھەقسىز ئىشلىتىش\nھەقلىق ئالىي ئىمتىيازنى ئېچىش\nئەزالىق مۇشتەرى بولۇش سىستېمىسى",
    // 修复：B تەرەپ → سودىگەرلەر (更本地化)
    "model.2.title": "سودىگەرلەر",
    "model.2.subtitle": "Merchant",
    "model.2.desc": "توغرا ئېقىم مىقدارىنى ئېلىپ كىرىش\nكۆرۈنۈشلەشتۈرۈلگەن سېتىش قورالى\nكومىسسىيە + ئېلان كىرىمى",
    "model.3.title": "سۇپا قىممىتى",
    "model.3.subtitle": "Platform",
    "model.3.desc": "ئىجتىمائىي سانلىق مەلۇمات توپلاش\nئىستېمال ھەرىكىتىنى چۈشىنىش\nيەرلىك تۇرمۇش ئېكولوگىيىسى",
    "model.conclusion": "ئىجتىمائىي ئالاقە قىلىش →",
    "model.conclusion.highlight": "تەبىئىي ھالدا يەرلىك تۇرمۇش قىلىش",
    
    // Scenarios Section
    "scenarios.title": "باي ئىجتىمائىي كۆرۈنۈشلەر",
    "scenarios.subtitle": "ئۇچرىشىش سىردەش يىغىلىشى ياكى قېرىنداشلار يىغىلىشى بولسۇن بىزدە مۇكەممەل پىلان بار",
    "scenario.1": "قەھۋە ئۇچرىشىشى",
    "scenario.2": "تائام ئىزدەش",
    "scenario.3": "كىنو كېچىسى",
    // 修复：مۇزىكا ئۆتكۈزۈش → جانلىق مۇزىكا (音乐现场)
    "scenario.4": "جانلىق مۇزىكا",
    
    // CTA Section
    "cta.title": "ئىزدىنىشنى باشلاشقا تەييارمۇ",
    "cta.subtitle": "FIND ME غا قوشۇلۇپ  ئەتراپىڭىزدىكى گۈزەل دۇنيانى بايقاڭ",
    "cta.btn.download": "ئەپنى دەرھال چۈشۈرۈش",
    "cta.btn.merchant": "سودىگەر كىرىش",
    
    // Footer
    "footer.download.title": "FIND ME نى دەرھال چۈشۈرۈڭ",
    "footer.download.subtitle": "كودنى سىكاننېرلاپ چۈشۈرۈڭ  ئىزدىنىش سەپىرىڭىزنى باشلاڭ",
    "footer.ios": "App Store",
    "footer.ios.desc": "iPhone / iPad",
    "footer.ios.qr": "iOS ئىككىلىك كود",
    "footer.android": "ئاندىرويىد چۈشۈرۈش",
    "footer.android.desc": "Android تېلېفون",
    "footer.android.qr": "Android ئىككىلىك كود",
    "footer.about": "FIND ME يېڭىلىقچان خەرىتە ئىجتىمائىي ئالاقە دېتالى\nئىجتىمائىي ئالاقە ۋە ئىستېمالنىڭ ھەقىقىي باغلىنىشىنى قايتا قۇرۇشقا بېغىشلانغان\nھەر بىر ئۇچرىشىشنىڭ مۇكەممەل يەرگە چۈشۈش كۆرۈنۈشى بولىدۇ",
    "footer.product": "مەھسۇلات",
    // 修复：يادرولۇق → ئاساسىي
    "footer.product.features": "ئاساسىي ئىقتىدارلار",
    "footer.product.merchant": "سودىگەر كىرىش",
    "footer.product.download": "ئەپنى چۈشۈرۈش",
    "footer.contact": "بىز بىلەن ئالاقىلىشىڭ",
    "footer.copyright": "© 2025 FIND ME بارلىق ھوقۇق قوغدىلىدۇ"
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('zh');

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  // 维吾尔语也使用左对齐（ltr）
  const dir = 'ltr';

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
  }, [dir, language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
