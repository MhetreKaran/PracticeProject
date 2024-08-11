import ZegoUIKitPrebuiltLiveStreaming, { HOST_DEFAULT_CONFIG, AUDIENCE_DEFAULT_CONFIG} 
    from '@zegocloud/zego-uikit-prebuilt-live-streaming-rn'
import { View } from 'react-native';

export function LivePage(props) {
  const randomUserID = String(Math.floor(Math.random() * 100000))
    const isHost = props.route.params.isHost;
  return (
      <View style={{flex: 1}}>
          <ZegoUIKitPrebuiltLiveStreaming
            appID={512931578} // Your App ID
            appSign='e20ff4a4f1838f295a0b2e695ed2c8d22bea24b693e60277a8e52d75a306deb6'
            userID={randomUserID}
            userName={'user_'+randomUserID}
            liveID='testLiveID'

            config={{
                ...(isHost==true?HOST_DEFAULT_CONFIG:AUDIENCE_DEFAULT_CONFIG),
                onLeaveLiveStreaming: () => { props.navigation.navigate('HomePage') }
            }}
      />
    </View>
  )
}