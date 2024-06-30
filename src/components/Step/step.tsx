import { Image, ImageSourcePropType, View } from "react-native";
import { Center, End, Text } from "@theme/components";
import { Button } from "@components/Button/button";
import ArrowRight from "@assets/icon/Arrow Right.svg";
import ArrowLeft from "@assets/icon/Arrow Right.svg";
import { useNavigation } from "@react-navigation/native";

type StepProps = {
  img: ImageSourcePropType;
  title: string;
  subtitle?: string;
  onNext?: () => void;
  onPrev?: () => void;
  prev?: boolean;
  link?: string;
};

export function Step({
  img,
  title,
  subtitle,
  onNext,
  prev,
  onPrev,
  link,
}: StepProps) {
  const { navigate } = useNavigation();

  return (
    <Center style={{ justifyContent: "space-between" }}>
      <View />
      <View>
        <Image source={img} width={200} height={200} />
        <Text size={20} color="black" align="center">
          {title}
        </Text>
        <Text size={15} color="text" align="center">
          {subtitle}
        </Text>
      </View>
      <End
        style={{
          justifyContent: prev ? "space-between" : "flex-end",
          flexDirection: "row",
        }}
      >
        {prev && (
          <Button
            size="sm"
            icon={<ArrowLeft />}
            variant="blue200"
            onPress={() => onPrev()}
          />
        )}
        <Button
          size="sm"
          icon={<ArrowRight />}
          variant="blue200"
          onPress={() => (onNext ? onNext() : link ? navigate(link) : "")}
        />
      </End>
    </Center>
  );
}
