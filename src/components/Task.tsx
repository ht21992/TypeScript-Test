export interface TaskProps {
  status: string;
  title: string;
}

const Task: React.FC<TaskProps> = (props) => {
  const StatusTranslator: { [key: string]: string } = {
    Failed: "badge-error",
    "In Progress": "badge-warning",
    "To Do": "badge-ghost",
    Done: "badge-success",
  };

  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <span className={`badge ${StatusTranslator[props.status]} badge-sm`}>
            {props.status}
          </span>
        </div>
      </td>
      <td>{props.title}</td>

      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default Task;
