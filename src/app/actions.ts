'use server';

import { z } from 'zod';

// Removed handleSummarizeProject and SummarizeSchema

const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export async function handleContactForm(formData: FormData) {
  const rawFormData = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    message: formData.get('message') as string,
  };

  const validatedFields = ContactFormSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Validation failed.",
    };
  }

  // In a real app, you'd send an email or save to a database here.
  console.log("Contact form submitted:", validatedFields.data);

  return {
    success: true,
    message: "Thank you for your message! I'll get back to you soon.",
    errors: null,
  };
}
