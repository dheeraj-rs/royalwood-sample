'use client';

import Image from 'next/image';
import { Award, Users, Clock, Leaf } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const AboutPage = () => {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We never compromise on quality and strive for perfection in every piece.'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'We source our wood responsibly and practice eco-friendly manufacturing.'
    },
    {
      icon: Users,
      title: 'Craftsmanship',
      description: 'Our skilled artisans bring decades of experience to every creation.'
    },
    {
      icon: Clock,
      title: 'Timeless Design',
      description: 'We create furniture that transcends trends and lasts for generations.'
    }
  ];

  const team = [
    {
      name: 'Arjun Mehta',
      role: 'Master Craftsman',
      experience: '28 years',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      name: 'Kavita Singh',
      role: 'Design Director',
      experience: '15 years',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      name: 'Ravi Kumar',
      role: 'Workshop Manager',
      experience: '22 years',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Craftsman at work"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 animate-fade-in">
            Our <span className="text-gradient">Story</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 animate-slide-up max-w-3xl mx-auto">
            For over three decades, we've been crafting exceptional furniture that tells stories 
            of tradition, innovation, and unwavering commitment to quality.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-8">
                Three Generations of <span className="text-gradient">Craftsmanship</span>
              </h2>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  Royalwood began in 1990 as a small family workshop in the heart of Mumbai. 
                  What started as a passion project by Master Craftsman Suresh Mehta has grown 
                  into one of India's most respected furniture brands.
                </p>
                <p>
                  Our journey has been built on the foundation of traditional woodworking techniques 
                  passed down through generations, combined with contemporary design sensibilities 
                  and modern manufacturing processes.
                </p>
                <p>
                  Today, we continue to honor our heritage while embracing innovation, creating 
                  furniture that not only serves its function but becomes a cherished part of 
                  our customers' lives and homes.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/5641959/pexels-photo-5641959.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Workshop heritage"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-amber-500 text-black p-6 rounded-lg">
                <div className="text-3xl font-bold">30+</div>
                <div className="text-sm font-semibold">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              These core principles guide everything we do, from selecting the finest materials 
              to delivering exceptional customer service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="bg-gray-900/50 border-gray-800 hover:bg-gray-900/80 transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
              Meet Our <span className="text-gradient">Masters</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The skilled artisans and designers who bring our vision to life with their 
              expertise and passion for exceptional craftsmanship.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 overflow-hidden group hover:scale-105 transition-all duration-300">
                <div className="relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                    <p className="text-amber-400 font-medium mb-1">{member.role}</p>
                    <p className="text-gray-300 text-sm">{member.experience} experience</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From concept to completion, every piece undergoes our meticulous crafting process 
              that ensures uncompromising quality and attention to detail.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Design',
                description: 'Conceptualizing unique designs that blend form and function'
              },
              {
                step: '02',
                title: 'Material Selection',
                description: 'Sourcing the finest woods and materials from trusted suppliers'
              },
              {
                step: '03',
                title: 'Crafting',
                description: 'Expert artisans handcraft each piece with precision and care'
              },
              {
                step: '04',
                title: 'Finishing',
                description: 'Applying premium finishes and conducting quality inspections'
              }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{process.title}</h3>
                <p className="text-gray-300">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;