import React from 'react';
import { Search, Filter } from 'lucide-react';

const Templates = () => {
  const categories = [
    'All', 'Logo', 'T-shirt', 'Social Media', 'Art', 'Poster', 
    'Mobile Wallpaper', 'Mockups', 'Stickers', 'Cards & Invites'
  ];

  return (
    <div className="py-16 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Design Templates
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Browse thousands of professionally designed templates to jumpstart your creative projects.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <input
              type="text"
              placeholder="Search templates..."
              className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <button className="btn-secondary flex items-center">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </button>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                category === 'All' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-secondary text-secondary-foreground hover:bg-accent'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 24 }, (_, i) => (
            <div key={i} className="design-card">
              <div className="aspect-[3/4] bg-gradient-to-br from-primary/10 to-accent/20 flex items-center justify-center">
                <span className="text-4xl">🎨</span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-card-foreground mb-1">
                  Template {i + 1}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {categories[Math.floor(Math.random() * categories.length)]}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="btn-secondary">
            Load More Templates
          </button>
        </div>
      </div>
    </div>
  );
};

export default Templates;