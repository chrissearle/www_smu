import Browse from "./Browse";
import LatestArticles from "./LatestArticles";
import PopularTags from "./PopularTags";

export default function Sidebar({ files }) {
  return (
    <div className="sidebar">
      <Browse />
      <PopularTags files={files} />
      <LatestArticles files={files} />
    </div>
  );
}
