export default function TaskItem({ task, onDelete, onUpdate, onEdit }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
      <div className="flex-1">
        <div className="flex items-center  justify-between  gap-4">
          <div>
            <h3
              className={`font-semibold text-md ${
                task.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {task.title}
            </h3>
            {task.description && (
              <p className="text-sm text-gray-600 mt-1">{task.description}</p>
            )}
          </div>
          <div className="hidden sm:block text-right text-xs text-gray-500">
            {task.createdAt ? new Date(task.createdAt).toLocaleString() : ""}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => onUpdate({ ...task, completed: !task.completed })}
          className={`px-3 py-1 rounded-md text-sm ${
            task.completed
              ? "bg-green-100 text-green-700"
              : "bg-gray-100 text-gray-700"
          } hover:opacity-90 transition`}
        >
          {task.completed ? "Completed" : "Mark Done"}
        </button>
        <button
          onClick={() => onEdit(task)}
          className="px-3 py-1 rounded-md text-sm text-indigo-600 hover:bg-indigo-50 transition"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(task._id)}
          className="px-3 py-1 rounded-md text-sm text-red-600 hover:bg-red-50 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
