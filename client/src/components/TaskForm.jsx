import { memo, useState } from "react";

function TaskForm({
  onSubmit,
  initial = { title: "", description: "", completed: false },
  submitLabel = "Add Task",
}) {
  const [form, setForm] = useState(initial);

  //useEffect(() => setForm(initial), [initial]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const submit = (e) => {
    e.preventDefault();
    if (!form.title || form.title.trim() === "") return;
    onSubmit(form);
    setForm({ title: "", description: "", completed: false });
  };

  return (
    <form
      onSubmit={submit}
      className="space-y-3 bg-white p-5 rounded-xl shadow"
    >
      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Task title"
        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200 transition"
      />
      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Add a short description (optional)"
        rows={3}
        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200 transition"
      />
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            name="completed"
            checked={form.completed}
            onChange={handleChange}
            className="w-4 h-4 rounded border-gray-300"
          />
          <span className="text-sm text-gray-600">Mark as completed</span>
        </label>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition">
          {submitLabel}
        </button>
      </div>
    </form>
  );
}
export default memo(TaskForm);
