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
      { id: 'management', label: { en: 'General Management Word', ar: 'كلمة الإدارة العامة' }, href: '/management' },
      { id: 'social-responsibility', label: { en: 'Social Responsibility', ar: 'المسؤولية الاجتماعية' }, href: '/social-responsibility' },
    ]
  },
  { 
    id: 'products',
    label: { en: 'Our Products', ar: 'منتجاتنا' },
    href: '/products'
  },
  { 
    id: 'media',
    label: { en: 'Media', ar: 'ميديا' },
    href: '/media',
    submenu: [
      { id: 'news', label: { en: 'News', ar: 'الأخبار' }, href: '/news' },
      { id: 'videos', label: { en: 'Videos', ar: 'الفيديوهات' }, href: '/videos' },
    ]
  },
  { 
    id: 'quality',
    label: { en: 'Quality Management System', ar: 'نظام إدارة الجودة' },
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
    title: { en: 'Our Message', ar: 'رسالتنا' },
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
      en: 'Shiba pharma company aims to develop sustainable partnerships for development, manufacturing, joint marketing and then sales and distribution of a group of carefully selected products and manufactured drugs covered by manufacturing rights with special technologies, depending on the huge possibilities possessed by it and global standards for quality and modern techniques for drug manufacturing.',
      ar: 'تهدف شركة سبأ فارما إلى تطوير شراكات مستدامة للتطوير والتصنيع والتسويق المشترك ثم المبيعات والتوزيع لمجموعة من المنتجات المختارة بعناية والأدوية المصنعة المغطاة بحقوق التصنيع بتقنيات خاصة، اعتماداً على الإمكانيات الهائلة التي تمتلكها والمعايير العالمية للجودة والتقنيات الحديثة لتصنيع الأدوية.'
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
      en: 'A selection of qualified staff work in the factory with local and international carefully, in order to meet the latest required operating and production standards. A team of professionals who are continuously trained also works with us to deliver our products appropriately to all targeted markets.',
      ar: 'نخبة من الكوادر المؤهلة تعمل في المصنع محلياً ودولياً بعناية، من أجل تلبية أحدث معايير التشغيل والإنتاج المطلوبة. فريق من المحترفين الذين يتم تدريبهم باستمرار يعمل معنا أيضاً لتوصيل منتجاتنا بشكل مناسب إلى جميع الأسواق المستهدفة.'
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
    id: 'amristar',
    name: 'AMRISTAR',
    category: { en: 'Analgesics', ar: 'المسكنات' },
    image: 'https://shibapharma.com/media/838/conversions/images-Medium-Image.jpg',
    description: { en: 'Pain relief medication', ar: 'دواء مسكن للآلام' }
  },
  {
    id: 'diclosan-fast',
    name: 'DICLOSAN FAST',
    category: { en: 'Analgesics', ar: 'المسكنات' },
    image: 'https://shibapharma.com/media/1/conversions/IMG_20170614_150102-Medium-Image.jpg',
    description: { en: 'Fast-acting pain relief', ar: 'مسكن سريع المفعول' }
  },
  {
    id: 'fenirgic',
    name: 'FENIRGIC',
    category: { en: 'Anti-Histamine Products', ar: 'مضادات الهيستامين' },
    image: 'https://shibapharma.com/media/2/conversions/fenirgic-Medium-Image.jpg',
    description: { en: 'Antihistamine medication', ar: 'دواء مضاد للهيستامين' }
  },
  {
    id: 'kipromax',
    name: 'KIPROMAX SYRUP&TAB',
    category: { en: 'CNS Products', ar: 'أدوية الجهاز العصبي' },
    image: 'https://shibapharma.com/media/3/conversions/kipromax-Medium-Image.jpg',
    description: { en: 'CNS medication', ar: 'دواء الجهاز العصبي' }
  },
  {
    id: 'lanprol',
    name: 'LANPROL',
    category: { en: 'GIT Products', ar: 'أدوية الجهاز الهضمي' },
    image: 'https://shibapharma.com/media/4/conversions/lanprol-Medium-Image.jpg',
    description: { en: 'Gastrointestinal treatment', ar: 'علاج الجهاز الهضمي' }
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
    image: 'https://shibapharma.com/media/850/conversions/shiba-pharma-top-company-yemen-2025-Medium-Image.jpg'
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
    image: 'https://shibapharma.com/media/288/conversions/Untitled3-Medium-Image.jpg'
  },
  {
    id: 'news-3',
    title: {
      en: 'A pleasant visit to the Doctors Without Borders team at the Shiba Pharma factory 17th',
      ar: 'زيارة ودية لفريق أطباء بلا حدود لمصنع سبأ فارما'
    },
    excerpt: {
      en: 'The Doctors Without Borders team visited Shiba Pharma factory on 17th November to learn about the manufacturing processes and quality standards.',
      ar: 'زار فريق أطباء بلا حدود مصنع سبأ فارما في 17 نوفمبر للتعرف على عمليات التصنيع ومعايير الجودة.'
    },
    date: '2022-09-28',
    image: 'https://shibapharma.com/media/287/conversions/Untitled5-Medium-Image.jpg'
  },
  {
    id: 'news-4',
    title: {
      en: 'Dr. Hazem Al-Rabahi receives a number of health ministers from various countries',
      ar: 'د. حازم الرباحي يستقبل عدداً من وزراء الصحة من مختلف الدول'
    },
    excerpt: {
      en: 'Dr. Hazem Al-Rabahi received health ministers from various countries to discuss pharmaceutical cooperation.',
      ar: 'استقبل د. حازم الرباحي وزراء صحة من مختلف الدول لمناقشة التعاون الدوائي.'
    },
    date: '2022-09-28',
    image: 'https://shibapharma.com/media/286/conversions/Untitled1-Medium-Image.jpg'
  },
];

