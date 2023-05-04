import "./Footer.css";

const Footer = () => {
  return (
    <>
    <aside>
      <h6 className="slid">FEEDS</h6>
      <ul className="slide">
        <li>Home</li>
        <li>Popular</li>
      </ul>
      <span id="span3">Create an account to follow your favorite communities and start taking part in conversations.</span>
      <h6 className="s2h">HOT TOPICS</h6>
      <ul className="s2">
        <li>Gaming</li>
        <li>Sports</li>
        <li>Business, Economics</li>
        <li>Crypto</li>
        <li>Television</li>
        <li>Celebrity</li>
        <li>Traval</li>

      </ul>
    </aside>
    <footer className="foot">
        <p>
        Reddit Inc © 2023. All rights reserved.
        </p>
        
    </footer>
   </>
  );
};

export default Footer;
