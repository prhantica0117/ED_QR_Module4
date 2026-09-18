<<<<<<< HEAD
import { useState } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { useRouter } from 'expo-router';

import AppButton from '@/components/AppButton';
import { COLORS } from '@/constants/colors';
import { useAuth, signOut } from '@/lib/auth';

export default function ProfileScreen() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignOut = async () => {
    setLoading(true);
    try {
      await signOut();
      router.replace('/login');
    } catch (err: any) {
      Alert.alert('Error', err?.message || 'Failed to sign out.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Profile</Text>

      {user && (
        <View style={styles.infoCard}>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.value}>{user.email}</Text>

          <Text style={styles.label}>User ID</Text>
          <Text style={styles.valueSmall}>{user.id}</Text>
        </View>
      )}

      <AppButton
        title="Sign Out"
        icon="log-out-outline"
        onPress={handleSignOut}
        disabled={loading}
      />
=======
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '@/constants/colors';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Profile</Text>
      <Text style={styles.subtitle}>
        Profile management will be available in a future phase.
      </Text>
>>>>>>> b8b8a22b08f76aefce93eb012151e8e85e961465
    </View>
  );
}

const styles = StyleSheet.create({
<<<<<<< HEAD
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: 16,
  },
  infoCard: {
    backgroundColor: COLORS.card,
    borderRadius: 14,
    padding: 16,
    marginBottom: 24,
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.textSecondary,
    marginBottom: 4,
    marginTop: 8,
  },
  value: {
    fontSize: 15,
    color: COLORS.textPrimary,
    fontWeight: '500',
  },
  valueSmall: {
    fontSize: 11,
    color: COLORS.textSecondary,
  },
=======
  container: { flex: 1, backgroundColor: COLORS.background, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 40 },
  title: { fontSize: 20, fontWeight: '600', color: COLORS.textPrimary, marginBottom: 8 },
  subtitle: { fontSize: 14, color: COLORS.textSecondary, textAlign: 'center', lineHeight: 20 },
>>>>>>> b8b8a22b08f76aefce93eb012151e8e85e961465
});
