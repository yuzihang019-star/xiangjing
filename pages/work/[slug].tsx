import type { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';

import Layout from '@/components/Layout';
import { getAllProjects, getProjectBySlug, type Project } from '@/lib/projects';
import styles from '@/styles/Work.module.css';

type WorkDetailPageProps = {
  project: Project;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllProjects().map((project) => ({
    params: { slug: project.slug }
  }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps<WorkDetailPageProps> = async ({ params }) => {
  const slug = params?.slug;

  if (typeof slug !== 'string') {
    return { notFound: true };
  }

  const project = getProjectBySlug(slug);

  if (!project) {
    return { notFound: true };
  }

  return {
    props: {
      project
    }
  };
};

export default function WorkDetailPage({ project }: WorkDetailPageProps) {
  return (
    <Layout title={`${project.title} | Work`}>
      <p>
        <Link href="/work">← 返回项目列表</Link>
      </p>
      <h2>{project.title}</h2>
      <div className={styles.cover}>
        {project.coverImage ? <img src={project.coverImage} alt={project.title} /> : 'Coming soon'}
      </div>
      <p>{project.description}</p>
    </Layout>
  );
}
