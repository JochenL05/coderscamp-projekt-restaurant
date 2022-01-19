import "./contactForm.css";

export default function ContactForm() {
  return (
    <div>
      <div className="formGroup">
        <label className="contactForm">
          <div className="formGroup">
            <input type="text" name="username" placeholder="Username" size="10" />
          </div>
          <div className="formGroup">
            <input type="text" name="e-mail" placeholder="E-maiL" size="10" />
          </div>
          <div className="formGroup">
            <input type="number" name="phone" placeholder="Phone" size="10" />
          </div>
          <div className="formGroup">
            <input type="text" name="username" placeholder="Username" size="40" />
          </div>
          <button type="submit">SEND</button>
        </label>
      </div>
    </div>
  );
}
