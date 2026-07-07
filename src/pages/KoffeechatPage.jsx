import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Coffee,
  Users,
  Timer,
  Sparkles,
  CalendarCheck,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FeatureCard from '@/components/FeatureCard.jsx';

const features = [
  {
    icon: Sparkles,
    title: 'Matches that make sense',
    description:
      'Tell Koffeechat what you do and what you are curious about. It pairs you with people worth meeting — a mentor, a peer in another industry, or your next collaborator.',
  },
  {
    icon: Timer,
    title: 'Short by design',
    description:
      'Every chat is capped at the length of a coffee. No hour-long calls, no awkward wind-downs — just focused conversations that respect everyone’s calendar.',
  },
  {
    icon: CalendarCheck,
    title: 'Scheduling that disappears',
    description:
      'Once you are matched, Koffeechat finds the overlap in your availability and books the chat. You show up; the logistics handle themselves.',
  },
  {
    icon: Users,
    title: 'Circles and communities',
    description:
      'Companies, schools, and communities run their own Koffeechat circles — pairing members for regular chats that keep networks warm and ideas moving.',
  },
  {
    icon: ShieldCheck,
    title: 'A space that stays kind',
    description:
      'Real profiles, mutual opt-in, and community guidelines keep every conversation respectful. You control who can reach you and when.',
  },
  {
    icon: Coffee,
    title: 'Coffee optional, connection guaranteed',
    description:
      'Meet over video, voice, or an actual café table. The cup is a metaphor; the connection is the product.',
  },
];

const steps = [
  {
    number: '01',
    title: 'Create your profile',
    description: 'Share what you work on, what you want to learn, and the kinds of people you would love to meet.',
  },
  {
    number: '02',
    title: 'Get matched',
    description: 'Koffeechat suggests a match and a time. Both sides opt in — no cold outreach, no spam.',
  },
  {
    number: '03',
    title: 'Have the chat',
    description: 'Fifteen to thirty minutes of real conversation. Then decide: stay in touch, or simply enjoy a good chat well had.',
  },
];

const KoffeechatPage = () => {
  return (
    <>
      <Helmet>
        <title>Koffeechat — Meaningful Conversations, One Cup at a Time | Alttene Ventures</title>
        <meta
          name="description"
          content="Koffeechat is Alttene Ventures' flagship product: a platform that matches people for short, meaningful coffee chats that grow careers, ideas, and friendships."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-hero-night">
          <div className="absolute inset-0 bg-grid-faint" aria-hidden="true"></div>
          <div className="container-custom relative z-10 py-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <Badge className="mb-6 bg-sky-400/15 text-sky-300 border border-sky-400/30 hover:bg-sky-400/20 uppercase tracking-widest font-semibold">
                An Alttene Ventures Product
              </Badge>
              <h1 className="mb-6 text-white">
                Meaningful conversations, one cup at a time.
              </h1>
              <p className="text-xl md:text-2xl text-sky-100/80 mb-8 leading-relaxed">
                Koffeechat matches you with people worth meeting for short, structured coffee chats — the kind of conversations careers, companies, and friendships are built on.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="text-base bg-sky-500 hover:bg-sky-400 text-white">
                  <Link to="/contact">
                    <Coffee className="mr-2 h-5 w-5" />
                    Request Early Access
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="text-base border-sky-300/40 bg-transparent text-sky-100 hover:bg-sky-400/10 hover:text-white"
                >
                  <a href="#how-it-works">How It Works</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-muted/30">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="mb-4">Networking without the noise</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Every feature exists to answer one question: how do we get two right people into one good conversation?
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  delay={index * 0.05}
                />
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="py-20 scroll-mt-16">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="mb-4">Three steps to a great chat</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We stripped away everything that makes networking feel like work.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative bg-card border border-border rounded-2xl p-8"
                >
                  <span className="text-5xl font-extrabold text-primary/15" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    {step.number}
                  </span>
                  <h3 className="text-xl font-bold mt-4 mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA band */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto"
            >
              <Coffee className="h-12 w-12 mx-auto mb-6 opacity-90" />
              <h2 className="mb-4">Your next big thing might be one chat away</h2>
              <p className="text-lg opacity-90 mb-8 mx-auto">
                Koffeechat is rolling out to early communities now. Tell us about yourself and we'll save you a seat at the table.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Request Early Access
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

export default KoffeechatPage;
