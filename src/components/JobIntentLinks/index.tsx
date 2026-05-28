const jobIntents = ["AI 训练师", "AI 数据构建"];

export function JobIntentLinks() {
  return (
    <div className="job-intent-links" aria-label="求职意向岗位">
      {jobIntents.map((intent) => (
        <span key={intent}>
          {intent}
        </span>
      ))}
    </div>
  );
}
