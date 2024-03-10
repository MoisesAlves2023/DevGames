import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

export default function HeyChat() {
  return (
    <NavigationContainer style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Routes />
    </NavigationContainer>
  );
}