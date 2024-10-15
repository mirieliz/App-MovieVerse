import { ScrollView, Text } from "react-native";
import { Link} from 'expo-router';

export default function Password(){
    return (
        <ScrollView>
        <Link href="/welcome" className="text-gray-400 mt-8">
            Back to home
        </Link>
        <Text className="text-white font-bold mb-8 text2xl">Password space</Text>

        <Text className="text-white">text</Text>
        </ScrollView>
        )
}