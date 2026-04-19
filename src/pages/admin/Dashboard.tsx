import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Package, Newspaper, Video, Building2, FileText, Image as ImageIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';

interface Stats {
  products: number;
  news: number;
  videos: number;
  hospitals: number;
  pages: number;
  media: number;
}

const Dashboard: React.FC = () => {
  const [stats, setStats] = useState<Stats>({ products: 0, news: 0, videos: 0, hospitals: 0, pages: 0, media: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const counts = await Promise.all([
        supabase.from('products').select('*', { count: 'exact', head: true }),
        supabase.from('news_articles').select('*', { count: 'exact', head: true }),
        supabase.from('videos').select('*', { count: 'exact', head: true }),
        supabase.from('hospitals').select('*', { count: 'exact', head: true }),
        supabase.from('pages').select('*', { count: 'exact', head: true }),
        supabase.from('media').select('*', { count: 'exact', head: true }),
      ]);
      setStats({
        products: counts[0].count ?? 0,
        news: counts[1].count ?? 0,
        videos: counts[2].count ?? 0,
        hospitals: counts[3].count ?? 0,
        pages: counts[4].count ?? 0,
        media: counts[5].count ?? 0,
      });
      setLoading(false);
    };
    load();
  }, []);

  const cards = [
    { label: 'Pages', value: stats.pages, icon: FileText, to: '/admin/pages', color: 'bg-blue-500' },
    { label: 'Products', value: stats.products, icon: Package, to: '/admin/products', color: 'bg-emerald-500' },
    { label: 'News', value: stats.news, icon: Newspaper, to: '/admin/news', color: 'bg-amber-500' },
    { label: 'Videos', value: stats.videos, icon: Video, to: '/admin/videos', color: 'bg-rose-500' },
    { label: 'Hospitals', value: stats.hospitals, icon: Building2, to: '/admin/hospitals', color: 'bg-violet-500' },
    { label: 'Media Files', value: stats.media, icon: ImageIcon, to: '/admin/media', color: 'bg-cyan-500' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Overview of your site content</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <Link key={card.label} to={card.to}>
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{card.label}</p>
                  <p className="text-3xl font-bold text-foreground mt-2">
                    {loading ? '—' : card.value}
                  </p>
                </div>
                <div className={`w-12 h-12 rounded-xl ${card.color} flex items-center justify-center`}>
                  <card.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      <Card className="mt-8 p-6">
        <h2 className="font-semibold text-foreground mb-2">Quick Tips</h2>
        <ul className="text-sm text-muted-foreground space-y-1.5 list-disc list-inside">
          <li>Edit page sections from <strong>Pages & Sections</strong> – switch between 3 design layouts per section.</li>
          <li>All changes appear on the live site instantly via Realtime.</li>
          <li>Upload images in <strong>Media Library</strong> and reuse their URLs across the site.</li>
        </ul>
      </Card>
    </div>
  );
};

export default Dashboard;
