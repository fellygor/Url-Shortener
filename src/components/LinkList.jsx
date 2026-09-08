import LinkItem from './LinkItem';

export default function LinkList({ links }) {
  // What should render here if links.length === 0?
  // The design doesn't show an empty state — your call: render null,
  // or a small "Your shortened links will appear here" message?
  if(links.length === 0){
    // return '<p> Your shortened links will appear here</p>'; 
    return null;
  }

  return (
    <ul className="results-list">
      {/* map over links, rendering one LinkItem per entry */}
          {links.map((link) => (
            <LinkItem key={link.id} link={link} />
          ))}
    </ul>
  );
}