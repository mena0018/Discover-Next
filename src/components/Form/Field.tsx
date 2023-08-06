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
        id={property}
        className='input input-bordered'
        placeholder={`Enter the ${property}`}
        type={isNumberField ? 'number' : 'text'}
        {...register(property, { valueAsNumber: !!isNumberField })}
      />

      {errors[property]?.message && <span className='error-msg'>{errors[property]?.message}</span>}
    </div>
  );
};

export default Field;
