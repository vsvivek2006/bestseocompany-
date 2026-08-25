import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Search, Eye, Users, Activity, Link2 } from 'lucide-react';

interface Metric {
  label: string;
  value: number;
  suffix: string;
  icon: typeof TrendingUp;
  color: string;
}

const METRICS: Metric[] = [
  { label: 'Organic Traffic', value: 248, suffix: 'K', icon: TrendingUp, color: 'text-accent-400' },
  { label: 'Keywords Ranking', value: 1240, suffix: '+', icon: Search, color: 'text-violet-400' },
  { label: 'Search Visibility', value: 68, suffix: '%', icon: Eye, color: 'text-success-500' },
  { label: 'Qualified Leads', value: 320, suffix: '+', icon: Users, color: 'text-accent-400' },
  { label: 'Technical Health', value: 94, suffix: '%', icon: Activity, color: 'text-success-500' },
  { label: 'Backlinks', value: 5800, suffix: '+', icon: Link2, color: 'text-violet-400' },
];

function useCountUp(target: number, duration: number, start: boolean) {
  const [value, setValue] = useState(0);
  const frameRef = useRef<number>();

  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [target, duration, start]);

  return value;
}

function MetricCard({ metric, index }: { metric: Metric; index: number }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 100);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index]);

  const count = useCountUp(metric.value, 1500, visible);

  return (
    <div
      ref={ref}
      className="glass-card p-4 transition-all duration-500 hover:bg-white/10"
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5">
          <metric.icon className={`h-5 w-5 ${metric.color}`} />
        </div>
        <div>
          <div className="text-2xl font-bold text-white">
            {count.toLocaleString()}{metric.suffix}
          </div>
          <div className="text-xs text-navy-300">{metric.label}</div>
        </div>
      </div>
    </div>
  );
}

function TrafficChart() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const bars = [35, 48, 42, 58, 52, 68, 62, 78, 72, 85, 82, 95];
  const months = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];

  return (
    <div ref={ref} className="glass-card p-5">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <div className="text-sm font-semibold text-white">Organic Traffic Growth</div>
          <div className="text-xs text-navy-300">Monthly visitors over 12 months</div>
        </div>
        <div className="flex items-center gap-1.5 rounded-lg bg-success-500/15 px-2.5 py-1 text-xs font-semibold text-success-500">
          <TrendingUp className="h-3 w-3" />
          +340%
        </div>
      </div>
      <div className="flex h-32 items-end gap-1.5">
        {bars.map((h, i) => (
          <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
            <div className="flex w-full items-end justify-center" style={{ height: '100px' }}>
              <div
                className="w-full rounded-t-md bg-gradient-to-t from-accent-600 to-accent-400 transition-all duration-700"
                style={{
                  height: visible ? `${h}%` : '0%',
                  transitionDelay: `${i * 60}ms`,
                }}
              />
            </div>
            <span className="text-[10px] text-navy-400">{months[i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SeoDashboard() {
  return (
    <div className="relative">
      <div className="glass-card-light overflow-hidden p-5 sm:p-6">
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-500">
              <Activity className="h-4 w-4 text-white" />
            </div>
            <div>
              <div className="text-sm font-bold text-navy-800">SEO Dashboard</div>
              <div className="text-xs text-navy-400">Live performance overview</div>
            </div>
          </div>
          <div className="flex items-center gap-1.5 rounded-lg bg-success-50 px-2.5 py-1 text-xs font-semibold text-success-600">
            <span className="h-2 w-2 rounded-full bg-success-500 animate-pulse-soft" />
            Active
          </div>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
          {METRICS.map((m, i) => (
            <MetricCard key={m.label} metric={m} index={i} />
          ))}
        </div>

        {/* Chart */}
        <div className="mt-4">
          <TrafficChart />
        </div>
      </div>
    </div>
  );
}
