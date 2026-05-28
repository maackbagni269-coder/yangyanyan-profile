import { ResourceCardGrid } from "@/components/ResourceCardGrid";
import { SubPageShell } from "@/components/SubPageShell";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <SubPageShell
      className="resource-page"
      title="PROJECTS"
      subtitle="项目资料与过程文档"
      description="这里整理我的项目过程资料、SOP、规则文档和实践记录。"
    >
      <ResourceCardGrid items={projects} />
    </SubPageShell>
  );
}
