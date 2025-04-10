import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Typography, Container, Box, Breadcrumbs, Divider, Grid, Avatar } from "@mui/material";
import { FaHome, FaClock, FaTag, FaShare, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import BlogItem from "../../components/BlogItem";

// Sample blog data - In a real app, this would come from an API
const blogPosts = [
  {
    id: 1,
    title: "10 Creative Ways to Use Your Notebook",
    excerpt: "Discover unique and inspirational ways to utilize your notebook beyond simple note-taking.",
    content: `
      <p>Notebooks are incredibly versatile tools that can be used for much more than just taking notes. Here are ten creative ways to maximize your notebook's potential:</p>
      
      <h3>1. Bullet Journaling</h3>
      <p>Transform your notebook into a customized planner with bullet journaling. This organizational system uses bullets and symbols to categorize tasks, events, and notes.</p>
      
      <h3>2. Travel Journal</h3>
      <p>Document your adventures by creating a travel journal. Include ticket stubs, photos, sketches, and written memories of your experiences.</p>
      
      <h3>3. Recipe Collection</h3>
      <p>Compile your favorite recipes in a dedicated cookbook. You can include notes about modifications, serving suggestions, and photos of your culinary creations.</p>
      
      <h3>4. Gratitude Journal</h3>
      <p>Boost your mental well-being by maintaining a gratitude journal. Each day, write down things you're thankful for.</p>
      
      <h3>5. Sketchbook</h3>
      <p>Use your notebook as a sketchbook to practice drawing or capture visual ideas. Even if you're not an artist, doodling can be relaxing.</p>
    `,
    date: "April 8, 2025",
    author: "Sarah Johnson",
    authorImage: "https://randomuser.me/api/portraits/women/12.jpg",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Notebooks"
  },
  {
    id: 2,
    title: "The History of Stationery: From Quills to Digital",
    excerpt: "Explore the fascinating evolution of writing instruments throughout human history.",
    content: `
      <p>The history of stationery is essentially the history of human communication and record-keeping. Let's explore this fascinating journey through time:</p>
      
      <h3>Ancient Writing Tools</h3>
      <p>The earliest forms of writing appeared around 3500 BCE in Mesopotamia with cuneiform inscribed on clay tablets using reed styluses. In ancient Egypt, scribes wrote hieroglyphics on papyrus using reed pens.</p>
      
      <h3>The Paper Revolution</h3>
      <p>Paper, invented in China around 105 CE, revolutionized writing materials. The technology slowly spread along the Silk Road, reaching the Islamic world by the 8th century and Europe by the 12th century.</p>
      
      <h3>The Industrial Revolution</h3>
      <p>The 19th century saw dramatic changes in writing technology. The steel pen nib, invented in the 1820s, replaced the quill with a more durable alternative.</p>
    `,
    date: "April 2, 2025",
    author: "Marcus Johnson",
    authorImage: "https://randomuser.me/api/portraits/men/32.jpg",
    image: "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "History"
  },
  {
    id: 3,
    title: "Sustainable Stationery: Eco-Friendly Options",
    excerpt: "Learn about environmentally conscious alternatives to traditional paper products.",
    content: `
      <p>As environmental awareness grows, many consumers are seeking sustainable alternatives to conventional stationery products. Here's a guide to eco-friendly stationery options:</p>
      
      <h3>Sustainable Paper Products</h3>
      <p>Traditional paper production contributes to deforestation and uses significant amounts of water and energy. Consider these alternatives:</p>
      
      <ul>
        <li><strong>Recycled Paper:</strong> Using recycled paper saves trees, reduces energy consumption, and decreases pollution.</li>
        <li><strong>FSC-Certified Paper:</strong> Products certified by the Forest Stewardship Council come from responsibly managed forests.</li>
        <li><strong>Tree-Free Paper:</strong> Made from agricultural residues like sugarcane bagasse, cotton, hemp, or bamboo.</li>
      </ul>
      
      <h3>Eco-Friendly Writing Instruments</h3>
      <p>Billions of plastic pens are discarded annually. Consider these sustainable alternatives:</p>
      
      <ul>
        <li><strong>Refillable Pens:</strong> Quality pens with replaceable ink cartridges significantly reduce waste.</li>
        <li><strong>Biodegradable Pens:</strong> Made from materials like cornstarch, these pens decompose more readily.</li>
        <li><strong>Recycled Plastic Pens:</strong> Made from post-consumer plastic waste, giving new life to existing materials.</li>
      </ul>
    `,
    date: "March 27, 2025",
    author: "Leila Patel",
    authorImage: "https://randomuser.me/api/portraits/women/68.jpg",
    image: "https://images.unsplash.com/photo-1544239265-ee5eedde5469?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Sustainability"
  },
  {
    id: 4,
    title: "Bullet Journaling: Organization Made Beautiful",
    excerpt: "Master the art of bullet journaling with these tips and tricks for beginners.",
    date: "March 20, 2025",
    author: "Alex Rivera",
    authorImage: "https://randomuser.me/api/portraits/men/67.jpg",
    image: "https://images.unsplash.com/photo-1598275326217-c2d47df9c7ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Organization"
  },
  {
    id: 5,
    title: "Back to School: Essential Supplies for Success",
    excerpt: "Prepare for the new academic year with our guide to must-have school supplies.",
    date: "March 15, 2025",
    author: "Jamie Wong",
    authorImage: "https://randomuser.me/api/portraits/women/22.jpg",
    image: "https://images.unsplash.com/photo-1600058644231-f59e7e431501?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "School Supplies"
  }
];

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch with a timeout
    setLoading(true);
    const postId = parseInt(id);
    
    setTimeout(() => {
      const foundPost = blogPosts.find(post => post.id === postId);
      setPost(foundPost);
      
      if (foundPost) {
        // Get related posts from the same category
        const related = blogPosts
          .filter(p => p.id !== postId && p.category === foundPost.category)
          .slice(0, 3);
        setRelatedPosts(related);
      }
      
      setLoading(false);
      
      // Scroll to top when post changes
      window.scrollTo(0, 0);
    }, 300);
  }, [id]);

  if (loading) {
    return (
      <Container maxWidth="lg" className="py-8">
        <Box className="flex justify-center items-center py-16">
          <Typography>Loading...</Typography>
        </Box>
      </Container>
    );
  }

  if (!post) {
    return (
      <Container maxWidth="lg" className="py-8">
        <Box className="text-center py-16">
          <Typography variant="h4" className="mb-4">Blog Post Not Found</Typography>
          <Link to="/blog" className="text-blue-600 hover:underline">
            Return to Blog
          </Link>
        </Box>
      </Container>
    );
  }

  return (
    <div className="blog-post-page py-6 sm:py-8 bg-gray-50">
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
          <Link 
            to="/blog"
            className="text-gray-600 hover:text-blue-600"
          >
            Blog
          </Link>
          <Typography color="text.primary" className="text-sm">
            {post.title}
          </Typography>
        </Breadcrumbs>

        {/* Hero Image */}
        <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden mb-6">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://placehold.co/1200x600?text=Blog+Post+Image';
            }}
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 sm:p-6">
            <div className="inline-flex items-center gap-2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full mb-2">
              <FaTag />
              {post.category}
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{post.title}</h1>
          </div>
        </div>

        <Grid container spacing={4}>
          {/* Main Content */}
          <Grid item xs={12} md={8}>
            <Box className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
              {/* Author and Date */}
              <Box className="flex items-center mb-6">
                {post.authorImage && (
                  <Avatar 
                    src={post.authorImage} 
                    alt={post.author}
                    className="mr-3"
                    sx={{ width: 48, height: 48 }}
                  />
                )}
                <div>
                  <Typography variant="subtitle1" className="font-medium">
                    {post.author || "BBMart Team"}
                  </Typography>
                  <div className="flex items-center text-sm text-gray-600">
                    <FaClock className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                </div>
              </Box>

              {/* Post Content */}
              <div 
                className="blog-content prose prose-sm sm:prose lg:prose-lg mx-auto"
                dangerouslySetInnerHTML={{ __html: post.content || `<p>${post.excerpt}</p><p>Full content coming soon!</p>` }}
              />

              {/* Tags and Share */}
              <Divider className="my-6" />
              <Box className="flex flex-wrap justify-between items-center">
                <div className="flex flex-wrap items-center gap-2 mb-4 sm:mb-0">
                  <Typography variant="body2" className="text-gray-600 mr-2">
                    Tags:
                  </Typography>
                  <Link 
                    to={`/blog?category=${post.category}`} 
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    {post.category}
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <Typography variant="body2" className="text-gray-600">
                    Share:
                  </Typography>
                  <div className="flex gap-2">
                    <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                      <FaFacebook />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                      <FaTwitter />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </Box>
            </Box>
          </Grid>

          {/* Sidebar */}
          <Grid item xs={12} md={4}>
            {/* Related Posts */}
            <Box className="bg-white rounded-xl p-4 sm:p-6 shadow-sm mb-6">
              <Typography variant="h6" className="font-semibold mb-4">
                Related Posts
              </Typography>
              <div className="space-y-4">
                {relatedPosts.length > 0 ? (
                  relatedPosts.map(relatedPost => (
                    <div key={relatedPost.id} className="flex gap-3">
                      <Link to={`/blog/${relatedPost.id}`} className="block flex-shrink-0 w-20 h-20">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title}
                          className="w-full h-full object-cover rounded"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://placehold.co/200x200?text=Blog';
                          }}
                        />
                      </Link>
                      <div className="flex-1">
                        <Link 
                          to={`/blog/${relatedPost.id}`}
                          className="font-medium text-sm hover:text-blue-600 transition-colors line-clamp-2"
                        >
                          {relatedPost.title}
                        </Link>
                        <div className="text-xs text-gray-600 mt-1">
                          {relatedPost.date}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <Typography variant="body2" className="text-gray-600">
                    No related posts found.
                  </Typography>
                )}
              </div>
            </Box>

            {/* Categories */}
            <Box className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
              <Typography variant="h6" className="font-semibold mb-4">
                Categories
              </Typography>
              <div className="flex flex-wrap gap-2">
                {["Notebooks", "History", "Sustainability", "Organization", "School Supplies"].map(category => (
                  <Link 
                    key={category}
                    to={`/blog?category=${category}`} 
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default BlogPost;
