import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Coffee, Heart, Briefcase, Gem, Users, MessageCircle, TrendingUp, ArrowRight } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const values = [
  {
    icon: Gem,
    title: 'Craft',
    description: 'We sweat the details. A product, a deck, or a blog post — if it ships with our name on it, it ships well made.',
  },
  {
    icon: MessageCircle,
    title: 'Candor',
    description: 'We say the true thing, kindly. To users, to clients, to each other. Good conversations are our whole business.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'We build for connection and we give back deliberately — access and opportunity are meant to be shared.',
  },
  {
    icon: TrendingUp,
    title: 'Compounding',
    description: 'Small, consistent bets that feed each other. The product teaches the consultancy; both fund the giving.',
  },
];

const timeline = [
  {
    label: 'The spark',
    text: 'Alttene starts the way everything we make does — with coffee chats. Enough of them, with enough interesting people, to convince us that serendipity deserved better software.',
  },
  {
    label: 'The product',
    text: 'Koffeechat becomes our flagship: a platform that engineers the lucky conversation instead of waiting for it.',
  },
  {
    label: 'The initiatives',
    text: 'Fisayo.org formalizes our commitment to giving back, and Alto Partners opens our playbook to organizations that want help executing theirs.',
  },
];

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About — Alttene Ventures</title>
        <meta
          name="description"
          content="Alttene Ventures is a venture studio: builders of Koffeechat and the team behind Fisayo.org and Alto Partners, our consulting firm."
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
              <Badge className="mb-4 uppercase tracking-wider">About Us</Badge>
              <h1 className="mb-6">A studio built on good conversations</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Alttene Ventures is a small venture studio with one product we obsess over — Koffeechat — and two initiatives that carry our values further: Fisayo.org and Alto Partners.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story / timeline */}
        <section className="py-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="mb-6">Our story</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Founded by Fisayo, Alttene grew out of a simple observation: nearly every good thing in a career — the job, the co-founder, the idea, the courage — can be traced back to a conversation someone almost didn't have.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  So we made conversations our business. We build Koffeechat to create them, run Alto Partners to have sharper ones with organizations, and use Fisayo.org to make sure the people who most need those conversations get invited to them.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We're deliberately small, deliberately focused, and based in Lagos with a view of everywhere.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                {timeline.map((item, index) => (
                  <div key={item.label} className="relative pl-8 pb-2">
                    <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-primary"></span>
                    {index < timeline.length - 1 && (
                      <span className="absolute left-[5px] top-6 bottom-0 w-0.5 bg-border" aria-hidden="true"></span>
                    )}
                    <h3 className="text-lg font-semibold mb-2">{item.label}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-muted/30">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="mb-4">What we optimize for</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Four values, applied everywhere — from a line of code to a client engagement.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/40 transition-all duration-300"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Ecosystem recap */}
        <section className="py-20">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="mb-4">The Alttene ecosystem at a glance</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center bg-card border border-border rounded-2xl p-8">
                <Coffee className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-1">Koffeechat</h3>
                <p className="text-sm text-muted-foreground mx-auto">Our product</p>
              </div>
              <div className="text-center bg-card border border-border rounded-2xl p-8">
                <Heart className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-1">Fisayo.org</h3>
                <p className="text-sm text-muted-foreground mx-auto">Our giving-back initiative</p>
              </div>
              <div className="text-center bg-card border border-border rounded-2xl p-8">
                <Briefcase className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-1">Alto Partners</h3>
                <p className="text-sm text-muted-foreground mx-auto">Our consulting firm</p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mt-12"
            >
              <Button size="lg" asChild>
                <Link to="/initiatives">
                  Explore the Initiatives
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
