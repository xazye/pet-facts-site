import {
  Button,
  Combobox,
  ScrollArea,
  Skeleton,
  Stack,
  TextInput,
  useCombobox,
} from "@mantine/core";
import React, { useEffect, useState } from "react";
import CatBreedDetails from "../CatBreedDetails";
import axios from "axios";

interface MainContentRightProps {
  setImage: React.Dispatch<React.SetStateAction<any>>;
}

interface CatBreed {
  pageid: number;
  title: string;
}

const MainContentRight: React.FC<MainContentRightProps> = ({ setImage }) => {
  const [loading, setLoading] = useState(true);
  const [breeds, setBreeds] = useState<CatBreed[]>([]);
  const [selectedBreed, setSelectedBreed] = useState<string>("");
  const combobox = useCombobox();

  const [value, setValue] = useState("");

  useEffect(() => {
    const fetchCatBreeds = async () => {
      setLoading(true);
      try {
        const url = "https://en.wikipedia.org/w/api.php";
        const params: {
          [key: string]: string | undefined; // Index signature
        } = {
          action: "query",
          format: "json",
          list: "categorymembers",
          cmtitle: "Category:Cat_breeds",
          cmlimit: "100",
          origin: "*",
        };
        let allBreeds: CatBreed[] = [];
        let continueToken: string | undefined;

        do {
          if (continueToken) {
            params["cmcontinue"] = continueToken;
          }
          const response = await axios.get(url, { params });
          const data = response.data;

          const filteredBreeds = data.query.categorymembers.filter(
            (breed: CatBreed) =>
              !breed.title.includes("List of") &&
              !breed.title.includes("Category:")
          );

          allBreeds = [...allBreeds, ...filteredBreeds];
          continueToken = data.continue?.cmcontinue;
        } while (continueToken);

        setBreeds(allBreeds);
      } catch (error) {
        console.error("Error fetching cat breeds:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCatBreeds();
  }, []);

  const options = breeds
    .filter((breed) => breed.title.toLowerCase().includes(value.toLowerCase()))
    .map((breed) => (
      <Combobox.Option value={breed.title} key={breed.pageid}>
        {breed.title}
      </Combobox.Option>
    ));

  return (
    <ScrollArea>
      <Stack
        h={"100%"}
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
          keepMounted={true}
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
              onClick={() => {
                setValue('')
                combobox.openDropdown();
              }}
              onFocus={() => combobox.openDropdown()}
              onBlur={() => combobox.closeDropdown()}
            />
          </Combobox.Target>

          <Combobox.Dropdown>
            <Combobox.Options>
              {options.length === 0 ? (
                <Combobox.Empty>Nothing found</Combobox.Empty>
              ) : (
                <ScrollArea scrollbarSize={20} h={{base:"40dvh", md: "60dvh"}}>
                  {options}
                </ScrollArea>
              )}
            </Combobox.Options>
          </Combobox.Dropdown>
        </Combobox>
        <Button onClick={() => {setSelectedBreed(value); setImage(null)}} disabled={!value}>
          Load Details
        </Button>
        <Skeleton visible={loading} w="100%" h="100%" animate={false}>
          {selectedBreed && (
            <CatBreedDetails title={selectedBreed} image={setImage} />
          )}
        </Skeleton>
      </Stack>
    </ScrollArea>
  );
};
export { MainContentRight };
