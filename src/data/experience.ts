/**
 * Experience timeline + education (CLAUDE.md §3, §5).
 * Highlights only — deliberately lighter than the full CV.
 */

export interface Role {
  company: string;
  title: string;
  period: string;
  location: string;
  current?: boolean;
  highlights: string[];
}

export const roles: Role[] = [
  {
    company: 'Xgrid.co',
    title: 'Senior Software Engineer',
    period: 'Sep 2022 – Present',
    location: 'Islamabad · Hybrid',
    current: true,
    highlights: [
      'Authored a NAV → SQL migration workflow (strangler-fig, dual-service resolvers behind feature flags, automated regression comparison) — cut per-endpoint migration time ~83% across ~200 endpoints, saving ≈500 engineer-hours.',
      'Designed an agent-executable SDLC pipeline: seven gated stages from intake to release with a thin orchestrator and a skill taxonomy separating sequencing from craft; piloted with peer engineers.',
      'Tech lead on the KMM migration; shipped mobile features across Android & iOS — offline/online sync, Bluetooth beacons (adopted on 85%+ of client jobsites), digital signatures (90% file-size reduction), S3 video streaming and FCM.',
      'Stabilized backend CI/CD (GitHub Actions / Docker), halving deployment errors and cutting deploy time ~75%; conducted 20+ technical interviews.',
    ],
  },
];

export interface Education {
  school: string;
  degree: string;
  period: string;
  location: string;
  note?: string;
}

export const education: Education[] = [
  {
    school: 'FAST-NUCES (National University of Computer and Emerging Sciences)',
    degree: 'B.S. Computer Science',
    period: 'Sep 2018 – Jul 2022',
    location: 'Islamabad',
    note: 'Final Year Project: Accident Detection and Emergency Response System.',
  },
];
