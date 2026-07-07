import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const emptyForm = { name: '', email: '', inquiryType: '', message: '' };

const ContactForm = ({ defaultInquiry = '', applyToken = 0 }) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ ...emptyForm, inquiryType: defaultInquiry });

  // Preselect the inquiry type when a CTA button sends the visitor here,
  // without wiping anything they've already typed. `applyToken` bumps on every
  // CTA click so re-clicking the same one re-applies the choice.
  useEffect(() => {
    if (defaultInquiry) {
      setFormData((prev) => ({ ...prev, inquiryType: defaultInquiry }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultInquiry, applyToken]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, inquiryType: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Submission is simulated for now — wire this to a form service
    // (Formspree, a serverless function, etc.) when the backend is ready.
    await new Promise((resolve) => setTimeout(resolve, 800));

    setIsSubmitting(false);

    toast({
      title: 'Message sent',
      description: 'Thanks for reaching out. The Alttene team will get back to you soon.',
    });
    setFormData({ ...emptyForm });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Your full name"
          value={formData.name}
          onChange={handleChange}
          required
          className="text-foreground"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="your.email@example.com"
          value={formData.email}
          onChange={handleChange}
          required
          className="text-foreground"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="inquiryType">Inquiry Type</Label>
        <Select value={formData.inquiryType} onValueChange={handleSelectChange} required>
          <SelectTrigger id="inquiryType" className="text-foreground">
            <SelectValue placeholder="Select inquiry type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="koffeechat">Koffeechat Early Access</SelectItem>
            <SelectItem value="consulting">Alto Partners Consulting</SelectItem>
            <SelectItem value="fisayo">Fisayo.org</SelectItem>
            <SelectItem value="partnership">Partnership Inquiry</SelectItem>
            <SelectItem value="press">Press & Media</SelectItem>
            <SelectItem value="general">General Question</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us more about your inquiry..."
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="text-foreground resize-none"
        />
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
};

export default ContactForm;
