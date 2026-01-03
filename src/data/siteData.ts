// Local Database - Shiba Pharma Website Content
// This file serves as the local database for all website content
// Easy to update and manage for future content changes

export type Language = 'en' | 'ar';

export interface Translation {
  en: string;
  ar: string;
}

// Company Information
export const companyInfo = {
  name: {
    en: 'Shiba Pharma',
    ar: 'سبأ فارما'
  },
  fullName: {
    en: 'Shiba Pharmaceuticals & Chemicals Mfg. Co. Ltd.',
    ar: 'شركة سبأ لصناعة الأدوية والكيماويات المحدودة'
  },
  tagline: {
    en: 'High Quality Pharmaceuticals You Can Trust',
    ar: 'أدوية عالية الجودة يمكنك الوثوق بها'
  },
  description: {
    en: 'Shiba Pharma company produces and develops pharmaceuticals for human use in various forms and medical uses with the latest and best scientific methods used to ensure its quality and competitive prices.',
    ar: 'شركة سبأ فارما تنتج وتطور الأدوية للاستخدام البشري بأشكال ومستخدمات طبية متنوعة باستخدام أحدث وأفضل الأساليب العلمية لضمان الجودة والأسعار التنافسية.'
  },
  founded: 1997,
  productsCount: 300,
  agentsCount: 57,
  awardsCount: 27,
};

// Contact Information
export const contactInfo = {
  factory: {
    address: {
      en: 'Industrial Area - Aser Bait Adhran - Sana\'a - Republic of Yemen',
      ar: 'المنطقة الصناعية - عصر بيت أذران - صنعاء - الجمهورية اليمنية'
    },
    phones: ['01-525-515', '01-526-736', '01-526-739', '01-526-742']
  },
  marketing: {
    address: {
      en: 'Baghdad St. - Next to Ibn Alnafis University - Sana\'a - Republic of Yemen',
      ar: 'شارع بغداد - جوار جامعة ابن النفيس - صنعاء - الجمهورية اليمنية'
    },
    phones: ['01-466-999', '01-200-833', '01-200-834', '01-200-835']
  },
  email: 'info@shibapharma.com',
  industry: '01526736',
  marketingPhone: '01466999',
};

// Social Media Links
export const socialLinks = {
  facebook: 'https://facebook.com/shibapharma',
  instagram: 'https://instagram.com/shibapharma',
  youtube: 'https://youtube.com/shibapharma',
  linkedin: 'https://linkedin.com/company/shibapharma',
  whatsapp: 'https://wa.me/967466999',
  telegram: 'https://t.me/shibapharma',
};

// Navigation Menu
export const navigation = [
  { 
    id: 'home',
    label: { en: 'Home', ar: 'الرئيسية' },
    href: '/'
  },
  { 
    id: 'about',
    label: { en: 'Shiba Pharma', ar: 'سبأ فارما' },
    href: '/about',
    submenu: [
      { id: 'about-us', label: { en: 'About Us', ar: 'من نحن' }, href: '/about' },
      { id: 'management', label: { en: 'General Management Word', ar: 'كلمة الإدارة العامة' }, href: '/about/management' },
      { id: 'social-responsibility', label: { en: 'Social Responsibility', ar: 'المسؤولية الاجتماعية' }, href: '/about/social-responsibility' },
    ]
  },
  { 
    id: 'products',
    label: { en: 'Our Products', ar: 'منتجاتنا' },
    href: '/products'
  },
  { 
    id: 'media',
    label: { en: 'Media', ar: 'الوسائط' },
    href: '/media',
    submenu: [
      { id: 'news', label: { en: 'News', ar: 'الأخبار' }, href: '/media/news' },
      { id: 'videos', label: { en: 'Videos', ar: 'الفيديوهات' }, href: '/media/videos' },
    ]
  },
  { 
    id: 'quality',
    label: { en: 'Quality Management', ar: 'إدارة الجودة' },
    href: '/quality'
  },
  { 
    id: 'contact',
    label: { en: 'Contact', ar: 'اتصل بنا' },
    href: '/contact'
  },
];

