import React, { useEffect, useRef, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2, Upload, ImagePlus, X } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { useAuth } from '@/contexts/AuthContext';

interface Props {
  value: string | null | undefined;
  onChange: (url: string) => void;
  label?: string;
}

interface MediaItem { id: string; url: string; file_name: string; file_path: string; }

/**
 * Image picker with upload + library browse.
 * Uploads to Supabase Storage 'site-media' bucket and inserts row in `media`.
 */
const MediaPicker: React.FC<Props> = ({ value, onChange, label = 'Image' }) => {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const load = async () => {
    setLoading(true);
    const { data } = await supabase.from('media').select('*').order('created_at', { ascending: false }).limit(60);
    setItems(data ?? []);
    setLoading(false);
  };

  useEffect(() => { if (open) load(); }, [open]);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files; if (!files?.length) return;
    setUploading(true);
    let lastUrl = '';
    for (const file of Array.from(files)) {
      const path = `${Date.now()}-${file.name.replace(/\s+/g, '-')}`;
      const { error: upErr } = await supabase.storage.from('site-media').upload(path, file);
      if (upErr) { toast.error(upErr.message); continue; }
      const { data: pub } = supabase.storage.from('site-media').getPublicUrl(path);
      await supabase.from('media').insert({
        uploaded_by: user?.id, file_name: file.name, file_path: path,
        url: pub.publicUrl, mime_type: file.type, size_bytes: file.size,
      });
      lastUrl = pub.publicUrl;
    }
    setUploading(false);
    if (inputRef.current) inputRef.current.value = '';
    if (lastUrl) {
      onChange(lastUrl);
      toast.success('Uploaded & selected');
      setOpen(false);
    } else load();
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <Input value={value ?? ''} onChange={(e) => onChange(e.target.value)} placeholder="https://..." className="flex-1" />
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button type="button" variant="outline" size="icon" title="Choose / upload">
              <ImagePlus className="w-4 h-4" />
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Select {label}</DialogTitle>
            </DialogHeader>
            <div className="flex justify-end mb-3">
              <input ref={inputRef} type="file" accept="image/*" multiple className="hidden" onChange={handleUpload} />
              <Button onClick={() => inputRef.current?.click()} disabled={uploading} size="sm">
                {uploading ? <Loader2 className="w-4 h-4 mr-1 animate-spin" /> : <Upload className="w-4 h-4 mr-1" />}
                Upload new
              </Button>
            </div>
            {loading ? (
              <div className="flex justify-center py-12"><Loader2 className="w-6 h-6 animate-spin" /></div>
            ) : (
              <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                {items.map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => { onChange(m.url); setOpen(false); }}
                    className={`group relative aspect-square rounded-lg overflow-hidden border-2 transition-all hover:scale-105 ${
                      value === m.url ? 'border-primary ring-2 ring-primary/30' : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <img src={m.url} alt={m.file_name} className="w-full h-full object-cover" />
                  </button>
                ))}
                {items.length === 0 && (
                  <p className="col-span-full text-center py-12 text-muted-foreground">No media yet. Upload your first.</p>
                )}
              </div>
            )}
          </DialogContent>
        </Dialog>
        {value && (
          <Button type="button" variant="ghost" size="icon" onClick={() => onChange('')} title="Clear">
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>
      {value && (
        <div className="w-32 h-20 rounded border overflow-hidden bg-secondary">
          <img src={value} alt="" className="w-full h-full object-cover" />
        </div>
      )}
    </div>
  );
};

export default MediaPicker;
