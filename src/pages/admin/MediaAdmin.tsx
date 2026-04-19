import React, { useEffect, useState, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, Upload, Trash2, Copy } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { useAuth } from '@/contexts/AuthContext';

interface MediaItem { id: string; file_name: string; url: string; file_path: string; }

const MediaAdmin: React.FC = () => {
  const { user } = useAuth();
  const [items, setItems] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const load = async () => {
    const { data } = await supabase.from('media').select('*').order('created_at', { ascending: false });
    setItems(data ?? []); setLoading(false);
  };
  useEffect(() => { load(); }, []);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files; if (!files || !files.length) return;
    setUploading(true);
    for (const file of Array.from(files)) {
      const path = `${Date.now()}-${file.name.replace(/\s+/g, '-')}`;
      const { error: upErr } = await supabase.storage.from('site-media').upload(path, file);
      if (upErr) { toast.error(upErr.message); continue; }
      const { data: pub } = supabase.storage.from('site-media').getPublicUrl(path);
      await supabase.from('media').insert({
        uploaded_by: user?.id, file_name: file.name, file_path: path,
        url: pub.publicUrl, mime_type: file.type, size_bytes: file.size,
      });
    }
    setUploading(false);
    if (inputRef.current) inputRef.current.value = '';
    toast.success('Uploaded');
    load();
  };

  const remove = async (item: MediaItem) => {
    if (!confirm('Delete this file?')) return;
    await supabase.storage.from('site-media').remove([item.file_path]);
    await supabase.from('media').delete().eq('id', item.id);
    toast.success('Deleted'); load();
  };

  const copy = (url: string) => {
    navigator.clipboard.writeText(url);
    toast.success('URL copied');
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Media Library</h1>
        <div>
          <input ref={inputRef} type="file" multiple accept="image/*" className="hidden" onChange={handleUpload} />
          <Button onClick={() => inputRef.current?.click()} disabled={uploading}>
            {uploading ? <Loader2 className="w-4 h-4 mr-1 animate-spin" /> : <Upload className="w-4 h-4 mr-1" />}
            Upload
          </Button>
        </div>
      </div>

      {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {items.map(m => (
            <Card key={m.id} className="p-2 group">
              <div className="aspect-square bg-secondary rounded overflow-hidden mb-2">
                <img src={m.url} alt={m.file_name} className="w-full h-full object-cover" />
              </div>
              <p className="text-xs truncate">{m.file_name}</p>
              <div className="flex gap-1 mt-2">
                <Button size="sm" variant="outline" className="flex-1" onClick={() => copy(m.url)}><Copy className="w-3 h-3" /></Button>
                <Button size="sm" variant="outline" onClick={() => remove(m)}><Trash2 className="w-3 h-3" /></Button>
              </div>
            </Card>
          ))}
          {items.length === 0 && <p className="text-muted-foreground col-span-full text-center py-12">No media yet. Upload your first file.</p>}
        </div>
      )}
    </div>
  );
};

export default MediaAdmin;
