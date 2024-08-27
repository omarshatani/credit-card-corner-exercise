import React from "react";
import { Image, ImageStyle, StyleProp, StyleSheet } from "react-native";
import {
  LayoutChangeEvent,
  NativeSyntheticEvent,
} from "react-native/Libraries/Types/CoreEventTypes";
import { ShadowedView } from "@/components/ShadowedView";
import { ImageLoadEventData } from "react-native/Libraries/Image/Image";

const CARD_HEIGHT = 200;
const CARD_WIDTH = 350;

interface CreditCardProps {
  style?: StyleProp<ImageStyle>;
  uri?: string;
  onLoad?: (event: NativeSyntheticEvent<ImageLoadEventData>) => void;
  onLayout?: (event: LayoutChangeEvent) => void;
}

export const CreditCard = ({
  uri,
  style,
  onLoad,
  onLayout,
}: CreditCardProps) => (
  <ShadowedView style={styles.container} onLayout={onLayout}>
    <Image
      onLoad={onLoad}
      style={[
        styles.image,
        {
          height: CARD_HEIGHT,
        },
        style,
      ]}
      source={{
        uri,
      }}
    />
  </ShadowedView>
);

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    borderRadius: 8,
    backgroundColor: "transparent",
    marginBottom: -(CARD_HEIGHT / 2) + 16,
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    borderRadius: 8,
  },
});
