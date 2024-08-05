import {
  Button,
  Center,
  Combobox,
  ScrollArea,
  SimpleGrid,
  Skeleton,
  Stack,
  TextInput,
  useCombobox,
} from "@mantine/core";
import React, { useState } from "react";
const groceries = [
  "🍎 Apples",
  "🍌 Bananas",
  "🥦 Broccoli",
  "🥕 Carrots",
  "🍫 Chocolate",
];

const MainContent: React.FC = () => {
  const [loading, setLoading] = useState(true);

  const combobox = useCombobox();
  const [value, setValue] = useState("");
  const shouldFilterOptions = !groceries.some((item) => item === value);
  const filteredOptions = shouldFilterOptions
    ? groceries.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase().trim())
      )
    : groceries;

  const options = filteredOptions.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <>
      <ScrollArea
        h="calc(100dvh - var(--app-shell-header-height, 0px) - var(--app-shell-footer-height, 0px))"
        p="md"
        type="auto"
        scrollbarSize={20}
      >
        <SimpleGrid
          type="container"
          // when the containet has 1024px
          // without margins or padding then change to 2 cols
          cols={{ base: 1, "1024px": 2 }}
          spacing="lg"
          h={{ base: "80dvh", lg: "70dvh" }}
        >
          <Center
            bg="var(--mantine-color-gray-light)"
            h={"100%"}
            // w={"100%"}
            style={{
              borderRadius: "10px",
            }}
          >
            <div>Main</div>
          </Center>

          <Stack
            h={"100%"}
            // bg="var(--mantine-color-gray-light)"
            align="stretch"
            justify="center"
            gap="md"
            style={{
              borderRadius: "10px",
            }}
          >
            <Combobox
              store={combobox}
              onOptionSubmit={(val) => {
                setValue(val);
                combobox.closeDropdown();
              }}
            >
              <Combobox.Target>
                <TextInput
                  placeholder="Pick value or type anything"
                  rightSection={<Combobox.Chevron />}
                  value={value}
                  onChange={(event) => {
                    setValue(event.currentTarget.value);
                    combobox.openDropdown();
                    combobox.updateSelectedOptionIndex();
                  }}
                  onClick={() => combobox.openDropdown()}
                  onFocus={() => combobox.openDropdown()}
                  onBlur={() => combobox.closeDropdown()}
                />
              </Combobox.Target>

              <Combobox.Dropdown>
                <Combobox.Options>
                  {options.length === 0 ? (
                    <Combobox.Empty>Nothing found</Combobox.Empty>
                  ) : (
                    options
                  )}
                </Combobox.Options>
              </Combobox.Dropdown>
            </Combobox>
            <Skeleton visible={loading} w={"100%"} h={"100%"} animate={false} >
              {value}
            </Skeleton>
            <Button onClick={() => setLoading((l) => !l)}>
              Toggle Skeleton
            </Button>
          </Stack>
        </SimpleGrid>
      </ScrollArea>
    </>
  );
};

export { MainContent };
