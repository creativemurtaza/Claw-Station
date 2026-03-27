"use client";

import { useMemo, useState } from "react";
import { ReportCard, type Report } from "@/components/reports/ReportCard";
import { ReportDetail } from "@/components/reports/ReportDetail";
import { ReportFilters } from "@/components/reports/ReportFilters";

const MOCK_REPORTS: Report[] = [
  {
    id: "RX-992-B",
    title: "BTCY Market Trend Analysis",
    summary: "Comprehensive analysis of recent BTCY price movements and market sentiment relative to sector G7 liquidity flows.",
    status: "running",
    time: "2h ago",
    content:
      "I've completed a deep scan of the BTCY market movements over the last 72 hours. The data indicates a significant shift in institutional positioning, likely anticipating the upcoming protocol fork.",
    keyPoints: [
      "Accumulation zone identified between 42.5k and 43.1k credits. Support holds firmly at the 200-cycle moving average.",
      "Whale wallet activity has increased by 14% since the last reporting interval, with primary inflows originating from Sector G7 relays.",
      "Correlated assets show high sensitivity to network throughput announcements; expect reactionary movement in secondary tokens.",
    ],
    recommendation:
      "\"Maintain current station positioning. Do not initiate liquidation protocols unless BTCY drops below the 41.8k threshold for more than three consecutive observation cycles. The AI recommends a passive accumulation stance for the next 48 hours.\"",
  },
  {
    id: "RX-104-A",
    title: "Community Growth Strategy",
    summary: "Optimization vectors for organic participant retention and high-fidelity engagement loops within decentralized hubs.",
    status: "completed",
    time: "4h ago",
    content:
      "This report summarizes engagement patterns across recent cohorts and proposes an optimized retention cadence focused on high-signal community touchpoints.",
    keyPoints: ["Prioritize high-trust contributor loops.", "Reduce onboarding friction in the first 15 minutes.", "Instrument feedback prompts at decision points."],
    recommendation: "Focus on repeatable rituals and reduce noise—optimize for signal-dense participation rather than raw volume.",
  },
  {
    id: "RX-331-K",
    title: "Competitor Intelligence",
    summary: "Aggregated signals from external stations focusing on hardware procurement and proprietary encryption updates.",
    status: "completed",
    time: "Yesterday",
    content:
      "We observed increased procurement cadence from three adjacent operators and a shift toward hardened key management. The signals suggest an upcoming capability push.",
    keyPoints: ["Rising procurement signals in adjacent sectors.", "Key management hardening indicates longer campaigns.", "Expect short-term escalation in competitive posture."],
    recommendation: "Maintain defensive posture, increase monitoring frequency, and avoid unnecessary disclosure in high-visibility channels.",
  },
  {
    id: "RX-778-N",
    title: "Network Latency Audit",
    summary: "Diagnostic report on relay node 04-B jitter spikes and predicted thermal throttle event windows.",
    status: "completed",
    time: "2 days ago",
    content:
      "Latency variance correlates with thermal peaks. The audit isolates likely throttle windows and recommends staged load balancing to prevent cascade delays.",
    keyPoints: ["Jitter spikes align with thermal plateaus.", "Throttle events occur in predictable windows.", "Staged load balancing reduces worst-case latency."],
    recommendation: "Schedule relays for staggered load; pre-warm fallback nodes before predicted thermal peaks.",
  },
];

export function ReportList() {
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState<"all" | "running" | "completed">("all");
  const [selectedId, setSelectedId] = useState<string>(MOCK_REPORTS[0]?.id ?? "");

  const selected = useMemo(
    () => MOCK_REPORTS.find((r) => r.id === selectedId) ?? MOCK_REPORTS[0],
    [selectedId]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return MOCK_REPORTS.filter((r) => {
      const matchesTab = tab === "all" ? true : r.status === tab;
      const matchesQuery =
        q.length === 0 ||
        r.title.toLowerCase().includes(q) ||
        r.summary.toLowerCase().includes(q) ||
        r.id.toLowerCase().includes(q);
      return matchesTab && matchesQuery;
    });
  }, [query, tab]);

  return (
    <div className="relative min-h-[calc(100vh-56px)] w-full px-4 pt-[60px] pb-16 md:min-h-screen md:px-[32px]">
      <div className="pointer-events-none absolute left-[32px] top-[32px] hidden md:block h-[1064px] w-[960px] opacity-[0.02] rounded-[12px]" />

      <div className="mx-auto w-full max-w-[1024px]">
        <ReportFilters query={query} onQueryChange={setQuery} tab={tab} onTabChange={setTab} />

        <div className="mt-[24px] flex flex-col gap-[24px]">
          <div className="flex flex-col gap-[16px] md:flex-row md:flex-wrap md:gap-[26px]">
            {filtered.map((report) => (
              <div key={report.id} className="w-full md:w-[383.59px] shrink-0">
                <ReportCard
                  report={report}
                  active={report.id === selectedId}
                  onView={() => setSelectedId(report.id)}
                />
              </div>
            ))}
          </div>

          {selected ? (
            <ReportDetail report={selected} onClose={() => setSelectedId("")} />
          ) : null}
        </div>
      </div>
    </div>
  );
}

