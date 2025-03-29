
import './App.css'

function App() {
  

  return (
    <>
      <section className="form-section">
        <div className="container wrapper">
          <h1>Send us a message again</h1>
          <form action="#">
            <input type="hidden" name="form-name" value="contact" />
            <label>
              Name:
              <input type="text" name='name' required/>
            </label>
            <label>
              Email:
              <input type="email" name='email' required/>
            </label>
            <label>
              Message:
              <textarea name="message" id="" required></textarea>
            </label>
            <input type="submit" value="send" />
          </form>
        </div>
      </section>
    </>
  )
}

export default App
