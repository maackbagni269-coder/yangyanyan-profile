import { AskDoumiaoChat } from "@/components/AskDoumiaoChat";
import { SubPageShell } from "@/components/SubPageShell";
import { askDoumiao } from "@/data/askDoumiao";

export default function AskDoumiaoPage() {
  return (
    <SubPageShell
      title="ASK DOUMIAO"
      subtitle="和豆苗聊聊我的项目经历"
      description={askDoumiao.description}
    >
      <AskDoumiaoChat />
    </SubPageShell>
  );
}
