import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Phone, Mail, Globe, MapPin, Building2, Filter, ChevronDown } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/shared/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { medicalDirectory, uiTranslations } from '@/data/siteData';

// Extended hospital data
const hospitals = [
  {
    id: 'hospital-1',
    name: { en: 'Al-Ahli Modern Hospital', ar: 'المستشفى الأهلي الحديث' },
    type: { en: 'Private Hospital', ar: 'مستشفى خاص' },
    logo: 'https://shibapharma.com/media/hospital-ahli.png',
    phone: '01-444484',
    email: 'info@haditha-ahli.com',
    address: { en: 'Sana\'a, Yemen', ar: 'صنعاء، اليمن' },
    services: ['Emergency', 'Surgery', 'ICU']
  },
  {
    id: 'hospital-2',
    name: { en: 'Al-Oroubi Specialized Hospital', ar: 'المستشفى العروبي التخصصي' },
    type: { en: 'Specialized Hospital', ar: 'مستشفى تخصصي' },
    phone: '777500789',
    address: { en: 'Sana\'a, Yemen', ar: 'صنعاء، اليمن' },
    services: ['Cardiology', 'Orthopedics', 'Neurology']
  },
  {
    id: 'hospital-3',
    name: { en: 'Sheba Arabia Hospital', ar: 'مستشفى سبأ آريانا' },
    type: { en: 'General Hospital', ar: 'مستشفى عام' },
    phone: '01-615000',
    address: { en: 'Sana\'a, Yemen', ar: 'صنعاء، اليمن' },
    services: ['General Medicine', 'Pediatrics', 'Obstetrics']
  },
  {
    id: 'hospital-4',
    name: { en: 'Specialized Golden Hospital', ar: 'المستشفى الذهبي التخصصي' },
    type: { en: 'Specialized Hospital', ar: 'مستشفى تخصصي' },
    phone: '01-422996',
    address: { en: 'Sana\'a, Yemen', ar: 'صنعاء، اليمن' },
    services: ['Surgery', 'Cardiology', 'Internal Medicine']
  },
  {
    id: 'hospital-5',
    name: { en: 'International Modern Hospital', ar: 'المستشفى الدولي الحديث' },
    type: { en: 'International Hospital', ar: 'مستشفى دولي' },
    phone: '777400420',
    address: { en: 'Sana\'a, Yemen', ar: 'صنعاء، اليمن' },
    services: ['Multi-specialty', 'Emergency', 'Diagnostics']
  },
  {
    id: 'hospital-6',
    name: { en: 'Yemeni Russian Hospital', ar: 'المستشفى اليمني الروسي' },
    type: { en: 'Public Hospital', ar: 'مستشفى حكومي' },
    phone: '262920',
    address: { en: 'Sana\'a, Yemen', ar: 'صنعاء، اليمن' },
    services: ['General Medicine', 'Surgery', 'Emergency']
  },
  {
    id: 'hospital-7',
    name: { en: 'Military Hospital', ar: 'المستشفى العسكري' },
    type: { en: 'Military Hospital', ar: 'مستشفى عسكري' },
    phone: '777174659',
    address: { en: 'Sana\'a, Yemen', ar: 'صنعاء، اليمن' },
    services: ['Multi-specialty', 'Trauma', 'Surgery']
  },
  {
    id: 'hospital-8',
    name: { en: 'Modern Romanian Hospital', ar: 'المستشفى الروماني الحديث' },
    type: { en: 'Private Hospital', ar: 'مستشفى خاص' },
    phone: '01-616374',
    address: { en: 'Sana\'a, Yemen', ar: 'صنعاء، اليمن' },
    services: ['Surgery', 'Orthopedics', 'Rehabilitation']
  },
  {
    id: 'hospital-9',
    name: { en: 'Al-Thawra General Hospital', ar: 'مستشفى الثورة العام' },
    type: { en: 'Public Hospital', ar: 'مستشفى حكومي' },
    phone: '01-246970',
    address: { en: 'Sana\'a, Yemen', ar: 'صنعاء، اليمن' },
    services: ['Emergency', 'Surgery', 'ICU', 'Pediatrics']
  },
  {
    id: 'hospital-10',
    name: { en: 'University of Science Hospital', ar: 'مستشفى جامعة العلوم' },
    type: { en: 'University Hospital', ar: 'مستشفى جامعي' },
    phone: '01-370560',
    address: { en: 'Sana\'a, Yemen', ar: 'صنعاء، اليمن' },
    services: ['Teaching', 'Research', 'Multi-specialty']
  }
];

const hospitalTypes = [
  { en: 'All', ar: 'الكل' },
  { en: 'Private Hospital', ar: 'مستشفى خاص' },
  { en: 'Specialized Hospital', ar: 'مستشفى تخصصي' },
  { en: 'Public Hospital', ar: 'مستشفى حكومي' },
  { en: 'University Hospital', ar: 'مستشفى جامعي' },
];

