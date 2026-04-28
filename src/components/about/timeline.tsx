"use client";

import { Timeline as TimelineUI } from "@/components/ui/timeline";

const TIMELINE_DATA = [
  {
    title: "2004",
    content: (
      <div className="space-y-4">
        <p className="text-brand-charcoal text-lg md:text-xl font-medium leading-relaxed transition-colors duration-500">
          Inspired by philanthropic efforts, our founder embarked on a journey kindled by compassion, laying the foundation for our core values.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="aspect-video bg-brand-blue/5 rounded-lg border border-brand-blue/10 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop" alt="Philanthropy" className="w-full h-full object-cover grayscale opacity-60" />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2012",
    content: (
      <div className="space-y-4">
        <p className="text-brand-charcoal text-lg md:text-xl font-medium leading-relaxed transition-colors duration-500">
          B2B Sales Arrow was officially established, beginning our mission to provide unparalleled human-powered market intelligence.
        </p>
      </div>
    ),
  },
  {
    title: "2016",
    content: (
      <div className="space-y-4">
        <p className="text-brand-charcoal text-lg md:text-xl font-medium leading-relaxed transition-colors duration-500">
          Expanded our operations with strategic delivery centers in Bangalore to support our growing clientele across 40+ countries.
        </p>
      </div>
    ),
  },
  {
    title: "2020",
    content: (
      <div className="space-y-4">
        <p className="text-brand-charcoal text-lg md:text-xl font-medium leading-relaxed transition-colors duration-500">
          Pioneered premium virtual and hybrid event solutions, helping global enterprises maintain and grow critical business pipelines.
        </p>
      </div>
    ),
  },
  {
    title: "Present",
    content: (
      <div className="space-y-4">
        <p className="text-brand-charcoal text-lg md:text-xl font-medium leading-relaxed transition-colors duration-500">
          Celebrating over a decade of excellence, recognized as a globally trusted Marketing Technology partner for Fortune 500s.
        </p>
      </div>
    ),
  }
];

export const Timeline = () => {
  return (
    <div className="bg-brand-gray transition-colors duration-500">
      <TimelineUI data={TIMELINE_DATA} />
    </div>
  );
};
