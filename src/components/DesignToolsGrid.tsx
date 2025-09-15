import React from 'react';
import { Link } from 'react-router-dom';

interface DesignTool {
  id: string;
  name: string;
  path: string;
  color: string;
  icon: string;
}

const DesignToolsGrid = () => {
  const designTools: DesignTool[] = [
    { id: 'logo', name: 'Logo', path: '/design/logo', color: 'from-purple-500 to-purple-600', icon: '🎯' },
    { id: 't-shirt', name: 'T-shirt', path: '/design/t-shirt', color: 'from-blue-500 to-blue-600', icon: '👕' },
    { id: 'social-media-post', name: 'Social Media Post', path: '/design/social-media-post', color: 'from-pink-500 to-pink-600', icon: '📱' },
    { id: 'art', name: 'Art', path: '/design/art', color: 'from-green-500 to-green-600', icon: '🎨' },
    { id: 'poster', name: 'Poster', path: '/design/poster', color: 'from-red-500 to-red-600', icon: '📋' },
    { id: 'mobile-wallpaper', name: 'Mobile Wallpaper', path: '/design/mobile-wallpaper', color: 'from-indigo-500 to-indigo-600', icon: '📱' },
    { id: 'mockups', name: 'Mockups', path: '/design/mockups', color: 'from-yellow-500 to-yellow-600', icon: '💻' },
    { id: 'stickers', name: 'Stickers', path: '/design/stickers', color: 'from-teal-500 to-teal-600', icon: '🏷️' },
    { id: 'cards-invites', name: 'Cards & Invites', path: '/design/cards-invites', color: 'from-rose-500 to-rose-600', icon: '💌' },
    { id: 'seamless-patterns', name: 'Seamless Patterns', path: '/design/seamless-patterns', color: 'from-cyan-500 to-cyan-600', icon: '🔄' },
    { id: 'memes', name: 'Memes', path: '/design/memes', color: 'from-orange-500 to-orange-600', icon: '😂' },
    { id: 'monogram', name: 'Monogram', path: '/design/monogram', color: 'from-violet-500 to-violet-600', icon: '🔤' },
    { id: 'ebook-cover', name: 'EBook Cover', path: '/design/ebook-cover', color: 'from-emerald-500 to-emerald-600', icon: '📚' },
    { id: 'virtual-backgrounds', name: 'Virtual Backgrounds', path: '/design/virtual-backgrounds', color: 'from-sky-500 to-sky-600', icon: '🌆' },
    { id: 'banners', name: 'Banners', path: '/design/banners', color: 'from-amber-500 to-amber-600', icon: '🎪' },
    { id: 'instagram-posts', name: 'Instagram Posts', path: '/design/instagram-posts', color: 'from-fuchsia-500 to-fuchsia-600', icon: '📸' },
    { id: 'event-signs', name: 'Event Signs', path: '/design/event-signs', color: 'from-lime-500 to-lime-600', icon: '🪧' },
    { id: 'coloring-book-pages', name: 'Coloring Book Pages', path: '/design/coloring-book-pages', color: 'from-slate-500 to-slate-600', icon: '🖍️' },
    { id: 'phone-case-covers', name: 'Phone Case Covers', path: '/design/phone-case-covers', color: 'from-stone-500 to-stone-600', icon: '📱' },
    { id: 'flyers', name: 'Flyers', path: '/design/flyers', color: 'from-red-400 to-red-500', icon: '📄' },
    { id: 'mug', name: 'Mug', path: '/design/mug', color: 'from-brown-500 to-brown-600', icon: '☕' },
    { id: 'hats', name: 'Hats', path: '/design/hats', color: 'from-gray-500 to-gray-600', icon: '🎩' },
    { id: 'spotify-album-cover', name: 'Spotify Album Cover', path: '/design/spotify-album-cover', color: 'from-green-400 to-green-500', icon: '🎵' },
    { id: 'ads', name: 'Ads', path: '/design/ads', color: 'from-blue-400 to-blue-500', icon: '📢' },
  ];

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center text-foreground mb-4">
          What do you want to design today?
        </h2>
        
        <div className="flex justify-center gap-4 mb-12">
          <Link to="/design/new" className="btn-primary">
            Start new design
          </Link>
          <button className="btn-secondary">
            Upload and edit image
          </button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {designTools.map((tool) => (
            <Link
              key={tool.id}
              to={tool.path}
              className="design-card group"
            >
              <div className="p-6 text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center text-2xl`}>
                  {tool.icon}
                </div>
                <h3 className="font-semibold text-card-foreground group-hover:text-primary transition-colors">
                  {tool.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignToolsGrid;