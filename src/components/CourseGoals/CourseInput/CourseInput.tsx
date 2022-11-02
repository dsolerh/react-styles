import { FormEvent, useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

interface CourseInputProps {
    onAddGoal: (val: string) => void
}

function CourseInput({onAddGoal}:CourseInputProps) {
  const [enteredValue, setEnteredValue] = useState('');

  function formSubmitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text" onChange={e=>setEnteredValue(e.target.value)} value={enteredValue} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
