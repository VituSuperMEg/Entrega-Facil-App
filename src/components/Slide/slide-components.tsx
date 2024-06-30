import { Image, ImageSourcePropType, View } from "react-native";
import { Center, Text } from "../../theme/components";
import { ReactNode } from "react";


type SlideProps = {
  title : string;
  img :  ImageSourcePropType,
  subtitle? : string,
  button1 : ReactNode,
  button2?: ReactNode
}
export function SlideComponents({ title, img, subtitle, button1, button2 }:SlideProps) {
  return (
    <Center>
      <View style={{ flex  : 1, justifyContent: 'center', alignItems : 'center'}}>
        <Image source={img} />
        <Text size={25} color="black" align="center">
          {title}
        </Text>
        <Text size={15} color="text" align="center">
          {subtitle}
        </Text>
      </View>
      <View style={{ width: "100%", gap: 20 , justifyContent : 'flex-end'}}>
        {button1}
        {button2}
      </View>
    </Center>
  );
}
