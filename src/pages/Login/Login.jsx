import { useState, useEffect } from "react";
import { useColorModeValue } from "@chakra-ui/react";

import { Link, useNavigate } from "react-router-dom";

import {
  FormControl,
  FormLabel,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  Heading,
  Text,
  useToast,
  Image,
  Flex,
  Icon,
  Box,
} from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/auth/operations";

const Login = () => {
  const dispatch = useDispatch();

  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    setErrMsg("");
  }, [userEmail, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(
      loginUser({
        email: userEmail,
        password: password,
      })
    );

    try {
      setUserEmail("");
      setPassword("");
    } catch (error) {
      if (!error?.response) {
        setErrMsg("No Server Response");
      } else if (error.response?.status === 400) {
        setErrMsg("Missing username or password");
      }
      if (error.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
    }
  };

  const bg = useColorModeValue("#EDF2F7", "#161D2F");

  const content = (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>

      <Flex
        h={"100vh"}
        w={"100%"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Flex gap="60px" flexDirection="column" margin="24px">
          <Box bg={bg} borderRadius="10px" p={("24px", "32px")} w={[327, 400]}>
            <form onSubmit={handleSubmit}>
              {errMsg && (
                <Text color="red.300" my={4} fontSize="30px">
                  {errMsg}
                </Text>
              )}
              <Heading as="h2" fontSize="30px" fontWeight={300} mb="40px">
                Sign In
              </Heading>
              <FormControl mb="24px">
                <FormLabel m={0} fontSize="15px" htmlFor="email">
                  Email:
                </FormLabel>
                <Input
                  id="email"
                  onChange={(e) => setUserEmail(e.target.value)}
                  value={userEmail}
                  autoComplete="off"
                  placeholder="Email address"
                  _placeholder={{ fontSize: "13px" }}
                  style={{ caretColor: "#FC4747" }}
                  type="email"
                  variant="flushed"
                  focusBorderColor="#fff"
                  required
                />
              </FormControl>
              <FormControl mb="24px">
                <FormLabel m={0} fontSize="15px" htmlFor="password">
                  Password:
                </FormLabel>
                <InputGroup size="md">
                  <Input
                    placeholder="Password"
                    _placeholder={{ fontSize: "13px" }}
                    style={{ caretColor: "#FC4747" }}
                    type={show ? "text" : "password"}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    variant="flushed"
                    focusBorderColor="#fff"
                    required
                  />
                  <InputRightElement>
                    <Button bg="transparent" onClick={() => setShow(!show)}>
                      {show ? <ViewOffIcon /> : <ViewIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Flex
                gap="24px"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
              >
                <Button
                  colorScheme="red"
                  fontWeight={500}
                  width="100%"
                  height="48px"
                  type="submit"
                >
                  Login to your account
                </Button>
                <Text>
                  Need an Account?{" "}
                  <ChakraLink as={Link} color="#FC4747" to="/register">
                    Sign Up
                  </ChakraLink>
                </Text>
              </Flex>
            </form>
          </Box>
        </Flex>
      </Flex>
    </>
  );

  return content;
};

export default Login;