// Videos Data
export const videosData = [
  {
    id: 'video-1',
    title: {
      en: 'Certificates and Awards',
      ar: 'الشهادات والجوائز'
    },
    description: {
      en: 'The company produces more than 300+ pharmaceutical products in various dosage forms (syrups, suspensions, tablets, capsules, and others). Shiba Pharma obtained the WHO-GMP certification from the World Health Organization in 1999, becoming the first Yemeni pharmaceutical company to receive this certification.',
      ar: 'تنتج الشركة أكثر من 300 منتج دوائي بأشكال صيدلانية متنوعة (شراب، معلقات، أقراص، كبسولات، وغيرها). حصلت سبأ فارما على شهادة WHO-GMP من منظمة الصحة العالمية عام 1999، لتصبح أول شركة أدوية يمنية تحصل على هذه الشهادة.'
    },
    date: '2020-01-31',
    thumbnail: 'https://shibapharma.com/media/289/conversions/video-thumb-1-Medium-Image.jpg',
    videoUrl: '#'
  },
  {
    id: 'video-2',
    title: {
      en: 'Shiba Pharma',
      ar: 'سبأ فارما'
    },
    description: {
      en: 'Shiba Pharma Company produces and develops pharmaceuticals for human use in various forms and medical uses with the latest and best scientific methods used to ensure its quality and competitive prices. The company launched its first production of medicines that conform to the latest international standards which Established in the pharmacopoeias in the year 1997 AD.',
      ar: 'شركة سبأ فارما تنتج وتطور الأدوية للاستخدام البشري بأشكال ومستخدمات طبية متنوعة باستخدام أحدث وأفضل الأساليب العلمية لضمان الجودة والأسعار التنافسية. أطلقت الشركة أول إنتاج للأدوية التي تتوافق مع أحدث المعايير الدولية المنصوص عليها في دساتير الأدوية عام 1997م.'
    },
    date: '2020-01-31',
    thumbnail: 'https://shibapharma.com/media/290/conversions/video-thumb-2-Medium-Image.jpg',
    videoUrl: '#'
  },
];

