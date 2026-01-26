import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Target, Eye, Shield, Award, Users, Leaf, TrendingUp, Quote } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/shared/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLanguage } from '@/contexts/LanguageContext';

const QualityManagement: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const qualityTabs = [
    {
      id: 'integrated-policy',
      title: { en: 'Integrated Management System Policy', ar: 'سياسة نظام الإدارة المتكامل' },
      icon: Shield,
      content: {
        en: `Shiba Pharma for Pharmaceuticals and Chemicals Ltd. produces and develops high-quality pharmaceutical products in various forms and sizes that comply with international standards, through implementing, developing, and maintaining an Integrated Management System that meets the requirements of international standards (ISO 9001:2015 Quality Management, ISO 14001:2018 Environmental Management, ISO 45001:2018 Occupational Health and Safety Management, cGMP Good Manufacturing Practice).

To achieve this, the company is committed to:

1. Providing and utilizing all available resources to deliver safe medical products that meet customer needs and expectations.

2. Enhancing awareness and taking all necessary measures to ensure compliance with good manufacturing practices and other management systems.

3. Complying with all relevant local and international legal and regulatory requirements.

4. Preventing pollution, reducing waste, preserving natural resources, and protecting the environment.

5. Providing a suitable work environment, implementing all safety measures to protect employees and company assets.

6. Continuous improvement of all company processes and products.

7. Strengthening relationships with stakeholders and building long-term local and regional partnerships.

The company also commits to communicating this policy to all relevant parties. It is implemented by all employees, and senior management will review and update it annually to ensure its effectiveness and compliance with applicable laws.`,
        ar: `شركة سبأ فارما للأدوية والكيماويات المحدودة تنتج وتطور منتجات دوائية عالية الجودة بأشكال وأحجام مختلفة تتوافق مع المعايير الدولية، من خلال تنفيذ وتطوير والحفاظ على نظام إدارة متكامل يلبي متطلبات المعايير الدولية (ISO 9001:2015 إدارة الجودة، ISO 14001:2018 الإدارة البيئية، ISO 45001:2018 إدارة الصحة والسلامة المهنية، ممارسات التصنيع الجيد cGMP).

لتحقيق ذلك، تلتزم الشركة بـ:

1. توفير واستخدام جميع الموارد المتاحة لتقديم منتجات طبية آمنة تلبي احتياجات وتوقعات العملاء.

2. تعزيز الوعي واتخاذ جميع الإجراءات اللازمة لضمان الامتثال لممارسات التصنيع الجيد وأنظمة الإدارة الأخرى.

3. الامتثال لجميع المتطلبات القانونية والتنظيمية المحلية والدولية ذات الصلة.

4. منع التلوث، تقليل النفايات، الحفاظ على الموارد الطبيعية، وحماية البيئة.

5. توفير بيئة عمل مناسبة، تنفيذ جميع إجراءات السلامة لحماية الموظفين وأصول الشركة.

6. التحسين المستمر لجميع عمليات ومنتجات الشركة.

7. تعزيز العلاقات مع أصحاب المصلحة وبناء شراكات محلية وإقليمية طويلة الأمد.

كما تلتزم الشركة بإيصال هذه السياسة لجميع الأطراف ذات الصلة. يتم تنفيذها من قبل جميع الموظفين، وستقوم الإدارة العليا بمراجعتها وتحديثها سنوياً لضمان فعاليتها والامتثال للقوانين المعمول بها.`
      }
    },
    {
      id: 'quality-policy',
      title: { en: 'Quality Management System Policy', ar: 'سياسة نظام إدارة الجودة' },
      icon: Award,
      content: {
        en: `Shiba Pharma for Pharmaceuticals and Chemicals Ltd. (Marketing and Sales Division) markets and sells high-quality pharmaceutical products in various forms and sizes that comply with international standards, through implementing, developing, and maintaining a Quality Management System in compliance with ISO 9001:2015.

To achieve this, the company is committed to:

1. Providing and utilizing all available resources to deliver safe medical products that meet customer needs and expectations.

2. Enhancing awareness and taking all necessary measures to ensure compliance with the Quality Management System.

3. Complying with all relevant local and international legal and regulatory requirements.

4. Continuously improving all company processes and products.

5. Strengthening relationships with stakeholders and building long-term local and regional partnerships.

The company also commits to communicating this policy to all relevant parties. It is implemented by all employees, and senior management will review and update it annually to ensure its effectiveness and compliance.`,
        ar: `شركة سبأ فارما للأدوية والكيماويات المحدودة (قسم التسويق والمبيعات) تسوق وتبيع منتجات دوائية عالية الجودة بأشكال وأحجام مختلفة تتوافق مع المعايير الدولية، من خلال تنفيذ وتطوير والحفاظ على نظام إدارة الجودة وفقاً لـ ISO 9001:2015.

لتحقيق ذلك، تلتزم الشركة بـ:

1. توفير واستخدام جميع الموارد المتاحة لتقديم منتجات طبية آمنة تلبي احتياجات وتوقعات العملاء.

2. تعزيز الوعي واتخاذ جميع الإجراءات اللازمة لضمان الامتثال لنظام إدارة الجودة.

3. الامتثال لجميع المتطلبات القانونية والتنظيمية المحلية والدولية ذات الصلة.

4. التحسين المستمر لجميع عمليات ومنتجات الشركة.

5. تعزيز العلاقات مع أصحاب المصلحة وبناء شراكات محلية وإقليمية طويلة الأمد.

كما تلتزم الشركة بإيصال هذه السياسة لجميع الأطراف ذات الصلة. يتم تنفيذها من قبل جميع الموظفين، وستقوم الإدارة العليا بمراجعتها وتحديثها سنوياً لضمان فعاليتها والامتثال.`
      }
    },
    {
      id: 'integrated-scope',
      title: { en: 'Integrated Management System Scope', ar: 'نطاق نظام الإدارة المتكامل' },
      icon: Target,
      content: {
        en: `The Integrated Management System at Shiba Pharma is applied at the company's headquarters in Aser - Bait Adhran - Sana'a, covering all company processes and pharmaceutical products. The system meets legal and customer requirements and the requirements of international standards (ISO 9001:2015, ISO 14001:2015, ISO 45001:2018, cGMP).

Except for clause 8.3 of ISO 9001:2015 (Customer or external provider property), as the company does not hold any assets of customers or external providers.`,
        ar: `يُطبق نظام الإدارة المتكامل في سبأ فارما في مقر الشركة في عصر - بيت أذران - صنعاء، ويشمل جميع عمليات الشركة والمنتجات الدوائية. يلبي النظام المتطلبات القانونية ومتطلبات العملاء ومتطلبات المعايير الدولية (ISO 9001:2015، ISO 14001:2015، ISO 45001:2018، cGMP).

باستثناء البند 8.3 من ISO 9001:2015 (ممتلكات العميل أو المزود الخارجي)، حيث لا تحتفظ الشركة بأي أصول للعملاء أو المزودين الخارجيين.`
      }
    },
    {
      id: 'quality-scope',
      title: { en: 'Quality Management System Scope', ar: 'نطاق نظام إدارة الجودة' },
      icon: CheckCircle,
      content: {
        en: `The Quality Management System at Shiba Pharma (Marketing and Sales Division) located in Baghdad Street - Next to Ibn Alnafis University - Sana'a, applies to all operations and pharmaceutical products. It meets all legal and customer requirements and complies with ISO 9001:2015.

Except for clause 8.3 (Design and Development), as the division currently does not perform any design or development activities.`,
        ar: `يُطبق نظام إدارة الجودة في سبأ فارما (قسم التسويق والمبيعات) الواقع في شارع بغداد - جوار جامعة ابن النفيس - صنعاء، على جميع العمليات والمنتجات الدوائية. يلبي جميع المتطلبات القانونية ومتطلبات العملاء ويتوافق مع ISO 9001:2015.

باستثناء البند 8.3 (التصميم والتطوير)، حيث لا يقوم القسم حالياً بأي أنشطة تصميم أو تطوير.`
      }
    },
    {
      id: 'strategic',
      title: { en: 'Company Strategic Direction', ar: 'التوجه الاستراتيجي للشركة' },
      icon: TrendingUp,
      content: {
        en: `Our Mission:
Shiba pharma is committed to producing high-quality medicines according to global standards at affordable and competitive prices, raising health-care levels locally and regionally through the application of international systems, modern equipment and technologies, staff training and development, continuous improvement, work responsibility, and full compliance with laws, quality, health, safety, and environmental standards, as well as good manufacturing practices (cGMP), contributing to drug security and industry development.

Our Vision:
To be the preferred choice and leader locally and regionally in the pharmaceutical and chemical industries, providing quality products.

Our Values:
• Quality
• Excellence
• Efficiency
• Professionalism and Integrity
• Honesty
• Creativity and Innovation
• Customer Trust and Satisfaction
• Continuous Improvement
• Social Responsibility

Strategic Objectives:
1. Utilizing all available resources to produce diverse medicines using the latest pharmaceutical technologies, meeting customer expectations.
2. Enhancing awareness and ensuring compliance with good manufacturing practices, management systems, and continuous improvement.
3. Complying with all relevant local and international legal and regulatory requirements.
4. Preventing pollution, reducing waste, preserving natural resources, and protecting the environment.
5. Providing a suitable work environment, ensuring employee safety, protecting company assets, and developing staff skills.
6. Continuously improving all company processes and products.
7. Strengthening stakeholder relationships and building long-term partnerships.
8. Continuously developing new pharmaceutical products and technologies that meet customer and market expectations.`,
        ar: `رسالتنا:
شركة سبأ فارما ملتزمة بإنتاج أدوية عالية الجودة وفقاً للمعايير العالمية بأسعار معقولة وتنافسية، ورفع مستويات الرعاية الصحية محلياً وإقليمياً من خلال تطبيق الأنظمة الدولية، والمعدات والتقنيات الحديثة، وتدريب وتطوير الموظفين، والتحسين المستمر، ومسؤولية العمل، والامتثال الكامل للقوانين ومعايير الجودة والصحة والسلامة والبيئة، بالإضافة إلى ممارسات التصنيع الجيد (cGMP)، والمساهمة في الأمن الدوائي وتطوير الصناعة.

رؤيتنا:
أن نكون الخيار المفضل والرائد محلياً وإقليمياً في الصناعات الدوائية والكيميائية، مقدمين منتجات عالية الجودة.

قيمنا:
• الجودة
• التميز
• الكفاءة
• المهنية والنزاهة
• الصدق
• الإبداع والابتكار
• ثقة العميل ورضاه
• التحسين المستمر
• المسؤولية الاجتماعية

الأهداف الاستراتيجية:
1. استخدام جميع الموارد المتاحة لإنتاج أدوية متنوعة باستخدام أحدث التقنيات الصيدلانية، لتلبية توقعات العملاء.
2. تعزيز الوعي وضمان الامتثال لممارسات التصنيع الجيد وأنظمة الإدارة والتحسين المستمر.
3. الامتثال لجميع المتطلبات القانونية والتنظيمية المحلية والدولية ذات الصلة.
4. منع التلوث، تقليل النفايات، الحفاظ على الموارد الطبيعية، وحماية البيئة.
5. توفير بيئة عمل مناسبة، ضمان سلامة الموظفين، حماية أصول الشركة، وتطوير مهارات الموظفين.
6. التحسين المستمر لجميع عمليات ومنتجات الشركة.
7. تعزيز العلاقات مع أصحاب المصلحة وبناء شراكات طويلة الأمد.
8. التطوير المستمر لمنتجات وتقنيات دوائية جديدة تلبي توقعات العملاء والسوق.`
      }
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHeader 
          title={{ en: 'Quality Management System', ar: 'نظام إدارة الجودة' }}
          breadcrumbs={[{ label: { en: 'Quality Management System', ar: 'نظام إدارة الجودة' } }]}
        />

        {/* Intro Section */}
        <section className="py-16">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <Card variant="elevated" className="overflow-hidden">
                <div className="bg-primary text-primary-foreground p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    {t({ en: 'Shiba Pharma', ar: 'سبأ فارما' })}
                  </h2>
                  <p className="text-primary-foreground/80">
                    {t({ en: 'Quality Management System', ar: 'نظام إدارة الجودة' })}
                  </p>
                  <p className="text-sm text-primary-foreground/60 mt-2">
                    {t({ en: 'Fields, Systems and Policies of Quality Management', ar: 'مجالات وأنظمة وسياسات إدارة الجودة' })}
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Quality Tabs */}
        <section className="py-16 bg-secondary/30">
          <div className="section-container">
            <Tabs defaultValue="integrated-policy" className="w-full">
              <TabsList className="w-full flex flex-wrap justify-center gap-2 bg-white p-4 rounded-2xl shadow-soft mb-8 h-auto">
                {qualityTabs.map((tab) => (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className="flex items-center gap-2 px-4 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-xl transition-all"
                  >
                    <tab.icon className="w-4 h-4" />
                    <span className="hidden md:inline text-sm">{t(tab.title)}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {qualityTabs.map((tab) => (
                <TabsContent key={tab.id} value={tab.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card variant="elevated" className="overflow-hidden">
                      <CardContent className="p-8 md:p-12">
                        <div className="flex items-start gap-4 mb-8">
                          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                            <tab.icon className="w-8 h-8 text-primary" />
                          </div>
                          <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                              {t(tab.title)}
                            </h2>
                          </div>
                        </div>

                        <div className="prose prose-lg max-w-none">
                          {t(tab.content).split('\n\n').map((paragraph, index) => (
                            <p key={index} className="text-muted-foreground leading-relaxed mb-4 whitespace-pre-line">
                              {paragraph}
                            </p>
                          ))}
                        </div>

                        {/* Chairman Signature */}
                        <div className={`mt-12 pt-8 border-t border-border ${isRTL ? 'text-left' : 'text-right'}`}>
                          <p className="font-semibold text-foreground italic mb-1">
                            {t({ en: 'Chairman of the Board', ar: 'رئيس مجلس الإدارة' })}
                          </p>
                          <p className="font-bold text-primary">
                            {t({ en: 'Dr. Ehsan Al-Ribahi', ar: 'د. إحسان الرباحي' })}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Sidebar Section */}
        <section className="py-16">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Share Card */}
              <Card className="bg-white shadow-soft">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-primary mb-4">
                    {t({ en: 'Share', ar: 'مشاركة' })}
                  </h3>
                  <div className="flex gap-3">
                    {['twitter', 'facebook', 'whatsapp', 'linkedin'].map((social) => (
                      <button
                        key={social}
                        className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                      >
                        <span className="sr-only">{social}</span>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                        </svg>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Certifications */}
              <Card className="bg-white shadow-soft md:col-span-2">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-primary mb-4">
                    {t({ en: 'Our Certifications', ar: 'شهاداتنا' })}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['ISO 9001:2015', 'ISO 14001:2018', 'ISO 45001:2018', 'WHO-GMP'].map((cert) => (
                      <div key={cert} className="text-center p-4 bg-secondary/50 rounded-xl">
                        <Award className="w-8 h-8 text-accent mx-auto mb-2" />
                        <p className="text-sm font-medium text-foreground">{cert}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default QualityManagement;
