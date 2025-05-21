export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  skills: string[];
  imageUrl: string;
}

export interface ProjectMilestone {
  id: number;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'planned';
  dueDate: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: '陈济禾',
    role: '组长',
    bio: '负责项目的统筹规划和前后端的实现，具有丰富的全栈开发经验。',
    skills: ['Java', 'Maven', 'JavaScript', '项目管理'],
    // imageUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600'
    imageUrl: 'https://i.postimg.cc/Y96n8SSf/ChenJihe.jpg'
  },
  {
    id: 2,
    name: '吴佳曦',
    role: '需求分析师',
    bio: '负责撰写项目需求分析报告，深入理解用户需求并转化为系统功能。',
    skills: ['需求分析', '文档写作', '用户研究'],
    // imageUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600'
  imageUrl:'https://i.postimg.cc/Bb884j12/WuJiaxi.jpg'
  },
  {
    id: 3,
    name: '唐欣雨',
    role: '系统设计师',
    bio: '负责撰写项目设计报告，专注于系统架构设计和数据库设计。',
    skills: ['系统设计', '架构设计', 'UML建模'],
    // imageUrl: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600'
  imageUrl:'https://i.postimg.cc/9MwRj49Z/Tang-Xinyu.jpg'
  },
  {
    id: 4,
    name: '李筱宁',
    role: '文档专员',
    bio: '负责制作项目汇报PPT，善于将技术内容转化为清晰的演示文稿。',
    skills: ['演示设计', '技术文档', '视觉传达'],
    // imageUrl: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600'
    imageUrl: 'https://i.postimg.cc/3wKdWSv8/Li-Xiaoning.jpg'
  }
];

export const projectMilestones: ProjectMilestone[] = [
  {
    id: 1,
    title: '项目启动',
    description: '确定项目范围，组建团队，进行初步需求分析。',
    status: 'completed',
    dueDate: '2024-02-15'
  },
  {
    id: 2,
    title: '需求分析',
    description: '详细需求调研，编写需求分析文档，确定系统功能模块。',
    status: 'completed',
    dueDate: '2024-02-28'
  },
  {
    id: 3,
    title: '系统设计',
    description: '完成系统架构设计，数据库设计，接口设计等技术文档。',
    status: 'completed',
    dueDate: '2024-03-10'
  },
  {
    id: 4,
    title: '开发实现',
    description: '使用Java+Maven框架开发后端，HTML+JavaScript+CSS实现前端界面。',
    status: 'completed',
    dueDate: '2024-03-25'
  },
  {
    id: 5,
    title: '测试部署',
    description: '进行系统测试，修复问题，部署上线。',
    status: 'completed',
    dueDate: '2024-04-05'
  },
  {
    id: 6,
    title: '项目验收',
    description: '准备验收材料，进行项目演示，完成项目交付。',
    status: 'completed',
    dueDate: '2024-04-15'
  }
];