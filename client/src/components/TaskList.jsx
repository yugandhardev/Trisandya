import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onDelete, onUpdate, onEdit }) {
  if (!tasks || tasks.length === 0)
    return <div className="text-center text-gray-600">No tasks yet</div>;

  return (
    <div className="space-y-3">
      {tasks.map((t) => (
        <TaskItem
          key={t._id}
          task={t}
          onDelete={onDelete}
          onUpdate={onUpdate}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}
