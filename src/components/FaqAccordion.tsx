import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FaqItem } from '@/data/site';

interface FaqAccordionProps {
  faqs: FaqItem[];
  className?: string;
}

export default function FaqAccordion({ faqs, className = '' }: FaqAccordionProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className={`mx-auto max-w-3xl ${className}`}>
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
              open === i
                ? 'border-accent-200 bg-accent-50/50 shadow-md'
                : 'border-navy-100 bg-white hover:border-navy-200'
            }`}
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
              aria-expanded={open === i}
            >
              <span className="text-sm font-semibold text-navy-800 sm:text-base">
                {faq.q}
              </span>
              <ChevronDown
                className={`h-5 w-5 flex-shrink-0 text-accent-500 transition-transform duration-300 ${
                  open === i ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ${
                open === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-relaxed text-navy-600 sm:px-6 sm:text-base">
                  {faq.a}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
