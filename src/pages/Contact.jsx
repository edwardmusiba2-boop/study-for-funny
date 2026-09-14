function Contact() {
  return (
    <div className="page-container">
      <h1>Contact Us</h1>

      <p>
        Have a question or want to learn more? Get in touch with us.
      </p>

      <div className="contact-info">
        <p>
          <strong>Email:</strong> studyforfunny@example.com
        </p>

        <p>
          <strong>Phone:</strong> +255 700 000 000
        </p>

        <p>
          <strong>Location:</strong> Arusha, Tanzania
        </p>
      </div>

      <form className="contact-form">
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter your name"
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
        />

        <label>Message</label>
        <textarea
          rows="5"
          placeholder="Write your message"
        ></textarea>

        <button type="button">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;