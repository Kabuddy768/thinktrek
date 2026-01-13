import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

// Initialize Resend with your API Key
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // 1. Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, company, interest, message } = req.body;

    // 2. Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        error: 'Missing required fields: name, email, and message are required' 
      });
    }

    // 3. Send email via Resend
    // Destructuring { data, error } is the standard way to handle Resend's 2025/2026 SDK
    const { data, error } = await resend.emails.send({
    //   from: 'Thinktrek Contact Form <onboarding@resend.dev>', // Update to your verified domain later
    from: 'Thinktrek Website <notifications@thinktrek.co.ke>',
    //   to: ['benmwangi968@gmail.com'],
      to: ['Davidk@thinktrek.co.ke'],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Product Interest:</strong> ${interest || 'General Inquiry'}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br />')}</p>
        <hr />
        <p style="color: #666; font-size: 12px;">
          Sent from Thinktrek Contact Form at ${new Date().toLocaleString()}
        </p>
      `,
    });

    // 4. Handle Resend API Errors
    if (error) {
      console.error('Resend API Error:', error);
      return res.status(400).json({ error });
    }

    // 5. Success Response
    // Because we checked 'if (error)' above, TypeScript knows 'data' is safe to use here
    return res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully',
      id: data?.id 
    });

  } catch (err: any) {
    // 6. Handle Unexpected Errors (Network issues, etc.)
    console.error('Server Error:', err);
    return res.status(500).json({ 
      error: 'Internal Server Error',
      details: err.message 
    });
  }
}