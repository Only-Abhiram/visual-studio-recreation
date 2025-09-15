import React, { useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Play, Download, Share2, Upload } from 'lucide-react';

const DesignToolPage = () => {
  const { toolId } = useParams();
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const toolNames: Record<string, string> = {
    'logo': 'Logo Designer',
    't-shirt': 'T-shirt Designer', 
    'social-media-post': 'Social Media Post Creator',
    'art': 'Art Generator',
    'poster': 'Poster Maker',
    'mobile-wallpaper': 'Mobile Wallpaper Creator',
    'mockups': 'Mockup Generator',
    'stickers': 'Sticker Designer',
    'cards-invites': 'Cards & Invites Maker',
    'seamless-patterns': 'Pattern Generator',
    'memes': 'Meme Creator',
    'monogram': 'Monogram Designer',
    'ebook-cover': 'EBook Cover Designer',
    'virtual-backgrounds': 'Virtual Background Creator',
    'banners': 'Banner Designer',
    'instagram-posts': 'Instagram Post Creator',
    'event-signs': 'Event Sign Maker',
    'coloring-book-pages': 'Coloring Book Creator',
    'phone-case-covers': 'Phone Case Designer',
    'flyers': 'Flyer Maker',
    'mug': 'Mug Designer',
    'hats': 'Hat Designer',
    'spotify-album-cover': 'Album Cover Creator',
    'ads': 'Ad Creator'
  };

  const toolName = toolNames[toolId || ''] || 'Design Tool';
  const displayName = toolName
    .replace(' Designer', '')
    .replace(' Creator', '')
    .replace(' Maker', '')
    .replace(' Generator', '');

  // Handle file upload
  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setUploadedImage(e.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="p-2 hover:bg-accent rounded-lg transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-xl font-semibold">{toolName}</h1>
          </div>
          
          <div className="flex items-center space-x-3">
            <button className="btn-secondary">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </button>
            <button className="btn-secondary">
              <Download className="w-4 h-4 mr-2" />
              Download
            </button>
            <button className="btn-primary">
              <Play className="w-4 h-4 mr-2" />
              Generate
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-80 bg-card border-r border-border p-6">
          <h2 className="text-lg font-semibold mb-4">Templates</h2>
          <div className="grid grid-cols-2 gap-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="design-card aspect-square bg-gradient-to-br from-primary/10 to-accent/20 p-4 flex items-center justify-center">
                <span className="text-2xl">🎨</span>
              </div>
            ))}
          </div>
          
          <h3 className="text-lg font-semibold mt-8 mb-4">Customization</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Style</label>
              <select className="w-full p-2 border border-border rounded-lg bg-background">
                <option>Modern</option>
                <option>Classic</option>
                <option>Minimalist</option>
                <option>Bold</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Color Scheme</label>
              <div className="flex space-x-2">
                {['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-purple-500'].map((color, i) => (
                  <div key={i} className={`w-8 h-8 rounded-full ${color} cursor-pointer hover:scale-110 transition-transform`} />
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Text</label>
              <input 
                type="text" 
                placeholder={`Enter ${displayName.toLowerCase()} text`}
                className="w-full p-2 border border-border rounded-lg bg-background"
              />
            </div>
          </div>
        </div>

        {/* Canvas Area */}
        <div className="flex-1 bg-muted p-8 flex items-center justify-center">
          <div className="bg-card rounded-2xl shadow-[var(--card-shadow)] p-8 max-w-2xl w-full aspect-square flex items-center justify-center">
            <div className="text-center">
              {uploadedImage ? (
                <img
                  src={uploadedImage}
                  alt="Uploaded"
                  className="max-h-[400px] max-w-full mx-auto rounded-xl object-contain"
                />
              ) : (
                <>
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-primary/20 to-accent/30 rounded-2xl flex items-center justify-center text-4xl">
                    🎨
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{displayName} Canvas</h3>
                  <p className="text-muted-foreground mb-6">
                    Upload an image to start customizing your {displayName.toLowerCase()}.
                  </p>
                  <div className='w-full flex justify-center'>
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="btn-primary flex items-center "
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Upload
                  </button>
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleUpload}
                    className="hidden"
                  />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignToolPage;
