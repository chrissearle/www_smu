export default function Browse() {
  return (
    <div className="ms-4 my-2 card">
      <div className="card-header">Browse</div>
      <ul className="list-group">
        <li className="list-group-item">
          <a href="/tags/">All Tags</a>
        </li>
        <li className="list-group-item">
          <a href="/articles/">All Articles</a>
        </li>
        <li className="list-group-item">
          <a href="/years/">By Year</a>
        </li>
        <li className="list-group-item">
          <a href="/series/">By Series</a>
        </li>
      </ul>
    </div>
  );
}