const MedicalDirectory: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const filteredHospitals = hospitals.filter(hospital => {
    const matchesSearch = t(hospital.name).toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = !selectedType || selectedType === 'All' || hospital.type.en === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHeader 
          title={uiTranslations.sections.medicalDirectory}
          breadcrumbs={[{ label: uiTranslations.sections.medicalDirectory }]}
        />

        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                {t({ en: 'Medical Directory', ar: 'الدليل الطبي الشامل' })}
              </h2>
              <p className="text-muted-foreground text-lg">
                {t({ 
                  en: 'Find hospitals and medical centers easily. A comprehensive guide connecting you to healthcare services.',
                  ar: 'دليلك للوصول إلى أفضل المستشفيات والمراكز الطبية بسهولة ويسر. دليل شامل يوصلك بالخدمات الصحية.'
                })}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 bg-secondary/30 sticky top-0 z-40 backdrop-blur-xl">
          <div className="section-container">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder={t({ en: 'Search for hospitals...', ar: 'ابحث عن المستشفيات...' })}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Type Filter */}
              <div className="flex flex-wrap gap-2 justify-center">
                {hospitalTypes.map((type) => (
                  <Button
                    key={type.en}
                    variant={selectedType === type.en || (!selectedType && type.en === 'All') ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedType(type.en === 'All' ? null : type.en)}
                  >
                    {t(type)}
                  </Button>
                ))}
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-4 text-center">
              <Badge variant="secondary" className="text-sm">
                {t({ en: `Found ${filteredHospitals.length} hospitals`, ar: `تم العثور على ${filteredHospitals.length} مستشفى` })}
              </Badge>
            </div>
          </div>
        </section>

        {/* Hospitals Grid */}
        <section className="py-16">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredHospitals.map((hospital, index) => (
                <motion.div
                  key={hospital.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card variant="elevated" className="h-full hover:shadow-lg transition-shadow group">
                    <CardContent className="p-6">
                      {/* Hospital Header */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                          {hospital.logo ? (
                            <img 
                              src={hospital.logo} 
                              alt={t(hospital.name)}
                              className="w-12 h-12 object-contain"
                              onError={(e) => {
                                (e.target as HTMLImageElement).style.display = 'none';
                              }}
                            />
                          ) : (
                            <Building2 className="w-8 h-8 text-primary" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                            {t(hospital.name)}
                          </h3>
                          <Badge variant="outline" className="text-xs mt-1">
                            {t(hospital.type)}
                          </Badge>
                        </div>
                      </div>

                      {/* Contact Info */}
                      <div className="space-y-3">
                        {hospital.phone && (
                          <div className="flex items-center gap-3 text-muted-foreground">
                            <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                            <a href={`tel:${hospital.phone}`} className="hover:text-primary transition-colors text-sm">
                              {hospital.phone}
                            </a>
                          </div>
                        )}
                        {hospital.email && (
                          <div className="flex items-center gap-3 text-muted-foreground">
                            <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                            <a href={`mailto:${hospital.email}`} className="hover:text-primary transition-colors text-sm truncate">
                              {hospital.email}
                            </a>
                          </div>
                        )}
                        {hospital.address && (
                          <div className="flex items-center gap-3 text-muted-foreground">
                            <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                            <span className="text-sm">{t(hospital.address)}</span>
                          </div>
                        )}
                      </div>

                      {/* Services */}
                      {hospital.services && (
                        <div className="mt-4 pt-4 border-t border-border">
                          <div className="flex flex-wrap gap-1">
                            {hospital.services.slice(0, 3).map((service) => (
                              <Badge key={service} variant="secondary" className="text-xs">
                                {service}
                              </Badge>
                            ))}
                            {hospital.services.length > 3 && (
                              <Badge variant="outline" className="text-xs">
                                +{hospital.services.length - 3}
                              </Badge>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Action Button */}
                      <Button variant="outline" className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        {t({ en: 'View Details', ar: 'عرض التفاصيل' })}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {filteredHospitals.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <Building2 className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
                <p className="text-muted-foreground text-lg">
                  {t({ en: 'No hospitals found matching your search.', ar: 'لم يتم العثور على مستشفيات مطابقة لبحثك.' })}
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="section-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Building2 className="w-16 h-16 mx-auto mb-6 opacity-80" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {t({ en: 'Shiba Pharma manufactures more than 300+ products', ar: 'تنتج شركة سبأ فارما أكثر من 300 منتج' })}
              </h2>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
                {t({ 
                  en: 'Including syrups, suspensions, tablets, capsules, and more. Available at hospitals and pharmacies across Yemen.',
                  ar: 'بما في ذلك الشراب والمعلقات والأقراص والكبسولات وغيرها. متوفرة في المستشفيات والصيدليات في جميع أنحاء اليمن.'
                })}
              </p>
              <Button variant="accent" size="lg">
                {t({ en: 'View Our Products', ar: 'عرض منتجاتنا' })}
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MedicalDirectory;
