import React, { InputHTMLAttributes, useRef, useEffect, useState } from 'react';
import { Container } from './styles';
import { IconBaseProps } from 'react-icons/lib';
import { useField } from '@unform/core'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);
  const [isFocused, setIsFocused] = useState(false)

  useEffect(() => { }, [fieldName, registerField])

  return (
    < Container isFocused={isFocused}>
      {Icon && <Icon size={20} />}
      <input
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />
    </Container >
  )
}
export default Input;
