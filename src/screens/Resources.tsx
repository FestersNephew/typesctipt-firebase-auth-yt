import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Video, ResizeMode } from 'expo-av';

const Resources = () => {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Meditation Videos</Text>
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: 'https://stream.mux.com/sxWjpI71s801h1mjSgIqe46xr7RfffR1Kp01SxAB02e6Qo.m3u8',
          }}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          isLooping
          onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
        <Text style={styles.headerText}>Reiki Videos</Text>
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: 'https://stream.mux.com/k8Co8LqKBrkcg3VZnD8sq00sVzLm02TGmQCwgKvhD16WQ.m3u8',
          }}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          isLooping
          onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
      </View>
    );
  }

export default Resources;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    video: {
      width: 300,
      height: 300,
    },
    headerText:{
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        fontWeight: "bold"
    }
}); 