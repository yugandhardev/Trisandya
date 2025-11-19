import { useEffect, useState } from "react";
import api from "../services/api";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null);
  const [filter, setFilter] = useState("all");

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const res = await api.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (data) => {
    try {
      const res = await api.post("/tasks", data);
      setTasks((t) => [res.data, ...t]);
    } catch (err) {
      console.error(err);
    }
  };

  const updateTask = async (task) => {
    console.log("Update task called with:", task);

    try {
      const res = await api.put(`/tasks/${task._id}`, {
        title: task?.title,
        description: task?.description,
        completed: task?.completed,
      });
      setTasks((t) => t.map((x) => (x._id === res.data._id ? res.data : x)));
      setEditing(null);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTask = async (id) => {
    try {
      await api.delete(`/tasks/${id}`);
      setTasks((t) => t.filter((x) => x._id !== id));
    } catch (err) {
      console.error(err);
    }
  };
  const handleEdit = (task) => {
    setEditing(task);
  };
  const filtered = tasks.filter((t) => {
    if (filter === "all") return true;
    if (filter === "completed") return t.completed;
    if (filter === "active") return !t.completed;
    return true;
  });

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="lg:col-span-1">
        <div className="sticky top-20">
          <TaskForm
            key={editing?._id || "new"}
            onSubmit={editing ? updateTask : addTask}
            initial={
              editing || { title: "", description: "", completed: false }
            }
            submitLabel={editing ? "Save" : "Add Task"}
          />
          <div className="mt-4 bg-white p-3 rounded-xl shadow">
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setFilter("all")}
                className={`px-3 py-1 rounded-full text-sm ${
                  filter === "all" ? "bg-indigo-600 text-white" : "bg-gray-100"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter("active")}
                className={`px-3 py-1 rounded-full text-sm ${
                  filter === "active"
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100"
                }`}
              >
                Active
              </button>
              <button
                onClick={() => setFilter("completed")}
                className={`px-3 py-1 rounded-full text-sm ${
                  filter === "completed"
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100"
                }`}
              >
                Completed
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:col-span-2">
        <div className="bg-white p-4 rounded-xl shadow">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold">Tasks</h2>
            <div className="text-sm text-gray-500">{tasks.length} total</div>
          </div>
          {loading ? (
            <div className="text-center py-6 text-gray-500">Loading...</div>
          ) : (
            <TaskList
              tasks={filtered}
              onDelete={deleteTask}
              onUpdate={updateTask}
              onEdit={handleEdit}
            />
          )}
        </div>
      </div>
    </div>
  );
}
