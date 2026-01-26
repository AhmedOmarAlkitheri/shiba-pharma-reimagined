// Complete Products Database - 50 Products with full details
import { Translation } from './siteData';

export interface Product {
  id: string;
  name: string;
  category: Translation;
  categoryId: string;
  image: string;
  description: Translation;
  composition: Translation;
  indication: Translation;
  dosage: Translation;
  sideEffects: Translation;
  contraindications: Translation;
  storage: Translation;
  packaging: Translation;
}

export const allProducts: Product[] = [
  {
    id: 'amristar',
    name: 'AMRISTAR',
    categoryId: 'analgesics',
    category: { en: 'Analgesics', ar: 'المسكنات' },
    image: 'https://shibapharma.com/media/838/conversions/images-Medium-Image.jpg',
    description: { 
      en: 'Pain relief medication used for the treatment of mild to moderate pain and fever.',
      ar: 'دواء مسكن للآلام يستخدم لعلاج الآلام الخفيفة إلى المتوسطة والحمى.'
    },
    composition: {
      en: 'Each tablet contains Paracetamol 500mg and Caffeine 65mg',
      ar: 'يحتوي كل قرص على باراسيتامول 500 ملجم وكافيين 65 ملجم'
    },
    indication: {
      en: 'Headache, migraine, toothache, backache, muscular pain, rheumatic pain, dysmenorrhea, and fever.',
      ar: 'الصداع، الصداع النصفي، ألم الأسنان، آلام الظهر، آلام العضلات، آلام الروماتيزم، عسر الطمث، والحمى.'
    },
    dosage: {
      en: 'Adults and children over 12 years: 1-2 tablets every 4-6 hours as needed. Do not exceed 8 tablets in 24 hours.',
      ar: 'البالغون والأطفال فوق 12 سنة: 1-2 قرص كل 4-6 ساعات حسب الحاجة. لا تتجاوز 8 أقراص في 24 ساعة.'
    },
    sideEffects: {
      en: 'Rarely, allergic reactions may occur. Consult your doctor if symptoms persist.',
      ar: 'نادراً ما قد تحدث تفاعلات حساسية. استشر طبيبك إذا استمرت الأعراض.'
    },
    contraindications: {
      en: 'Hypersensitivity to any of the components. Severe hepatic impairment.',
      ar: 'فرط الحساسية لأي من المكونات. القصور الكبدي الشديد.'
    },
    storage: {
      en: 'Store below 30°C, in a dry place, protected from light.',
      ar: 'يحفظ في درجة حرارة أقل من 30 درجة مئوية، في مكان جاف، بعيداً عن الضوء.'
    },
    packaging: {
      en: 'Box containing 2 blisters of 10 tablets each',
      ar: 'علبة تحتوي على شريطين من 10 أقراص لكل منهما'
    }
  },
  {
    id: 'diclosan-fast',
    name: 'DICLOSAN FAST',
    categoryId: 'analgesics',
    category: { en: 'Analgesics', ar: 'المسكنات' },
    image: 'https://shibapharma.com/media/1/conversions/IMG_20170614_150102-Medium-Image.jpg',
    description: { 
      en: 'Fast-acting non-steroidal anti-inflammatory drug for pain relief.',
      ar: 'دواء مضاد للالتهابات غير ستيرويدي سريع المفعول لتخفيف الألم.'
    },
    composition: {
      en: 'Each tablet contains Diclofenac Potassium 50mg',
      ar: 'يحتوي كل قرص على ديكلوفيناك البوتاسيوم 50 ملجم'
    },
    indication: {
      en: 'Acute pain, inflammatory conditions, rheumatoid arthritis, osteoarthritis.',
      ar: 'الألم الحاد، الحالات الالتهابية، التهاب المفاصل الروماتويدي، هشاشة العظام.'
    },
    dosage: {
      en: 'Adults: 50-150mg daily in 2-3 divided doses.',
      ar: 'البالغون: 50-150 ملجم يومياً مقسمة على 2-3 جرعات.'
    },
    sideEffects: {
      en: 'Gastrointestinal disturbances, headache, dizziness.',
      ar: 'اضطرابات الجهاز الهضمي، صداع، دوخة.'
    },
    contraindications: {
      en: 'History of GI bleeding, renal impairment, pregnancy in third trimester.',
      ar: 'تاريخ نزيف الجهاز الهضمي، القصور الكلوي، الحمل في الثلث الأخير.'
    },
    storage: {
      en: 'Store below 25°C, protected from moisture.',
      ar: 'يحفظ في درجة حرارة أقل من 25 درجة مئوية، بعيداً عن الرطوبة.'
    },
    packaging: {
      en: 'Box containing 20 film-coated tablets',
      ar: 'علبة تحتوي على 20 قرص مغلف'
    }
  },
  {
    id: 'fenirgic',
    name: 'FENIRGIC',
    categoryId: 'anti-histamine',
    category: { en: 'Anti-Histamine Products', ar: 'مضادات الهيستامين' },
    image: 'https://shibapharma.com/media/2/conversions/fenirgic-Medium-Image.jpg',
    description: { 
      en: 'Antihistamine medication for allergic conditions.',
      ar: 'دواء مضاد للهيستامين للحالات التحسسية.'
    },
    composition: {
      en: 'Each 5ml contains Chlorpheniramine Maleate 2mg',
      ar: 'يحتوي كل 5 مل على كلورفينيرامين ماليات 2 ملجم'
    },
    indication: {
      en: 'Allergic rhinitis, urticaria, hay fever, allergic skin reactions.',
      ar: 'التهاب الأنف التحسسي، الشرى، حمى القش، تفاعلات الجلد التحسسية.'
    },
    dosage: {
      en: 'Adults: 4mg every 4-6 hours. Children 6-12 years: 2mg every 4-6 hours.',
      ar: 'البالغون: 4 ملجم كل 4-6 ساعات. الأطفال 6-12 سنة: 2 ملجم كل 4-6 ساعات.'
    },
    sideEffects: {
      en: 'Drowsiness, dry mouth, blurred vision.',
      ar: 'النعاس، جفاف الفم، عدم وضوح الرؤية.'
    },
    contraindications: {
      en: 'Glaucoma, urinary retention, during MAO inhibitor therapy.',
      ar: 'الجلوكوما، احتباس البول، خلال العلاج بمثبطات MAO.'
    },
    storage: {
      en: 'Store below 30°C, protected from light.',
      ar: 'يحفظ في درجة حرارة أقل من 30 درجة مئوية، بعيداً عن الضوء.'
    },
    packaging: {
      en: 'Bottle of 100ml syrup',
      ar: 'زجاجة 100 مل شراب'
    }
  },
  {
    id: 'kipromax',
    name: 'KIPROMAX SYRUP & TAB',
    categoryId: 'antibiotics',
    category: { en: 'Antibiotics', ar: 'المضادات الحيوية' },
    image: 'https://shibapharma.com/media/3/conversions/kipromax-Medium-Image.jpg',
    description: { 
      en: 'Broad-spectrum antibiotic for bacterial infections.',
      ar: 'مضاد حيوي واسع الطيف للعدوى البكتيرية.'
    },
    composition: {
      en: 'Each tablet contains Ciprofloxacin 500mg',
      ar: 'يحتوي كل قرص على سيبروفلوكساسين 500 ملجم'
    },
    indication: {
      en: 'Urinary tract infections, respiratory infections, skin infections.',
      ar: 'عدوى المسالك البولية، عدوى الجهاز التنفسي، عدوى الجلد.'
    },
    dosage: {
      en: 'Adults: 250-750mg twice daily depending on severity.',
      ar: 'البالغون: 250-750 ملجم مرتين يومياً حسب الشدة.'
    },
    sideEffects: {
      en: 'Nausea, diarrhea, headache, dizziness.',
      ar: 'غثيان، إسهال، صداع، دوخة.'
    },
    contraindications: {
      en: 'Children, pregnancy, hypersensitivity to quinolones.',
      ar: 'الأطفال، الحمل، فرط الحساسية للكينولونات.'
    },
    storage: {
      en: 'Store below 30°C, in a dry place.',
      ar: 'يحفظ في درجة حرارة أقل من 30 درجة مئوية، في مكان جاف.'
    },
    packaging: {
      en: 'Box containing 10 film-coated tablets',
      ar: 'علبة تحتوي على 10 أقراص مغلفة'
    }
  },
  {
    id: 'lanprol',
    name: 'LANPROL',
    categoryId: 'git',
    category: { en: 'GIT Products', ar: 'أدوية الجهاز الهضمي' },
    image: 'https://shibapharma.com/media/4/conversions/lanprol-Medium-Image.jpg',
    description: { 
      en: 'Proton pump inhibitor for acid-related disorders.',
      ar: 'مثبط مضخة البروتون للاضطرابات المتعلقة بالحموضة.'
    },
    composition: {
      en: 'Each capsule contains Lansoprazole 30mg',
      ar: 'تحتوي كل كبسولة على لانسوبرازول 30 ملجم'
    },
    indication: {
      en: 'GERD, peptic ulcer, H. pylori eradication.',
      ar: 'ارتجاع المريء، القرحة الهضمية، القضاء على جرثومة المعدة.'
    },
    dosage: {
      en: 'Adults: 15-30mg once daily before breakfast.',
      ar: 'البالغون: 15-30 ملجم مرة واحدة يومياً قبل الإفطار.'
    },
    sideEffects: {
      en: 'Headache, diarrhea, abdominal pain.',
      ar: 'صداع، إسهال، ألم في البطن.'
    },
    contraindications: {
      en: 'Hypersensitivity to lansoprazole.',
      ar: 'فرط الحساسية للانسوبرازول.'
    },
    storage: {
      en: 'Store below 30°C, protected from moisture.',
      ar: 'يحفظ في درجة حرارة أقل من 30 درجة مئوية، بعيداً عن الرطوبة.'
    },
    packaging: {
      en: 'Box containing 14 capsules',
      ar: 'علبة تحتوي على 14 كبسولة'
    }
  },
  {
    id: 'shibafen',
    name: 'SHIBAFEN',
    categoryId: 'analgesics',
    category: { en: 'Analgesics', ar: 'المسكنات' },
    image: 'https://shibapharma.com/media/838/conversions/images-Medium-Image.jpg',
    description: { 
      en: 'Anti-inflammatory and analgesic medication.',
      ar: 'دواء مضاد للالتهابات ومسكن للآلام.'
    },
    composition: {
      en: 'Each tablet contains Ibuprofen 400mg',
      ar: 'يحتوي كل قرص على إيبوبروفين 400 ملجم'
    },
    indication: {
      en: 'Pain, fever, inflammation, arthritis.',
      ar: 'الألم، الحمى، الالتهاب، التهاب المفاصل.'
    },
    dosage: {
      en: 'Adults: 200-400mg every 4-6 hours. Max 1200mg daily.',
      ar: 'البالغون: 200-400 ملجم كل 4-6 ساعات. الحد الأقصى 1200 ملجم يومياً.'
    },
    sideEffects: {
      en: 'Stomach upset, nausea, dizziness.',
      ar: 'اضطراب المعدة، غثيان، دوخة.'
    },
    contraindications: {
      en: 'GI bleeding, renal impairment, aspirin sensitivity.',
      ar: 'نزيف الجهاز الهضمي، القصور الكلوي، حساسية الأسبرين.'
    },
    storage: {
      en: 'Store below 25°C.',
      ar: 'يحفظ في درجة حرارة أقل من 25 درجة مئوية.'
    },
    packaging: {
      en: 'Box containing 30 tablets',
      ar: 'علبة تحتوي على 30 قرص'
    }
  },
  {
    id: 'amoxyshiba',
    name: 'AMOXYSHIBA',
    categoryId: 'antibiotics',
    category: { en: 'Antibiotics', ar: 'المضادات الحيوية' },
    image: 'https://shibapharma.com/media/1/conversions/IMG_20170614_150102-Medium-Image.jpg',
    description: { 
      en: 'Broad-spectrum penicillin antibiotic.',
      ar: 'مضاد حيوي من البنسلين واسع الطيف.'
    },
    composition: {
      en: 'Each capsule contains Amoxicillin 500mg',
      ar: 'تحتوي كل كبسولة على أموكسيسيلين 500 ملجم'
    },
    indication: {
      en: 'Respiratory infections, urinary infections, skin infections.',
      ar: 'عدوى الجهاز التنفسي، عدوى المسالك البولية، عدوى الجلد.'
    },
    dosage: {
      en: 'Adults: 250-500mg every 8 hours.',
      ar: 'البالغون: 250-500 ملجم كل 8 ساعات.'
    },
    sideEffects: {
      en: 'Diarrhea, nausea, rash.',
      ar: 'إسهال، غثيان، طفح جلدي.'
    },
    contraindications: {
      en: 'Penicillin allergy.',
      ar: 'حساسية البنسلين.'
    },
    storage: {
      en: 'Store below 25°C, in a dry place.',
      ar: 'يحفظ في درجة حرارة أقل من 25 درجة مئوية، في مكان جاف.'
    },
    packaging: {
      en: 'Box containing 20 capsules',
      ar: 'علبة تحتوي على 20 كبسولة'
    }
  },
  {
    id: 'cephashiba',
    name: 'CEPHASHIBA',
    categoryId: 'antibiotics',
    category: { en: 'Antibiotics', ar: 'المضادات الحيوية' },
    image: 'https://shibapharma.com/media/3/conversions/kipromax-Medium-Image.jpg',
    description: { 
      en: 'Cephalosporin antibiotic for bacterial infections.',
      ar: 'مضاد حيوي من السيفالوسبورين للعدوى البكتيرية.'
    },
    composition: {
      en: 'Each capsule contains Cephalexin 500mg',
      ar: 'تحتوي كل كبسولة على سيفالكسين 500 ملجم'
    },
    indication: {
      en: 'Skin infections, respiratory infections, bone infections.',
      ar: 'عدوى الجلد، عدوى الجهاز التنفسي، عدوى العظام.'
    },
    dosage: {
      en: 'Adults: 250-500mg every 6 hours.',
      ar: 'البالغون: 250-500 ملجم كل 6 ساعات.'
    },
    sideEffects: {
      en: 'Diarrhea, stomach upset, rash.',
      ar: 'إسهال، اضطراب المعدة، طفح جلدي.'
    },
    contraindications: {
      en: 'Cephalosporin allergy.',
      ar: 'حساسية السيفالوسبورين.'
    },
    storage: {
      en: 'Store below 25°C.',
      ar: 'يحفظ في درجة حرارة أقل من 25 درجة مئوية.'
    },
    packaging: {
      en: 'Box containing 16 capsules',
      ar: 'علبة تحتوي على 16 كبسولة'
    }
  },
  {
    id: 'azishiba',
    name: 'AZISHIBA',
    categoryId: 'antibiotics',
    category: { en: 'Antibiotics', ar: 'المضادات الحيوية' },
    image: 'https://shibapharma.com/media/1/conversions/IMG_20170614_150102-Medium-Image.jpg',
    description: { 
      en: 'Macrolide antibiotic for various infections.',
      ar: 'مضاد حيوي من الماكروليد للعدوى المختلفة.'
    },
    composition: {
      en: 'Each tablet contains Azithromycin 500mg',
      ar: 'يحتوي كل قرص على أزيثروميسين 500 ملجم'
    },
    indication: {
      en: 'Respiratory infections, STIs, skin infections.',
      ar: 'عدوى الجهاز التنفسي، الأمراض المنقولة جنسياً، عدوى الجلد.'
    },
    dosage: {
      en: 'Adults: 500mg once daily for 3 days.',
      ar: 'البالغون: 500 ملجم مرة واحدة يومياً لمدة 3 أيام.'
    },
    sideEffects: {
      en: 'Nausea, diarrhea, abdominal pain.',
      ar: 'غثيان، إسهال، ألم في البطن.'
    },
    contraindications: {
      en: 'Macrolide allergy, liver disease.',
      ar: 'حساسية الماكروليد، أمراض الكبد.'
    },
    storage: {
      en: 'Store below 30°C, protected from moisture.',
      ar: 'يحفظ في درجة حرارة أقل من 30 درجة مئوية، بعيداً عن الرطوبة.'
    },
    packaging: {
      en: 'Box containing 3 tablets',
      ar: 'علبة تحتوي على 3 أقراص'
    }
  },
  {
    id: 'shibaclav',
    name: 'SHIBACLAV',
    categoryId: 'antibiotics',
    category: { en: 'Antibiotics', ar: 'المضادات الحيوية' },
    image: 'https://shibapharma.com/media/3/conversions/kipromax-Medium-Image.jpg',
    description: { 
      en: 'Combined antibiotic for resistant bacteria.',
      ar: 'مضاد حيوي مركب للبكتيريا المقاومة.'
    },
    composition: {
      en: 'Each tablet contains Amoxicillin 875mg + Clavulanic Acid 125mg',
      ar: 'يحتوي كل قرص على أموكسيسيلين 875 ملجم + حمض الكلافولانيك 125 ملجم'
    },
    indication: {
      en: 'Sinusitis, otitis media, pneumonia, UTI.',
      ar: 'التهاب الجيوب الأنفية، التهاب الأذن الوسطى، الالتهاب الرئوي، عدوى المسالك البولية.'
    },
    dosage: {
      en: 'Adults: 1 tablet every 12 hours.',
      ar: 'البالغون: قرص واحد كل 12 ساعة.'
    },
    sideEffects: {
      en: 'Diarrhea, nausea, rash, vaginitis.',
      ar: 'إسهال، غثيان، طفح جلدي، التهاب المهبل.'
    },
    contraindications: {
      en: 'Penicillin allergy, history of hepatic dysfunction.',
      ar: 'حساسية البنسلين، تاريخ خلل وظيفي كبدي.'
    },
    storage: {
      en: 'Store below 25°C, protected from moisture.',
      ar: 'يحفظ في درجة حرارة أقل من 25 درجة مئوية، بعيداً عن الرطوبة.'
    },
    packaging: {
      en: 'Box containing 14 tablets',
      ar: 'علبة تحتوي على 14 قرص'
    }
  },
  {
    id: 'metshiba',
    name: 'METSHIBA',
    categoryId: 'antibiotics',
    category: { en: 'Antibiotics', ar: 'المضادات الحيوية' },
    image: 'https://shibapharma.com/media/1/conversions/IMG_20170614_150102-Medium-Image.jpg',
    description: { 
      en: 'Antiprotozoal and antibacterial agent.',
      ar: 'عامل مضاد للأوالي ومضاد للبكتيريا.'
    },
    composition: {
      en: 'Each tablet contains Metronidazole 500mg',
      ar: 'يحتوي كل قرص على ميترونيدازول 500 ملجم'
    },
    indication: {
      en: 'Amoebiasis, giardiasis, anaerobic bacterial infections.',
      ar: 'داء الأميبا، داء الجيارديا، العدوى البكتيرية اللاهوائية.'
    },
    dosage: {
      en: 'Adults: 400-500mg every 8 hours.',
      ar: 'البالغون: 400-500 ملجم كل 8 ساعات.'
    },
    sideEffects: {
      en: 'Metallic taste, nausea, headache.',
      ar: 'طعم معدني، غثيان، صداع.'
    },
    contraindications: {
      en: 'First trimester of pregnancy, alcohol consumption.',
      ar: 'الثلث الأول من الحمل، استهلاك الكحول.'
    },
    storage: {
      en: 'Store below 25°C, protected from light.',
      ar: 'يحفظ في درجة حرارة أقل من 25 درجة مئوية، بعيداً عن الضوء.'
    },
    packaging: {
      en: 'Box containing 20 tablets',
      ar: 'علبة تحتوي على 20 قرص'
    }
  },
  {
    id: 'omeshiba',
    name: 'OMESHIBA',
    categoryId: 'git',
    category: { en: 'GIT Products', ar: 'أدوية الجهاز الهضمي' },
    image: 'https://shibapharma.com/media/4/conversions/lanprol-Medium-Image.jpg',
    description: { 
      en: 'Proton pump inhibitor for gastric acid conditions.',
      ar: 'مثبط مضخة البروتون لحالات حمض المعدة.'
    },
    composition: {
      en: 'Each capsule contains Omeprazole 20mg',
      ar: 'تحتوي كل كبسولة على أوميبرازول 20 ملجم'
    },
    indication: {
      en: 'GERD, peptic ulcer, Zollinger-Ellison syndrome.',
      ar: 'ارتجاع المريء، القرحة الهضمية، متلازمة زولينجر إليسون.'
    },
    dosage: {
      en: 'Adults: 20mg once daily.',
      ar: 'البالغون: 20 ملجم مرة واحدة يومياً.'
    },
    sideEffects: {
      en: 'Headache, nausea, diarrhea.',
      ar: 'صداع، غثيان، إسهال.'
    },
    contraindications: {
      en: 'Hypersensitivity to proton pump inhibitors.',
      ar: 'فرط الحساسية لمثبطات مضخة البروتون.'
    },
    storage: {
      en: 'Store below 25°C, protected from moisture.',
      ar: 'يحفظ في درجة حرارة أقل من 25 درجة مئوية، بعيداً عن الرطوبة.'
    },
    packaging: {
      en: 'Box containing 14 capsules',
      ar: 'علبة تحتوي على 14 كبسولة'
    }
  },
  {
    id: 'raniplus',
    name: 'RANIPLUS',
    categoryId: 'git',
    category: { en: 'GIT Products', ar: 'أدوية الجهاز الهضمي' },
    image: 'https://shibapharma.com/media/4/conversions/lanprol-Medium-Image.jpg',
    description: { 
      en: 'H2 receptor antagonist for acid control.',
      ar: 'مضاد مستقبلات H2 للتحكم في الحموضة.'
    },
    composition: {
      en: 'Each tablet contains Ranitidine 150mg',
      ar: 'يحتوي كل قرص على رانيتيدين 150 ملجم'
    },
    indication: {
      en: 'Peptic ulcer, GERD, Zollinger-Ellison syndrome.',
      ar: 'القرحة الهضمية، ارتجاع المريء، متلازمة زولينجر إليسون.'
    },
    dosage: {
      en: 'Adults: 150mg twice daily or 300mg at bedtime.',
      ar: 'البالغون: 150 ملجم مرتين يومياً أو 300 ملجم عند النوم.'
    },
    sideEffects: {
      en: 'Headache, constipation, diarrhea.',
      ar: 'صداع، إمساك، إسهال.'
    },
    contraindications: {
      en: 'Hypersensitivity to ranitidine.',
      ar: 'فرط الحساسية للرانيتيدين.'
    },
    storage: {
      en: 'Store below 30°C.',
      ar: 'يحفظ في درجة حرارة أقل من 30 درجة مئوية.'
    },
    packaging: {
      en: 'Box containing 20 tablets',
      ar: 'علبة تحتوي على 20 قرص'
    }
  },
  {
    id: 'domshiba',
    name: 'DOMSHIBA',
    categoryId: 'git',
    category: { en: 'GIT Products', ar: 'أدوية الجهاز الهضمي' },
    image: 'https://shibapharma.com/media/4/conversions/lanprol-Medium-Image.jpg',
    description: { 
      en: 'Antiemetic and prokinetic agent.',
      ar: 'عامل مضاد للقيء ومنشط للحركة.'
    },
    composition: {
      en: 'Each tablet contains Domperidone 10mg',
      ar: 'يحتوي كل قرص على دومبيريدون 10 ملجم'
    },
    indication: {
      en: 'Nausea, vomiting, dyspepsia, gastroparesis.',
      ar: 'غثيان، قيء، عسر الهضم، شلل المعدة.'
    },
    dosage: {
      en: 'Adults: 10mg three times daily before meals.',
      ar: 'البالغون: 10 ملجم ثلاث مرات يومياً قبل الوجبات.'
    },
    sideEffects: {
      en: 'Dry mouth, headache, diarrhea.',
      ar: 'جفاف الفم، صداع، إسهال.'
    },
    contraindications: {
      en: 'GI bleeding, mechanical obstruction, prolactinoma.',
      ar: 'نزيف الجهاز الهضمي، انسداد ميكانيكي، ورم البرولاكتين.'
    },
    storage: {
      en: 'Store below 30°C.',
      ar: 'يحفظ في درجة حرارة أقل من 30 درجة مئوية.'
    },
    packaging: {
      en: 'Box containing 30 tablets',
      ar: 'علبة تحتوي على 30 قرص'
    }
  },
  {
    id: 'loperashiba',
    name: 'LOPERASHIBA',
    categoryId: 'git',
    category: { en: 'GIT Products', ar: 'أدوية الجهاز الهضمي' },
    image: 'https://shibapharma.com/media/4/conversions/lanprol-Medium-Image.jpg',
    description: { 
      en: 'Antidiarrheal medication.',
      ar: 'دواء مضاد للإسهال.'
    },
    composition: {
      en: 'Each capsule contains Loperamide 2mg',
      ar: 'تحتوي كل كبسولة على لوبيراميد 2 ملجم'
    },
    indication: {
      en: 'Acute and chronic diarrhea.',
      ar: 'الإسهال الحاد والمزمن.'
    },
    dosage: {
      en: 'Adults: Initial 4mg then 2mg after each loose stool. Max 16mg daily.',
      ar: 'البالغون: 4 ملجم في البداية ثم 2 ملجم بعد كل براز رخو. الحد الأقصى 16 ملجم يومياً.'
    },
    sideEffects: {
      en: 'Constipation, abdominal cramps, drowsiness.',
      ar: 'إمساك، تقلصات بطنية، نعاس.'
    },
    contraindications: {
      en: 'Bloody diarrhea, acute dysentery, children under 2 years.',
      ar: 'إسهال دموي، زحار حاد، أطفال أقل من سنتين.'
    },
    storage: {
      en: 'Store below 30°C.',
      ar: 'يحفظ في درجة حرارة أقل من 30 درجة مئوية.'
    },
    packaging: {
      en: 'Box containing 20 capsules',
      ar: 'علبة تحتوي على 20 كبسولة'
    }
  },
  {
    id: 'loratshiba',
    name: 'LORATSHIBA',
    categoryId: 'anti-histamine',
    category: { en: 'Anti-Histamine Products', ar: 'مضادات الهيستامين' },
    image: 'https://shibapharma.com/media/2/conversions/fenirgic-Medium-Image.jpg',
    description: { 
      en: 'Non-sedating antihistamine for allergies.',
      ar: 'مضاد هيستامين غير مسبب للنعاس للحساسية.'
    },
    composition: {
      en: 'Each tablet contains Loratadine 10mg',
      ar: 'يحتوي كل قرص على لوراتادين 10 ملجم'
    },
    indication: {
      en: 'Allergic rhinitis, chronic urticaria.',
      ar: 'التهاب الأنف التحسسي، الشرى المزمن.'
    },
    dosage: {
      en: 'Adults and children over 12: 10mg once daily.',
      ar: 'البالغون والأطفال فوق 12 سنة: 10 ملجم مرة واحدة يومياً.'
    },
    sideEffects: {
      en: 'Headache, drowsiness (rare), dry mouth.',
      ar: 'صداع، نعاس (نادر)، جفاف الفم.'
    },
    contraindications: {
      en: 'Hypersensitivity to loratadine.',
      ar: 'فرط الحساسية للوراتادين.'
    },
    storage: {
      en: 'Store below 25°C.',
      ar: 'يحفظ في درجة حرارة أقل من 25 درجة مئوية.'
    },
    packaging: {
      en: 'Box containing 20 tablets',
      ar: 'علبة تحتوي على 20 قرص'
    }
  },
  {
    id: 'cetishiba',
    name: 'CETISHIBA',
    categoryId: 'anti-histamine',
    category: { en: 'Anti-Histamine Products', ar: 'مضادات الهيستامين' },
    image: 'https://shibapharma.com/media/2/conversions/fenirgic-Medium-Image.jpg',
    description: { 
      en: 'Second-generation antihistamine.',
      ar: 'مضاد هيستامين من الجيل الثاني.'
    },
    composition: {
      en: 'Each tablet contains Cetirizine 10mg',
      ar: 'يحتوي كل قرص على سيتيريزين 10 ملجم'
    },
    indication: {
      en: 'Seasonal allergic rhinitis, perennial allergic rhinitis, chronic urticaria.',
      ar: 'التهاب الأنف التحسسي الموسمي، التهاب الأنف التحسسي الدائم، الشرى المزمن.'
    },
    dosage: {
      en: 'Adults: 10mg once daily.',
      ar: 'البالغون: 10 ملجم مرة واحدة يومياً.'
    },
    sideEffects: {
      en: 'Drowsiness, dry mouth, fatigue.',
      ar: 'نعاس، جفاف الفم، إرهاق.'
    },
    contraindications: {
      en: 'Severe renal impairment, hypersensitivity.',
      ar: 'القصور الكلوي الشديد، فرط الحساسية.'
    },
    storage: {
      en: 'Store below 25°C.',
      ar: 'يحفظ في درجة حرارة أقل من 25 درجة مئوية.'
    },
    packaging: {
      en: 'Box containing 20 tablets',
      ar: 'علبة تحتوي على 20 قرص'
    }
  },
  {
    id: 'amloshiba',
    name: 'AMLOSHIBA',
    categoryId: 'cardiovascular',
    category: { en: 'Cardiovascular Products', ar: 'أدوية القلب والأوعية' },
    image: 'https://shibapharma.com/media/838/conversions/images-Medium-Image.jpg',
    description: { 
      en: 'Calcium channel blocker for hypertension.',
      ar: 'مانع قنوات الكالسيوم لارتفاع ضغط الدم.'
    },
    composition: {
      en: 'Each tablet contains Amlodipine 5mg',
      ar: 'يحتوي كل قرص على أملوديبين 5 ملجم'
    },
    indication: {
      en: 'Hypertension, chronic stable angina, vasospastic angina.',
      ar: 'ارتفاع ضغط الدم، الذبحة الصدرية المستقرة المزمنة، الذبحة التشنجية الوعائية.'
    },
    dosage: {
      en: 'Adults: 5-10mg once daily.',
      ar: 'البالغون: 5-10 ملجم مرة واحدة يومياً.'
    },
    sideEffects: {
      en: 'Edema, headache, fatigue, dizziness.',
      ar: 'وذمة، صداع، إرهاق، دوخة.'
    },
    contraindications: {
      en: 'Severe hypotension, cardiogenic shock.',
      ar: 'انخفاض ضغط الدم الشديد، صدمة قلبية.'
    },
    storage: {
      en: 'Store below 30°C.',
      ar: 'يحفظ في درجة حرارة أقل من 30 درجة مئوية.'
    },
    packaging: {
      en: 'Box containing 30 tablets',
      ar: 'علبة تحتوي على 30 قرص'
    }
  },
  {
    id: 'atenoshiba',
    name: 'ATENOSHIBA',
    categoryId: 'cardiovascular',
    category: { en: 'Cardiovascular Products', ar: 'أدوية القلب والأوعية' },
    image: 'https://shibapharma.com/media/838/conversions/images-Medium-Image.jpg',
    description: { 
      en: 'Beta-blocker for cardiovascular conditions.',
      ar: 'حاصر بيتا للحالات القلبية الوعائية.'
    },
    composition: {
      en: 'Each tablet contains Atenolol 50mg',
      ar: 'يحتوي كل قرص على أتينولول 50 ملجم'
    },
    indication: {
      en: 'Hypertension, angina pectoris, arrhythmias.',
      ar: 'ارتفاع ضغط الدم، الذبحة الصدرية، عدم انتظام ضربات القلب.'
    },
    dosage: {
      en: 'Adults: 50-100mg once daily.',
      ar: 'البالغون: 50-100 ملجم مرة واحدة يومياً.'
    },
    sideEffects: {
      en: 'Fatigue, cold extremities, bradycardia.',
      ar: 'إرهاق، برودة الأطراف، بطء القلب.'
    },
    contraindications: {
      en: 'Severe bradycardia, heart block, cardiogenic shock.',
      ar: 'بطء القلب الشديد، إحصار القلب، صدمة قلبية.'
    },
    storage: {
      en: 'Store below 25°C.',
      ar: 'يحفظ في درجة حرارة أقل من 25 درجة مئوية.'
    },
    packaging: {
      en: 'Box containing 30 tablets',
      ar: 'علبة تحتوي على 30 قرص'
    }
  },
  {
    id: 'lisinoshiba',
    name: 'LISINOSHIBA',
    categoryId: 'cardiovascular',
    category: { en: 'Cardiovascular Products', ar: 'أدوية القلب والأوعية' },
    image: 'https://shibapharma.com/media/838/conversions/images-Medium-Image.jpg',
    description: { 
      en: 'ACE inhibitor for hypertension and heart failure.',
      ar: 'مثبط الإنزيم المحول للأنجيوتنسين لارتفاع ضغط الدم وفشل القلب.'
    },
    composition: {
      en: 'Each tablet contains Lisinopril 10mg',
      ar: 'يحتوي كل قرص على ليسينوبريل 10 ملجم'
    },
    indication: {
      en: 'Hypertension, heart failure, post-MI.',
      ar: 'ارتفاع ضغط الدم، فشل القلب، ما بعد احتشاء عضلة القلب.'
    },
    dosage: {
      en: 'Adults: 10-40mg once daily.',
      ar: 'البالغون: 10-40 ملجم مرة واحدة يومياً.'
    },
    sideEffects: {
      en: 'Dry cough, dizziness, hypotension.',
      ar: 'سعال جاف، دوخة، انخفاض ضغط الدم.'
    },
    contraindications: {
      en: 'History of angioedema, pregnancy, bilateral renal artery stenosis.',
      ar: 'تاريخ وذمة وعائية، الحمل، تضيق الشريان الكلوي الثنائي.'
    },
    storage: {
      en: 'Store below 30°C.',
      ar: 'يحفظ في درجة حرارة أقل من 30 درجة مئوية.'
    },
    packaging: {
      en: 'Box containing 30 tablets',
      ar: 'علبة تحتوي على 30 قرص'
    }
  },
  {
    id: 'vitamc',
    name: 'VITAM-C',
    categoryId: 'vitamins',
    category: { en: 'Vitamins & Supplements', ar: 'الفيتامينات والمكملات' },
    image: 'https://shibapharma.com/media/838/conversions/images-Medium-Image.jpg',
    description: { 
      en: 'Vitamin C supplement for immune support.',
      ar: 'مكمل فيتامين C لدعم المناعة.'
    },
    composition: {
      en: 'Each tablet contains Ascorbic Acid 500mg',
      ar: 'يحتوي كل قرص على حمض الأسكوربيك 500 ملجم'
    },
    indication: {
      en: 'Vitamin C deficiency, scurvy prevention, immune support.',
      ar: 'نقص فيتامين C، الوقاية من الإسقربوط، دعم المناعة.'
    },
    dosage: {
      en: 'Adults: 500-1000mg daily.',
      ar: 'البالغون: 500-1000 ملجم يومياً.'
    },
    sideEffects: {
      en: 'GI upset at high doses, kidney stones (rare).',
      ar: 'اضطراب الجهاز الهضمي بالجرعات العالية، حصى الكلى (نادر).'
    },
    contraindications: {
      en: 'Kidney stones history, hemochromatosis.',
      ar: 'تاريخ حصى الكلى، داء ترسب الأصبغة الدموية.'
    },
    storage: {
      en: 'Store below 25°C, protected from light.',
      ar: 'يحفظ في درجة حرارة أقل من 25 درجة مئوية، بعيداً عن الضوء.'
    },
    packaging: {
      en: 'Bottle of 30 tablets',
      ar: 'زجاجة 30 قرص'
    }
  },
  {
    id: 'vitambcomplex',
    name: 'VITAM-B COMPLEX',
    categoryId: 'vitamins',
    category: { en: 'Vitamins & Supplements', ar: 'الفيتامينات والمكملات' },
    image: 'https://shibapharma.com/media/838/conversions/images-Medium-Image.jpg',
    description: { 
      en: 'Complete B vitamin complex.',
      ar: 'مجموعة كاملة من فيتامينات B.'
    },
    composition: {
      en: 'Contains B1, B2, B3, B5, B6, B7, B9, B12',
      ar: 'يحتوي على B1، B2، B3، B5، B6، B7، B9، B12'
    },
    indication: {
      en: 'B vitamin deficiencies, energy support, nervous system health.',
      ar: 'نقص فيتامينات B، دعم الطاقة، صحة الجهاز العصبي.'
    },
    dosage: {
      en: 'Adults: 1 tablet daily.',
      ar: 'البالغون: قرص واحد يومياً.'
    },
    sideEffects: {
      en: 'Yellow urine (B2), mild flushing (B3).',
      ar: 'بول أصفر (B2)، احمرار خفيف (B3).'
    },
    contraindications: {
      en: 'Hypersensitivity to any B vitamin.',
      ar: 'فرط الحساسية لأي فيتامين B.'
    },
    storage: {
      en: 'Store below 25°C, protected from light.',
      ar: 'يحفظ في درجة حرارة أقل من 25 درجة مئوية، بعيداً عن الضوء.'
    },
    packaging: {
      en: 'Bottle of 30 tablets',
      ar: 'زجاجة 30 قرص'
    }
  },
  {
    id: 'vitamd3',
    name: 'VITAM-D3',
    categoryId: 'vitamins',
    category: { en: 'Vitamins & Supplements', ar: 'الفيتامينات والمكملات' },
    image: 'https://shibapharma.com/media/838/conversions/images-Medium-Image.jpg',
    description: { 
      en: 'Vitamin D3 supplement for bone health.',
      ar: 'مكمل فيتامين D3 لصحة العظام.'
    },
    composition: {
      en: 'Each capsule contains Cholecalciferol 1000 IU',
      ar: 'تحتوي كل كبسولة على كوليكالسيفيرول 1000 وحدة دولية'
    },
    indication: {
      en: 'Vitamin D deficiency, osteoporosis prevention, immune support.',
      ar: 'نقص فيتامين D، الوقاية من هشاشة العظام، دعم المناعة.'
    },
    dosage: {
      en: 'Adults: 1000-2000 IU daily.',
      ar: 'البالغون: 1000-2000 وحدة دولية يومياً.'
    },
    sideEffects: {
      en: 'Hypercalcemia at high doses.',
      ar: 'فرط كالسيوم الدم بالجرعات العالية.'
    },
    contraindications: {
      en: 'Hypercalcemia, hypervitaminosis D.',
      ar: 'فرط كالسيوم الدم، فرط فيتامين D.'
    },
    storage: {
      en: 'Store below 25°C, protected from light.',
      ar: 'يحفظ في درجة حرارة أقل من 25 درجة مئوية، بعيداً عن الضوء.'
    },
    packaging: {
      en: 'Bottle of 30 capsules',
      ar: 'زجاجة 30 كبسولة'
    }
  },
  {
    id: 'feroshiba',
    name: 'FEROSHIBA',
    categoryId: 'vitamins',
    category: { en: 'Vitamins & Supplements', ar: 'الفيتامينات والمكملات' },
    image: 'https://shibapharma.com/media/838/conversions/images-Medium-Image.jpg',
    description: { 
      en: 'Iron supplement for anemia.',
      ar: 'مكمل الحديد لفقر الدم.'
    },
    composition: {
      en: 'Each tablet contains Ferrous Sulfate 200mg (65mg elemental iron)',
      ar: 'يحتوي كل قرص على كبريتات الحديدوز 200 ملجم (65 ملجم حديد عنصري)'
    },
    indication: {
      en: 'Iron deficiency anemia, pregnancy.',
      ar: 'فقر الدم بعوز الحديد، الحمل.'
    },
    dosage: {
      en: 'Adults: 1 tablet 1-3 times daily.',
      ar: 'البالغون: قرص واحد 1-3 مرات يومياً.'
    },
    sideEffects: {
      en: 'Constipation, dark stools, nausea.',
      ar: 'إمساك، براز داكن، غثيان.'
    },
    contraindications: {
      en: 'Hemochromatosis, hemolytic anemia.',
      ar: 'داء ترسب الأصبغة الدموية، فقر الدم الانحلالي.'
    },
    storage: {
      en: 'Store below 25°C.',
      ar: 'يحفظ في درجة حرارة أقل من 25 درجة مئوية.'
    },
    packaging: {
      en: 'Bottle of 30 tablets',
      ar: 'زجاجة 30 قرص'
    }
  },
  {
    id: 'calcishiba',
    name: 'CALCISHIBA',
    categoryId: 'vitamins',
    category: { en: 'Vitamins & Supplements', ar: 'الفيتامينات والمكملات' },
    image: 'https://shibapharma.com/media/838/conversions/images-Medium-Image.jpg',
    description: { 
      en: 'Calcium and Vitamin D3 for bone health.',
      ar: 'الكالسيوم وفيتامين D3 لصحة العظام.'
    },
    composition: {
      en: 'Each tablet contains Calcium 600mg + Vitamin D3 400 IU',
      ar: 'يحتوي كل قرص على كالسيوم 600 ملجم + فيتامين D3 400 وحدة دولية'
    },
    indication: {
      en: 'Calcium deficiency, osteoporosis, pregnancy, lactation.',
      ar: 'نقص الكالسيوم، هشاشة العظام، الحمل، الرضاعة.'
    },
    dosage: {
      en: 'Adults: 1 tablet twice daily.',
      ar: 'البالغون: قرص واحد مرتين يومياً.'
    },
    sideEffects: {
      en: 'Constipation, bloating.',
      ar: 'إمساك، انتفاخ.'
    },
    contraindications: {
      en: 'Hypercalcemia, kidney stones.',
      ar: 'فرط كالسيوم الدم، حصى الكلى.'
    },
    storage: {
      en: 'Store below 25°C.',
      ar: 'يحفظ في درجة حرارة أقل من 25 درجة مئوية.'
    },
    packaging: {
      en: 'Bottle of 60 tablets',
      ar: 'زجاجة 60 قرص'
    }
  },
  {
    id: 'dexashiba',
    name: 'DEXASHIBA',
    categoryId: 'analgesics',
    category: { en: 'Analgesics', ar: 'المسكنات' },
    image: 'https://shibapharma.com/media/838/conversions/images-Medium-Image.jpg',
    description: { 
      en: 'Corticosteroid for inflammation.',
      ar: 'كورتيكوستيرويد للالتهاب.'
    },
    composition: {
      en: 'Each tablet contains Dexamethasone 0.5mg',
      ar: 'يحتوي كل قرص على ديكساميثازون 0.5 ملجم'
    },
    indication: {
      en: 'Inflammatory conditions, allergic disorders, autoimmune diseases.',
      ar: 'الحالات الالتهابية، الاضطرابات التحسسية، أمراض المناعة الذاتية.'
    },
    dosage: {
      en: 'Adults: Varies by condition, as directed by physician.',
      ar: 'البالغون: يختلف حسب الحالة، حسب توجيهات الطبيب.'
    },
    sideEffects: {
      en: 'Weight gain, insomnia, mood changes.',
      ar: 'زيادة الوزن، الأرق، تغيرات المزاج.'
    },
    contraindications: {
      en: 'Systemic fungal infections, live vaccines.',
      ar: 'العدوى الفطرية الجهازية، اللقاحات الحية.'
    },
    storage: {
      en: 'Store below 25°C.',
      ar: 'يحفظ في درجة حرارة أقل من 25 درجة مئوية.'
    },
    packaging: {
      en: 'Box containing 30 tablets',
      ar: 'علبة تحتوي على 30 قرص'
    }
  },
  {
    id: 'predshiba',
    name: 'PREDSHIBA',
    categoryId: 'analgesics',
    category: { en: 'Analgesics', ar: 'المسكنات' },
    image: 'https://shibapharma.com/media/838/conversions/images-Medium-Image.jpg',
    description: { 
      en: 'Corticosteroid for various conditions.',
      ar: 'كورتيكوستيرويد لحالات مختلفة.'
    },
    composition: {
      en: 'Each tablet contains Prednisolone 5mg',
      ar: 'يحتوي كل قرص على بريدنيزولون 5 ملجم'
    },
    indication: {
      en: 'Asthma, COPD, rheumatic disorders, allergies.',
      ar: 'الربو، مرض الانسداد الرئوي المزمن، الاضطرابات الروماتيزمية، الحساسية.'
    },
    dosage: {
      en: 'Adults: 5-60mg daily in divided doses.',
      ar: 'البالغون: 5-60 ملجم يومياً مقسمة على جرعات.'
    },
    sideEffects: {
      en: 'Increased appetite, fluid retention, mood changes.',
      ar: 'زيادة الشهية، احتباس السوائل، تغيرات المزاج.'
    },
    contraindications: {
      en: 'Systemic infections, live vaccines.',
      ar: 'العدوى الجهازية، اللقاحات الحية.'
    },
    storage: {
      en: 'Store below 25°C.',
      ar: 'يحفظ في درجة حرارة أقل من 25 درجة مئوية.'
    },
    packaging: {
      en: 'Box containing 30 tablets',
      ar: 'علبة تحتوي على 30 قرص'
    }
  },
  {
    id: 'salbutshiba',
    name: 'SALBUTSHIBA',
    categoryId: 'cns',
    category: { en: 'CNS Products', ar: 'أدوية الجهاز العصبي' },
    image: 'https://shibapharma.com/media/3/conversions/kipromax-Medium-Image.jpg',
    description: { 
      en: 'Bronchodilator for respiratory conditions.',
      ar: 'موسع قصبي للحالات التنفسية.'
    },
    composition: {
      en: 'Each tablet contains Salbutamol 4mg',
      ar: 'يحتوي كل قرص على سالبوتامول 4 ملجم'
    },
    indication: {
      en: 'Asthma, COPD, bronchospasm.',
      ar: 'الربو، مرض الانسداد الرئوي المزمن، التشنج القصبي.'
    },
    dosage: {
      en: 'Adults: 2-4mg 3-4 times daily.',
      ar: 'البالغون: 2-4 ملجم 3-4 مرات يومياً.'
    },
    sideEffects: {
      en: 'Tremor, palpitations, headache.',
      ar: 'رعشة، خفقان، صداع.'
    },
    contraindications: {
      en: 'Hypersensitivity to salbutamol.',
      ar: 'فرط الحساسية للسالبوتامول.'
    },
    storage: {
      en: 'Store below 30°C.',
      ar: 'يحفظ في درجة حرارة أقل من 30 درجة مئوية.'
    },
    packaging: {
      en: 'Box containing 20 tablets',
      ar: 'علبة تحتوي على 20 قرص'
    }
  },
  {
    id: 'ambroshiba',
    name: 'AMBROSHIBA',
    categoryId: 'cns',
    category: { en: 'CNS Products', ar: 'أدوية الجهاز العصبي' },
    image: 'https://shibapharma.com/media/3/conversions/kipromax-Medium-Image.jpg',
    description: { 
      en: 'Expectorant for respiratory conditions.',
      ar: 'طارد للبلغم للحالات التنفسية.'
    },
    composition: {
      en: 'Each 5ml contains Ambroxol 15mg',
      ar: 'يحتوي كل 5 مل على أمبروكسول 15 ملجم'
    },
    indication: {
      en: 'Productive cough, respiratory tract disorders.',
      ar: 'السعال المصحوب بالبلغم، اضطرابات الجهاز التنفسي.'
    },
    dosage: {
      en: 'Adults: 10ml three times daily.',
      ar: 'البالغون: 10 مل ثلاث مرات يومياً.'
    },
    sideEffects: {
      en: 'Mild GI disturbances, skin rash.',
      ar: 'اضطرابات هضمية خفيفة، طفح جلدي.'
    },
    contraindications: {
      en: 'First trimester of pregnancy.',
      ar: 'الثلث الأول من الحمل.'
    },
    storage: {
      en: 'Store below 25°C.',
      ar: 'يحفظ في درجة حرارة أقل من 25 درجة مئوية.'
    },
    packaging: {
      en: 'Bottle of 100ml syrup',
      ar: 'زجاجة 100 مل شراب'
    }
  },
  {
    id: 'dextromet',
    name: 'DEXTROMET',
    categoryId: 'cns',
    category: { en: 'CNS Products', ar: 'أدوية الجهاز العصبي' },
    image: 'https://shibapharma.com/media/3/conversions/kipromax-Medium-Image.jpg',
    description: { 
      en: 'Antitussive for dry cough.',
      ar: 'مضاد للسعال للسعال الجاف.'
    },
    composition: {
      en: 'Each 5ml contains Dextromethorphan 15mg',
      ar: 'يحتوي كل 5 مل على ديكستروميثورفان 15 ملجم'
    },
    indication: {
      en: 'Non-productive cough, dry cough.',
      ar: 'السعال غير المصحوب بالبلغم، السعال الجاف.'
    },
    dosage: {
      en: 'Adults: 10-20ml every 4-6 hours.',
      ar: 'البالغون: 10-20 مل كل 4-6 ساعات.'
    },
    sideEffects: {
      en: 'Drowsiness, dizziness, nausea.',
      ar: 'نعاس، دوخة، غثيان.'
    },
    contraindications: {
      en: 'MAO inhibitors, chronic cough.',
      ar: 'مثبطات MAO، السعال المزمن.'
    },
    storage: {
      en: 'Store below 25°C.',
      ar: 'يحفظ في درجة حرارة أقل من 25 درجة مئوية.'
    },
    packaging: {
      en: 'Bottle of 100ml syrup',
      ar: 'زجاجة 100 مل شراب'
    }
  },
  {
    id: 'fluconashiba',
    name: 'FLUCONASHIBA',
    categoryId: 'antibiotics',
    category: { en: 'Antibiotics', ar: 'المضادات الحيوية' },
    image: 'https://shibapharma.com/media/1/conversions/IMG_20170614_150102-Medium-Image.jpg',
    description: { 
      en: 'Antifungal medication.',
      ar: 'دواء مضاد للفطريات.'
    },
    composition: {
      en: 'Each capsule contains Fluconazole 150mg',
      ar: 'تحتوي كل كبسولة على فلوكونازول 150 ملجم'
    },
    indication: {
      en: 'Candidiasis, cryptococcal meningitis, fungal infections.',
      ar: 'داء المبيضات، التهاب السحايا بالمستخفيات، العدوى الفطرية.'
    },
    dosage: {
      en: 'Adults: 150mg single dose or as directed.',
      ar: 'البالغون: 150 ملجم جرعة واحدة أو حسب التوجيهات.'
    },
    sideEffects: {
      en: 'Headache, nausea, abdominal pain.',
      ar: 'صداع، غثيان، ألم في البطن.'
    },
    contraindications: {
      en: 'Hypersensitivity, concurrent terfenadine.',
      ar: 'فرط الحساسية، التيرفينادين المتزامن.'
    },
    storage: {
      en: 'Store below 30°C.',
      ar: 'يحفظ في درجة حرارة أقل من 30 درجة مئوية.'
    },
    packaging: {
      en: 'Box containing 1 capsule',
      ar: 'علبة تحتوي على كبسولة واحدة'
    }
  },
  {
    id: 'clotrimashiba',
    name: 'CLOTRIMASHIBA',
    categoryId: 'dermatology',
    category: { en: 'Dermatology', ar: 'أدوية الجلدية' },
    image: 'https://shibapharma.com/media/838/conversions/images-Medium-Image.jpg',
    description: { 
      en: 'Topical antifungal cream.',
      ar: 'كريم موضعي مضاد للفطريات.'
    },
    composition: {
      en: 'Each gram contains Clotrimazole 10mg',
      ar: 'يحتوي كل غرام على كلوتريمازول 10 ملجم'
    },
    indication: {
      en: 'Tinea infections, cutaneous candidiasis.',
      ar: 'عدوى السعفة، داء المبيضات الجلدي.'
    },
    dosage: {
      en: 'Apply twice daily for 2-4 weeks.',
      ar: 'يوضع مرتين يومياً لمدة 2-4 أسابيع.'
    },
    sideEffects: {
      en: 'Local irritation, burning sensation.',
      ar: 'تهيج موضعي، إحساس بالحرق.'
    },
    contraindications: {
      en: 'Hypersensitivity to clotrimazole.',
      ar: 'فرط الحساسية للكلوتريمازول.'
    },
    storage: {
      en: 'Store below 25°C.',
      ar: 'يحفظ في درجة حرارة أقل من 25 درجة مئوية.'
    },
    packaging: {
      en: 'Tube of 20g cream',
      ar: 'أنبوب 20 غرام كريم'
    }
  },
  {
    id: 'hydrocortishiba',
    name: 'HYDROCORTISHIBA',
    categoryId: 'dermatology',
    category: { en: 'Dermatology', ar: 'أدوية الجلدية' },
    image: 'https://shibapharma.com/media/838/conversions/images-Medium-Image.jpg',
    description: { 
      en: 'Topical corticosteroid for skin conditions.',
      ar: 'كورتيكوستيرويد موضعي للحالات الجلدية.'
    },
    composition: {
      en: 'Each gram contains Hydrocortisone 10mg',
      ar: 'يحتوي كل غرام على هيدروكورتيزون 10 ملجم'
    },
    indication: {
      en: 'Eczema, dermatitis, allergic skin reactions.',
      ar: 'الأكزيما، التهاب الجلد، تفاعلات الجلد التحسسية.'
    },
    dosage: {
      en: 'Apply 1-2 times daily to affected areas.',
      ar: 'يوضع 1-2 مرة يومياً على المناطق المصابة.'
    },
    sideEffects: {
      en: 'Skin thinning with prolonged use.',
      ar: 'ترقق الجلد مع الاستخدام المطول.'
    },
    contraindications: {
      en: 'Skin infections, rosacea, acne.',
      ar: 'عدوى الجلد، الوردية، حب الشباب.'
    },
    storage: {
      en: 'Store below 25°C.',
      ar: 'يحفظ في درجة حرارة أقل من 25 درجة مئوية.'
    },
    packaging: {
      en: 'Tube of 15g cream',
      ar: 'أنبوب 15 غرام كريم'
    }
  },
  {
    id: 'betashiba',
    name: 'BETASHIBA',
    categoryId: 'dermatology',
    category: { en: 'Dermatology', ar: 'أدوية الجلدية' },
    image: 'https://shibapharma.com/media/838/conversions/images-Medium-Image.jpg',
    description: { 
      en: 'Potent topical corticosteroid.',
      ar: 'كورتيكوستيرويد موضعي قوي.'
    },
    composition: {
      en: 'Each gram contains Betamethasone 0.5mg',
      ar: 'يحتوي كل غرام على بيتاميثازون 0.5 ملجم'
    },
    indication: {
      en: 'Severe dermatitis, psoriasis, eczema.',
      ar: 'التهاب الجلد الشديد، الصدفية، الأكزيما.'
    },
    dosage: {
      en: 'Apply once or twice daily.',
      ar: 'يوضع مرة أو مرتين يومياً.'
    },
    sideEffects: {
      en: 'Skin atrophy, striae with prolonged use.',
      ar: 'ضمور الجلد، علامات التمدد مع الاستخدام المطول.'
    },
    contraindications: {
      en: 'Viral/fungal skin infections, rosacea.',
      ar: 'عدوى الجلد الفيروسية/الفطرية، الوردية.'
    },
    storage: {
      en: 'Store below 25°C.',
      ar: 'يحفظ في درجة حرارة أقل من 25 درجة مئوية.'
    },
    packaging: {
      en: 'Tube of 15g cream',
      ar: 'أنبوب 15 غرام كريم'
    }
  },
  {
    id: 'fusidshiba',
    name: 'FUSIDSHIBA',
    categoryId: 'dermatology',
    category: { en: 'Dermatology', ar: 'أدوية الجلدية' },
    image: 'https://shibapharma.com/media/838/conversions/images-Medium-Image.jpg',
    description: { 
      en: 'Topical antibiotic for skin infections.',
      ar: 'مضاد حيوي موضعي لعدوى الجلد.'
    },
    composition: {
      en: 'Each gram contains Fusidic Acid 20mg',
      ar: 'يحتوي كل غرام على حمض الفيوسيديك 20 ملجم'
    },
    indication: {
      en: 'Impetigo, infected dermatitis, wound infections.',
      ar: 'القوباء، التهاب الجلد الملتهب، عدوى الجروح.'
    },
    dosage: {
      en: 'Apply 2-3 times daily.',
      ar: 'يوضع 2-3 مرات يومياً.'
    },
    sideEffects: {
      en: 'Local irritation, mild stinging.',
      ar: 'تهيج موضعي، وخز خفيف.'
    },
    contraindications: {
      en: 'Hypersensitivity to fusidic acid.',
      ar: 'فرط الحساسية لحمض الفيوسيديك.'
    },
    storage: {
      en: 'Store below 25°C.',
      ar: 'يحفظ في درجة حرارة أقل من 25 درجة مئوية.'
    },
    packaging: {
      en: 'Tube of 15g cream',
      ar: 'أنبوب 15 غرام كريم'
    }
  },
  {
    id: 'metforshiba',
    name: 'METFORSHIBA',
    categoryId: 'cardiovascular',
    category: { en: 'Cardiovascular Products', ar: 'أدوية القلب والأوعية' },
    image: 'https://shibapharma.com/media/838/conversions/images-Medium-Image.jpg',
    description: { 
      en: 'Oral antidiabetic medication.',
      ar: 'دواء مضاد لمرض السكري عن طريق الفم.'
    },
    composition: {
      en: 'Each tablet contains Metformin 500mg',
      ar: 'يحتوي كل قرص على ميتفورمين 500 ملجم'
    },
    indication: {
      en: 'Type 2 diabetes mellitus.',
      ar: 'داء السكري من النوع الثاني.'
    },
    dosage: {
      en: 'Adults: 500-1000mg twice daily with meals.',
      ar: 'البالغون: 500-1000 ملجم مرتين يومياً مع الوجبات.'
    },
    sideEffects: {
      en: 'GI upset, metallic taste, lactic acidosis (rare).',
      ar: 'اضطراب الجهاز الهضمي، طعم معدني، الحماض اللبني (نادر).'
    },
    contraindications: {
      en: 'Renal impairment, diabetic ketoacidosis.',
      ar: 'القصور الكلوي، الحماض الكيتوني السكري.'
    },
    storage: {
      en: 'Store below 25°C.',
      ar: 'يحفظ في درجة حرارة أقل من 25 درجة مئوية.'
    },
    packaging: {
      en: 'Box containing 30 tablets',
      ar: 'علبة تحتوي على 30 قرص'
    }
  },
  {
    id: 'glibenshiba',
    name: 'GLIBENSHIBA',
    categoryId: 'cardiovascular',
    category: { en: 'Cardiovascular Products', ar: 'أدوية القلب والأوعية' },
    image: 'https://shibapharma.com/media/838/conversions/images-Medium-Image.jpg',
    description: { 
      en: 'Sulfonylurea for diabetes.',
      ar: 'سلفونيل يوريا لمرض السكري.'
    },
    composition: {
      en: 'Each tablet contains Glibenclamide 5mg',
      ar: 'يحتوي كل قرص على غليبنكلاميد 5 ملجم'
    },
    indication: {
      en: 'Type 2 diabetes mellitus.',
      ar: 'داء السكري من النوع الثاني.'
    },
    dosage: {
      en: 'Adults: 2.5-15mg daily with breakfast.',
      ar: 'البالغون: 2.5-15 ملجم يومياً مع الإفطار.'
    },
    sideEffects: {
      en: 'Hypoglycemia, weight gain, GI upset.',
      ar: 'نقص سكر الدم، زيادة الوزن، اضطراب الجهاز الهضمي.'
    },
    contraindications: {
      en: 'Type 1 diabetes, diabetic ketoacidosis, renal impairment.',
      ar: 'داء السكري من النوع الأول، الحماض الكيتوني السكري، القصور الكلوي.'
    },
    storage: {
      en: 'Store below 25°C.',
      ar: 'يحفظ في درجة حرارة أقل من 25 درجة مئوية.'
    },
    packaging: {
      en: 'Box containing 30 tablets',
      ar: 'علبة تحتوي على 30 قرص'
    }
  },
  {
    id: 'warfashiba',
    name: 'WARFASHIBA',
    categoryId: 'cardiovascular',
    category: { en: 'Cardiovascular Products', ar: 'أدوية القلب والأوعية' },
    image: 'https://shibapharma.com/media/838/conversions/images-Medium-Image.jpg',
    description: { 
      en: 'Anticoagulant for blood clot prevention.',
      ar: 'مضاد للتخثر لمنع تجلط الدم.'
    },
    composition: {
      en: 'Each tablet contains Warfarin 5mg',
      ar: 'يحتوي كل قرص على وارفارين 5 ملجم'
    },
    indication: {
      en: 'DVT, PE, atrial fibrillation, prosthetic heart valves.',
      ar: 'تجلط الأوردة العميقة، الانصمام الرئوي، الرجفان الأذيني، صمامات القلب الاصطناعية.'
    },
    dosage: {
      en: 'Adults: Individualized based on INR monitoring.',
      ar: 'البالغون: فردي بناءً على مراقبة INR.'
    },
    sideEffects: {
      en: 'Bleeding, bruising, hair loss.',
      ar: 'نزيف، كدمات، تساقط الشعر.'
    },
    contraindications: {
      en: 'Active bleeding, severe hypertension, pregnancy.',
      ar: 'نزيف نشط، ارتفاع ضغط الدم الشديد، الحمل.'
    },
    storage: {
      en: 'Store below 25°C, protected from light.',
      ar: 'يحفظ في درجة حرارة أقل من 25 درجة مئوية، بعيداً عن الضوء.'
    },
    packaging: {
      en: 'Box containing 28 tablets',
      ar: 'علبة تحتوي على 28 قرص'
    }
  },
  {
    id: 'aspirishiba',
    name: 'ASPIRISHIBA',
    categoryId: 'cardiovascular',
    category: { en: 'Cardiovascular Products', ar: 'أدوية القلب والأوعية' },
    image: 'https://shibapharma.com/media/838/conversions/images-Medium-Image.jpg',
    description: { 
      en: 'Low-dose aspirin for cardiovascular protection.',
      ar: 'أسبرين بجرعة منخفضة للحماية القلبية الوعائية.'
    },
    composition: {
      en: 'Each tablet contains Aspirin 81mg',
      ar: 'يحتوي كل قرص على أسبرين 81 ملجم'
    },
    indication: {
      en: 'Prevention of MI, stroke, thrombosis.',
      ar: 'الوقاية من احتشاء عضلة القلب، السكتة الدماغية، التخثر.'
    },
    dosage: {
      en: 'Adults: 75-100mg once daily.',
      ar: 'البالغون: 75-100 ملجم مرة واحدة يومياً.'
    },
    sideEffects: {
      en: 'GI bleeding, bruising, tinnitus.',
      ar: 'نزيف الجهاز الهضمي، كدمات، طنين.'
    },
    contraindications: {
      en: 'Active peptic ulcer, bleeding disorders, aspirin allergy.',
      ar: 'قرحة هضمية نشطة، اضطرابات النزيف، حساسية الأسبرين.'
    },
    storage: {
      en: 'Store below 25°C.',
      ar: 'يحفظ في درجة حرارة أقل من 25 درجة مئوية.'
    },
    packaging: {
      en: 'Box containing 30 enteric-coated tablets',
      ar: 'علبة تحتوي على 30 قرص مغلف معوي'
    }
  },
  {
    id: 'furoseshiba',
    name: 'FUROSESHIBA',
    categoryId: 'cardiovascular',
    category: { en: 'Cardiovascular Products', ar: 'أدوية القلب والأوعية' },
    image: 'https://shibapharma.com/media/838/conversions/images-Medium-Image.jpg',
    description: { 
      en: 'Loop diuretic for edema and hypertension.',
      ar: 'مدر حلقي للوذمة وارتفاع ضغط الدم.'
    },
    composition: {
      en: 'Each tablet contains Furosemide 40mg',
      ar: 'يحتوي كل قرص على فوروسيميد 40 ملجم'
    },
    indication: {
      en: 'Edema, heart failure, hypertension.',
      ar: 'الوذمة، فشل القلب، ارتفاع ضغط الدم.'
    },
    dosage: {
      en: 'Adults: 20-80mg daily in the morning.',
      ar: 'البالغون: 20-80 ملجم يومياً في الصباح.'
    },
    sideEffects: {
      en: 'Electrolyte imbalance, dehydration, hypotension.',
      ar: 'اختلال توازن الكهارل، الجفاف، انخفاض ضغط الدم.'
    },
    contraindications: {
      en: 'Anuria, severe hyponatremia, hepatic coma.',
      ar: 'انقطاع البول، نقص صوديوم الدم الشديد، الغيبوبة الكبدية.'
    },
    storage: {
      en: 'Store below 25°C, protected from light.',
      ar: 'يحفظ في درجة حرارة أقل من 25 درجة مئوية، بعيداً عن الضوء.'
    },
    packaging: {
      en: 'Box containing 20 tablets',
      ar: 'علبة تحتوي على 20 قرص'
    }
  },
  {
    id: 'paraceshiba',
    name: 'PARACESHIBA',
    categoryId: 'analgesics',
    category: { en: 'Analgesics', ar: 'المسكنات' },
    image: 'https://shibapharma.com/media/838/conversions/images-Medium-Image.jpg',
    description: { 
      en: 'Analgesic and antipyretic.',
      ar: 'مسكن للآلام وخافض للحرارة.'
    },
    composition: {
      en: 'Each tablet contains Paracetamol 500mg',
      ar: 'يحتوي كل قرص على باراسيتامول 500 ملجم'
    },
    indication: {
      en: 'Pain, fever, headache, cold symptoms.',
      ar: 'الألم، الحمى، الصداع، أعراض البرد.'
    },
    dosage: {
      en: 'Adults: 500-1000mg every 4-6 hours. Max 4g daily.',
      ar: 'البالغون: 500-1000 ملجم كل 4-6 ساعات. الحد الأقصى 4 غرام يومياً.'
    },
    sideEffects: {
      en: 'Rare allergic reactions.',
      ar: 'تفاعلات حساسية نادرة.'
    },
    contraindications: {
      en: 'Severe hepatic impairment, hypersensitivity.',
      ar: 'القصور الكبدي الشديد، فرط الحساسية.'
    },
    storage: {
      en: 'Store below 25°C.',
      ar: 'يحفظ في درجة حرارة أقل من 25 درجة مئوية.'
    },
    packaging: {
      en: 'Box containing 24 tablets',
      ar: 'علبة تحتوي على 24 قرص'
    }
  },
  {
    id: 'meloxishiba',
    name: 'MELOXISHIBA',
    categoryId: 'analgesics',
    category: { en: 'Analgesics', ar: 'المسكنات' },
    image: 'https://shibapharma.com/media/838/conversions/images-Medium-Image.jpg',
    description: { 
      en: 'NSAID for pain and inflammation.',
      ar: 'مضاد التهاب غير ستيرويدي للألم والالتهاب.'
    },
    composition: {
      en: 'Each tablet contains Meloxicam 15mg',
      ar: 'يحتوي كل قرص على ميلوكسيكام 15 ملجم'
    },
    indication: {
      en: 'Osteoarthritis, rheumatoid arthritis.',
      ar: 'هشاشة العظام، التهاب المفاصل الروماتويدي.'
    },
    dosage: {
      en: 'Adults: 7.5-15mg once daily.',
      ar: 'البالغون: 7.5-15 ملجم مرة واحدة يومياً.'
    },
    sideEffects: {
      en: 'GI upset, headache, edema.',
      ar: 'اضطراب الجهاز الهضمي، صداع، وذمة.'
    },
    contraindications: {
      en: 'Active GI bleeding, severe renal impairment.',
      ar: 'نزيف الجهاز الهضمي النشط، القصور الكلوي الشديد.'
    },
    storage: {
      en: 'Store below 25°C.',
      ar: 'يحفظ في درجة حرارة أقل من 25 درجة مئوية.'
    },
    packaging: {
      en: 'Box containing 20 tablets',
      ar: 'علبة تحتوي على 20 قرص'
    }
  },
  {
    id: 'tramashiba',
    name: 'TRAMASHIBA',
    categoryId: 'analgesics',
    category: { en: 'Analgesics', ar: 'المسكنات' },
    image: 'https://shibapharma.com/media/838/conversions/images-Medium-Image.jpg',
    description: { 
      en: 'Opioid analgesic for moderate to severe pain.',
      ar: 'مسكن أفيوني للألم المتوسط إلى الشديد.'
    },
    composition: {
      en: 'Each capsule contains Tramadol 50mg',
      ar: 'تحتوي كل كبسولة على ترامادول 50 ملجم'
    },
    indication: {
      en: 'Moderate to severe pain.',
      ar: 'الألم المتوسط إلى الشديد.'
    },
    dosage: {
      en: 'Adults: 50-100mg every 4-6 hours. Max 400mg daily.',
      ar: 'البالغون: 50-100 ملجم كل 4-6 ساعات. الحد الأقصى 400 ملجم يومياً.'
    },
    sideEffects: {
      en: 'Nausea, dizziness, constipation, drowsiness.',
      ar: 'غثيان، دوخة، إمساك، نعاس.'
    },
    contraindications: {
      en: 'Acute intoxication, epilepsy, MAO inhibitors.',
      ar: 'التسمم الحاد، الصرع، مثبطات MAO.'
    },
    storage: {
      en: 'Store below 25°C.',
      ar: 'يحفظ في درجة حرارة أقل من 25 درجة مئوية.'
    },
    packaging: {
      en: 'Box containing 20 capsules',
      ar: 'علبة تحتوي على 20 كبسولة'
    }
  },
  {
    id: 'orphenshiba',
    name: 'ORPHENSHIBA',
    categoryId: 'cns',
    category: { en: 'CNS Products', ar: 'أدوية الجهاز العصبي' },
    image: 'https://shibapharma.com/media/3/conversions/kipromax-Medium-Image.jpg',
    description: { 
      en: 'Muscle relaxant for spasms.',
      ar: 'مرخي عضلات للتشنجات.'
    },
    composition: {
      en: 'Each tablet contains Orphenadrine 100mg',
      ar: 'يحتوي كل قرص على أورفينادرين 100 ملجم'
    },
    indication: {
      en: 'Muscle spasm, Parkinsonism.',
      ar: 'تشنج العضلات، داء باركنسون.'
    },
    dosage: {
      en: 'Adults: 100mg twice daily.',
      ar: 'البالغون: 100 ملجم مرتين يومياً.'
    },
    sideEffects: {
      en: 'Dry mouth, drowsiness, dizziness.',
      ar: 'جفاف الفم، نعاس، دوخة.'
    },
    contraindications: {
      en: 'Glaucoma, myasthenia gravis, urinary retention.',
      ar: 'الجلوكوما، الوهن العضلي الوبيل، احتباس البول.'
    },
    storage: {
      en: 'Store below 25°C.',
      ar: 'يحفظ في درجة حرارة أقل من 25 درجة مئوية.'
    },
    packaging: {
      en: 'Box containing 20 tablets',
      ar: 'علبة تحتوي على 20 قرص'
    }
  },
  {
    id: 'gabashiba',
    name: 'GABASHIBA',
    categoryId: 'cns',
    category: { en: 'CNS Products', ar: 'أدوية الجهاز العصبي' },
    image: 'https://shibapharma.com/media/3/conversions/kipromax-Medium-Image.jpg',
    description: { 
      en: 'Anticonvulsant and neuropathic pain medication.',
      ar: 'مضاد اختلاج ودواء لآلام الأعصاب.'
    },
    composition: {
      en: 'Each capsule contains Gabapentin 300mg',
      ar: 'تحتوي كل كبسولة على غابابنتين 300 ملجم'
    },
    indication: {
      en: 'Epilepsy, neuropathic pain, postherpetic neuralgia.',
      ar: 'الصرع، ألم الأعصاب، الألم العصبي التالي للهربس.'
    },
    dosage: {
      en: 'Adults: 300-1200mg three times daily.',
      ar: 'البالغون: 300-1200 ملجم ثلاث مرات يومياً.'
    },
    sideEffects: {
      en: 'Drowsiness, dizziness, ataxia.',
      ar: 'نعاس، دوخة، ترنح.'
    },
    contraindications: {
      en: 'Hypersensitivity to gabapentin.',
      ar: 'فرط الحساسية للغابابنتين.'
    },
    storage: {
      en: 'Store below 25°C.',
      ar: 'يحفظ في درجة حرارة أقل من 25 درجة مئوية.'
    },
    packaging: {
      en: 'Box containing 30 capsules',
      ar: 'علبة تحتوي على 30 كبسولة'
    }
  },
  {
    id: 'carbamazeshiba',
    name: 'CARBAMAZESHIBA',
    categoryId: 'cns',
    category: { en: 'CNS Products', ar: 'أدوية الجهاز العصبي' },
    image: 'https://shibapharma.com/media/3/conversions/kipromax-Medium-Image.jpg',
    description: { 
      en: 'Anticonvulsant for epilepsy and bipolar disorder.',
      ar: 'مضاد اختلاج للصرع واضطراب ثنائي القطب.'
    },
    composition: {
      en: 'Each tablet contains Carbamazepine 200mg',
      ar: 'يحتوي كل قرص على كاربامازيبين 200 ملجم'
    },
    indication: {
      en: 'Epilepsy, trigeminal neuralgia, bipolar disorder.',
      ar: 'الصرع، ألم العصب الثلاثي التوائم، اضطراب ثنائي القطب.'
    },
    dosage: {
      en: 'Adults: 100-400mg twice daily.',
      ar: 'البالغون: 100-400 ملجم مرتين يومياً.'
    },
    sideEffects: {
      en: 'Dizziness, drowsiness, ataxia, nausea.',
      ar: 'دوخة، نعاس، ترنح، غثيان.'
    },
    contraindications: {
      en: 'Bone marrow depression, MAO inhibitors, porphyria.',
      ar: 'تثبيط نخاع العظم، مثبطات MAO، البورفيريا.'
    },
    storage: {
      en: 'Store below 25°C.',
      ar: 'يحفظ في درجة حرارة أقل من 25 درجة مئوية.'
    },
    packaging: {
      en: 'Box containing 50 tablets',
      ar: 'علبة تحتوي على 50 قرص'
    }
  },
  {
    id: 'zincshiba',
    name: 'ZINCSHIBA',
    categoryId: 'vitamins',
    category: { en: 'Vitamins & Supplements', ar: 'الفيتامينات والمكملات' },
    image: 'https://shibapharma.com/media/838/conversions/images-Medium-Image.jpg',
    description: { 
      en: 'Zinc supplement for immune support.',
      ar: 'مكمل الزنك لدعم المناعة.'
    },
    composition: {
      en: 'Each tablet contains Zinc Sulfate 220mg (50mg elemental zinc)',
      ar: 'يحتوي كل قرص على كبريتات الزنك 220 ملجم (50 ملجم زنك عنصري)'
    },
    indication: {
      en: 'Zinc deficiency, wound healing, immune support.',
      ar: 'نقص الزنك، شفاء الجروح، دعم المناعة.'
    },
    dosage: {
      en: 'Adults: 1 tablet daily with food.',
      ar: 'البالغون: قرص واحد يومياً مع الطعام.'
    },
    sideEffects: {
      en: 'Nausea, metallic taste.',
      ar: 'غثيان، طعم معدني.'
    },
    contraindications: {
      en: 'Copper deficiency (at high doses).',
      ar: 'نقص النحاس (بالجرعات العالية).'
    },
    storage: {
      en: 'Store below 25°C.',
      ar: 'يحفظ في درجة حرارة أقل من 25 درجة مئوية.'
    },
    packaging: {
      en: 'Bottle of 30 tablets',
      ar: 'زجاجة 30 قرص'
    }
  },
  {
    id: 'omega3shiba',
    name: 'OMEGA-3 SHIBA',
    categoryId: 'vitamins',
    category: { en: 'Vitamins & Supplements', ar: 'الفيتامينات والمكملات' },
    image: 'https://shibapharma.com/media/838/conversions/images-Medium-Image.jpg',
    description: { 
      en: 'Fish oil supplement for cardiovascular health.',
      ar: 'مكمل زيت السمك لصحة القلب والأوعية الدموية.'
    },
    composition: {
      en: 'Each capsule contains Fish Oil 1000mg (EPA 180mg, DHA 120mg)',
      ar: 'تحتوي كل كبسولة على زيت السمك 1000 ملجم (EPA 180 ملجم، DHA 120 ملجم)'
    },
    indication: {
      en: 'Cardiovascular health, triglyceride reduction, brain health.',
      ar: 'صحة القلب والأوعية الدموية، خفض الدهون الثلاثية، صحة الدماغ.'
    },
    dosage: {
      en: 'Adults: 1-3 capsules daily with meals.',
      ar: 'البالغون: 1-3 كبسولات يومياً مع الوجبات.'
    },
    sideEffects: {
      en: 'Fishy aftertaste, GI upset.',
      ar: 'طعم سمكي، اضطراب الجهاز الهضمي.'
    },
    contraindications: {
      en: 'Fish allergy.',
      ar: 'حساسية السمك.'
    },
    storage: {
      en: 'Store below 25°C, protected from light.',
      ar: 'يحفظ في درجة حرارة أقل من 25 درجة مئوية، بعيداً عن الضوء.'
    },
    packaging: {
      en: 'Bottle of 60 soft capsules',
      ar: 'زجاجة 60 كبسولة لينة'
    }
  },
  {
    id: 'multivitshiba',
    name: 'MULTIVIT SHIBA',
    categoryId: 'vitamins',
    category: { en: 'Vitamins & Supplements', ar: 'الفيتامينات والمكملات' },
    image: 'https://shibapharma.com/media/838/conversions/images-Medium-Image.jpg',
    description: { 
      en: 'Complete multivitamin and mineral supplement.',
      ar: 'مكمل متعدد الفيتامينات والمعادن الشامل.'
    },
    composition: {
      en: 'Contains 23 essential vitamins and minerals',
      ar: 'يحتوي على 23 فيتامين ومعدن أساسي'
    },
    indication: {
      en: 'Nutritional supplementation, vitamin deficiencies.',
      ar: 'المكملات الغذائية، نقص الفيتامينات.'
    },
    dosage: {
      en: 'Adults: 1 tablet daily with food.',
      ar: 'البالغون: قرص واحد يومياً مع الطعام.'
    },
    sideEffects: {
      en: 'Rarely, GI upset.',
      ar: 'نادراً، اضطراب الجهاز الهضمي.'
    },
    contraindications: {
      en: 'Hypervitaminosis, iron overload disorders.',
      ar: 'فرط الفيتامينات، اضطرابات فرط الحديد.'
    },
    storage: {
      en: 'Store below 25°C, protected from light.',
      ar: 'يحفظ في درجة حرارة أقل من 25 درجة مئوية، بعيداً عن الضوء.'
    },
    packaging: {
      en: 'Bottle of 30 tablets',
      ar: 'زجاجة 30 قرص'
    }
  }
];

// Get product by ID
export const getProductById = (id: string): Product | undefined => {
  return allProducts.find(p => p.id === id);
};

// Get products by category
export const getProductsByCategory = (categoryId: string): Product[] => {
  return allProducts.filter(p => p.categoryId === categoryId);
};
