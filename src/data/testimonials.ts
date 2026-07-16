/**
 * Testimonials / recommendations (CLAUDE.md §4).
 * Awaiting content from the owner — likely LinkedIn recommendations.
 * Add entries below; the section auto-hides while this array is empty.
 */

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "I had the pleasure of working closely with him, and I can personally vouch for his technical abilities, problem-solving skills, and strong sense of ownership. Beyond delivering great work, Fahad is humble, dependable, and someone who consistently brings positive energy to the team. He has a way of making the people around him better while helping create a collaborative and enjoyable culture.",
    name: 'Anees Iqbal',
    title: 'Staff Software Engineer, Xgrid',
  },
  {
    quote:
      "I've worked with Fahad for more than three years, and he's one of the most capable engineers I've had the opportunity to work with. His expertise goes beyond Android development into iOS, backend debugging, system design, SOW documentation, and technical discussions. He consistently takes ownership, steps up during tight deadlines, and is always willing to help across different stacks whenever the team needs it.",
    name: 'Aqib Naveed',
    title: 'Senior Software Engineer, Xgrid',
  },
  {
    quote:
      "Fahad is one of the best Mobile Developers I have worked with. He is technically strong, always eager to learn, and has a great ability to adopt new technologies, including AI solutions and automation bots. What makes Fahad unique is his critical thinking and problem-solving approach. During requirement discussions, he always asked the right questions and identified potential challenges that helped the team build better solutions.",
    name: 'Abdullah Usmani',
    title: 'Senior QA Engineer, Xgrid',
  },
];
