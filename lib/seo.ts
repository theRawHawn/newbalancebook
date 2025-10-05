export interface SEOData {
  title: string;
  description: string;
  keywords: string;
  lang: string;
  hreflang: string;
}

export const seoData: Record<string, SEOData> = {
  en: {
    title: "TaxNBooks - Professional Accounting Services | GST, TDS, Payroll",
    description: "TaxNBooks provides comprehensive accounting, GST filing, TDS returns, and payroll processing services for businesses in Tier 2 and Tier 3 cities across India. Transparent pricing, local language support.",
    keywords: "accounting services, GST filing, TDS returns, payroll processing, bookkeeping, tax consultant, chartered accountant, India, MSME, small business",
    lang: "en",
    hreflang: "en-IN"
  },
  hi: {
    title: "TaxNBooks - व्यावसायिक लेखांकन सेवाएं | GST, TDS, पेरोल",
    description: "TaxNBooks भारत के टियर 2 और टियर 3 शहरों में व्यवसायों के लिए व्यापक लेखांकन, GST फाइलिंग, TDS रिटर्न और पेरोल प्रोसेसिंग सेवाएं प्रदान करता है। पारदर्शी मूल्य निर्धारण, स्थानीय भाषा समर्थन।",
    keywords: "लेखांकन सेवाएं, GST फाइलिंग, TDS रिटर्न, पेरोल प्रोसेसिंग, बुककीपिंग, कर सलाहकार, चार्टर्ड एकाउंटेंट, भारत, MSME, छोटा व्यवसाय",
    lang: "hi",
    hreflang: "hi-IN"
  },
  kn: {
    title: "TaxNBooks - ವೃತ್ತಿಪರ ಲೆಕ್ಕಪತ್ರ ಸೇವೆಗಳು | GST, TDS, ಪೇರೋಲ್",
    description: "TaxNBooks ಭಾರತದ ಟಿಯರ್ 2 ಮತ್ತು ಟಿಯರ್ 3 ನಗರಗಳಲ್ಲಿನ ವ್ಯವಸಾಯಗಳಿಗೆ ಸಮಗ್ರ ಲೆಕ್ಕಪತ್ರ, GST ಫೈಲಿಂಗ್, TDS ರಿಟರ್ನ್ಸ್ ಮತ್ತು ಪೇರೋಲ್ ಪ್ರೊಸೆಸಿಂಗ್ ಸೇವೆಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ।",
    keywords: "ಲೆಕ್ಕಪತ್ರ ಸೇವೆಗಳು, GST ಫೈಲಿಂಗ್, TDS ರಿಟರ್ನ್ಸ್, ಪೇರೋಲ್ ಪ್ರೊಸೆಸಿಂಗ್, ಬುಕ್‌ಕೀಪಿಂಗ್, ತೆರಿಗೆ ಸಲಹೆಗಾರ, ಭಾರತ, MSME",
    lang: "kn",
    hreflang: "kn-IN"
  },
  mr: {
    title: "TaxNBooks - व्यावसायिक लेखांकन सेवा | GST, TDS, पेरोल",
    description: "TaxNBooks भारतातील टियर 2 आणि टियर 3 शहरांमधील व्यवसायांसाठी सर्वसमावेशक लेखांकन, GST फाइलिंग, TDS रिटर्न आणि पेरोल प्रोसेसिंग सेवा प्रदान करते।",
    keywords: "लेखांकन सेवा, GST फाइलिंग, TDS रिटर्न, पेरोल प्रोसेसिंग, बुककीपिंग, कर सल्लागार, भारत, MSME, छोटा व्यवसाय",
    lang: "mr",
    hreflang: "mr-IN"
  },
  te: {
    title: "TaxNBooks - వృత్తిపరమైన అకౌంటింగ్ సేవలు | GST, TDS, పేరోల్",
    description: "TaxNBooks భారతదేశంలోని టైర్ 2 మరియు టైర్ 3 నగరాలలోని వ్యాపారాలకు సమగ్ర అకౌంటింగ్, GST ఫైలింగ్, TDS రిటర్న్స్ మరియు పేరోల్ ప్రాసెసింగ్ సేవలను అందిస్తుంది।",
    keywords: "అకౌంటింగ్ సేవలు, GST ఫైలింగ్, TDS రిటర్న్స్, పేరోల్ ప్రాసెసింగ్, బుక్‌కీపింగ్, పన్ను సలహాదారు, భారత్, MSME",
    lang: "te",
    hreflang: "te-IN"
  }
};

export function getLanguageFromURL(): string {
  const urlParams = new URLSearchParams(window.location.search);
  const lang = urlParams.get('lang');
  return lang && seoData[lang] ? lang : 'en';
}
