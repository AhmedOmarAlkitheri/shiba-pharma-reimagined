import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Phone, Mail, MapPin, Building2, Loader2 } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/shared/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { uiTranslations } from '@/data/siteData';
import { useDbList } from '@/hooks/useSiteContent';

interface DbHospital {
  id: string; name_en: string; name_ar: string;
  type_en: string | null; type_ar: string | null;
  phone: string | null; email: string | null;
  address_en: string | null; address_ar: string | null;
  logo_url: string | null; services: string[] | null; is_published: boolean;
}

const MedicalDirectory: React.FC = () => {
  const { t, language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const { items: hospitals, loading } = useDbList<DbHospital>('hospitals', { order: 'display_order' });
  const visible = useMemo(() => hospitals.filter((h) => h.is_published), [hospitals]);

  const types = useMemo(() => {
    const set = new Set<string>();
    visible.forEach((h) => { if (h.type_en) set.add(h.type_en); });
    return Array.from(set);
  }, [visible]);

  const filtered = useMemo(
    () =>
      visible.filter((h) => {
        const name = language === 'ar' ? h.name_ar : h.name_en;
        const matchesSearch = !searchTerm || name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesType = !selectedType || h.type_en === selectedType;
        return matchesSearch && matchesType;
      }),
    [visible, searchTerm, selectedType, language]
  );

  const hName = (h: DbHospital) => (language === 'ar' ? h.name_ar : h.name_en);
  const hType = (h: DbHospital) => (language === 'ar' ? h.type_ar : h.type_en);
  const hAddress = (h: DbHospital) => (language === 'ar' ? h.address_ar : h.address_en);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHeader
          title={uiTranslations.sections.medicalDirectory}
          breadcrumbs={[{ label: uiTranslations.sections.medicalDirectory }]}
        />

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
                  ar: 'دليلك للوصول إلى أفضل المستشفيات والمراكز الطبية بسهولة ويسر.',
                })}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-8 bg-secondary/30 sticky top-0 z-40 backdrop-blur-xl">
          <div className="section-container">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder={t({ en: 'Search for hospitals...', ar: 'ابحث عن المستشفيات...' })}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              <div className="flex flex-wrap gap-2 justify-center">
                <Button variant={!selectedType ? 'default' : 'outline'} size="sm" onClick={() => setSelectedType(null)}>
                  {t({ en: 'All', ar: 'الكل' })}
                </Button>
                {types.map((type) => (
                  <Button
                    key={type}
                    variant={selectedType === type ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedType(type)}
                  >
                    {type}
                  </Button>
                ))}
              </div>
            </div>

            <div className="mt-4 text-center">
              <Badge variant="secondary" className="text-sm">
                {t({ en: `Found ${filtered.length} hospitals`, ar: `تم العثور على ${filtered.length} مستشفى` })}
              </Badge>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="section-container">
            {loading ? (
              <div className="flex justify-center py-20"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((hospital, index) => (
                  <motion.div
                    key={hospital.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: Math.min(index * 0.05, 0.5) }}
                  >
                    <Card variant="elevated" className="h-full hover:shadow-medium transition-shadow group">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                            {hospital.logo_url ? (
                              <img src={hospital.logo_url} alt={hName(hospital)} className="w-12 h-12 object-contain" />
                            ) : (
                              <Building2 className="w-8 h-8 text-primary" />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                              {hName(hospital)}
                            </h3>
                            {hType(hospital) && (
                              <Badge variant="outline" className="text-xs mt-1">{hType(hospital)}</Badge>
                            )}
                          </div>
                        </div>

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
                          {hAddress(hospital) && (
                            <div className="flex items-center gap-3 text-muted-foreground">
                              <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                              <span className="text-sm">{hAddress(hospital)}</span>
                            </div>
                          )}
                        </div>

                        {hospital.services && hospital.services.length > 0 && (
                          <div className="mt-4 pt-4 border-t border-border">
                            <div className="flex flex-wrap gap-1">
                              {hospital.services.slice(0, 3).map((service) => (
                                <Badge key={service} variant="secondary" className="text-xs">{service}</Badge>
                              ))}
                              {hospital.services.length > 3 && (
                                <Badge variant="outline" className="text-xs">+{hospital.services.length - 3}</Badge>
                              )}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}

            {!loading && filtered.length === 0 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
                <Building2 className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
                <p className="text-muted-foreground text-lg">
                  {t({ en: 'No hospitals found.', ar: 'لم يتم العثور على مستشفيات.' })}
                </p>
              </motion.div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MedicalDirectory;
