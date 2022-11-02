import { ChangeEvent, FormEvent, useState } from 'react';
import styled from 'styled-components'
import Button from '../../UI/Button/Button';

type FormControlProps = { invalid: boolean }
const FormControl = styled.form`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${({ invalid }: FormControlProps) => (invalid ? 'red' : 'black')}
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${({ invalid }: FormControlProps) => (invalid ? 'red' : '#ccc')};
    background-color: ${({ invalid }: FormControlProps) => (invalid ? '#ffd7d7' : 'transparent')};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`

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
      <FormControl invalid={!isValid}>
        <label>Course Goal</label>
        <input
          type="text"
          onChange={valueChangeHandler}
          value={enteredValue} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
