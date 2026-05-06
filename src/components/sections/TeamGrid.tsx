"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
}

export interface TeamGridData {
  heading: string;
  members: TeamMember[];
}

export const TeamGrid = ({ data }: { data: TeamGridData }) => {
  return (
    <section className="py-24 bg-brand-white relative transition-colors duration-500">
      <div className="container mx-auto px-8 w-full max-w-7xl">
        <div className="mb-16 text-center">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-sm font-semibold tracking-wide uppercase">
            Leadership
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-brand-charcoal">
            {data.heading}
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl mb-6 bg-gray-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <p className="text-white text-sm leading-relaxed mb-4">{member.bio}</p>
                  {member.linkedin && member.linkedin !== "" && (
                    <Link
                      href={member.linkedin}
                      className="text-brand-cyan font-bold text-xs uppercase tracking-widest hover:text-white transition-colors"
                    >
                      LinkedIn
                    </Link>
                  )}
                </div>
              </div>
              <h3 className="text-xl font-bold text-brand-charcoal font-heading">{member.name}</h3>
              <p className="text-sm text-gray-500 mt-1 uppercase tracking-wider font-semibold">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
