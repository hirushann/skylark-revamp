"use client";

import { useState } from "react";
import { Check, MapPin } from "lucide-react";
import { industries } from "@/lib/content";

export function Industries() {
  const [active, setActive] = useState(0);
  const current = industries[active];

  return (
    <div className="grid gap-4 lg:grid-cols-12">
      <div role="tablist" aria-label="Industries" className="grid grid-cols-2 gap-2 lg:col-span-4 lg:grid-cols-1">
        {industries.map((item, i) => {
          const selected = i === active;
          return (
            <button
              key={item.name}
              role="tab"
              id={`industry-tab-${i}`}
              aria-selected={selected}
              aria-controls="industry-panel"
              onClick={() => setActive(i)}
              className={`rounded-2xl border p-4 text-left transition-all sm:p-5 ${
                selected
                  ? "border-ink bg-ink text-white shadow-lg"
                  : "border-line bg-white text-ink hover:border-ink/30"
              }`}
            >
              <span className="block text-[15px] font-semibold tracking-tight sm:text-base">{item.name}</span>
              <span className={`mt-1 flex items-center gap-1 text-xs ${selected ? "text-sky" : "text-muted"}`}>
                <MapPin className="size-3" />
                {item.country}
              </span>
            </button>
          );
        })}
      </div>

      <div
        id="industry-panel"
        role="tabpanel"
        aria-labelledby={`industry-tab-${active}`}
        className="relative overflow-hidden rounded-3xl border border-line bg-white p-7 sm:p-10 lg:col-span-8"
      >
        <div aria-hidden className="absolute -right-24 -top-24 size-64 rounded-full bg-sky/15 blur-3xl" />
        <div key={active} className="relative animate-[reveal_0.5s_ease-out]">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-paper px-3 py-1 text-xs font-medium text-muted">
            <MapPin className="size-3" /> {current.country}
          </span>
          <h3 className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">{current.name}</h3>
          <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-muted">{current.body}</p>
          <p className="mt-8 text-xs font-medium uppercase tracking-[0.18em] text-muted">What we delivered</p>
          <ul className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
            {current.scope.map((s) => (
              <li key={s} className="flex items-center gap-2 rounded-xl border border-line px-3 py-2.5 text-sm">
                <Check className="size-4 shrink-0 text-accent" />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
