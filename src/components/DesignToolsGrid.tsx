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
    { id: 'logo', name: 'Logo', path: '/design/logo', color: 'from-purple-500 to-purple-600', icon: 'https://static.vecteezy.com/system/resources/previews/023/654/784/non_2x/golden-logo-template-free-png.png' },
    { id: 't-shirt', name: 'T-shirt', path: '/design/t-shirt', color: 'from-blue-500 to-blue-600', icon: 'https://www.pngarts.com/files/1/T-Shirt-Printing-Free-PNG-Image.png' },
    { id: 'social-media-post', name: 'Social Media Post', path: '/design/social-media-post', color: 'from-pink-500 to-pink-600', icon: 'https://tse4.mm.bing.net/th/id/OIP.Cm2aVnyf9bNiaFrbcJ5RsAHaG6?pid=Api&P=0&h=180' },
    { id: 'art', name: 'Art', path: '/design/art', color: 'from-green-500 to-green-600', icon: 'https://png.pngtree.com/png-clipart/20231006/original/pngtree-cheerful-cartoon-bird-clip-art-transparent-background-png-image_13280251.png' },
    { id: 'poster', name: 'Poster', path: '/design/poster', color: 'from-red-500 to-red-600', icon: 'https://tse2.mm.bing.net/th/id/OIP.NdVSjKVknQlDYPN26LM8dQHaJm?pid=Api&P=0&h=180' },
    { id: 'mobile-wallpaper', name: 'Mobile Wallpaper', path: '/design/mobile-wallpaper', color: 'from-indigo-500 to-indigo-600', icon: 'https://images.hdqwalls.com/wallpapers/synthwave-city-retro-neon-4k-se.jpg' },
    { id: 'mockups', name: 'Mockups', path: '/design/mockups', color: 'from-yellow-500 to-yellow-600', icon: 'https://img.glyphs.co/img?src=aHR0cHM6Ly9zMy5tZWRpYWxvb3QuY29tL3Jlc291cmNlcy9GcmVlLVdlYnNpdGUtTW9ja3VwLVBhY2stUHJldmlldy0xLmpwZw&q=90&enlarge=true&h=1036&w=1600' },
    { id: 'stickers', name: 'Stickers', path: '/design/stickers', color: 'from-teal-500 to-teal-600', icon: 'https://tse2.mm.bing.net/th/id/OIP._lpZxiRRRgJWP2xcAD5ufgHaHa?pid=Api&P=0&h=180' },
    { id: 'cards-invites', name: 'Cards & Invites', path: '/design/cards-invites', color: 'from-rose-500 to-rose-600', icon: 'https://marketplace.canva.com/EAFp-D8CblE/1/0/1143w/canva-pink-glitter-girl-birthday-invitation-JNuKA0JJZFQ.jpg' },
    { id: 'seamless-patterns', name: 'Seamless Patterns', path: '/design/seamless-patterns', color: 'from-cyan-500 to-cyan-600', icon: 'https://tse2.mm.bing.net/th/id/OIP.gRGZoizUcNTZQ7BTzrBykQHaHa?pid=Api&P=0&h=180' },
    { id: 'memes', name: 'Memes', path: '/design/memes', color: 'from-orange-500 to-orange-600', icon: 'https://getwallpapers.com/wallpaper/full/a/3/3/9625.jpg' },
    { id: 'monogram', name: 'Monogram', path: '/design/monogram', color: 'from-violet-500 to-violet-600', icon: 'https://www.freemonogrammaker.com/wp-content/uploads/2018/01/circle-monogram-3-768x768.jpg' },
    { id: 'ebook-cover', name: 'EBook Cover', path: '/design/ebook-cover', color: 'from-emerald-500 to-emerald-600', icon: 'https://tse3.mm.bing.net/th/id/OIP.1DSIj9qHFXac3l-G2_QhRwHaLH?pid=Api&P=0&h=180' },
    { id: 'virtual-backgrounds', name: 'Virtual Backgrounds', path: '/design/virtual-backgrounds', color: 'from-sky-500 to-sky-600', icon: 'https://tse3.mm.bing.net/th/id/OIP.PO18n6TUshk1fRbzwAjKVAHaEJ?pid=Api&P=0&h=180' },
    { id: 'banners', name: 'Banners', path: '/design/banners', color: 'from-amber-500 to-amber-600', icon: 'https://tse4.mm.bing.net/th/id/OIP.TepMuOafeurDUbO-u46y-gHaCe?pid=Api&P=0&h=180' },
    { id: 'instagram-posts', name: 'Instagram Posts', path: '/design/instagram-posts', color: 'from-fuchsia-500 to-fuchsia-600', icon: 'https://tse2.mm.bing.net/th/id/OIP.WoArfQlK6JXbwNzVd9LxiQHaHa?pid=Api&P=0&h=180' },
    { id: 'event-signs', name: 'Event Signs', path: '/design/event-signs', color: 'from-lime-500 to-lime-600', icon: 'https://tse1.mm.bing.net/th/id/OIP.AkiGMzMpXNXhQ65qKu9s7gHaF2?pid=Api&P=0&h=180' },
    { id: 'coloring-book-pages', name: 'Coloring Book Pages', path: '/design/coloring-book-pages', color: 'from-slate-500 to-slate-600', icon: 'https://tse3.mm.bing.net/th/id/OIP.ItrpfnThk4WWqlHZoPUaeQHaHa?pid=Api&P=0&h=180' },
    { id: 'phone-case-covers', name: 'Phone Case Covers', path: '/design/phone-case-covers', color: 'from-stone-500 to-stone-600', icon: 'https://tse4.mm.bing.net/th/id/OIP.g7BFVw4t2fbI11UoOipy0QHaIC?pid=Api&P=0&h=180' },
    { id: 'flyers', name: 'Flyers', path: '/design/flyers', color: 'from-red-400 to-red-500', icon: 'https://tse4.mm.bing.net/th/id/OIP.rN95GCik-thHoI5f0SMIhQHaJl?pid=Api&P=0&h=180' },
    { id: 'mug', name: 'Mug', path: '/design/mug', color: 'from-brown-500 to-brown-600', icon: 'https://tse3.mm.bing.net/th/id/OIP.GN2h4gB6pbgU2NRk8MXHuAAAAA?pid=Api&P=0&h=180' },
    { id: 'hats', name: 'Hats', path: '/design/hats', color: 'from-gray-500 to-gray-600', icon: 'https://i5.walmartimages.com/asr/303e2aa4-2f99-44a9-8072-fb9b94e45e6f_1.363f5c72d1b5af6f149eb5b1d8023861.jpeg' },
    { id: 'spotify-album-cover', name: 'Spotify Album Cover', path: '/design/spotify-album-cover', color: 'from-green-400 to-green-500', icon: 'https://tse3.mm.bing.net/th/id/OIP.oQB8rr6MzzEWb7XVJR08fgHaFj?pid=Api&P=0&h=180' },
    { id: 'ads', name: 'Ads', path: '/design/ads', color: 'from-blue-400 to-blue-500', icon: 'https://tse3.mm.bing.net/th/id/OIP.e1-pp0CgXwPGV43U95Aq4wHaHa?pid=Api&P=0&h=180' },
  ];

  return (
    <section id='tools' className="py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center text-foreground mb-4">
          What do you want to design today?
        </h2>
        
        <div className="flex justify-center gap-4 mb-12">
          <Link to="/design/new" className="btn-primary">
            Start new design
          </Link>
          <button className="btn-secondary ">
            Upload and edit image
          </button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {designTools.map((tool) => (
            <Link
              key={tool.id}
              to={tool.path}
              className="design-card group dark:bg-gray-900"
            >
              <div className="p-6 text-center flex flex-col justify-between items-center">
                {/* <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br   flex items-center justify-center `}> */}
                  <img src={tool.icon} alt=""  className='w-20 h-20 mb-4 rounded-2xl'/>
                {/* </div> */}
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