// Certifications & Achievements
export const certifications = [
  {
    id: 'who-gmp',
    title: { en: 'WHO-GMP Certificate', ar: 'شهادة GMP من منظمة الصحة العالمية' },
    year: 2000,
    description: { 
      en: 'The first Yemeni company to obtain WHO-GMP certification',
      ar: 'أول شركة يمنية تحصل على شهادة GMP من منظمة الصحة العالمية'
    }
  },
  {
    id: 'iso-9001-2000',
    title: { en: 'ISO 9001 Certificate', ar: 'شهادة ISO 9001' },
    year: 2000,
    description: { 
      en: 'First company to obtain ISO9001 Certificate',
      ar: 'أول شركة تحصل على شهادة ISO 9001'
    }
  },
  {
    id: 'iso-9001-2004',
    title: { en: 'ISO Certificate 9001-2004', ar: 'شهادة ISO 9001-2004' },
    year: 2004,
    description: { 
      en: 'Updated ISO certification',
      ar: 'تحديث شهادة ISO'
    }
  },
  {
    id: 'iso-9001-2008',
    title: { en: 'ISO Certificate 9001-2008', ar: 'شهادة ISO 9001-2008' },
    year: 2008,
    description: { 
      en: 'Latest ISO certification standard',
      ar: 'أحدث معيار لشهادة ISO'
    }
  },
  {
    id: 'who-supplier',
    title: { en: 'WHO Accredited Supplier', ar: 'مورد معتمد من منظمة الصحة العالمية' },
    year: 2004,
    description: { 
      en: 'WHO accredited supplier for years 2004/2005 and 2006/2007',
      ar: 'مورد معتمد من WHO للأعوام 2004/2005 و 2006/2007'
    }
  },
];

// Company Values
export const companyValues = [
  {
    id: 'expansion',
    icon: 'TrendingUp',
    title: { en: 'Expansion', ar: 'التوسع' },
    description: {
      en: 'Covering the local and neighboring markets with their needs of essential medicines and medicines for endemic and epidemic diseases.',
      ar: 'تغطية الأسواق المحلية والمجاورة باحتياجاتها من الأدوية الأساسية وأدوية الأمراض المتوطنة والوبائية.'
    }
  },
  {
    id: 'trust',
    icon: 'Shield',
    title: { en: 'Trust & Commitment', ar: 'الثقة والالتزام' },
    description: {
      en: 'Continuing to maintain the confidence and satisfaction of customers and the commitment to constantly set and review quality goals.',
      ar: 'الاستمرار في الحفاظ على ثقة ورضا العملاء والالتزام بوضع ومراجعة أهداف الجودة باستمرار.'
    }
  },
  {
    id: 'competitiveness',
    icon: 'Award',
    title: { en: 'Competitiveness', ar: 'التنافسية' },
    description: {
      en: 'Increasing the company\'s competitiveness to compete with imported products.',
      ar: 'زيادة القدرة التنافسية للشركة للمنافسة مع المنتجات المستوردة.'
    }
  },
  {
    id: 'continuity',
    icon: 'RefreshCw',
    title: { en: 'Continuity', ar: 'الاستمرارية' },
    description: {
      en: 'By maintaining and continuing to train and qualify employees.',
      ar: 'من خلال الحفاظ على الموظفين ومواصلة تدريبهم وتأهيلهم.'
    }
  },
];

