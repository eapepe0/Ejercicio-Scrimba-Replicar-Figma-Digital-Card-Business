export default function Content() {
  return (
    <div className="main__contenido">
      <h1 className="nombre"> Laura Smith</h1>
      <h4 className="cargo"> Frontend Developer</h4>
      <h6 className="website"> laurasmith.website</h6>

      <button className="email">
        <i className="fas fa-envelope"></i>Email
      </button>
      <button className="linkedin">
        <i className="fab fa-linkedin"></i>Linkedin
      </button>

      <div className="texto">
        <h2 className="titulo_contenido">About </h2>
        <p className="parrafo">
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
        <h2 className="titulo_contenido">Interests </h2>
        <p className="parrafo">
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div>
    </div>
  );
}
