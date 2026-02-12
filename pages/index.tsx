import Link from 'next/link';

import Layout from '@/components/Layout';

export default function HomePage() {
  return (
    <Layout title="首页 | 个人教学网站">
      <h2>欢迎</h2>
      <p>
        这是个人教学网站骨架。进入 <Link href="/work">项目列表</Link> 查看内容。
      </p>
    </Layout>
  );
}
