import { PrismicRichText } from '@prismicio/react';
import React from 'react';
import Link from 'next/link';
import { PrismicNextImage } from '@prismicio/next';
import { linkResolver } from 'prismicio';
import Image from 'next/image';

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
  heading6,
  heading5,
  imageClass,
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
          heading4: ({ children }) => (
            <h4 className={`${heading4}`}>{children}</h4>
          ),
          heading5: ({ children }) => (
            <h5 className={`${heading5}`}>{children}</h5>
          ),
          heading6: ({ children }) => (
            <h6 className={`${heading6}`}>{children}</h6>
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
          image: ({ node }) => {
            return (
              <Image
                className={`${imageClass}`}
                src={node.url}
                alt={node.alt}
                layout='responsive'
                width={'1000'}
                height={'500'}
              />
            );
          },

          strong: ({ children }) => (
            <strong className={`${strong}`}>{children}</strong>
          ),
          em: ({ children }) => <span className={`${em}`}>{children}</span>,

          listItem: ({ children }) => (
            <li className={`${listItem}`}>{children}</li>
          ),
          paragraph: ({ children }) => (
            <p className={`${paragraphClassName}`}>{children}</p>
          ),
        }}
      />
    </div>
  );
};

export default RichText;
