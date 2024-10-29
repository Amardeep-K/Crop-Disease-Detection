import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
         {/* <View style={styles.bottomNavigation}>
                <Icon name="home" size={28} color="#1B5E20" />
                <Icon name="stats-chart" size={28} color="#1B5E20" />
                <Icon name="search" size={28} color="#1B5E20" />
                <Icon name="chatbox-ellipses" size={28} color="#1B5E20" />
                <Icon name="settings" size={28} color="#1B5E20" />
            </View> */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'grid' : 'grid-outline'} color={color} />
          ),
        }}
      />
      
    </Tabs>
    
    
    
  );
}
