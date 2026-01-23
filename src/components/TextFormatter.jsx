import React from 'react';

export default function TextFormatter({ content }) {
  // Helper to turn **text** into <strong>text</strong>
  const formatText = (text) => {
    if (typeof text !== 'string') return text;
    return text.split(/(\*\*.*?\*\*)/g).map((part, index) => 
      part.startsWith('**') && part.endsWith('**') 
        ? <strong key={index} className="font-bold text-slate-900">{part.slice(2, -2)}</strong> 
        : part
    );
  };

  // Case 1: The Mixed Object (Intro text + List)
  if (content && typeof content === 'object' && !Array.isArray(content)) {
    return (
      <div className="space-y-3">
        {content.intro && (
          <p className="text-slate-600 leading-relaxed">
            {formatText(content.intro)}
          </p>
        )}
        {content.points && (
          <ul className="list-disc list-outside ml-5 space-y-2">
            {content.points.map((item, i) => (
              <li key={i} className="text-slate-600 leading-relaxed pl-1">
                {formatText(item)}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  // Case 2: Simple Array (Legacy support)
  if (Array.isArray(content)) {
    return (
      <ul className="list-disc list-outside ml-5 space-y-2">
        {content.map((item, i) => (
          <li key={i} className="text-slate-600 leading-relaxed pl-1">
            {formatText(item)}
          </li>
        ))}
      </ul>
    );
  }

  // Case 3: Simple String (Legacy support)
  return (
    <p className="text-slate-600 leading-relaxed">
      {formatText(content)}
    </p>
  );
}