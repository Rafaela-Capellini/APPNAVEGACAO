/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { PaperProvider } from 'react-native-paper';
import App from './Src/App';
import {name as appName} from './app.json';

export default props => {
    <PaperProvider>
        <App/>
    </PaperProvider>
}

AppRegistry.registerComponent(appName, () => App);