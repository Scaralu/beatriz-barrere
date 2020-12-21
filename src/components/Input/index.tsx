import React, {
	InputHTMLAttributes,
	useEffect,
	useRef,
	useState,
	useCallback
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';

import { Container, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string;	
	icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {

	const inputReference = useRef<HTMLInputElement | null>(null);
	
	const [ isFocused, setIsFocused ] = useState(false);
	const [ isFilled, setIsFilled ] = useState(false);
	
	const { fieldName, defaultValue, error, registerField } = useField(name);

	const handleInputFocus = useCallback(() => {
		setIsFocused(true);
	}, [])

	const handleInputBlur = useCallback(() => {
		setIsFocused(false);

		setIsFilled(!!inputReference.current?.value);
	}, [])

	useEffect(() => {
		registerField({
			name: fieldName,
			ref: inputReference.current,
			path: 'value',
		})
	}, [fieldName, registerField])

	return (
		<Container isErrored={!!error} isFocused={isFocused} isFilled={isFilled}>
			{Icon && <Icon size={20} />}
			<input
				defaultValue={defaultValue}
				onFocus={handleInputFocus}
				onBlur={handleInputBlur}
				ref={inputReference}
				{...rest}
			/>

			{error && 
				<Error title={error}>
					<FiAlertCircle color='f09830' size={20}/>
				</Error>}
		</Container>
	)
}

export default Input;