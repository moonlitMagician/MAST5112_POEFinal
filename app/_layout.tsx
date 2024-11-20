import { Stack } from "expo-router";
import { MenuProvider } from "./menuContext";

export default function RootLayout() {
  return (
    <MenuProvider>
    <Stack>
      <Stack.Screen name="index" 
      options={{title: "Chef Christoffel's Menu"}}
      />

    </Stack>
    </MenuProvider> 
  );
}       
