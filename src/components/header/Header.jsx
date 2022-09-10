import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://cdn.pixabay.com/photo/2018/04/07/18/06/notepad-3299127_960_720.jpg"
        alt=""
      />
    </div>
  );
}