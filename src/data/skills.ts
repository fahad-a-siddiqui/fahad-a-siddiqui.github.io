/**
 * Skills, grouped (CLAUDE.md §4). Each skill optionally has an `icon`
 * (an astro-icon name: `simple-icons:*` or `devicon:*`). Items without an
 * icon render as a text chip — the documented fallback for niche tools.
 *
 * Scope: core stack only — languages, frameworks, platforms, services and
 * practices. Individual libraries (Retrofit, Hilt, Coroutines, WorkManager,
 * CameraX, Ktor, Gradle, Alamofire, Fastlane, Sequelize, …) are intentionally
 * left off.
 */

export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillGroup {
  title: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'Kotlin', icon: 'simple-icons:kotlin' },
      { name: 'Swift', icon: 'simple-icons:swift' },
      { name: 'Java', icon: 'devicon:java' },
      { name: 'JavaScript', icon: 'simple-icons:javascript' },
      { name: 'Python', icon: 'simple-icons:python' },
      { name: 'SQL' },
      { name: 'AL' },
    ],
  },
  {
    title: 'Mobile',
    skills: [
      { name: 'Jetpack Compose', icon: 'simple-icons:jetpackcompose' },
      { name: 'Kotlin Multiplatform' },
      { name: 'Compose Multiplatform' },
      { name: 'SwiftUI', icon: 'simple-icons:swift' },
      { name: 'UIKit' },
      { name: 'XML Layouts' },
    ],
  },
  {
    title: 'Backend & Data',
    skills: [
      { name: 'Node.js', icon: 'simple-icons:nodedotjs' },
      { name: 'Spring Boot', icon: 'simple-icons:springboot' },
      { name: 'MSSQL', icon: 'simple-icons:microsoftsqlserver' },
      { name: 'MS Dynamics 365 / NAV' },
      { name: 'REST APIs' },
    ],
  },
  {
    title: 'Platform & Services',
    skills: [
      { name: 'Docker', icon: 'simple-icons:docker' },
      { name: 'GitHub Actions', icon: 'simple-icons:githubactions' },
      { name: 'Git', icon: 'simple-icons:git' },
      { name: 'Firebase', icon: 'simple-icons:firebase' },
      { name: 'AWS S3', icon: 'simple-icons:amazons3' },
      { name: 'Stripe', icon: 'simple-icons:stripe' },
      { name: 'Google Maps', icon: 'simple-icons:googlemaps' },
    ],
  },
  {
    title: 'Architecture & Practice',
    skills: [
      { name: 'MVVM' },
      { name: 'MVC' },
      { name: 'Clean Architecture' },
      { name: 'SOLID' },
      { name: 'Agile' },
      { name: 'AI-native / Agentic Workflows' },
    ],
  },
];
