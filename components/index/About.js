import styles from "../../styles/Home.module.scss";
import {
  Grid,
  Box,
  Stack,
  Flex,
  Heading,
  Button,
  Text,
} from "@chakra-ui/react";
import studying from "../../img/studying2/learning-image.png";
import Image from "../Image";

export default function About({ title, text }) {
  return (
    <Box bgGradient="linear(main.ocean, main.purple)" w="100%" color="white">
      <div className={styles.wave}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={styles["shape-fill"]}
          ></path>
        </svg>
      </div>

      <Stack
        align={"center"}
        spacing={{ base: 8, md: 24 }}
        mx={{ base: 8, md: 32 }}
        pb={{ base: 20, md: 24 }}
        pt={{ base: 10, md: 14 }}
        direction={{ base: "column", md: "row" }}
      >
        <Flex flex={1}>
          <Box position={"relative"}>
            <Image src={studying} />
          </Box>
        </Flex>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <div>{title}</div>
          </Heading>
          <Text fontSize="lg">{text}</Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <Button
              rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              bg={"main.yellow"}
            >
              Get started
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}