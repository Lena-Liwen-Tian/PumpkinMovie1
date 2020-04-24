import React, { useCallback, useReducer } from 'react';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import './Reviews.css';
import {useForm} from '../../shared/hooks/form-hook';
const Reviews = () => {
  const [formState,inputHandler] = useForm(
    { 
      title:{
        value:'',
        isValid:false
      },
      review:{
        value:'',
        isValid:false
      }
    },
    false
  );
  const reviewSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
  };
  return (
    <form className="place-form" onSubmit={reviewSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (at least 5 characters)."
        onInput={inputHandler}
      />
     
      <Button type="submit"  >
        Add Reviews
      </Button>
    </form>
  );
};

export default Reviews;
