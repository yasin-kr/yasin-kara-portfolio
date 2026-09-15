import { toolkit } from "../data/portfolio";

export function Toolkit() {
  return (
    <section
      className="toolkit page-width section"
      aria-labelledby="toolkit-title"
    >
      <div className="toolkit-intro">
        <p className="eyebrow section-index">THE TOOLS I WORK WITH</p>
        <h2 id="toolkit-title">
          Technical <em>toolkit.</em>
        </h2>
        <p>
          Practical experience, built through projects.
          <br />
          Always adding to it.
        </p>
      </div>
      <div className="toolkit-groups">
        {toolkit.map((group, index) => (
          <div className="toolkit-group" key={group.name}>
            <div className="toolkit-group-heading">
              <span aria-hidden="true">0{index + 1}</span>
              <h3>{group.name}</h3>
            </div>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
