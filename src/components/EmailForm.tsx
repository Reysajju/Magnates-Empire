import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export function EmailForm() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-24 px-4 bg-black/50" role="alert" aria-live="polite">
        <div className="flex flex-col items-center space-y-6 max-w-2xl mx-auto">
          <CheckCircle2 className="w-16 h-16 text-amber-500" aria-hidden="true" />
          <h2 className="text-3xl md:text-4xl font-bold">Welcome to the Empire</h2>
          <p className="text-gray-400">
            Thank you for joining our exclusive circle. You're now part of something extraordinary. 
            Watch your inbox for privileged insights and opportunities that will shape the future.
          </p>
          <div className="mt-6 text-sm text-gray-500">
            <p>A confirmation email is on its way to {email}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center py-24 px-4 bg-black/50">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">The Empire Rises Soon</h2>
      <p className="text-gray-400 max-w-2xl mx-auto">
        A new era of business excellence is dawning. Be among the first to witness the emergence of something extraordinary.
      </p>
      <form 
  name="contact" 
  className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4" 
  method="POST" 
  data-netlify="true"
>
  <input type="hidden" name="form-name" value="contact" />
  <label className="sr-only" htmlFor="email">Email Address</label>
  <input
    type="email"
    id="email"
    name="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder="Enter your email for exclusive updates"
    className="px-6 py-3 rounded-full bg-gray-800 border-2 border-amber-500 text-white focus:outline-none focus:border-amber-600 w-full max-w-sm"
    required
    aria-required="true"
  />
  <button 
    type="submit"
    disabled={isLoading}
    className={`px-8 py-3 bg-amber-500 hover:bg-amber-600 text-black rounded-full transition-all duration-300 ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
    aria-busy={isLoading}
  >
    {isLoading ? 'Joining...' : 'Join Now'}
  </button>
</form>
    </div>
  );
}