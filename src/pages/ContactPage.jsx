import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Twitter, Linkedin, Instagram } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactForm from '@/components/ContactForm.jsx';
import { Card, CardContent } from '@/components/ui/card';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'hello@alttene.com',
      link: 'mailto:hello@alttene.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+234 (0) 123 456 7890',
      link: 'tel:+2340123456789',
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Lagos, Nigeria',
      link: null,
    },
  ];

  const socialLinks = [
    { icon: Twitter, name: 'Twitter', url: 'https://twitter.com' },
    { icon: Linkedin, name: 'LinkedIn', url: 'https://linkedin.com' },
    { icon: Instagram, name: 'Instagram', url: 'https://instagram.com' },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Alttene Ventures</title>
        <meta
          name="description"
          content="Get in touch with Alttene Ventures — about Koffeechat early access, Alto Partners consulting, Fisayo.org, or anything else."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="mb-6">Let's connect</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Curious about Koffeechat? Exploring an engagement with Alto Partners? Partnering with Fisayo.org? We'd love to hear from you.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-1 space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-2xl font-bold mb-6">Contact information</h2>
                  <div className="space-y-6">
                    {contactInfo.map((item, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                          <item.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground mb-1">{item.title}</p>
                          {item.link ? (
                            <a
                              href={item.link}
                              className="text-muted-foreground hover:text-primary transition-colors duration-200"
                            >
                              {item.details}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">{item.details}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="text-lg font-semibold mb-4">Follow us</h3>
                  <div className="flex space-x-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                        aria-label={social.name}
                      >
                        <social.icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-muted/50 rounded-xl p-6"
                >
                  <h3 className="text-lg font-semibold mb-2">Office hours</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Monday - Friday: 9:00 AM - 5:00 PM WAT
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Saturday - Sunday: Closed
                  </p>
                </motion.div>
              </div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2"
              >
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                    <ContactForm />
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-muted/30">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="mb-4">Visit us</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're based in Lagos, Nigeria, the economic hub of West Africa.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg"
            >
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=3.3792,6.4474,3.3992,6.4674&layer=mapnik&marker=6.4574,3.3892"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Alttene Ventures Location"
              ></iframe>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ContactPage;