import { Stack, Container } from "@chakra-ui/react";

export default function ({ children, bg, pt, pb }) {
  return (
    <Stack
      align={"center"}
      pt={pt ? pt : { base: 8, md: 16 }}
      pb={pb ? pb : { base: 8, md: 16 }}
      bg={bg}
    >
      <Container maxW={"5xl"}>{children}</Container>
    </Stack>
  );
}