// About Page Content
export const aboutContent = {
  intro: {
    en: 'With this name, we entered the world of medicine, and we are betting on achieving international standards on a drug made in Yemen for more than 300 drug brands and ambitious, consistent with the strategies of a country that aspires to achieve its drug security through local alternatives.',
    ar: 'بهذا الاسم دخلنا عالم الدواء، ونراهن على تحقيق المعايير الدولية على دواء صنع في اليمن لأكثر من 300 علامة تجارية طموحة، تتسق مع استراتيجيات بلد يطمح لتحقيق أمنه الدوائي من خلال البدائل المحلية.'
  },
  mission: {
    title: { en: 'Our Mission', ar: 'رسالتنا' },
    content: {
      en: 'Shiba pharma Pharmaceutical Industry is committed to ensuring the improvement of the level of health care in society and providing medical needs with high quality and reasonable prices.',
      ar: 'شركة سبأ فارما للصناعات الدوائية ملتزمة بضمان تحسين مستوى الرعاية الصحية في المجتمع وتوفير الاحتياجات الطبية بجودة عالية وأسعار معقولة.'
    }
  },
  vision: {
    title: { en: 'Our Vision', ar: 'رؤيتنا' },
    content: {
      en: 'To be the first local pharmaceutical company, and a leader in the pharmaceutical field regionally, with maintaining on the work ethics and responsibility, which consider the core of our work.',
      ar: 'أن نكون أول شركة أدوية محلية، ورائدة في مجال الأدوية إقليمياً، مع الحفاظ على أخلاقيات العمل والمسؤولية التي تعتبر جوهر عملنا.'
    }
  },
  goals: {
    title: { en: 'Our Goals', ar: 'أهدافنا' },
    content: {
      en: 'Shiba pharma company aims to develop sustainable partnerships for development, manufacturing, joint marketing and then sales and distribution of a group of carefully selected products and manufactured drugs covered by manufacturing rights with special technologies.',
      ar: 'تهدف شركة سبأ فارما إلى تطوير شراكات مستدامة للتطوير والتصنيع والتسويق المشترك ثم المبيعات والتوزيع لمجموعة من المنتجات المختارة بعناية والأدوية المصنعة المغطاة بحقوق التصنيع بتقنيات خاصة.'
    }
  },
  values: {
    title: { en: 'Our Values', ar: 'قيمنا' },
    content: {
      en: 'We are committed to provide our customers with the best, and working to improve our products to provide the best healthcare for all patients.',
      ar: 'نحن ملتزمون بتقديم الأفضل لعملائنا، والعمل على تحسين منتجاتنا لتوفير أفضل رعاية صحية لجميع المرضى.'
    }
  },
  standards: {
    title: { en: 'Our Standards', ar: 'معاييرنا' },
    content: {
      en: 'Quality control processes are designed to meet all modern international pharmaceutical manufacturing standards and ISO standards to operate factories through our laboratories equipped with the latest equipment and technologies.',
      ar: 'عمليات مراقبة الجودة مصممة لتلبية جميع معايير التصنيع الدوائي الدولية الحديثة ومعايير ISO لتشغيل المصانع من خلال مختبراتنا المجهزة بأحدث المعدات والتقنيات.'
    }
  },
  cadres: {
    title: { en: 'Our Cadres', ar: 'كوادرنا' },
    content: {
      en: 'A selection of qualified staff work in the factory with local and international carefully, in order to meet the latest required operating and production standards.',
      ar: 'نخبة من الكوادر المؤهلة تعمل في المصنع محلياً ودولياً بعناية، من أجل تلبية أحدث معايير التشغيل والإنتاج المطلوبة.'
    }
  },
};

// Product Categories
export const productCategories = [
  {
    id: 'analgesics',
    name: { en: 'Analgesics', ar: 'المسكنات' },
    icon: 'Pill',
    productCount: 25
  },
  {
    id: 'anti-histamine',
    name: { en: 'Anti-Histamine Products', ar: 'مضادات الهيستامين' },
    icon: 'Shield',
    productCount: 18
  },
  {
    id: 'cns',
    name: { en: 'CNS Products', ar: 'أدوية الجهاز العصبي' },
    icon: 'Brain',
    productCount: 15
  },
  {
    id: 'git',
    name: { en: 'GIT Products', ar: 'أدوية الجهاز الهضمي' },
    icon: 'Activity',
    productCount: 30
  },
  {
    id: 'cardiovascular',
    name: { en: 'Cardiovascular Products', ar: 'أدوية القلب والأوعية' },
    icon: 'Heart',
    productCount: 22
  },
  {
    id: 'antibiotics',
    name: { en: 'Antibiotics', ar: 'المضادات الحيوية' },
    icon: 'Microscope',
    productCount: 40
  },
  {
    id: 'vitamins',
    name: { en: 'Vitamins & Supplements', ar: 'الفيتامينات والمكملات' },
    icon: 'Zap',
    productCount: 28
  },
  {
    id: 'dermatology',
    name: { en: 'Dermatology', ar: 'أدوية الجلدية' },
    icon: 'Droplet',
    productCount: 20
  },
];

