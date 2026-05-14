import { knowledge } from "@/data/knowledge";

function normalize(text: string) {
  return decodeURIComponent(text)
    .replace(/-/g, " ")
    .toLowerCase()
    .trim();
}

export function getTopic(
  domainId: string,
  categorySlug: string,
  topicSlug: string
) {
  const domain = knowledge.find((d) => d.id === domainId);

  if (!domain) return null;

  const category = domain.categories.find(
    (c) => normalize(c.title) === normalize(categorySlug)
  );

  if (!category) return null;

  const topic = category.topics.find(
    (t) => normalize(t) === normalize(topicSlug)
  );

  if (!topic) return null;

  return {
    domain,
    category,
    topic
  };
}
