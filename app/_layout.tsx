import { Stack } from 'expo-router';

<<<<<<< HEAD
import { COLORS } from '@/constants/colors';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" />
      <Stack.Screen name="register" />
      <Stack.Screen name="(tabs)" />
=======
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
>>>>>>> b8b8a22b08f76aefce93eb012151e8e85e961465
    </Stack>
  );
}