// Featured Products
export const featuredProducts = [
  {
    id: 'diclosan-fast',
    name: 'DICLOSAN FAST',
    category: { en: 'Analgesics', ar: 'المسكنات' },
    image: 'https://shibapharma.com/assets/images/products/diclosan-fast.png',
    description: { en: 'Fast-acting pain relief', ar: 'مسكن سريع المفعول' }
  },
  {
    id: 'fenirgic',
    name: 'FENIRGIC',
    category: { en: 'Anti-Histamine Products', ar: 'مضادات الهيستامين' },
    image: 'https://shibapharma.com/assets/images/products/fenirgic.png',
    description: { en: 'Antihistamine medication', ar: 'دواء مضاد للهيستامين' }
  },
  {
    id: 'kipromax',
    name: 'KIPROMAX SYRUP&TAB',
    category: { en: 'CNS Products', ar: 'أدوية الجهاز العصبي' },
    image: 'https://shibapharma.com/assets/images/products/kipromax.png',
    description: { en: 'CNS medication', ar: 'دواء الجهاز العصبي' }
  },
  {
    id: 'lanprol',
    name: 'LANPROL',
    category: { en: 'GIT Products', ar: 'أدوية الجهاز الهضمي' },
    image: 'https://shibapharma.com/assets/images/products/lanprol.png',
    description: { en: 'Gastrointestinal treatment', ar: 'علاج الجهاز الهضمي' }
  },
  {
    id: 'aspirin-shiba',
    name: 'ASPIRIN SHIBA',
    category: { en: 'Cardiovascular Products', ar: 'أدوية القلب والأوعية' },
    image: 'https://shibapharma.com/assets/images/products/aspirin-shiba.png',
    description: { en: 'Cardiovascular support', ar: 'دعم القلب والأوعية' }
  },
];

// News Articles
export const newsArticles = [
  {
    id: 'news-1',
    title: {
      en: 'Shiba Pharma Honored as One of Yemen\'s Most Prominent Companies for 2025',
      ar: 'تكريم سبأ فارما كأحد أبرز الشركات اليمنية لعام 2025'
    },
    excerpt: {
      en: 'The Investor Foundation for Economic Journalism honored Shiba Pharma as one of the most prominent companies in Yemen for 2025, in recognition of its excellence in producing pharmaceuticals.',
      ar: 'كرّمت مؤسسة المستثمر للصحافة الاقتصادية سبأ فارما كإحدى أبرز الشركات في اليمن لعام 2025، تقديراً لتميزها في إنتاج الأدوية.'
    },
    date: '2025-09-09',
    image: 'https://shibapharma.com/assets/images/news/news-1.jpg'
  },
  {
    id: 'news-2',
    title: {
      en: 'Dr. Muhammad Al-Madani - Chairman of the High Authority for Medicines praises the role',
      ar: 'د. محمد المدني - رئيس الهيئة العليا للأدوية يشيد بالدور'
    },
    excerpt: {
      en: 'Dr. Muhammad Al-Madani, Chairman of the High Authority for Medicines, praised the important role of Shiba Pharma in developing the pharmaceutical industry.',
      ar: 'أشاد د. محمد المدني، رئيس الهيئة العليا للأدوية، بالدور المهم لسبأ فارما في تطوير الصناعة الدوائية.'
    },
    date: '2022-09-28',
    image: 'https://shibapharma.com/assets/images/news/news-2.jpg'
  },
  {
    id: 'news-3',
    title: {
      en: 'A pleasant visit to the Doctors Without Borders team at the Shiba Pharma factory',
      ar: 'زيارة ودية لفريق أطباء بلا حدود لمصنع سبأ فارما'
    },
    excerpt: {
      en: 'The Doctors Without Borders team visited Shiba Pharma factory on 17th November to learn about the manufacturing processes and quality standards.',
      ar: 'زار فريق أطباء بلا حدود مصنع سبأ فارما في 17 نوفمبر للتعرف على عمليات التصنيع ومعايير الجودة.'
    },
    date: '2022-09-28',
    image: 'https://shibapharma.com/assets/images/news/news-3.jpg'
  },
];

