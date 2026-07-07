import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Coffee,
  Heart,
  Briefcase,
  ArrowRight,
  ArrowUpRight,
  Hammer,
  Compass,
  HandHeart,
  MessagesSquare,
} from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import BlogCard from '@/components/BlogCard.jsx';
import { getRecentPosts } from '@/lib/blog';

// The Alttene ecosystem in one list: one product, two initiatives.
const ecosystem = [
  {
    icon: Coffee,
    kind: 'Product',
    title: 'Koffeechat',
    description:
      'Our flagship product. Koffeechat turns the simple ritual of a coffee chat into a platform — matching people for short, meaningful conversations that grow careers, ideas, and friendships.',
    to: '/koffeechat',
    cta: 'Discover Koffeechat',
  },
  {
    icon: Heart,
    kind: 'Initiative',
    title: 'Fisayo.org',
    description:
      'Our giving-back initiative. Fisayo.org opens doors — sharing opportunities, resources, and mentorship so more people can access the rooms where their futures are decided.',
    href: 'https://fisayo.org',
    cta: 'Visit Fisayo.org',
  },
  {
    icon: Briefcase,
    kind: 'Initiative',
    title: 'Alto Partners',
    description:
      'Our consulting firm. Alto Partners brings the lessons we learn building products to organizations that need sharp thinking on strategy, product, and growth.',
    to: '/initiatives#alto-partners',
    cta: 'Meet Alto Partners',
  },
];

const principles = [
  {
    icon: Hammer,
    title: 'Build',
    description: 'Ship products people genuinely want to open every day.',
  },
  {
    icon: Compass,
    title: 'Advise',
    description: 'Lend our playbook to partners through Alto Partners.',
  },
  {
    icon: HandHeart,
    title: 'Give',
    description: 'Widen access to opportunity through Fisayo.org.',
  },
  {
    icon: MessagesSquare,
    title: 'Connect',
    description: 'Start every venture the same way — with a conversation.',
  },
];

const HomePage = () => {
  const latestPosts = getRecentPosts(3);

  return (
    <>
      <Helmet>
        <title>Alttene Ventures — Products and Initiatives That Bring People Together</title>
        <meta
          name="description"
          content="Alttene Ventures is the home of Koffeechat, and the studio behind initiatives like Fisayo.org and Alto Partners, our consulting firm."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        {/* Hero — pure CSS night-blue canvas, no image assets required */}
        <section className="relative min-h-[92dvh] flex items-center overflow-hidden bg-hero-night">
          <div className="absolute inset-0 bg-grid-faint" aria-hidden="true"></div>

          <div className="container-custom relative z-10 py-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <Badge className="mb-6 bg-sky-400/15 text-sky-300 border border-sky-400/30 hover:bg-sky-400/20 uppercase tracking-widest font-semibold">
                Venture Studio
              </Badge>
              <h1 className="mb-6 text-white">
                We build things that start with a conversation.
              </h1>
              <p className="text-xl md:text-2xl text-sky-100/80 mb-8 leading-relaxed">
                Alttene Ventures is the home of <span className="text-white font-semibold">Koffeechat</span>, our flagship product — and the studio behind initiatives like <span className="text-white font-semibold">Fisayo.org</span> and <span className="text-white font-semibold">Alto Partners</span>, our consulting firm.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="text-base bg-sky-500 hover:bg-sky-400 text-white">
                  <Link to="/koffeechat">
                    <Coffee className="mr-2 h-5 w-5" />
                    Discover Koffeechat
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="text-base border-sky-300/40 bg-transparent text-sky-100 hover:bg-sky-400/10 hover:text-white"
                >
                  <Link to="/initiatives">Explore Our Initiatives</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Ecosystem — one product, two initiatives */}
        <section className="py-20 bg-muted/30">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="mb-4">One studio. Three ways forward.</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything we do lives under one roof: a product we obsess over, and initiatives that carry our values into the world.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {ecosystem.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative flex flex-col bg-card border border-border rounded-2xl p-8 hover:shadow-lg hover:border-primary/40 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant={item.kind === 'Product' ? 'default' : 'secondary'} className="uppercase tracking-wider text-[10px]">
                      {item.kind}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed flex-1">{item.description}</p>
                  {item.to ? (
                    <Link
                      to={item.to}
                      className="mt-6 inline-flex items-center text-sm font-semibold text-primary group-hover:underline"
                    >
                      {item.cta}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center text-sm font-semibold text-primary group-hover:underline"
                    >
                      {item.cta}
                      <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Koffeechat spotlight */}
        <section className="py-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-2 lg:order-1"
              >
                <Badge className="mb-4 uppercase tracking-wider">Flagship Product</Badge>
                <h2 className="mb-6">Koffeechat: big things brew over small talks</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  The best opportunities rarely arrive as job postings or pitch decks — they start as conversations. Koffeechat makes those conversations happen on purpose: short, structured chats with people worth meeting.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  It's networking without the noise — one cup, one person, one honest conversation at a time.
                </p>
                <Button size="lg" asChild>
                  <Link to="/koffeechat">
                    See How It Works
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-1 lg:order-2"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1200&auto=format&fit=crop"
                    alt="Two cups of coffee on a table, mid-conversation"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Alttene way — blue band */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="mb-6">The Alttene way</h2>
                <p className="text-lg leading-relaxed mb-6 opacity-90">
                  We're a small studio with a simple operating system: build products with craft, advise partners with candor, and give back with intention. Each part feeds the others — what we learn shipping Koffeechat sharpens Alto Partners' advice, and both fund the work Fisayo.org does in the community.
                </p>
                <p className="text-lg leading-relaxed mb-8 opacity-90">
                  We'd rather do a few things exceptionally well than many things adequately. One product. Two initiatives. Full attention.
                </p>
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/about">Read Our Story</Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-2 gap-6"
              >
                {principles.map((p) => (
                  <div key={p.title} className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6">
                    <p.icon className="h-8 w-8 mb-4 opacity-90" />
                    <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                    <p className="text-sm opacity-80">{p.description}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Latest from the blog */}
        {latestPosts.length > 0 && (
          <section className="py-20 bg-muted/30">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
              >
                <div>
                  <h2 className="mb-3">Fresh from the blog</h2>
                  <p className="text-lg text-muted-foreground">
                    Notes from the studio — product updates, consulting lessons, and community news.
                  </p>
                </div>
                <Button variant="outline" asChild className="w-fit">
                  <Link to="/blog">
                    All Posts
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {latestPosts.map((post, index) => (
                  <BlogCard key={post.id} post={post} variant="featured" delay={index * 0.1} />
                ))}
              </div>
            </div>
          </section>
        )}

        <Footer />
      </div>
    </>
  );
};

export default HomePage;
