import { PrismicRichText } from '@prismicio/react';
import React from 'react';
import Link from 'next/link';

const RichText = ({
  field,
  paragraphClassName = '',
  heading4,
  heading1,
  listItem,
  strong,
  hyperlink,
  em,
  heading2,
  heading3,
  list,
}) => {
  return (
    <div>
      <PrismicRichText
        field={field}
        components={{
          heading1: ({ children }) => (
            <h1 className={`${heading1}`}>{children}</h1>
          ),
          heading2: ({ children }) => (
            <h2 className={`${heading2}`}>{children}</h2>
          ),
          heading3: ({ children }) => (
            <h3 className={`${heading3}`}>{children}</h3>
          ),
          hyperlink: ({ node, children }) => {
            // console.log(node.data);
            return (
              <Link
                target={node.data.target}
                href={node.data.url || '#'}
                className={`${hyperlink}`}
              >
                {children}
              </Link>
            );
          },

          list: ({ children }) => <ul className={`${list}`}>{children}</ul>,

          strong: ({ children }) => (
            <strong className={`${strong}`}>{children}</strong>
          ),
          em: ({ children }) => <em className={`${em}`}>{children}</em>,

          listItem: ({ children }) => (
            <li className={`${listItem}`}>{children}</li>
          ),
          paragraph: ({ children }) => (
            <p className={`${paragraphClassName}`}>{children}</p>
          ),
          heading4: ({ children }) => (
            <h4 className={`${heading4}`}>{children}</h4>
          ),
        }}
      />
    </div>
  );
};

export default RichText;
