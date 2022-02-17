import Browse from "./Browse";
import LatestArticles from "./LatestArticles";
import PopularTags from "./PopularTags";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Browse />
      <PopularTags />
      <LatestArticles />
    </div>
  );
}
