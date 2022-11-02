import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
import './CourseGoalList.css';

interface CourseGoalListProps {
    items: any[]
    onDeleteItem: (id: string) => void
}

function CourseGoalList({ items, onDeleteItem }: CourseGoalListProps) {
    return (
        <ul className="goal-list">
            {items.map(goal => (
                <CourseGoalItem
                    key={goal.id}
                    id={goal.id}
                    onDelete={onDeleteItem}
                >
                    {goal.text}
                </CourseGoalItem>
            ))}
        </ul>
    );
};

export default CourseGoalList;
