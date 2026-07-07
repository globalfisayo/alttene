import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Heart,
  Briefcase,
  ArrowUpRight,
  ArrowRight,
  GraduationCap,
  Megaphone,
  Handshake,
  LineChart,
  Layers,
  Rocket,
} from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const fisayoPillars = [
  {
    icon: GraduationCap,
    title: 'Opportunities, shared',
    description: 'Scholarships, fellowships, jobs, and grants — curated and shared so the right people hear about them in time to apply.',
  },
  {
    icon: Megaphone,
    title: 'Knowledge, out loud',
    description: 'Guides, talks, and honest writing about careers, moving abroad, and building things — the advice we wish someone had given us.',
  },
  {
    icon: Handshake,
    title: 'Mentorship, on purpose',
    description: 'Connecting ambitious people with those a few steps ahead of them, one conversation at a time.',
  },
];

const altoServices = [
  {
    icon: Layers,
    title: 'Strategy',
    description: 'Market entry, positioning, and the hard prioritization calls — grounded in what we learn running our own product.',
  },
  {
    icon: Rocket,
    title: 'Product',
    description: 'From idea to shipped: discovery, roadmaps, and hands-on product leadership for teams that need momentum.',
  },
  {
    icon: LineChart,
    title: 'Growth',
    description: 'Practical growth systems — acquisition, retention, and the analytics to know which is actually working.',
  },
];

const InitiativesPage = () => {
  return (
    <>
      <Helmet>
        <title>Initiatives — Fisayo.org & Alto Partners | Alttene Ventures</title>
        <meta
          name="description"
          content="Beyond Koffeechat, Alttene Ventures runs two initiatives: Fisayo.org, our giving-back platform, and Alto Partners, our consulting firm."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/60 to-secondary/40 border-b border-border">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <Badge className="mb-4 uppercase tracking-wider">Initiatives</Badge>
              <h1 className="mb-6">The work beyond the product</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Koffeechat is what we build. These initiatives are why we build — carrying Alttene's values into communities and boardrooms alike.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Fisayo.org */}
        <section id="fisayo-org" className="py-20 scroll-mt-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mb-6">
                  <Heart className="h-7 w-7 text-primary" />
                </div>
                <Badge variant="secondary" className="mb-4 uppercase tracking-wider">Giving Back</Badge>
                <h2 className="mb-6">Fisayo.org</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Fisayo.org is our founder's promise kept in public: that the doors that opened for us should open wider for the people coming behind us.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  It's a platform for sharing opportunities, honest guidance, and mentorship — built for ambitious people who have the talent but not yet the access.
                </p>
                <Button size="lg" asChild>
                  <a href="https://fisayo.org" target="_blank" rel="noopener noreferrer">
                    Visit Fisayo.org
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                {fisayoPillars.map((pillar) => (
                  <div key={pillar.title} className="flex items-start gap-4 bg-card border border-border rounded-2xl p-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent flex-shrink-0">
                      <pillar.icon className="h-5 w-5 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{pillar.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Alto Partners */}
        <section id="alto-partners" className="py-20 bg-muted/30 scroll-mt-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:order-2"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mb-6">
                  <Briefcase className="h-7 w-7 text-primary" />
                </div>
                <Badge variant="secondary" className="mb-4 uppercase tracking-wider">Consulting Firm</Badge>
                <h2 className="mb-6">Alto Partners</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Alto Partners is Alttene's consulting arm — a small firm for organizations that want operators, not observers, in the room.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Because we build and run our own product, our advice comes with scar tissue. We work in short, intense engagements and measure ourselves on what changes after we leave.
                </p>
                <Button size="lg" asChild>
                  <Link to="/contact">
                    Start a Conversation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6 lg:order-1"
              >
                {altoServices.map((service) => (
                  <div key={service.title} className="flex items-start gap-4 bg-card border border-border rounded-2xl p-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent flex-shrink-0">
                      <service.icon className="h-5 w-5 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{service.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="mb-4">Want to work with us?</h2>
              <p className="text-lg opacity-90 mb-8 mx-auto">
                Whether it's a consulting engagement with Alto Partners, a partnership with Fisayo.org, or something we haven't thought of yet — we'd love to hear it.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default InitiativesPage;
