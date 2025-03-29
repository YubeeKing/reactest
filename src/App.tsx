
import { useState } from 'react';
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = new FormData();
    form.append("form-name", "contact");
    Object.keys(formData).forEach((key) =>
      form.append(key, formData[key as keyof typeof formData])
    );

    fetch("/", {
      method: "POST",
      body: form,
    })
      .then(() => alert("Form successfully submitted!"))
      .catch((error) => alert("Form submission failed: " + error));
  };

  return (
    <>
      <section className="form-section">
        <div className="container wrapper">
          <h1>Send us a message again</h1>
          <form name='contact' method='POST' data-netlify='true' onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />
            <label>
              Name:
              <input type="text" name='name' required onChange={handleChange}/>
            </label>
            <label>
              Email:
              <input type="email" name='email' required onChange={handleChange}/>
            </label>
            <label>
              Message:
              <textarea name="message" id="" required onChange={handleChange}></textarea>
            </label>
            <input type="submit" value="send" />
          </form>
        </div>
      </section>
    </>
  )
}

export default App
