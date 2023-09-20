export default function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">
        Thank you for your interest about my portfolio website. Hope to hear
        from you.
      </h1>
      <p className="contact-para">
        In addition to the ways appearing just at the bottom of
        all the pages on this site, here are my contact infos to keep in touch:
      </p>
      <div className="phone-email-container">
        <div className="phone-box">
          <img src="assets/phone-solid.svg" alt="phone" />
          <a href="tel:+905010327500">+90 501 032 7500</a>
        </div>
        <div className="email-box">
          <img src="assets/envelope-solid.svg" alt="email" />
          <a href="mailto:bindalserkan26@gmail.com">bindalserkan26@gmail.com</a>
        </div>
      </div>
    </div>
  );
}
