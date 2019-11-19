import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const BlogPostForm = ({ label, value, multiline, onTextChange }) => {
	return (
		<View>
			<Text style={styles.label}>{label}</Text>
			<TextInput
				style={styles.input}
				value={value}
				multiline={multiline}
				onChangeText={onTextChange}
			/>
		</View>
	);
};

BlogPostForm.defaultProps = { multiline: false };

const styles = StyleSheet.create({
	input: {
		fontSize: 18,
		borderWidth: 1,
		borderColor: 'black',
		marginBottom: 15,
		padding: 5,
		margin: 5
	},
	label: {
		fontSize: 20,
		marginBottom: 5,
		marginLeft: 5
	}
});

export default BlogPostForm;
