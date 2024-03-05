import { MdxResumeLayout } from '@/components/mdx-resume-layout';
import Resume from '@/components/resume.mdx';

export default function Home() {
  return (
    <MdxResumeLayout documentTitle="Yadiel Arroyo - Front-End Developer">
      <Resume />
    </MdxResumeLayout>
  );
}