// Medical Directory / Hospitals
export const medicalDirectory = [
  {
    id: 'hospital-1',
    name: { en: 'Al-Ahli Modern Hospital', ar: 'المستشفى الأهلي الحديث' },
    logo: 'https://shibapharma.com/media/hospital-ahli.png',
    phone: '01-444484',
    website: 'https://info@haditha-ahli.com'
  },
  {
    id: 'hospital-2',
    name: { en: 'Regional Hospital', ar: 'المستشفى الإقليمي' },
    logo: 'https://shibapharma.com/media/hospital-regional.png',
    phone: '01-678716',
    email: 'regionalhospital.m@gmail.com'
  },
  {
    id: 'hospital-3',
    name: { en: 'International Modern Hospital', ar: 'المستشفى الدولي الحديث' },
    phone: '777400420 - 777776263',
    logo: ''
  },
  {
    id: 'hospital-4',
    name: { en: 'Specialized Golden Hospital', ar: 'المستشفى الذهبي التخصصي' },
    phone: '01-422996',
    logo: ''
  },
  {
    id: 'hospital-5',
    name: { en: 'Orthopedic Surgery Hospital', ar: 'المستشفى التخصصي لجراحة العظام والتجميل' },
    phone: '777418997 - 734009638',
    logo: ''
  },
  {
    id: 'hospital-6',
    name: { en: 'Yemeni Russian Hospital', ar: 'المستشفى اليمني الروسي' },
    phone: '262920',
    logo: ''
  },
  {
    id: 'hospital-7',
    name: { en: 'Military Hospital', ar: 'المستشفى العسكري' },
    phone: '777174659',
    logo: ''
  },
  {
    id: 'hospital-8',
    name: { en: 'Modern Romanian Hospital', ar: 'المستشفى الروماني الحديث' },
    phone: '01-616374',
    logo: ''
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
    position: { en: 'Chairman of Board of Directors', ar: 'رئيس مجلس الإدارة' },
    image: 'https://shibapharma.com/media/chairman.jpg'
  },
  content: {
    en: `The pharmaceutical and Medicines industry is one of the important manufacturing industrial sectors that Yemen needs to expand in the coming period.

The national pharmaceutical industry should be a mainstay in shaping Yemen's strategic economic dimension, that is due to its direct link to securing citizen health, in addition to its economic importance, and its close link to the health sector.

The state's orientation towards adopting a national strategy to encourage and develop the local pharmaceutical industry has contributed to raising the proportion of its competitive share on the pharmaceutical market by its acquisition of 25% in the provision of medicine, an increase of 15% over previous years, and this increase occurred as a result of its expansion plans by adding new production lines and increasing manufacturing. Pharmaceutical groups required by local markets to lead the local pharmaceutical industry to play its role in achieving drug security for the country.

We aim at Shiba Pharma Co to manufacture the drug in a way that supports the provision of health services and medicines and with sufficient levels and quality to achieve the satisfaction of citizens, To this end, initiatives and indicators have been identified that guarantee support and encouragement of investment in the pharmaceutical industries and a trend towards drug self-sufficiency.

Which directs everyone towards improving the reality of pharmaceutical education through an educational curriculum based on the methods of scientific and applied training which outputs meet the aspirations of the labor market in the pharmaceutical industry.

Therefore, we should all adopt a joint national responsibility to develop pharmaceutical education by academics specialized in the various fields of pharmacy to ensure the quality of outputs that meet the country's ambitions to increase or localize the pharmaceutical industries in order to ensure the implementation of the national vision that establishes a next stage in this field and considers it an important tributary to the national economy, to establishes a future stage in this field and considers it an important tributary of the national economy due to its importance in achieving phased security, providing a drug of high quality and high effectiveness, and advancing the health field with a scientific, systematic, studied, integrated vision and easy to implement and implement.`,
    ar: `صناعة الأدوية والأدوية من القطاعات الصناعية التصنيعية المهمة التي يحتاج اليمن إلى التوسع فيها في الفترة المقبلة.

يجب أن تكون الصناعة الدوائية الوطنية ركيزة أساسية في تشكيل البعد الاقتصادي الاستراتيجي لليمن، وذلك لارتباطها المباشر بتأمين صحة المواطن، بالإضافة إلى أهميتها الاقتصادية، وارتباطها الوثيق بقطاع الصحة.

ساهم توجه الدولة نحو تبني استراتيجية وطنية لتشجيع وتطوير الصناعة الدوائية المحلية في رفع نسبة حصتها التنافسية في سوق الأدوية باستحواذها على 25% في توفير الدواء، بزيادة 15% عن السنوات السابقة، وجاءت هذه الزيادة نتيجة خطط التوسع بإضافة خطوط إنتاج جديدة وزيادة التصنيع. المجموعات الدوائية المطلوبة من الأسواق المحلية لقيادة الصناعة الدوائية المحلية للعب دورها في تحقيق الأمن الدوائي للبلاد.

نهدف في شركة سبأ فارما إلى تصنيع الدواء بطريقة تدعم توفير الخدمات الصحية والأدوية وبمستويات كافية وجودة لتحقيق رضا المواطنين، ولهذه الغاية تم تحديد مبادرات ومؤشرات تضمن دعم وتشجيع الاستثمار في الصناعات الدوائية والتوجه نحو الاكتفاء الذاتي الدوائي.

مما يوجه الجميع نحو تحسين واقع التعليم الصيدلاني من خلال منهج تعليمي مبني على أساليب التدريب العلمي والتطبيقي الذي تلبي مخرجاته تطلعات سوق العمل في الصناعة الدوائية.

لذلك علينا جميعاً أن نتبنى مسؤولية وطنية مشتركة لتطوير التعليم الصيدلاني من قبل أكاديميين متخصصين في مختلف مجالات الصيدلة لضمان جودة المخرجات التي تلبي طموحات البلاد لزيادة أو توطين الصناعات الدوائية من أجل ضمان تنفيذ الرؤية الوطنية التي تؤسس لمرحلة قادمة في هذا المجال وتعتبره رافداً مهماً للاقتصاد الوطني.`
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
        en: 'The company\'s business strategy is based on innovation and The main source of innovation are employees. Shiba Pharma company doing motivates, develops and retains its talented employees, to help them perform well in high levels of continuous success. The company also treats its employees with respect, honesty and transparency as a basis for its relationship with them. The management of Shiba pharma for Pharmaceutical Industry adheres to the principle of equal opportunities and following fair procedures in relation to employment issues.',
        ar: 'تعتمد استراتيجية أعمال الشركة على الابتكار والمصدر الرئيسي للابتكار هم الموظفون. تقوم شركة سبأ فارما بتحفيز وتطوير والاحتفاظ بموظفيها الموهوبين لمساعدتهم على الأداء الجيد في مستويات عالية من النجاح المستمر. كما تعامل الشركة موظفيها باحترام وصدق وشفافية كأساس لعلاقتها معهم. تلتزم إدارة سبأ فارما للصناعات الدوائية بمبدأ تكافؤ الفرص واتباع إجراءات عادلة فيما يتعلق بقضايا التوظيف.'
      }
    },
    {
      id: 'community',
      title: { en: 'Community Responsibility', ar: 'المسؤولية المجتمعية' },
      content: {
        en: 'Shiba Pharma Co for Pharmaceutical Industry is committed to its social responsibility role, and It complies with all applicable laws, especially related to the environment, occupational health and safety, and ethics of business practices, employment and employment. Shiba pharma for Pharmaceutical Industry bears its responsibility towards the community and understand the importance of living in harmony with society and contributing to its advancement, It supports charities and foundations that provide services to the poor and the needy, It also supports chronic disease associations. In addition, the company trains a large number of students of colleges of health and health institutes annually. and The technical team of the company contributes to help students who are working on research and graduation projects.',
        ar: 'تلتزم شركة سبأ فارما للصناعات الدوائية بدورها في المسؤولية الاجتماعية، وتلتزم بجميع القوانين المعمول بها، خاصة المتعلقة بالبيئة والصحة والسلامة المهنية وأخلاقيات الممارسات التجارية والتوظيف. تتحمل سبأ فارما للصناعات الدوائية مسؤوليتها تجاه المجتمع وتدرك أهمية العيش في وئام مع المجتمع والمساهمة في تقدمه، فهي تدعم الجمعيات الخيرية والمؤسسات التي تقدم خدمات للفقراء والمحتاجين، كما تدعم جمعيات الأمراض المزمنة. بالإضافة إلى ذلك، تقوم الشركة بتدريب عدد كبير من طلاب كليات الصحة والمعاهد الصحية سنوياً. ويساهم الفريق الفني للشركة في مساعدة الطلاب الذين يعملون على البحوث ومشاريع التخرج.'
      }
    },
    {
      id: 'environment',
      title: { en: 'Responsibility to the Environment', ar: 'المسؤولية تجاه البيئة' },
      content: {
        en: 'Shiba Pharma Co for Pharmaceutical Industry is committed to its responsibility to protect the environment in all its operations, It is keen to ensure minimal negative impact on the environment you are around Including ensuring rational use of natural resources and taking into consideration the overall impact on the environment. The International Pharmaceutical Manufacturing Company also contributes, to the extent possible, to projects and initiatives That promotes and works to protect and conserve the environment.',
        ar: 'تلتزم شركة سبأ فارما للصناعات الدوائية بمسؤوليتها في حماية البيئة في جميع عملياتها، وتحرص على ضمان الحد الأدنى من التأثير السلبي على البيئة من حولك بما في ذلك ضمان الاستخدام الرشيد للموارد الطبيعية ومراعاة التأثير الكلي على البيئة. كما تساهم الشركة الدولية لصناعة الأدوية، بقدر الإمكان، في المشاريع والمبادرات التي تعزز وتعمل على حماية البيئة والحفاظ عليها.'
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
    details: { en: 'Details', ar: 'تفاصيل' },
    share: { en: 'Share', ar: 'مشاركة الرابط' },
  },
  sections: {
    featuredProducts: { en: 'Featured Products', ar: 'منتجات مميزة' },
    latestNews: { en: 'Latest News', ar: 'آخر الأخبار' },
    ourValues: { en: 'Our Values', ar: 'قيمنا' },
    contactUs: { en: 'Contact Us', ar: 'اتصل بنا' },
    subscribeNewsletter: { en: 'Subscribe on ShibaPharma now', ar: 'اشترك في سبأ فارما الآن' },
    newsletterDescription: { en: 'Join us to get Shiba Pharma newsletter & news & events.', ar: 'انضم إلينا للحصول على نشرة سبأ فارما الإخبارية والأخبار والفعاليات.' },
    aboutUs: { en: 'About Us', ar: 'من نحن' },
    ourProducts: { en: 'Our Products', ar: 'منتجاتنا' },
    medicalDirectory: { en: 'Medical Directory', ar: 'الدليل الطبي' },
    videos: { en: 'Videos', ar: 'الفيديوهات' },
    productionManagement: { en: 'Production Management', ar: 'إدارة الإنتاج' },
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
