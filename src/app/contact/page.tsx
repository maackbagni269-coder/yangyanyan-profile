import { ContactPanel } from "@/components/ContactPanel";
import { SubPageShell } from "@/components/SubPageShell";
import { contact } from "@/data/contact";

export default function ContactPage() {
  return (
    <SubPageShell
      title="CONTACT"
      subtitle="联系我"
      description={contact.shortBio}
    >
      <ContactPanel />
    </SubPageShell>
  );
}
