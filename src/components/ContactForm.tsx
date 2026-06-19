export default function ContactForm() {
  return (
    <form className="p-4 border rounded">
      <div className="mb-3">
        <label>Name</label>

        <input
          type="text"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label>Email</label>

        <input
          type="email"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label>Message</label>

        <textarea
          className="form-control"
          rows={4}
        />
      </div>

      <button className="btn btn-success">
        Submit
      </button>
    </form>
  );
}