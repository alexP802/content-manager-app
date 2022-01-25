import React, { useState } from "react";
import { useRouter } from "next/router";

const DEFAULT_DATA = {
  title: "",
  description: "",
  link: "",
  priority: "2",
  timeToFinish: 60,
};

const ResourceForm = ({ title, resource, onFormSubmit }) => {
  const [form, setForm] = useState(resource || DEFAULT_DATA);

  const submitForm = (e) => {
    e.preventDefault();
    onFormSubmit(form);
  };

  const resetForm = (e) => setForm(DEFAULT_DATA);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="resource-form">
      <h1 className="title">{title}</h1>
      <form>
        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              className="input"
              type="text"
              placeholder="Learn Next JS and Sanity IO"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Description</label>
          <div className="control">
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              className="textarea"
              placeholder="Learn these technologies because they are very popular and enable better SEO"
            ></textarea>
          </div>
        </div>
        <div className="field">
          <label className="label">Link</label>
          <div className="control">
            <input
              name="link"
              value={form.link}
              onChange={handleChange}
              className="input"
              type="text"
              placeholder="https://academy.eincode.com"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Priority</label>
          <div className="control">
            <div className="select">
              <select
                name="priority"
                value={form.priority}
                onChange={handleChange}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
          </div>
        </div>
        <div className="field">
          <label className="label">Time to finish</label>
          <div className="control">
            <input
              name="timeToFinish"
              value={form.timeToFinish}
              onChange={handleChange}
              className="input"
              type="number"
              placeholder="60 (time is in minutes)"
            />
          </div>
          <p className="help">Time is in minutes</p>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button onClick={submitForm} className="button is-link">
              Submit
            </button>
          </div>
          <div className="control">
            <button
              type="button"
              onClick={resetForm}
              className="button is-link is-light"
            >
              Reset Form
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ResourceForm;
