import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import ThemeToggler from "../ThemeToggler/ThemeToggler";
import { useAuth } from "../../hooks/useAuth";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/auth/operations";

const Navigation = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Flex
        as={"header"}
        justifyContent={"center"}
        alignItems={"center"}
        position={"absolute"}
        w={"100%"}
        m={"0 auto"}
        p={"16px"}
        gap={"16px"}
      >
        {!isLoggedIn && (
          <>
            <Link to={"/register"}>Sign Up</Link>
            <Link to={"/login"}>Sign In</Link>
          </>
        )}
        {isLoggedIn && (
          <>
            <Link to={"/"}>Contacts</Link>
            <Button onClick={() => dispatch(logoutUser())}>Logout</Button>
          </>
        )}

        <ThemeToggler />
      </Flex>
    </>
  );
};

export default Navigation;