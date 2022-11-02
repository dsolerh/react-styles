import { ChangeEvent, FormEvent, useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

interface CourseInputProps {
  onAddGoal: (val: string) => void
}

function CourseInput({ onAddGoal }: CourseInputProps) {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  function formSubmitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (enteredValue.trim() === '') {
      setIsValid(false)
      return
    }
    onAddGoal(enteredValue);
  };

  function valueChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    setEnteredValue(e.target.value);
    if (e.target.value.trim() !== '') {
      setIsValid(true)
    }
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control${!isValid ? ' invalid' : ''}`}>
        <label>Course Goal</label>
        <input
          type="text"
          onChange={valueChangeHandler}
          value={enteredValue} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
