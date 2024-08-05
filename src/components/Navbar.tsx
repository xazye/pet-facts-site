import { NavLink, Skeleton } from "@mantine/core";
import { IconHome2 } from "@tabler/icons-react";
import React from "react";

const Navbar = (): React.ReactElement => {
  return <>
   Navbar
   <NavLink
            color="primary"
            variant="filled"
            active
            autoContrast
            leftSection={<IconHome2 size="1rem" stroke={1.5} />}
            label="Default"
            style={{ borderRadius: "50px"}}
          />
        {Array(15)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} h={28} mt="lg" animate={false} />
          ))}
  </>
};

export {Navbar};