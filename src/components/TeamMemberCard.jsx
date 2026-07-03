import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const getInitials = (name) =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();

const TeamMemberCard = ({ image, name, role, hasProfile = false, onClick, delay = 0 }) => {
  const [imgFailed, setImgFailed] = useState(false);
  const showImage = image && !imgFailed;

  const clickable = hasProfile && typeof onClick === 'function';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Card
        className={`overflow-hidden transition-all duration-300 ${
          clickable ? 'cursor-pointer hover:shadow-lg' : 'hover:shadow-lg'
        }`}
        onClick={clickable ? onClick : undefined}
        role={clickable ? 'button' : undefined}
        tabIndex={clickable ? 0 : undefined}
        onKeyDown={
          clickable
            ? (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onClick();
                }
              }
            : undefined
        }
        aria-label={clickable ? `View ${name}'s profile` : undefined}
      >
        <div className="aspect-square overflow-hidden bg-muted">
          {showImage ? (
            <img
              src={image}
              alt={name}
              onError={() => setImgFailed(true)}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/15 to-secondary/15">
              <span className="text-4xl font-bold text-primary/70">{getInitials(name)}</span>
            </div>
          )}
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-foreground mb-1">{name}</h3>
          <p className="text-sm font-medium text-primary">{role}</p>
          {clickable && (
            <span className="mt-3 inline-flex items-center text-sm font-medium text-muted-foreground group-hover:text-primary">
              View profile
              <ArrowRight className="ml-1 h-4 w-4" />
            </span>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TeamMemberCard;
