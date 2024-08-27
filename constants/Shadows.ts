import { ImageStyle, Platform, StyleProp, ViewStyle } from "react-native";

const iosShadow: StyleProp<ViewStyle | ImageStyle> = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.23,
  shadowRadius: 2.62,
};

const androidShadow: StyleProp<ViewStyle | ImageStyle> = {
  elevation: 4,
};

const webShadow: StyleProp<ViewStyle | (ImageStyle & { boxShadow: string })> = {
  boxShadow: `0px 2px 2.62px rgba(0, 0, 0, 0.2)`,
};

export const Shadows = Platform.select({
  ios: iosShadow,
  android: androidShadow,
  web: webShadow,
});
