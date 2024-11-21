// /api/subscribe.js
export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }
  
    const { email } = req.body;
  
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }
  
    try {
      const response = await fetch('https://<YOUR_DC>.api.mailchimp.com/3.0/lists/<YOUR_AUDIENCE_ID>/members', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.MAILCHIMP_API_KEY}`,
        },
        body: JSON.stringify({
          email_address: email,
          status: 'subscribed', // Use 'pending' for double opt-in
        }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Failed to subscribe');
      }
  
      return res.status(200).json({ success: true });
    } catch (error) {
      console.error('Mailchimp error:', error.message);
      return res.status(500).json({ error: error.message || 'Internal server error' });
    }
  }
  