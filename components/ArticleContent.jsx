export default function ArticleContent({ content }) {
  if (!content) return null;
  return (
    <div className="article">
      <p>{content.intro}</p>
      {content.sections.map((section, i) => (
        <div key={i}>
          <h2>{section.heading}</h2>
          {section.paragraphs?.map((p, j) => <p key={j}>{p}</p>)}
          {section.list && (
            <ul>
              {section.list.map((item, j) => <li key={j}>{item}</li>)}
            </ul>
          )}
          {section.faq && (
            <div>
              {section.faq.map((item, j) => (
                <div className="faq-item" key={j}>
                  <div className="faq-q">{item.q}</div>
                  <p style={{ marginBottom: 0 }}>{item.a}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
      {content.table && (
        <table className="conv-table">
          <thead>
            <tr>
              <th>{content.table.headers[0]}</th>
              <th>{content.table.headers[1]}</th>
            </tr>
          </thead>
          <tbody>
            {content.table.rows.map((row, i) => (
              <tr key={i}>
                <td>{row[0]}</td>
                <td>{row[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
