



// export default function Blog(){


//     return(
//         <div>Blog</div>
//     )
// }


import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin } from 'lucide-react';
import blogPic1 from '../../assets/pic4.jpg';
import blogPic2 from '../../assets/pic8.avif';
import blogPic3 from '../../assets/pic9.avif';

export default function Blog() {
  const blogs = [
    {
      title: 'Top Renting Tips for a Smooth Experience',
      description:
        'Discover the best practices to ensure your rental journey is hassle-free. Learn about contracts, budgeting, and finding the perfect space.',
      date: 'January 20, 2025',
      location: 'Fjord City, Norway',
      imageSrc: blogPic1,
    },
    {
      title: 'Spotlight on Scenic Neighborhoods',
      description:
        'Explore some of the most picturesque neighborhoods in Norway. From cozy cabins to vibrant urban living.',
      date: 'February 10, 2025',
      location: 'Bergen, Norway',
      imageSrc: blogPic2,
    },
    {
      title: 'Essential Details Before Renting',
      description:
        'Understand the key aspects you should consider before signing a rental agreement, including legal tips and safety checks.',
      date: 'March 5, 2025',
      location: 'Oslo, Norway',
      imageSrc: blogPic3,
    },
  ];

  return (
    <main className="bg-background text-foreground min-h-screen">
      <header className="bg-cover bg-center h-[400px] flex items-center justify-center" style={{ backgroundImage: `url(${blogPic1})` }}>
        <h1 className="text-5xl md:text-6xl text-white font-bold backdrop-blur-sm bg-black/50 p-4 rounded-lg">
          Nordic Insights Blog
        </h1>
      </header>

      <div className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center mb-8">Explore Our Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <Card key={index} className="overflow-hidden shadow-lg">
              <img
                src={blog.imageSrc}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">{blog.title}</h3>
                <p className="text-muted-foreground mb-4">{blog.description}</p>
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4 mr-2" /> {blog.date}
                  <MapPin className="w-4 h-4 mx-4" /> {blog.location}
                </div>
                <Button variant="outline" className="w-full">
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}