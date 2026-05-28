import { ArticleEntryList } from "@/components/ArticleEntryList";
import { SubPageShell } from "@/components/SubPageShell";

export default function ArticlesPage() {
  return (
    <SubPageShell
      title="ARTICLES"
      subtitle="文章陈列室"
      description="这里放我的公开文章主页和公众号入口。"
    >
      <ArticleEntryList />
    </SubPageShell>
  );
}
