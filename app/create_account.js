import {  Text, View, TextInput, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link} from 'expo-router';
import { formField } from "../components/form_fild";

const form_fild= formField();
export default function CreateAccount(){
    return (
        <View className="bg-black flex-1 items-center">
            <StatusBar style="auto"/>
            <Link href="/welcome" className="text-gray-400 mt-8 pl-4 text-center">
                Back to home
            </Link>
            <Text className="text-white font-bold mb-8 text2xl text-center mt-4">Create an Account</Text>
            <View>
                <Text className="text-white text-left">Username</Text>
                <TextInput className="bg-gray-400 w-80 justify-center text-center text-gray-700 rounded mb-5">Your username</TextInput> 

                <Text className="text-white text-left">Email</Text>
                <TextInput className="bg-gray-400 w-80 justify-center text-center text-gray-700 rounded mb-5">Your username</TextInput> 

                <Text className="text-white text-left">Password</Text>
                <TextInput className="bg-gray-400 w-80 justify-center text-center text-gray-700 rounded mb-5">Your username</TextInput> 

                <Text className="text-white text-left">Confirm Password</Text>
                <TextInput className="bg-gray-400 w-80 justify-center text-center text-gray-700 rounded mb-5">Your username</TextInput> 
                <View className="items-center">
                    <TouchableOpacity className="bg-violet-600 text-center rounded-3xl w-80 h-15 mt-8 ">
                        <Text className="text-white  my-5 justify-center items-end text-center  text-2xl ">
                        Log In
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Link href="/welcome" className="text-gray-400 mt-8 pl-4 text-center">
                Already have and account? Log in
            </Link>
        </View>
        )
}