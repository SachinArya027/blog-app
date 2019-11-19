import React, { useState } from 'react';
import { View, Button } from 'react-native';
import FormTextField from './FormTextField';

const BlogPostForm = ({ initialValues, onSubmit }) => {
	const [title, setTitle] = useState(initialValues.title);
	const [content, setContent] = useState(initialValues.content);

	return (
		<View>
			<FormTextField
				label="Enter Title:"
				value={title}
				onTextChange={setTitle}
			/>
			<FormTextField
				label="Enter Content:"
				value={content}
				multiline
				onTextChange={setContent}
			/>
			<Button title="Save Blog Post" onPress={() => onSubmit(title, content)} />
		</View>
	);
};

BlogPostForm.defaultProps = {
	initialValues: {
		title: '',
		content: ''
	}
};

export default BlogPostForm;
