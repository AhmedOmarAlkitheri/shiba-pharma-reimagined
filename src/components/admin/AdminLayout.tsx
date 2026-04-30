import React from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard, FileText, Package, Newspaper, Video, Building2,
  Settings, Image as ImageIcon, LogOut, ExternalLink, Shield, Users, Tag,
  Mail, Inbox, KeyRound,
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const navItems = [
  { to: '/admin', icon: LayoutDashboard, label: 'الرئيسية', end: true },
  { to: '/admin/pages', icon: FileText, label: 'الصفحات والأقسام' },
  { to: '/admin/products', icon: Package, label: 'المنتجات' },
  { to: '/admin/categories', icon: Tag, label: 'الفئات' },
  { to: '/admin/news', icon: Newspaper, label: 'الأخبار' },
  { to: '/admin/videos', icon: Video, label: 'الفيديوهات' },
  { to: '/admin/hospitals', icon: Building2, label: 'الدليل الطبي' },
  { to: '/admin/media', icon: ImageIcon, label: 'مكتبة الوسائط' },
  { to: '/admin/messages', icon: Inbox, label: 'رسائل التواصل' },
  { to: '/admin/subscribers', icon: Mail, label: 'النشرة البريدية' },
  { to: '/admin/users', icon: Users, label: 'المستخدمون والصلاحيات' },
  { to: '/admin/account', icon: KeyRound, label: 'حسابي' },
  { to: '/admin/settings', icon: Settings, label: 'إعدادات الموقع' },
];

const AdminLayout: React.FC = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    toast.success('Signed out');
    navigate('/logindashboardshiba');
  };

  return (
    <div className="min-h-screen flex bg-secondary/30">
      {/* Sidebar */}
      <aside className="w-64 bg-card border-r border-border flex flex-col fixed inset-y-0 left-0 z-30">
        <div className="p-6 border-b border-border">
          <Link to="/admin" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <Shield className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-bold text-primary">شيبا فارما</h1>
              <p className="text-xs text-muted-foreground">لوحة التحكم</p>
            </div>
          </Link>
        </div>

        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-secondary'
                }`
              }
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="p-3 border-t border-border space-y-2">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:bg-secondary transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            عرض الموقع
          </a>
          <div className="px-3 py-2 text-xs text-muted-foreground border-t border-border pt-3">
            <p className="truncate font-medium text-foreground">{user?.email}</p>
          </div>
          <Button variant="outline" size="sm" className="w-full justify-start" onClick={handleSignOut}>
            <LogOut className="w-4 h-4 mr-2" />
            تسجيل الخروج
          </Button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 ml-64 p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
