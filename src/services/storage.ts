import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveData = async (key : string, value : string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.error("Failed to save data:", e);
  }
};

export const retrieveData = async (key : string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      console.log("Retrieved value:", value);
    }
  } catch (e) {
    console.error("Failed to retrieve data:", e);
  }
};
