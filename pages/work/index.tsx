import Link from 'next/link';
import type { GetStaticProps } from 'next';

import Layout from '@/components/Layout';
import { getAllProjects, type Project } from '@/lib/projects';
import styles from '@/styles/Work.module.css';

type WorkPageProps = {
  projects: Project[];
};

export const getStaticProps: GetStaticProps<WorkPageProps> = async () => {
  return {
    props: {
      projects: getAllProjects()
    }
  };
};

export default function WorkPage({ projects }: WorkPageProps) {
  return (
    <Layout title="Work | 个人教学网站">
      <h2>项目列表</h2>
      <div className={styles.grid}>
        {projects.map((project) => (
          <article key={project.slug} className={styles.card}>
            <div className={styles.cover}>
              {project.coverImage ? <img src={project.coverImage} alt={project.title} /> : 'Coming soon'}
            </div>
            <h3 className={styles.title}>
              <Link href={`/work/${project.slug}`}>{project.title}</Link>
            </h3>
            <p className={styles.summary}>{project.summary}</p>
          </article>
        ))}
      </div>
    </Layout>
  );
}
