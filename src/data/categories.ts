
export interface Category {
  id: string;
  name: string;
  slug: string;
}

export const categories: Category[] = [
  {
    id: "cat-1",
    name: "Educational Technology",
    slug: "educational-technology"
  },
  {
    id: "cat-2",
    name: "Pedagogy",
    slug: "pedagogy"
  },
  {
    id: "cat-3",
    name: "Research Methods",
    slug: "research-methods"
  },
  {
    id: "cat-4",
    name: "Curriculum Development",
    slug: "curriculum-development"
  },
  {
    id: "cat-5",
    name: "Higher Education",
    slug: "higher-education"
  },
  {
    id: "cat-6",
    name: "K-12 Education",
    slug: "k-12-education"
  }
];