// Production Lines
export const productionLines = [
  { en: 'Liquid Drink Production Line: Liquids and suspensions', ar: 'خط إنتاج السوائل: السوائل والمعلقات' },
  { en: 'Semi-solid production line: ointment, creams and Gel', ar: 'خط الإنتاج شبه الصلب: المراهم والكريمات والجل' },
  { en: 'Solid materials production line: Tablets and capsules', ar: 'خط إنتاج المواد الصلبة: الأقراص والكبسولات' },
  { en: 'Suppositories production line', ar: 'خط إنتاج التحاميل' },
  { en: 'Non-sterile drops production line', ar: 'خط إنتاج القطرات غير المعقمة' },
];

// General Management Word
export const managementWord = {
  title: { en: 'General Management Word', ar: 'كلمة الإدارة العامة' },
  author: {
    name: { en: 'Dr. Ehsan Alribahi', ar: 'د. إحسان الرباحي' },
    position: { en: 'Chairman of Board of Directors', ar: 'رئيس مجلس الإدارة' }
  },
  content: {
    en: `The pharmaceutical and Medicines industry is one of the important manufacturing industrial sectors that Yemen needs to expand in the coming period.

The national pharmaceutical industry should be a mainstay in shaping Yemen's strategic economic dimension, that is due to its direct link to securing citizen health, in addition to its economic importance, and its close link to the health sector.

The state's orientation towards adopting a national strategy to encourage and develop the local pharmaceutical industry has contributed to raising the proportion of its competitive share on the pharmaceutical market by its acquisition of 25% in the provision of medicine, an increase of 15% over previous years, and this increase occurred as a result of its expansion plans by adding new production lines and increasing manufacturing.

We aim at Shiba Pharma Co to manufacture the drug in a way that supports the provision of health services and medicines and with sufficient levels and quality to achieve the satisfaction of citizens.`,
    ar: `صناعة الأدوية والأدوية من القطاعات الصناعية التصنيعية المهمة التي يحتاج اليمن إلى التوسع فيها في الفترة المقبلة.

يجب أن تكون الصناعة الدوائية الوطنية ركيزة أساسية في تشكيل البعد الاقتصادي الاستراتيجي لليمن، وذلك لارتباطها المباشر بتأمين صحة المواطن، بالإضافة إلى أهميتها الاقتصادية، وارتباطها الوثيق بقطاع الصحة.

ساهم توجه الدولة نحو تبني استراتيجية وطنية لتشجيع وتطوير الصناعة الدوائية المحلية في رفع نسبة حصتها التنافسية في سوق الأدوية باستحواذها على 25% في توفير الدواء، بزيادة 15% عن السنوات السابقة.

نهدف في شركة سبأ فارما إلى تصنيع الدواء بطريقة تدعم توفير الخدمات الصحية والأدوية وبمستويات كافية وجودة لتحقيق رضا المواطنين.`
  }
};

