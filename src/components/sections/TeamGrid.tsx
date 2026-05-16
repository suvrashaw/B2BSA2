"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

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
    <section className="relative bg-brand-white py-24 transition-colors duration-500">
      <div className="container mx-auto w-full max-w-7xl px-8">
        <div className="mb-16 text-left">
          <div className="mb-6 inline-block rounded-full border border-brand-blue/20 bg-brand-blue/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-brand-blue uppercase">
            Leadership
          </div>
          <h2 className="font-heading text-3xl font-bold md:text-5xl ">{data.heading}</h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {data.members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative mb-6 aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gray-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-brand-charcoal/80 to-transparent p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <p className="mb-4 text-sm leading-relaxed text-white">{member.bio}</p>
                  {member.linkedin && member.linkedin !== "" && (
                    <Link
                      href={member.linkedin}
                      className="text-xs font-bold tracking-widest text-brand-cyan uppercase transition-colors hover:text-white"
                    >
                      LinkedIn
                    </Link>
                  )}
                </div>
              </div>
              <h3 className="font-heading text-xl  font-bold">{member.name}</h3>
              <p className="mt-1 text-sm font-semibold tracking-wider text-gray-500 uppercase">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
