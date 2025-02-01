import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const LandingSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "intern",
      comment: "",
    },
    onSubmit: (values) => {
      submit(values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required("Name is required")
        .min(3, "Name must be at least 3 characters")
        .matches(/^[a-zA-Z]+$/, "Name can only contain letters"),
      email: Yup.string()
        .required("Email is required")
        .email("Invalid email format"),
      type: Yup.string()
        .oneOf(["intern", "hireMe", "jobOpp", "other"], "Invalid enquiry type")
        .required("Enquiry type is required"),
      comment: Yup.string()
        .required("Message is required")
        .min(10, "Message must be at least 10 characters"),
    }),
  });

  const isFieldInvalid = (field) =>
    formik.touched[field] && formik.errors[field];

  useEffect(() => {
    if (response?.type === "success") {
      onOpen(response.type, `${response.message}`);
      formik.resetForm();
    } else if (response?.type === "error") {
      onOpen(
        response.type,
        `Oops, ${formik.values.firstName}! ${response.message}`
      );
    }
  }, [response]);

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#263238"
      py={16}
      spacing={8}
    >
      <VStack
        w={["100%", "100%", "100%", "1024px"]}
        p={[8, 16, 32]}
        alignItems="flex-start"
      >
        <Heading as="h1" id="contactme-section" color="#A5D6A7">
          Contact me
        </Heading>
        <Box rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={isFieldInvalid("firstName")}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps("firstName")}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={isFieldInvalid("email")}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={isFieldInvalid("type")}>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select
                  id="type"
                  name="type"
                  bg="#263238"
                  color="white"
                  {...formik.getFieldProps("type")}
                >
                  <option
                    value="intern"
                    style={{ backgroundColor: "#263238", color: "white" }}
                  >
                    Internship or Junior Position
                  </option>
                  <option
                    value="hireMe"
                    style={{ backgroundColor: "#263238", color: "white" }}
                  >
                    Freelance project proposal
                  </option>
                  <option
                    value="jobOpp"
                    style={{ backgroundColor: "#263238", color: "white" }}
                  >
                    Job Opportunity
                  </option>
                  <option
                    value="other"
                    style={{ backgroundColor: "#263238", color: "white" }}
                  >
                    Other
                  </option>
                </Select>
              </FormControl>
              <FormControl isInvalid={isFieldInvalid("comment")}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps("comment")}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button
                type="submit"
                color="#263238"
                bg="#F0FFF0"
                width="full"
                isLoading={isLoading}
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
