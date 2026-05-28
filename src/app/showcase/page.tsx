import { ResourceCardGrid } from "@/components/ResourceCardGrid";
import { SubPageShell } from "@/components/SubPageShell";
import { showcase } from "@/data/showcase";

export default function ShowcasePage() {
  return (
    <SubPageShell
      className="resource-page"
      title="SHOWCASE"
      subtitle="项目成果与作品证据"
      description="这里展示最终报告、表格、规则文档和正在完成的个人网站作品。"
    >
      <ResourceCardGrid items={showcase} />
    </SubPageShell>
  );
}
