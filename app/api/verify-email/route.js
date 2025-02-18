import { createClient } from '@supabase/supabase-js';
import { NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function POST(req) {
  const { token } = await req.json();

  if (!token) {
    return NextResponse.json({ message: 'Invalid or missing token' }, { status: 400 });
  }

  try {
    // Check if token exists in Supabase
    const { data: user, error } = await supabase
      .from('subscribers')
      .select('id')
      .eq('verification_token', token)
      .single();

    if (error || !user) {
      return NextResponse.json({ message: 'Invalid or expired token' }, { status: 400 });
    }

    // Update user as verified
    await supabase
      .from('subscribers')
      .update({ is_verified: true })
      .eq('id', user.id);

    // Redirect to landing page with success message
    return NextResponse.json({ message: 'Email verified successfully' }, { status: 200 });
    
  } catch (error) {
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
