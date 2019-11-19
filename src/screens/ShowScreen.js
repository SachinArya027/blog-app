import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { Context as BlogContext } from '../context/BlogContext';

const ShowScreen = ({ navigation }) => {
	const { state } = useContext(BlogContext);

	const blogPost = state.find(post => post.id === navigation.getParam('id'));

	return (
		<View>
			<Text style={styles.label}>Title:</Text>
			<Text style={styles.text}>{blogPost.title}</Text>
			<Text style={styles.label}>Content:</Text>
			<Text style={styles.text}>{blogPost.content}</Text>
		</View>
	);
};

ShowScreen.navigationOptions = ({ navigation }) => {
	return {
		headerRight: (
			<TouchableOpacity
				onPress={() =>
					navigation.navigate('Edit', { id: navigation.getParam('id') })
				}
			>
				<EvilIcons name="pencil" size={30} />
			</TouchableOpacity>
		)
	};
};

const styles = StyleSheet.create({
	label: {
		fontSize: 20,
		marginBottom: 5,
		marginLeft: 5
	},
	text: {
		fontSize: 16,
		padding: 5,
		backgroundColor: '#cccccc',
		borderRadius: 5,
		marginBottom: 10
	}
});

export default ShowScreen;
