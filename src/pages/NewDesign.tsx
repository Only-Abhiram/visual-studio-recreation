import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, Upload, Sparkles } from 'lucide-react';

const NewDesign = () => {
  const quickStartOptions = [
    {
      title: 'Blank Canvas',
      description: 'Start with a completely blank canvas and let your creativity flow',
      icon: <Plus className="w-8 h-8" />,
      path: '/design/canvas',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Upload Image',
      description: 'Upload your own image and edit it with our powerful tools',
      icon: <Upload className="w-8 h-8" />,
      path: '/design/upload',
      gradient: 'from-green-500 to-blue-600'
    },
    {
      title: 'AI Generated',
      description: 'Generate unique designs using our AI-powered tools',
      icon: <Sparkles className="w-8 h-8" />,
      path: '/design/ai-generate',
      gradient: 'from-purple-500 to-pink-600'
    }
  ];

  const popularSizes = [
    { name: 'Instagram Post', size: '1080 × 1080', ratio: 'square' },
    { name: 'Instagram Story', size: '1080 × 1920', ratio: 'portrait' },
    { name: 'Facebook Post', size: '1200 × 630', ratio: 'landscape' },
    { name: 'Twitter Header', size: '1500 × 500', ratio: 'wide' },
    { name: 'YouTube Thumbnail', size: '1280 × 720', ratio: 'landscape' },
    { name: 'Business Card', size: '3.5" × 2"', ratio: 'card' },
  ];

  return (
    <div className="py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Start a New Design
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose how you'd like to begin your creative journey today.
          </p>
        </div>

        {/* Quick Start Options */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {quickStartOptions.map((option, index) => (
            <Link
              key={index}
              to={option.path}
              className="design-card p-8 text-center group"
            >
              <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${option.gradient} flex items-center justify-center text-white`}>
                {option.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {option.title}
              </h3>
              <p className="text-muted-foreground">
                {option.description}
              </p>
            </Link>
          ))}
        </div>

        {/* Popular Sizes */}
        <div>
          <h2 className="text-2xl font-bold text-center mb-8">
            Popular Design Sizes
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {popularSizes.map((size, index) => (
              <div
                key={index}
                className="design-card p-4 text-center cursor-pointer"
              >
                <div className={`w-full mb-3 bg-gradient-to-br from-muted to-accent/20 rounded-lg flex items-center justify-center ${
                  size.ratio === 'square' ? 'aspect-square' :
                  size.ratio === 'portrait' ? 'aspect-[9/16]' :
                  size.ratio === 'landscape' ? 'aspect-[16/9]' :
                  size.ratio === 'wide' ? 'aspect-[3/1]' :
                  'aspect-[3.5/2]'
                }`}>
                  <span className="text-2xl">📐</span>
                </div>
                <h4 className="font-medium text-sm mb-1">{size.name}</h4>
                <p className="text-xs text-muted-foreground">{size.size}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewDesign;