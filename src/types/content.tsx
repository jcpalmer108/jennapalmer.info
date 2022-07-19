export type Content = {
  sections: Sections[],
}

export type Sections = {
  key: string,
  label: string,
  inMenu: boolean,
  title: string,
  description?: string,
  subSection?: Education[] | Skills[] | Quotes[] | Experience[]
}

type Education = {
  key: string,
  school: string,
  degree: string,
  timeline: Timeline
}

type Skills = {
  key: string,
  label: string,
  url: string
}

type Timeline = {
  start: string,
  end: string,
}

type Quotes = {
  quote: string,
  person: string,
  title: string
}

type Experience = {
  title: string,
  employer: string,
  location: string,
  description: string,
  icon: string,
  timeline: Timeline
  team?: string,
  organization?: string,
  projects?: Project[]
}

type Project = {
  industry: string,
  title: string,
  description: string,
  icon: string
}
