"use client";

import { ArrowUpRight, MessageCircle } from "lucide-react";

const LABEL = "[font-family:var(--font-label)]";

/* Opens the WBC chat widget (its bubble is injected into <body> by the
   script in layout.tsx). Falls back to a no-op if the widget hasn't
   loaded yet — the floating bubble is still there either way. */
export default function ChatCard() {
  return (
    <button
      type="button"
      onClick={() => {
        const bubble = document.getElementById("wbc-chat-bubble");
        if (bubble instanceof HTMLElement) bubble.click();
      }}
      className="group rounded-sm border border-white/14 bg-white/[0.05] p-5 text-left transition hover:border-[#D9A13B]/60 hover:bg-white/[0.09]"
    >
      <div className="flex items-center justify-between">
        <MessageCircle className="size-5 text-[#E7B657]" aria-hidden />
        <ArrowUpRight
          className="size-4 text-[#F7F3EA]/40 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#E7B657]"
          aria-hidden
        />
      </div>
      <p className={`${LABEL} mt-4 text-[12px] font-bold uppercase tracking-[0.24em] text-[#F7F3EA]/55`}>
        Chat with Pastor Kevin
      </p>
      <p className="mt-1.5 break-words font-semibold leading-6 text-[#F7F3EA]">
        Ask a question — a real person replies
      </p>
    </button>
  );
}
