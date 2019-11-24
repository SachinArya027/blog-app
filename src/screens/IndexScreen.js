import React, { useContext, useEffect } from 'react';
import {
	ScrollView,
	View,
	Text,
	StyleSheet,
	FlatList,
	TouchableOpacity
} from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
	const { state, getBlogPosts, deleteBlogPost } = useContext(BlogContext);

	useEffect(() => {
		getBlogPosts();

		const listener = navigation.addListener('didFocus', () => {
			getBlogPosts();
		});

		// the return function is optional
		// will only got invoked on unmounting of IndexScreen componnent
		return () => {
			listener.remove();
		};
	}, []);

	return (
		<ScrollView style={styles.container}>
			<FlatList
				keyExtractor={blog => blog.title}
				data={state}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity
							onPress={() => navigation.navigate('Show', { id: item.id })}
						>
							<View style={styles.row}>
								<Text style={styles.title}>{item.title}</Text>
								<TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
									<Feather style={styles.icon} name="trash" />
								</TouchableOpacity>
							</View>
						</TouchableOpacity>
					);
				}}
			/>
		</ScrollView>
	);
};

IndexScreen.navigationOptions = ({ navigation }) => {
	return {
		headerRight: (
			<TouchableOpacity
				onPress={() => {
					navigation.navigate('Create');
				}}
			>
				<Feather name="plus" size={30} />
			</TouchableOpacity>
		)
	};
};

const styles = StyleSheet.create({
	container: {
		borderBottomColor: 'gray',
		borderBottomWidth: 5
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 20,
		paddingHorizontal: 10,
		borderTopWidth: 1,
		borderColor: 'gray'
	},
	title: {
		fontSize: 18
	},
	icon: {
		fontSize: 24
	}
});

export default IndexScreen;
