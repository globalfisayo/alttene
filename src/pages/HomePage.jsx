import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Briefcase, Rocket, Building2, Users, Target, TrendingUp } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FeatureCard from '@/components/FeatureCard.jsx';
import StatCard from '@/components/StatCard.jsx';

const HomePage = () => {
  const features = [
    {
      icon: Briefcase,
      title: 'Careers Stream',
      description: 'Prepare for leadership roles in top organizations across Africa. Develop strategic thinking, executive presence, and industry expertise to accelerate your career trajectory.',
    },
    {
      icon: Rocket,
      title: 'Ventures Stream',
      description: 'Build scalable businesses that solve real problems. Learn from successful founders, access mentorship, and develop the skills to create sustainable ventures.',
    },
  ];

  const governmentFeature = {
    icon: Building2,
    title: 'Government Stream',
    description: 'Drive policy reform and public sector innovation. Gain the tools to lead transformative change in governance, public administration, and civic engagement across the continent.',
  };

  return (
    <>
      <Helmet>
        <title>Novola Charity Foundation - Empowering African Youth for Economic Leadership</title>
        <meta
          name="description"
          content="Join 1,000+ African leaders transforming the continent through our fellowship programs in careers, ventures, and government."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        {/* Hero Section */}
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={`${import.meta.env.BASE_URL}hero-home.jpg`}
              alt="Novola team members collaborating over coffee"
              onError={(e) => {
                e.currentTarget.src =
                  'https://images.unsplash.com/photo-1683028223436-439083f1243f';
              }}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60"></div>
          </div>

          <div className="container-custom relative z-10 py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 className="mb-6 text-foreground">
                Empowering African Youth for Economic Leadership
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Building a community of 1,000+ leaders who will transform Africa's economic landscape through careers, ventures, and governance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="text-base">
                  <Link to="/get-involved">Apply as Fellow</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-base">
                  <Link to="/about">Support Our Mission</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section - 2+1 Layout */}
        <section className="py-20 bg-muted/30">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="mb-4">Three pathways to leadership</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose your stream and join a cohort of ambitious young Africans building the future.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  delay={index * 0.1}
                />
              ))}
            </div>

            <div className="max-w-2xl mx-auto">
              <FeatureCard
                icon={governmentFeature.icon}
                title={governmentFeature.title}
                description={governmentFeature.description}
                delay={0.2}
              />
            </div>
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="py-20">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="mb-4">Our impact by the numbers</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Building a movement of leaders who will shape Africa's future.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <StatCard
                number="1,000+"
                label="Alumni Target"
                description="Leaders across careers, ventures, and government by 2036"
                delay={0}
                className="lg:col-span-2"
              />
              <StatCard
                number="80-100"
                label="Bootcamp Participants"
                description="Selected fellows per cohort"
                delay={0.1}
              />
              <StatCard
                number="100%"
                label="Completion Rate"
                description="Fellows who finish the program"
                delay={0.2}
              />
              <StatCard
                number="4-6 weeks"
                label="Program Duration"
                description="Intensive bootcamp experience"
                delay={0.3}
                className="lg:col-span-2"
              />
            </div>
          </div>
        </section>

        {/* Fellowship Model Overview */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="mb-6">The Novola Fellowship model</h2>
                <p className="text-lg leading-relaxed mb-6 opacity-90">
                  Our hybrid program combines virtual learning with strategic in-person touchpoints. Fellows engage in a 4-6 week intensive bootcamp covering foundational modules in spirituality, financial intelligence, and personal development.
                </p>
                <p className="text-lg leading-relaxed mb-8 opacity-90">
                  Each fellow is placed in a mentor pod led by senior leaders, ensuring personalized guidance throughout the journey. The program culminates in our annual December Gala, celebrating achievements and building lasting connections.
                </p>
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/programs">Explore Programs</Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-2 gap-6"
              >
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6">
                  <Users className="h-8 w-8 mb-4 opacity-90" />
                  <h3 className="text-xl font-semibold mb-2">Mentor Pods</h3>
                  <p className="text-sm opacity-80">Small groups led by experienced leaders</p>
                </div>
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6">
                  <Target className="h-8 w-8 mb-4 opacity-90" />
                  <h3 className="text-xl font-semibold mb-2">Focused Streams</h3>
                  <p className="text-sm opacity-80">Specialized tracks for your goals</p>
                </div>
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6">
                  <TrendingUp className="h-8 w-8 mb-4 opacity-90" />
                  <h3 className="text-xl font-semibold mb-2">Hybrid Learning</h3>
                  <p className="text-sm opacity-80">Virtual sessions with in-person events</p>
                </div>
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6">
                  <Briefcase className="h-8 w-8 mb-4 opacity-90" />
                  <h3 className="text-xl font-semibold mb-2">Real Impact</h3>
                  <p className="text-sm opacity-80">Alumni in leadership roles across Africa</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;