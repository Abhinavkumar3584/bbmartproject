import React, { useState, useEffect } from "react";
import { Typography, Container, Grid, Box, Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";
import BlogItem from "../../components/BlogItem";
import { FaHome } from "react-icons/fa";

// Sample blog data - This would normally come from an API
const blogPosts = [
  {
    id: 1,
    title: "10 Creative Ways to Use Your Notebook",
    excerpt: "Discover unique and inspirational ways to utilize your notebook beyond simple note-taking. From bullet journaling to mixed media art, explore the endless possibilities that a simple notebook can offer.",
    date: "April 8, 2025",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Notebooks"
  },
  {
    id: 2,
    title: "The History of Stationery: From Quills to Digital",
    excerpt: "Explore the fascinating evolution of writing instruments throughout human history. This comprehensive overview traces the journey from ancient writing tools to modern stationery and digital alternatives.",
    date: "April 2, 2025",
    image: "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "History"
  },
  {
    id: 3,
    title: "Sustainable Stationery: Eco-Friendly Options",
    excerpt: "Learn about environmentally conscious alternatives to traditional paper products. Discover how sustainable stationery choices can reduce your environmental footprint while still meeting your writing and organizing needs.",
    date: "March 27, 2025",
    image: "https://images.unsplash.com/photo-1544239265-ee5eedde5469?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Sustainability"
  },
  {
    id: 4,
    title: "Bullet Journaling: Organization Made Beautiful",
    excerpt: "Master the art of bullet journaling with these tips and tricks for beginners. Learn how to create stunning spreads that help you stay organized while expressing your creativity.",
    date: "March 20, 2025",
    image: "https://images.unsplash.com/photo-1598275326217-c2d47df9c7ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Organization"
  },
  {
    id: 5,
    title: "Back to School: Essential Supplies for Success",
    excerpt: "Prepare for the new academic year with our guide to must-have school supplies. From ergonomic backpacks to the perfect pens and notebooks, we've got you covered for a productive school year.",
    date: "March 15, 2025",
    image: "https://images.unsplash.com/photo-1600058644231-f59e7e431501?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "School Supplies"
  },
  {
    id: 6,
    title: "The Art of Calligraphy: Getting Started",
    excerpt: "Begin your journey into the elegant world of calligraphy with our comprehensive beginner's guide. Learn about essential tools, basic strokes, and practice techniques to develop your skills.",
    date: "March 10, 2025",
    image: "https://images.unsplash.com/photo-1455679103965-0a06b29d93e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Arts & Crafts"
  },
  {
    id: 7,
    title: "Home Office Setup: Stationery Essentials",
    excerpt: "Create a productive and inspiring workspace with these stationery must-haves. From desk organizers to writing tools, discover everything you need for an efficient home office setup.",
    date: "March 5, 2025",
    image: "https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Office Supplies"
  },
  {
    id: 8,
    title: "Digital vs. Paper Planning: Finding Your Balance",
    excerpt: "Compare the benefits and drawbacks of digital and paper planning methods to determine the right approach for your lifestyle. Learn how to create a hybrid system that leverages the strengths of both worlds.",
    date: "February 28, 2025",
    image: "https://images.unsplash.com/photo-1553484771-047a44eee7a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Organization"
  },
  {
    id: 9,
    title: "Gift Ideas for Stationery Lovers",
    excerpt: "Discover the perfect presents for the stationery enthusiasts in your life. From luxury pens to artisanal notebooks, this guide offers thoughtful gift suggestions for every budget.",
    date: "February 20, 2025",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Gift Ideas"
  }
];

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Set the blog posts
    setPosts(blogPosts);
    
    // Extract unique categories
    const uniqueCategories = ["All", ...new Set(blogPosts.map(post => post.category))];
    setCategories(uniqueCategories);

    // Handle responsive layout
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Filter posts by category
  const filteredPosts = selectedCategory === "All" 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  return (
    <div className="blog-page py-6 sm:py-8 bg-gray-50">
      <Container maxWidth="lg">
        {/* Breadcrumbs */}
        <Breadcrumbs aria-label="breadcrumb" className="mb-4 text-sm">
          <Link 
            to="/"
            className="flex items-center text-gray-600 hover:text-blue-600"
          >
            <FaHome className="mr-1" />
            Home
          </Link>
          <Typography color="text.primary" className="text-sm">Blog</Typography>
        </Breadcrumbs>

        {/* Page Header */}
        <Box className="text-center mb-8">
          <Typography 
            variant="h1" 
            component="h1" 
            className="text-2xl sm:text-3xl font-bold mb-2"
          >
            Our Blog
          </Typography>
          <Typography variant="body1" className="text-gray-600 max-w-xl mx-auto">
            Stay updated with the latest trends in stationery, organization tips, and creative inspiration from our experts.
          </Typography>
        </Box>

        {/* Category Filter */}
        <Box className="mb-6 overflow-x-auto">
          <div className="flex flex-nowrap gap-2 pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </Box>

        {/* Blog Posts Grid */}
        <Grid container spacing={3}>
          {filteredPosts.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <BlogItem post={post} />
            </Grid>
          ))}
        </Grid>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <Box className="text-center py-12">
            <Typography variant="h6" className="mb-2">
              No posts found for this category.
            </Typography>
            <Typography variant="body2" className="text-gray-600">
              Please try another category or check back later.
            </Typography>
          </Box>
        )}

        {/* Pagination - Simple version */}
        {filteredPosts.length > 0 && (
          <Box className="flex justify-center mt-8">
            <div className="flex gap-2">
              <button className="px-4 py-2 rounded bg-white text-gray-700 hover:bg-gray-100 transition-colors border border-gray-300">
                Previous
              </button>
              <button className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                1
              </button>
              <button className="px-4 py-2 rounded bg-white text-gray-700 hover:bg-gray-100 transition-colors border border-gray-300">
                2
              </button>
              <button className="px-4 py-2 rounded bg-white text-gray-700 hover:bg-gray-100 transition-colors border border-gray-300">
                Next
              </button>
            </div>
          </Box>
        )}
      </Container>
    </div>
  );
};

export default Blog;
