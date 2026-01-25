import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Building2, Factory } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/shared/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { contactInfo, uiTranslations } from '@/data/siteData';

const Contact: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const contactCards = [
    {
      icon: MapPin,
      title: { en: 'Republic of Yemen', ar: 'الجمهورية اليمنية' },
      content: t(contactInfo.factory.address),
      color: 'text-accent'
    },
    {
      icon: Phone,
      title: { en: 'Factory', ar: 'المصنع' },
      content: contactInfo.factory.phones.slice(0, 2).join(' | '),
      color: 'text-teal'
    },
    {
      icon: Mail,
      title: { en: 'Email', ar: 'البريد الإلكتروني' },
      content: contactInfo.email,
      color: 'text-gold'
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHeader 
          title={uiTranslations.sections.contactUs}
          breadcrumbs={[{ label: uiTranslations.sections.contactUs }]}
        />

        {/* Contact Cards */}
        <section className="py-16">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-24 relative z-20">
              {contactCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 border-0">
                    <CardContent className="p-8 text-center">
                      <div className={`w-16 h-16 mx-auto mb-6 bg-secondary rounded-2xl flex items-center justify-center`}>
                        <card.icon className={`w-8 h-8 ${card.color}`} />
                      </div>
                      <h3 className="text-lg font-semibold text-primary mb-3">{t(card.title)}</h3>
                      <p className={`text-muted-foreground ${card.color === 'text-accent' ? '' : card.color}`}>
                        {card.content}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-16 bg-secondary/30">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="shadow-xl border-0">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-primary mb-6">
                      {t(uiTranslations.sections.contactUs)}
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Input
                          placeholder={`${t(uiTranslations.form.name)}*`}
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="h-12"
                        />
                      </div>
                      <div>
                        <Input
                          type="email"
                          placeholder={`${t(uiTranslations.form.email)}*`}
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="h-12"
                        />
                      </div>
                      <div>
                        <Input
                          placeholder={`${t(uiTranslations.form.subject)}*`}
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          required
                          className="h-12"
                        />
                      </div>
                      <div>
                        <Textarea
                          placeholder={`${t(uiTranslations.form.message)}*`}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          required
                          rows={5}
                          className="resize-none"
                        />
                      </div>
                      <Button type="submit" variant="navy" size="lg" className="w-full group">
                        {t(uiTranslations.common.send)}
                        <Send className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Factory Address */}
                <div className="bg-white rounded-2xl p-6 shadow-soft">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Factory className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">
                        {t({ en: 'Factory', ar: 'المصنع' })}
                      </h3>
                      <p className="text-muted-foreground mb-3">{t(contactInfo.factory.address)}</p>
                      <div className="space-y-1">
                        {contactInfo.factory.phones.map((phone, i) => (
                          <a
                            key={i}
                            href={`tel:${phone}`}
                            className="block text-accent hover:underline"
                          >
                            {phone}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Marketing Address */}
                <div className="bg-white rounded-2xl p-6 shadow-soft">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">
                        {t({ en: 'Marketing', ar: 'التسويق' })}
                      </h3>
                      <p className="text-muted-foreground mb-3">{t(contactInfo.marketing.address)}</p>
                      <div className="space-y-1">
                        {contactInfo.marketing.phones.map((phone, i) => (
                          <a
                            key={i}
                            href={`tel:${phone}`}
                            className="block text-accent hover:underline"
                          >
                            {phone}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-white rounded-2xl p-6 shadow-soft">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-teal" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">
                        {t({ en: 'Email', ar: 'البريد الإلكتروني' })}
                      </h3>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="text-accent hover:underline"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
