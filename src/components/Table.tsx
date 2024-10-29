import { TaskProps } from "./Task"
import Task from "./Task"

export interface TaskListProps {
    tasks: Array<TaskProps>
}

const Table:React.FC<TaskListProps> = ({tasks}) => {

    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Status</th>
                        <th>Job</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task, index) => <Task key={index} status={task.status} title={task.title} />)}

                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <th>Status</th>
                        <th>Job</th>
                        <th></th>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default Table
