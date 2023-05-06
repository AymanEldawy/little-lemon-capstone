import { createElement } from 'react';
import { Link } from 'react-router-dom';

import { Heading, Logo, SocialMediaWidget } from '../../components';
import navigation from '../../settings/cms/navigation.json';

import './Footer.css';

export const Footer = () => {
  return (
    <footer role="region" aria-label="Footer Section">
      <Logo
        className="LL-FooterLogo"
        src="https://ik.imagekit.io/zenius/Coursera/html-css/Asset_14_4x_d1Yk7QBPiW.png?ik-sdk-version=javascript-1.4.3&updatedAt=1674426270880"
        height="60px"
      />

      <div className="LL-FooterMenu">
        <Heading tag="h4" size="base">
          Menu
        </Heading>
          <ul className="LL-Navigation LL-FooterNavigation">
            {navigation.map(({ id, name, title, link, url, state }) => {
              const Element = link === 'internal' ? Link : 'a';
              const linkProps =
                Element === 'a' ? { href: url } : { to: url, state };
              return createElement(
                'li',
                { key: id, name, role: 'menuitem' },
                <Element title={title} {...linkProps}>
                  {title}
                </Element>
              );
            })}
          </ul>
      </div>

      <div className="LL-FooterContact">
        <Heading tag="h4" size="base">
          Contact
        </Heading>
        <article>
          <p>2548 Matthews Street, Chicago, Illinois - 60631</p>
          <p>815-582-5830</p>
          <p>contact@littlelemon.com</p>
        </article>
      </div>

      <div className="LL-FooterSocial">
        <Heading tag="h4" size="base">
          Social Media
        </Heading>
        <ul className="LL-Navigation LL-FooterNavigation">
          <SocialMediaWidget />
        </ul>
      </div>
    </footer>
  );
};
