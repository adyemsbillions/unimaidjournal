
export interface Author {
  id: string;
  name: string;
  title: string;
  institution: string;
}

export interface Article {
  id: string;
  title: string;
  abstract: string;
  content: string;
  authors: Author[];
  category: string;
  publicationDate: string;
  image?: string;
  featured?: boolean;
}

export const articles: Article[] = [
  {
    id: "article-1",
    title: "The Impact of Digital Learning Tools on Student Engagement",
    abstract: "This study examines how digital learning tools affect student engagement in higher education settings, with a focus on interactive learning platforms.",
    content: `
      <h2>Introduction</h2>
      <p>The digital transformation of education has accelerated in recent years, with new tools and platforms emerging to facilitate learning across various contexts. This research investigates the relationship between digital learning tools and student engagement, with particular attention to how interactive elements affect participation and knowledge retention.</p>
      
      <h2>Methodology</h2>
      <p>Our study employed a mixed-methods approach, collecting data from 500 undergraduate students across three universities. Participants were randomly assigned to control and experimental groups, with the latter using specified digital learning platforms as part of their coursework.</p>
      
      <h2>Results</h2>
      <p>Analysis revealed a statistically significant increase in engagement metrics among students using interactive digital tools. Specifically, participation rates increased by 27% and knowledge retention scores showed an average improvement of 18% compared to traditional instruction methods.</p>
      
      <h2>Discussion</h2>
      <p>These findings suggest that strategic implementation of digital learning tools can substantially enhance student engagement. However, the results also highlight the importance of thoughtful integration and faculty training to maximize effectiveness.</p>
      
      <h2>Conclusion</h2>
      <p>Digital learning tools represent a valuable asset in modern educational strategies, particularly when implemented with clear pedagogical goals. Future research should explore long-term retention patterns and investigate specific features that drive engagement.</p>
    `,
    authors: [
      {
        id: "author-1",
        name: "Dr. Sarah Johnson",
        title: "Associate Professor of Educational Technology",
        institution: "Stanford University"
      },
      {
        id: "author-2",
        name: "Dr. Michael Rodriguez",
        title: "Research Director",
        institution: "Center for Digital Learning"
      }
    ],
    category: "cat-1",
    publicationDate: "2024-04-15",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    featured: true
  },
  {
    id: "article-2",
    title: "Rethinking Assessment: Beyond Standardized Testing",
    abstract: "This paper proposes alternative assessment methods that better measure critical thinking and problem-solving abilities in modern educational contexts.",
    content: `
      <h2>Introduction</h2>
      <p>Standardized testing has long dominated educational assessment, but growing evidence suggests these methods may inadequately measure many crucial skills needed in today's world. This paper examines alternative assessment approaches and their potential to provide more comprehensive evaluation of student learning.</p>
      
      <h2>The Limitations of Standardized Testing</h2>
      <p>While standardized tests offer consistency and scalability, research increasingly highlights their shortcomings in measuring complex cognitive abilities, creativity, and practical application of knowledge. Furthermore, these tests often reinforce inequities and narrow curricula to test-focused content.</p>
      
      <h2>Alternative Assessment Approaches</h2>
      <p>This paper explores several promising alternatives, including portfolio assessment, project-based evaluation, competency-based assessment, and authentic performance tasks. Each approach is analyzed for effectiveness, practicality, and alignment with modern educational goals.</p>
      
      <h2>Implementation Challenges</h2>
      <p>Despite their benefits, alternative assessments face significant implementation barriers including resource constraints, scaling difficulties, and concerns about consistency and bias. We propose a framework for addressing these challenges while maintaining assessment integrity.</p>
      
      <h2>Conclusion</h2>
      <p>Moving beyond standardized testing requires systemic changes but offers the potential for more meaningful, equitable, and comprehensive assessment. A balanced approach incorporating multiple assessment methods may best serve educational needs in the 21st century.</p>
    `,
    authors: [
      {
        id: "author-3",
        name: "Dr. Emily Chen",
        title: "Professor of Education Policy",
        institution: "Columbia University"
      }
    ],
    category: "cat-4",
    publicationDate: "2024-03-22",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: "article-3",
    title: "Culturally Responsive Teaching in Diverse Classrooms",
    abstract: "Examining strategies for implementing culturally responsive teaching methodologies to enhance learning outcomes in diverse educational settings.",
    content: `
      <h2>Introduction</h2>
      <p>As classrooms become increasingly diverse, educators must adapt their teaching approaches to honor and incorporate students' cultural backgrounds and experiences. This paper explores the principles and practices of culturally responsive teaching and its impact on student achievement.</p>
      
      <h2>Theoretical Framework</h2>
      <p>Drawing on Geneva Gay's foundational work and contemporary scholarship, we establish a comprehensive framework for culturally responsive teaching that encompasses curriculum design, instructional methods, classroom environment, and assessment practices.</p>
      
      <h2>Implementation Strategies</h2>
      <p>The paper presents specific strategies for implementing culturally responsive teaching across disciplines, including curriculum auditing, inclusive content selection, community engagement, and linguistically responsive instruction. Case studies illustrate successful applications in various educational contexts.</p>
      
      <h2>Impact on Learning Outcomes</h2>
      <p>Analysis of empirical studies demonstrates positive correlations between culturally responsive teaching and improved academic outcomes, increased student engagement, enhanced critical thinking, and stronger sense of belonging among diverse student populations.</p>
      
      <h2>Professional Development Recommendations</h2>
      <p>Effective implementation requires ongoing professional development. We propose a model for teacher preparation and continuing education that develops cultural competence, self-reflection practices, and practical skills for responsive instruction.</p>
      
      <h2>Conclusion</h2>
      <p>Culturally responsive teaching represents not merely an educational strategy but an essential approach for equitable and effective education in diverse societies. Institutions must commit to supporting educators in developing and implementing these practices.</p>
    `,
    authors: [
      {
        id: "author-4",
        name: "Dr. James Wilson",
        title: "Associate Professor of Multicultural Education",
        institution: "University of California, Berkeley"
      },
      {
        id: "author-5",
        name: "Dr. Aisha Patel",
        title: "Educational Researcher",
        institution: "Center for Equity in Learning"
      }
    ],
    category: "cat-2",
    publicationDate: "2024-05-02",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    featured: true
  },
  {
    id: "article-4",
    title: "Meta-Analysis of Project-Based Learning Outcomes in STEM Education",
    abstract: "A comprehensive meta-analysis of 87 studies examining the effectiveness of project-based learning approaches in STEM disciplines.",
    content: `
      <h2>Introduction</h2>
      <p>Project-based learning (PBL) has gained prominence as an instructional approach in STEM education, yet questions remain about its overall effectiveness across diverse contexts. This meta-analysis synthesizes findings from 87 empirical studies to evaluate the impact of PBL on student outcomes in STEM fields.</p>
      
      <h2>Methodology</h2>
      <p>We conducted a systematic review of research published between 2010-2024, analyzing studies that employed experimental or quasi-experimental designs with clear comparison groups. Effect sizes were calculated for achievement outcomes, engagement measures, and development of 21st-century skills.</p>
      
      <h2>Results</h2>
      <p>The meta-analysis revealed a moderate positive effect (g = 0.63) of PBL on overall student achievement in STEM subjects. Notably, effects were stronger for applied knowledge and problem-solving skills (g = 0.78) than for factual knowledge acquisition (g = 0.41). Student engagement showed large positive effects (g = 0.84), while development of collaboration and communication skills demonstrated consistent improvement across studies.</p>
      
      <h2>Moderating Factors</h2>
      <p>Several factors moderated the effectiveness of PBL implementations. Duration of projects, level of teacher training, availability of technological resources, and degree of student autonomy all significantly influenced outcomes. The analysis indicated that PBL was particularly effective at secondary and post-secondary levels compared to elementary settings.</p>
      
      <h2>Conclusion</h2>
      <p>This meta-analysis provides robust evidence supporting the effectiveness of well-implemented PBL approaches in STEM education, particularly for developing higher-order thinking skills and student engagement. Recommendations for implementation focus on teacher preparation, appropriate scaffolding, and alignment with learning objectives.</p>
    `,
    authors: [
      {
        id: "author-6",
        name: "Dr. Robert Kim",
        title: "Professor of STEM Education",
        institution: "Massachusetts Institute of Technology"
      },
      {
        id: "author-7",
        name: "Dr. Lisa Martinez",
        title: "Senior Researcher",
        institution: "National Science Foundation"
      }
    ],
    category: "cat-3",
    publicationDate: "2024-02-10",
    image: "https://images.unsplash.com/photo-1581093458791-9d12dcbfdc92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: "article-5",
    title: "Reimagining Higher Education After the Pandemic",
    abstract: "This article explores the lasting transformations in higher education following the global pandemic, examining innovations that may persist and challenges yet to be addressed.",
    content: `
      <h2>Introduction</h2>
      <p>The COVID-19 pandemic precipitated unprecedented disruptions to higher education, forcing rapid adaptation to remote learning and new operational models. As institutions transition to post-pandemic realities, important questions arise about which changes represent temporary adjustments versus permanent transformations in the landscape of higher education.</p>
      
      <h2>Digital Transformation Acceleration</h2>
      <p>The pandemic dramatically accelerated digital transformation initiatives that many institutions had previously approached gradually. This section examines the technological infrastructure developments, pedagogical adaptations, and shifting attitudes toward online and hybrid learning models that have reshaped institutional approaches.</p>
      
      <h2>Equity and Access Reconsiderations</h2>
      <p>While digital learning expanded access for some student populations, it highlighted and sometimes exacerbated existing inequities for others. This analysis explores how institutions are addressing digital divides, geographic barriers, and socioeconomic factors affecting equitable educational access.</p>
      
      <h2>Financial Models and Sustainability</h2>
      <p>The financial pressures of the pandemic forced many institutions to reconsider their economic models. We examine emerging approaches to fiscal sustainability, including new revenue streams, operational efficiencies, and partnerships that may reshape higher education economics.</p>
      
      <h2>Student Well-being and Support</h2>
      <p>The pandemic highlighted the importance of holistic student support beyond academic services. This section analyzes how institutions are evolving their approaches to mental health services, community building, and student engagement in both physical and virtual contexts.</p>
      
      <h2>Conclusion</h2>
      <p>Higher education's post-pandemic transformation represents both opportunity and challenge. While certain innovations may permanently enhance educational delivery and access, institutions must thoughtfully address emerging concerns about quality, equity, and sustainability to truly reimagine higher education for future generations.</p>
    `,
    authors: [
      {
        id: "author-8",
        name: "Dr. Thomas Reynolds",
        title: "Dean of Digital Learning",
        institution: "University of Michigan"
      }
    ],
    category: "cat-5",
    publicationDate: "2024-04-28",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: "article-6",
    title: "Early Childhood Literacy Development Through Digital Storytelling",
    abstract: "Investigating the effectiveness of digital storytelling tools in supporting early childhood literacy development in preschool and kindergarten settings.",
    content: `
      <h2>Introduction</h2>
      <p>Early literacy skills form the foundation for academic success, yet educators continually seek innovative approaches to engage young learners. This study investigates how digital storytelling tools can support literacy development in early childhood education settings.</p>
      
      <h2>Literature Review</h2>
      <p>Research consistently demonstrates the importance of narrative skills, phonological awareness, and print concepts in early literacy development. Digital storytelling offers potential advantages by combining multimodal learning opportunities with engaging interactive elements.</p>
      
      <h2>Study Design</h2>
      <p>This research employed a quasi-experimental design with 128 children aged 4-6 years across 12 classrooms. The intervention group used selected digital storytelling applications for 15 minutes daily over 16 weeks, integrated with traditional literacy instruction. The control group received equivalent time with traditional storytelling methods only.</p>
      
      <h2>Results</h2>
      <p>Children in the digital storytelling intervention group showed significant improvements in narrative complexity (p&lt;.01), vocabulary acquisition (p&lt;.01), and engagement with text (p&lt;.05) compared to the control group. Notably, children with lower initial literacy scores demonstrated the greatest relative gains. Teacher interviews revealed increased student motivation and participation in literacy activities.</p>
      
      <h2>Implementation Considerations</h2>
      <p>Successful implementation required thoughtful selection of age-appropriate applications, explicit connections to curriculum goals, and balanced integration with non-digital activities. Teacher facilitation proved crucial for maximizing learning benefits through questioning, vocabulary expansion, and connecting digital stories to broader learning objectives.</p>
      
      <h2>Conclusion</h2>
      <p>Digital storytelling represents a promising approach for supporting early literacy development when thoughtfully implemented. The multimodal nature of these tools appears particularly beneficial for diverse learners and those with lower initial literacy skills. Future research should explore long-term effects and specific features most effective for different developmental stages.</p>
    `,
    authors: [
      {
        id: "author-9",
        name: "Dr. Rebecca Taylor",
        title: "Associate Professor of Early Childhood Education",
        institution: "Vanderbilt University"
      },
      {
        id: "author-10",
        name: "Dr. Daniel Wong",
        title: "Literacy Specialist",
        institution: "National Early Learning Center"
      }
    ],
    category: "cat-6",
    publicationDate: "2024-03-12",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1122&q=80"
  }
];

export const getArticlesByCategory = (categoryId: string): Article[] => {
  return articles.filter(article => article.category === categoryId);
};

export const getArticleById = (id: string): Article | undefined => {
  return articles.find(article => article.id === id);
};

export const getFeaturedArticles = (): Article[] => {
  return articles.filter(article => article.featured);
};

export const getRecentArticles = (count: number = 3): Article[] => {
  return [...articles]
    .sort((a, b) => new Date(b.publicationDate).getTime() - new Date(a.publicationDate).getTime())
    .slice(0, count);
};
