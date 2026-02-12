import Head from 'next/head';
import Link from 'next/link';
import type { ReactNode } from 'react';

import styles from '@/styles/Layout.module.css';

type LayoutProps = {
  title?: string;
  children: ReactNode;
};

export default function Layout({ title = '个人教学网站', children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="个人教学网站骨架" />
      </Head>

      <div className={styles.page}>
        <header className={styles.header}>
          <h1 className={styles.siteTitle}>个人教学网站</h1>
          <nav className={styles.nav}>
            <Link href="/work">Work</Link>
            <Link href="/about">About</Link>
            <Link href="/cv">CV</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>

        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
}
