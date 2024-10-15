import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Image, Button, TouchableOpacity } from 'react-native';
import { Link} from 'expo-router';

export default function Welcome() {
    return (
        
        <View className="flex-1 items-center  bg-violet-950">
        <StatusBar style="auto" />
        {/* <Text className="text-2xl">Este es el welcome page</Text> */}
        <Image source={require("../assets/logo-morado-nbg.png")} />
        <Text className="text-4xl text-white py-0 ">Explore MovieVerse</Text>
        <Text className="text-center text-m text-gray-400 pt-8 ">Conect with your favorites movies</Text>
        <TouchableOpacity className="bg-violet-500 text-center rounded-md w-60 h-15 mt-8 drop-shadow-md">
            <Text className="text-white text-lg text-center py-2">Login</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-violet-400 text-center rounded-md w-60 h-15 mt-8 ">
            <Text className="text-white text-lg text-center py-2">Create Acount </Text>
        </TouchableOpacity>

{/* 
        <TextInput className="bg-white rounded-md w-60 text-center mt-8 "
            placeholder='your@mail.com'
        />
        <Link href="/password" className="text-gray-400 mt-8 items-end ">
            ¿forget your password?
        </Link> */}

        
        </View>
    );
}

// const styles = StyleSheet.create({
//     container: {
//     flex: 1,
//     backgroundColor: '#262031',
//     alignItems: 'center',
//     justifyContent: 'center',
//     },
// });