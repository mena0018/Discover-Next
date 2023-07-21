import { FC } from 'react';
import { FieldProps } from '@/models';

const Field: FC<FieldProps> = ({ property, isNumberField, errors, register }) => {
  const label = property.charAt(0).toUpperCase() + property.slice(1);

  return (
    <div className='form-control'>
      <label className='label' htmlFor={property}>
        <span className='label-text'>{label}</span>
      </label>

      <input
        {...register(property, {
          required: true,
          valueAsNumber: !!isNumberField,
          pattern: isNumberField ? /^[0-9 ,.'-]*$/ : /^[0-9a-zA-Z ,.'-]+$/i,
        })}
        id={property}
        className='input input-bordered'
        placeholder={`Enter the ${property}`}
        type={isNumberField ? 'number' : 'text'}
      />

      {errors[property] && errors[property]?.type === 'required' && (
        <span className='error-msg'>{label} is required</span>
      )}
      {errors[property] && errors[property]?.type === 'pattern' && (
        <span className='error-msg'>Character not allowed</span>
      )}
    </div>
  );
};

export default Field;
