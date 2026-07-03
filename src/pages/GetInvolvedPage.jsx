import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { UserPlus, Users, Heart, Building2, MessageSquare, Search, Sparkles, CheckCircle2 } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactForm from '@/components/ContactForm.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

const GetInvolvedPage = () => {
  const pathways = [
    {
      icon: UserPlus,
      title: 'Volunteer with us',
      description: 'Lend your time and skills to support our programs and community. Volunteering is a hands-on way to grow while giving back.',
      cta: 'Volunteer',
      link: '#contact',
      benefitsIntro:
        'Volunteering with Novola is a rewarding way to build experience while making a real difference in young leaders’ lives.',
      benefits: [
        'Gain practical experience supporting real leadership programs',
        'Grow your professional network across Africa’s changemaker community',
        'Develop new skills through structured, meaningful roles',
        'Receive a certificate of service and recognition for your contribution',
        'Get early access to future fellowship and staff opportunities',
      ],
    },
    {
      icon: Users,
      title: 'Become a Mentor',
      description: 'Share your expertise and guide the next generation of African leaders. Mentors commit to leading a pod throughout the bootcamp.',
      cta: 'Mentor Fellows',
      link: '#contact',
      benefitsIntro:
        'Mentors shape the next generation of African leaders while sharpening their own leadership along the way.',
      benefits: [
        'Sharpen your own leadership and coaching skills',
        'Expand your network with fellow mentors, partners, and alumni',
        'Leave a lasting legacy by developing emerging leaders',
        'Gain visibility as a thought leader in your industry',
        'Enjoy exclusive access to mentor events and resources',
      ],
    },
    {
      icon: Heart,
      title: 'Support Our Mission',
      description: 'Make a tax-deductible donation to help us develop more leaders. Every contribution directly supports fellow scholarships and program excellence.',
      cta: 'Donate Now',
      link: '#contact',
      benefitsIntro:
        'Your generosity directly funds fellow scholarships and program excellence — every gift creates measurable impact.',
      benefits: [
        'Directly sponsor a fellow’s place in the program',
        'Receive updates on the real impact your gift creates',
        'Enjoy tax-deductible giving where applicable',
        'Optional recognition on our supporters page',
        'Join a community of changemakers investing in Africa’s future',
      ],
    },
  ];

  const [selectedBenefits, setSelectedBenefits] = useState(null);

  const sponsorshipTiers = [
    {
      title: 'Platinum Partner',
      amount: '₦1,000,000+',
      benefits: [
        'Full cohort sponsorship (80-100 fellows)',
        'Exclusive access to talent pipeline',
        'Speaking slot at December Gala',
        'Logo placement on all materials',
        'Quarterly impact reports',
      ],
    },
    {
      title: 'Gold Partner',
      amount: '₦500,000+',
      benefits: [
        'Sponsor 40-50 fellows',
        'Priority access to alumni network',
        'Recognition at major events',
        'Logo on website and materials',
        'Semi-annual impact reports',
      ],
    },
    {
      title: 'Silver Partner',
      amount: '₦200,000+',
      benefits: [
        'Sponsor 15-20 fellows',
        'Access to alumni network',
        'Recognition on website',
        'Annual impact report',
      ],
    },
  ];

  const volunteerRoles = [
    {
      icon: Search,
      title: 'Screening Team',
      description: 'Review applications and conduct initial interviews with prospective fellows.',
    },
    {
      icon: MessageSquare,
      title: 'Community Management',
      description: 'Facilitate online discussions, organize virtual events, and support fellow engagement.',
    },
    {
      icon: Building2,
      title: 'Partnership Development',
      description: 'Help identify and connect with potential corporate partners and sponsors.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Get Involved - Novola Charity Foundation</title>
        <meta
          name="description"
          content="Join Novola as a fellow, mentor, donor, or partner. Help us build 1,000+ African leaders by 2036."
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
              <h1 className="mb-6">Join the movement</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Whether you're ready to lead, mentor, or support, there's a place for you in the Novola community.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Engagement Pathways */}
        <section className="py-20">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="mb-4">Three ways to get involved</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose the path that aligns with your goals and capacity.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pathways.map((pathway, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-4">
                        <pathway.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{pathway.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <CardDescription className="text-base leading-relaxed flex-1 mb-6">
                        {pathway.description}
                      </CardDescription>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button
                          variant="outline"
                          className="w-full sm:flex-1"
                          onClick={() => setSelectedBenefits(pathway)}
                        >
                          <Sparkles className="mr-2 h-4 w-4" />
                          Benefits
                        </Button>
                        <Button asChild className="w-full sm:flex-1">
                          <a href={pathway.link}>{pathway.cta}</a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Dialog open={!!selectedBenefits} onOpenChange={(open) => !open && setSelectedBenefits(null)}>
          <DialogContent className="max-w-lg">
            {selectedBenefits && (
              <>
                <DialogHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-3">
                    <selectedBenefits.icon className="h-6 w-6 text-primary" />
                  </div>
                  <DialogTitle className="text-2xl">{selectedBenefits.title} — Benefits</DialogTitle>
                  <DialogDescription className="text-base leading-relaxed pt-2">
                    {selectedBenefits.benefitsIntro}
                  </DialogDescription>
                </DialogHeader>
                <ul className="space-y-3 mt-2">
                  {selectedBenefits.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full mt-4">
                  <a href={selectedBenefits.link} onClick={() => setSelectedBenefits(null)}>
                    {selectedBenefits.cta}
                  </a>
                </Button>
              </>
            )}
          </DialogContent>
        </Dialog>

        {/* Corporate Sponsorship */}
        <section className="py-20 bg-muted/30">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="mb-4">Corporate partnership opportunities</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Partner with Novola to develop Africa's next generation of leaders while building your talent pipeline.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {sponsorshipTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className={`h-full flex flex-col ${index === 0 ? 'border-primary shadow-lg scale-105' : ''}`}>
                    <CardHeader>
                      {index === 0 && (
                        <div className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full w-fit mb-2">
                          Most Popular
                        </div>
                      )}
                      <CardTitle className="text-2xl">{tier.title}</CardTitle>
                      <div className="text-3xl font-bold text-primary mt-2">{tier.amount}</div>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <ul className="space-y-3">
                        {tier.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <Heart className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground leading-relaxed">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Volunteer Opportunities */}
        <section className="py-20">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="mb-4">Volunteer opportunities</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Contribute your time and skills to support our mission.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {volunteerRoles.map((role, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/20 mb-4">
                        <role.icon className="h-6 w-6 text-secondary-foreground" />
                      </div>
                      <CardTitle className="text-xl">{role.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {role.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="py-20 bg-muted/30">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="mb-4">Get in touch</h2>
                <p className="text-lg text-muted-foreground">
                  Ready to join us? Fill out the form below and we'll get back to you within 48 hours.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card>
                  <CardContent className="p-8">
                    <ContactForm />
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default GetInvolvedPage;