'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, Filter, Grid, List, Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useCart } from '@/hooks/useCart';

const CatalogPage = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const { addItem } = useCart();

  const products = [
    {
      id: '1',
      name: 'Royal Oak Dining Table',
      price: 85000,
      originalPrice: 95000,
      category: 'dining',
      wood: 'Premium Oak',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
      rating: 5,
      reviews: 24,
      inStock: true,
      featured: true,
      description: 'Handcrafted dining table perfect for family gatherings'
    },
    {
      id: '2',
      name: 'Executive Leather Chair',
      price: 45000,
      originalPrice: null,
      category: 'seating',
      wood: 'Walnut & Leather',
      image: 'https://images.pexels.com/photos/586922/pexels-photo-586922.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
      rating: 5,
      reviews: 18,
      inStock: true,
      featured: true,
      description: 'Premium executive chair with genuine leather upholstery'
    },
    {
      id: '3',
      name: 'Artisan Bookshelf',
      price: 35000,
      originalPrice: 40000,
      category: 'storage',
      wood: 'Teak Wood',
      image: 'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
      rating: 4,
      reviews: 12,
      inStock: true,
      featured: false,
      description: 'Elegant bookshelf with adjustable shelves'
    },
    {
      id: '4',
      name: 'Luxury King Bed Frame',
      price: 125000,
      originalPrice: null,
      category: 'bedroom',
      wood: 'Rosewood',
      image: 'https://images.pexels.com/photos/1248583/pexels-photo-1248583.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
      rating: 5,
      reviews: 31,
      inStock: true,
      featured: true,
      description: 'Majestic king-size bed frame with intricate carvings'
    },
    {
      id: '5',
      name: 'Coffee Table Set',
      price: 28000,
      originalPrice: 32000,
      category: 'living',
      wood: 'Mango Wood',
      image: 'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
      rating: 4,
      reviews: 15,
      inStock: true,
      featured: false,
      description: 'Modern coffee table with matching side tables'
    },
    {
      id: '6',
      name: 'Wardrobe Cabinet',
      price: 75000,
      originalPrice: null,
      category: 'bedroom',
      wood: 'Sheesham Wood',
      image: 'https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
      rating: 5,
      reviews: 22,
      inStock: false,
      featured: false,
      description: 'Spacious wardrobe with mirror and multiple compartments'
    },
  ];

  useEffect(() => {
    let filtered = [...products];

    // Category filter
    if (categoryFilter !== 'all') {
      filtered = filtered.filter(product => product.category === categoryFilter);
    }

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.wood.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    setFilteredProducts(filtered);
  }, [searchTerm, sortBy, categoryFilter]);

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      wood: product.wood,
      quantity: 1,
    });
  };

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'dining', label: 'Dining Room' },
    { value: 'living', label: 'Living Room' },
    { value: 'bedroom', label: 'Bedroom' },
    { value: 'seating', label: 'Seating' },
    { value: 'storage', label: 'Storage' },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop"
            alt="Furniture catalog"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
            Our <span className="text-gradient">Catalog</span>
          </h1>
          <p className="text-xl opacity-90">
            Discover our complete collection of handcrafted furniture pieces
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-gray-900 border-b border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <div className="relative flex-1 lg:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search furniture..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-gray-800 border-gray-700 text-white"
                />
              </div>
              
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full sm:w-48 bg-gray-800 border-gray-700 text-white">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full sm:w-48 bg-gray-800 border-gray-700 text-white">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('grid')}
                className="bg-amber-500 hover:bg-amber-600 text-black"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('list')}
                className="bg-amber-500 hover:bg-amber-600 text-black"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 text-white">
            <p>{filteredProducts.length} products found</p>
          </div>
          
          <div className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'grid-cols-1'
          }`}>
            {filteredProducts.map((product) => (
              <Card key={product.id} className={`bg-gray-900/50 border-gray-800 overflow-hidden group hover:scale-105 transition-all duration-300 ${viewMode === 'list' ? 'flex' : ''}`}>
                <div className={`relative ${viewMode === 'list' ? 'w-1/3' : ''}`}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={500}
                    height={400}
                    className={`${viewMode === 'list' ? 'w-full h-full' : 'w-full h-64'} object-cover group-hover:scale-110 transition-transform duration-500`}
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                  
                  {product.featured && (
                    <div className="absolute top-4 left-4 bg-amber-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  )}
                  
                  {!product.inStock && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Out of Stock
                    </div>
                  )}
                  
                  {product.originalPrice && (
                    <div className="absolute bottom-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Sale
                    </div>
                  )}
                </div>
                
                <CardContent className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < product.rating ? 'fill-amber-400 text-amber-400' : 'text-gray-600'}`} 
                      />
                    ))}
                    <span className="text-gray-400 text-sm ml-2">({product.reviews})</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
                  <p className="text-gray-400 mb-3">{product.wood}</p>
                  
                  {viewMode === 'list' && (
                    <p className="text-gray-300 mb-4">{product.description}</p>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-amber-400">
                        ₹{product.price.toLocaleString()}
                      </span>
                      {product.originalPrice && (
                        <span className="text-gray-500 line-through text-lg">
                          ₹{product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex space-x-2">
                      <Link href={`/catalog/${product.id}`}>
                        <Button variant="outline" size="sm" className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black">
                          View Details
                        </Button>
                      </Link>
                      
                      <Button
                        size="sm"
                        onClick={() => handleAddToCart(product)}
                        disabled={!product.inStock}
                        className="bg-amber-500 hover:bg-amber-600 text-black disabled:bg-gray-600 disabled:text-gray-400"
                      >
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center text-white py-12">
              <p className="text-xl">No products found matching your criteria.</p>
              <Button
                onClick={() => {
                  setSearchTerm('');
                  setCategoryFilter('all');
                }}
                className="mt-4 bg-amber-500 hover:bg-amber-600 text-black"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CatalogPage;