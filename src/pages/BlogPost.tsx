import { useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { blogData } from '../data/blogData';

export function BlogPost() {
  const { id } = useParams();
  const post = blogData.find(post => post.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <Link to="/" className="text-amber-500 hover:text-amber-400">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <article className="max-w-4xl mx-auto px-4 py-12">
        <Link 
          to="/" 
          className="inline-flex items-center text-amber-500 hover:text-amber-400 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <div className="relative h-[400px] mb-8 rounded-xl overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="prose prose-invert prose-amber max-w-none">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          
          <div className="flex items-center space-x-4 text-gray-400 mb-8">
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>

          <div className="space-y-4">
            {/* Content placeholder - to be filled later */}
            <p className="text-gray-400 italic">Content coming soon...</p>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}