import { ContainerComponent } from '../../../types/Components';
import './CourseGoalItem.css'

interface CourseGoalItemProps extends ContainerComponent {
    id: string
    onDelete: (id:string)=>void
}

function CourseGoalItem({children, id, onDelete}: CourseGoalItemProps) {
    return (
        <li className="goal-item" onClick={()=>onDelete(id)}>
            {children}
        </li>
    );
}

export default CourseGoalItem;