import React, {
	TextareaHTMLAttributes,
	useEffect,
	useRef,
	useState,
	useCallback
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';

import { Container, Error } from './styles';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	name: string;	
	icon?: React.ComponentType<IconBaseProps>;
}

const Textarea: React.FC<TextAreaProps> = ({ name, icon: Icon, ...rest }) => {

	const textareaReference = useRef<HTMLTextAreaElement | null>(null);
	
	const [ isFocused, setIsFocused ] = useState(false);
	const [ isFilled, setIsFilled ] = useState(false);
	
	const { fieldName, defaultValue, error, registerField } = useField(name);

	const handleTextareaFocus = useCallback(() => {
		setIsFocused(true);
	}, [])

	const handleTextareaBlur = useCallback(() => {
		setIsFocused(false);

		setIsFilled(!!textareaReference.current?.value);
	}, [])

	useEffect(() => {
		registerField({
			name: fieldName,
			ref: textareaReference.current,
			path: 'value',
		})
	}, [fieldName, registerField])

	return (
		<Container isErrored={!!error} isFocused={isFocused} isFilled={isFilled}>
			{Icon && <Icon size={20} />}
			<textarea
				defaultValue={defaultValue}
				onFocus={handleTextareaFocus}
				onBlur={handleTextareaBlur}
				ref={textareaReference}
				{...rest}
			/>

			{error && 
				<Error title={error}>
					<FiAlertCircle color='f09830' size={20}/>
				</Error>}
		</Container>
	)
}

export default Textarea;