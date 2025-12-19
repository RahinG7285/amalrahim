import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

// Use Service Role Key for server-side operations
const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: Request) {
    try {
        const { name, email, message } = await request.json();

        // 1. Save to Supabase (Server-side)
        const { error: dbError } = await supabaseAdmin
            .from('messages')
            .insert([{ name, email, message }]);

        if (dbError) {
            console.error('Database Error:', dbError);
            // We continue anyway so the email might still send, or you can choose to fail here
        }

        // 2. Send Email via Resend
        const { data: emailData, error: emailError } = await resend.emails.send({
            from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
            to: process.env.ADMIN_EMAIL || 'rahing7285@gmail.com',
            subject: `New Message from ${name}`,
            replyTo: email,
            html: `
                <div style="font-family: sans-serif; padding: 20px;">
                    <h2 style="color: #333;">New Contact Form Submission</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
                    <p><strong>Message:</strong></p>
                    <p style="white-space: pre-wrap;">${message}</p>
                </div>
            `,
        });

        if (emailError) {
            console.error('Resend Error:', emailError);
            return NextResponse.json({ error: emailError.message }, { status: 400 });
        }

        return NextResponse.json({ success: true, data: emailData });
    } catch (error: any) {
        console.error('Contact API Exception:', error);
        return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
    }
}
