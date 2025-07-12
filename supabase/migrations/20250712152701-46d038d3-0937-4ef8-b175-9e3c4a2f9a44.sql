-- Add SELECT policy for testimonials to allow public viewing
CREATE POLICY "Allow public select from testimonials" 
ON public.testimonials 
FOR SELECT 
USING (true);