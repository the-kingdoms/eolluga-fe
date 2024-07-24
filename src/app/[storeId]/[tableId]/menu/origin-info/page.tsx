import Origin from "@/widgets/origin-info/ui/Origin";

export default function Page() {
  const example =
    "돼지고기(미국산), 닭고기(브라질산), 새우(페루산), 오징어(외국산), 돼지고기(미국산), 닭고기(브라질산), 새우(페루산), 오징어(외국산), 돼지고기(미국산), 닭고기(브라질산), 새우(페루산), 오징어(외국산)";
  return <Origin contents={example} />;
}
