function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__container container">
        <p className="footer__text">Copyright &copy; {currentYear}</p>
      </div>
    </footer>
  )
}

export default Footer;