import WikipediaLogo from "resources/vectors/wikipedia-logo";
import GithubLogo from "resources/vectors/github-logo";
import Api from "resources/vectors/api";

import "./styles.scss";

const Footer = () => {
  return (
    <footer>
      <div className="social-media-links">
        <ul>
          <li>
            <a href="https://github.com/Qqkyu/breaking-bad-leaflet" target="_blank" rel="noreferrer" title="GitHub">
              <GithubLogo />
            </a>
          </li>
          <li>
            <a href="https://wikipedia.org/wiki/Breaking_Bad" target="_blank" rel="noreferrer" title="Wikipedia">
              <WikipediaLogo />
            </a>
          </li>
          <li>
            <a href="https://breakingbadapi.com/" target="_blank" rel="noreferrer" title="Api">
              <Api />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
