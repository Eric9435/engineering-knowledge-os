import { knowledge } from "@/data/knowledge";

export function getDomain(id: string) {
  return knowledge.find((d) => d.id === id);
}