// Social Responsibility Content
export const socialResponsibility = {
  title: { en: 'Social Responsibility', ar: 'المسؤولية الاجتماعية' },
  sections: [
    {
      id: 'individuals',
      title: { en: 'Responsibility to Individuals', ar: 'المسؤولية تجاه الأفراد' },
      content: {
        en: 'The company\'s business strategy is based on innovation and The main source of innovation are employees. Shiba Pharma company doing motivates, develops and retains its talented employees, to help them perform well in high levels of continuous success.',
        ar: 'تعتمد استراتيجية أعمال الشركة على الابتكار والمصدر الرئيسي للابتكار هم الموظفون. تقوم شركة سبأ فارما بتحفيز وتطوير والاحتفاظ بموظفيها الموهوبين لمساعدتهم على الأداء الجيد في مستويات عالية من النجاح المستمر.'
      }
    },
    {
      id: 'community',
      title: { en: 'Community Responsibility', ar: 'المسؤولية المجتمعية' },
      content: {
        en: 'Shiba Pharma Co for Pharmaceutical Industry is committed to its social responsibility role, and It complies with all applicable laws, especially related to the environment, occupational health and safety, and ethics of business practices, employment and employment.',
        ar: 'تلتزم شركة سبأ فارما للصناعات الدوائية بدورها في المسؤولية الاجتماعية، وتلتزم بجميع القوانين المعمول بها، خاصة المتعلقة بالبيئة والصحة والسلامة المهنية وأخلاقيات الممارسات التجارية والتوظيف.'
      }
    },
    {
      id: 'environment',
      title: { en: 'Responsibility to the Environment', ar: 'المسؤولية تجاه البيئة' },
      content: {
        en: 'Shiba Pharma Co for Pharmaceutical Industry is committed to its responsibility to protect the environment in all its operations, It is keen to ensure minimal negative impact on the environment you are around Including ensuring rational use of natural resources.',
        ar: 'تلتزم شركة سبأ فارما للصناعات الدوائية بمسؤوليتها في حماية البيئة في جميع عملياتها، وتحرص على ضمان الحد الأدنى من التأثير السلبي على البيئة من حولك بما في ذلك ضمان الاستخدام الرشيد للموارد الطبيعية.'
      }
    }
  ]
};

// UI Translations
export const uiTranslations = {
  common: {
    readMore: { en: 'Read More', ar: 'اقرأ المزيد' },
    learnMore: { en: 'Learn More', ar: 'اعرف المزيد' },
    viewAll: { en: 'View All', ar: 'عرض الكل' },
    subscribe: { en: 'Subscribe Now', ar: 'اشترك الآن' },
    send: { en: 'Send Message', ar: 'إرسال الرسالة' },
    search: { en: 'Search...', ar: 'بحث...' },
    loading: { en: 'Loading...', ar: 'جاري التحميل...' },
    success: { en: 'Success!', ar: 'تم بنجاح!' },
    error: { en: 'Error occurred', ar: 'حدث خطأ' },
  },
  sections: {
    featuredProducts: { en: 'Featured Products', ar: 'منتجات مميزة' },
    latestNews: { en: 'Latest News', ar: 'آخر الأخبار' },
    ourValues: { en: 'Our Values', ar: 'قيمنا' },
    contactUs: { en: 'Contact Us', ar: 'اتصل بنا' },
    subscribeNewsletter: { en: 'Subscribe on ShibaPharma now', ar: 'اشترك في سبأ فارما الآن' },
    newsletterDescription: { en: 'Join us to get Shiba Pharma newsletter & news & events.', ar: 'انضم إلينا للحصول على نشرة سبأ فارما الإخبارية والأخبار والفعاليات.' },
  },
  form: {
    name: { en: 'Name', ar: 'الاسم' },
    email: { en: 'Email', ar: 'البريد الإلكتروني' },
    subject: { en: 'Subject', ar: 'الموضوع' },
    message: { en: 'Message', ar: 'الرسالة' },
    yourEmail: { en: 'Your Email...', ar: 'بريدك الإلكتروني...' },
  },
  stats: {
    medicalProducts: { en: 'Medical Products', ar: 'منتج طبي' },
    agents: { en: 'Agents', ar: 'وكيل' },
    awards: { en: 'Awards', ar: 'جائزة' },
    yearsExperience: { en: 'Years Experience', ar: 'سنة خبرة' },
  },
};
