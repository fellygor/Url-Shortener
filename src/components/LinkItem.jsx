import { useState } from 'react';

export default function LinkItem({ link }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    // write link.shortUrl to the clipboard
    navigator.clipboard.writeText(link.shortUrl);
    // set copied to true
    setCopied(true);
    // reset it back to false after a delay 
    setTimeout(() => setCopied(false), 2000); 
  };

  return (
    <li className="results-card">
      <p className="original-url">{link.originalUrl}</p>
      <div className="results-right">
        <p className="short-url">{link.shortUrl}</p>
        <button
          className={`btn-copy ${copied ? 'copied' : ''}`}
          onClick={handleCopy}
        >
         
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </li>
  );
}